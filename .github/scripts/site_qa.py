from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
import sys

ROOT = Path('.')
HTML = sorted(ROOT.glob('*.html'))
errors = []

FORBIDDEN = [
    'EXOS Verify', '79,200', '79.2K', '4.4 FTE', '184,800', '111%', '17.5 mo', '$1.5M',
    'ckochar@tepper.cmu.edu', '8.5+ years', '8.5 years', 'Résumé'
]

class Scan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
        self.ids = set()
        self.has_title = False
        self.has_viewport = False
        self.has_description = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title': self.has_title = True
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'meta' and a.get('name') == 'viewport': self.has_viewport = True
        if tag == 'meta' and a.get('name') == 'description': self.has_description = True
        for key in ('href','src'):
            if key in a: self.refs.append((tag, key, a[key]))

# Cache anchors for cross-page fragment checks.
anchors = {}
for f in HTML:
    p = Scan(); p.feed(f.read_text(encoding='utf-8')); anchors[f.name] = p.ids

for f in HTML:
    text = f.read_text(encoding='utf-8')
    p = Scan(); p.feed(text)
    if '<title>' not in text.lower(): errors.append(f'{f}: missing title')
    if not p.has_viewport: errors.append(f'{f}: missing viewport meta')
    if not p.has_description and f.name not in {'resume.html'}:
        errors.append(f'{f}: missing meta description')
    for term in FORBIDDEN:
        if term in text: errors.append(f'{f}: forbidden/stale public string {term!r}')
    for tag, key, ref in p.refs:
        if not ref or ref.startswith(('http://','https://','mailto:','tel:','javascript:','data:')):
            continue
        if ref.startswith('#'):
            frag = ref[1:]
            if frag and frag not in p.ids: errors.append(f'{f}: broken same-page anchor {ref}')
            continue
        path, sep, frag = ref.partition('#')
        path = path.split('?',1)[0]
        if not path: continue
        target = (f.parent / path)
        if not target.exists():
            errors.append(f'{f}: missing local {key} target {ref}')
            continue
        if frag and target.suffix.lower() == '.html' and frag not in anchors.get(target.name,set()):
            errors.append(f'{f}: missing anchor #{frag} in {target.name}')

if errors:
    print('\n'.join('ERROR: '+e for e in errors))
    sys.exit(1)
print(f'QA passed: {len(HTML)} HTML pages checked; local links/assets and public-content guardrails verified.')
