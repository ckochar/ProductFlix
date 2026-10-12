from pathlib import Path
p=Path('index.html')
s=p.read_text(encoding='utf-8')
s=s.replace('<body>','<body id="home">',1)
s=s.replace('<header class="site-header" id="home">','<header class="site-header">',1)
p.write_text(s,encoding='utf-8')
print('Home anchor moved from sticky header to document root.')