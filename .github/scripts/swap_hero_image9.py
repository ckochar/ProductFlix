from pathlib import Path
p=Path('index.html')
s=p.read_text(encoding='utf-8')
old='assets/photos/navy-blazer.jpg'
new='assets/photos/hero-cmu-light-suit.jpg'
if old not in s:
    raise SystemExit('Current hero image reference not found')
s=s.replace(old,new,1)
p.write_text(s,encoding='utf-8')
print('Swapped homepage Hiring hero to image 9.')
