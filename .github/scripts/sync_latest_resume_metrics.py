from pathlib import Path

EXTS={'.html','.js','.md'}
repls={
    '$180M+':'$500M+',
    '180m':'500m',
    '~9 years':'9+ years',
    '~9 yrs':'9+ yrs',
    '8.5+ years':'9+ years',
    '$184.8K':'$185K',
    '$184.8k':'$185K',
    '$184,800':'$185K',
}
changed=[]
for p in Path('.').rglob('*'):
    if not p.is_file() or p.suffix.lower() not in EXTS or '.git' in p.parts or '.github' in p.parts:
        continue
    try:
        s=p.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        continue
    orig=s
    for a,b in repls.items():
        s=s.replace(a,b)
    # Align the primary ServiceLink scale label with the latest resume wording.
    s=s.replace('annual transaction flow · SCALE','annual transactions · SCALE')
    s=s.replace('annual transaction scale','annual transaction scale')
    if s!=orig:
        p.write_text(s,encoding='utf-8')
        changed.append(str(p))

# targeted latest-resume updates where the portfolio already references these programs
for name in ['doc-verify.html','title-automation.html']:
    p=Path(name)
    if not p.exists():
        continue
    s=p.read_text(encoding='utf-8')
    orig=s
    if name=='doc-verify.html':
        s=s.replace('184.8K','185K').replace('184,800','185K')
    else:
        s=s.replace('$1M+','$1.5M+')
    if s!=orig:
        p.write_text(s,encoding='utf-8')
        changed.append(str(p))

print('Updated files:')
for f in sorted(set(changed)):
    print('-',f)
