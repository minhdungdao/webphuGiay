(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  const links = [
    ['index.html', 'Trang chủ'],
    ['quantheditich.html', 'Quần thể di tích'],
    ['nghile.html', 'Nghi lễ & Hầu đồng'],
    ['kinh-nghiem.html', 'Kinh nghiệm đi lễ'],
    ['lien-he.html', 'Liên hệ']
  ];
  const nav = document.createElement('div');
  nav.className = 'site-nav';
  nav.innerHTML = `<div class="site-nav__inner"><a class="site-brand" href="index.html"><img src="images/logoNew.jpg" alt="Logo Đan Hồn Việt"><span>Phủ Dầy<small>Đan Hồn Việt</small></span></a><button class="site-menu" type="button" aria-label="Mở menu" aria-expanded="false">☰</button><nav class="site-links" aria-label="Điều hướng chính">${links.map(([href,label]) => `<a href="${href}" ${page===href?'aria-current="page"':''}>${label}</a>`).join('')}<a class="site-nav__cta" href="lien-he.html">Kết nối với chúng tôi ↗</a></nav></div>`;
  document.body.prepend(nav);
  nav.querySelector('.site-menu').addEventListener('click', e => {
    const open = nav.querySelector('.site-links').classList.toggle('is-open');
    e.currentTarget.setAttribute('aria-expanded', String(open));
  });
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `<div class="site-footer__grid"><div><h3>Phủ Dầy</h3><p>Đan Hồn Việt — Gìn giữ và lan tỏa vẻ đẹp văn hóa Phủ Dầy, Nam Định.</p></div><div><h4>Khám phá</h4>${links.map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}</div><div><h4>Kết nối</h4><a href="tel:0962574316">096 257 43 16</a><a href="mailto:danhonviet@gmail.com">danhonviet@gmail.com</a><span>Messenger: Đan Hồn Việt</span></div></div><div class="site-footer__bottom">© ${new Date().getFullYear()} Đan Hồn Việt · Phủ Dầy Heritage</div>`;
  document.body.append(footer);
})();
