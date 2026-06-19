// site-helper.js
(function() {
  'use strict';

  const CONFIG = {
    siteUrl: 'https://index-5mlottery.com',
    keyword: '500万网彩票',
    bannerText: '欢迎访问本站，请文明娱乐，理性投注。',
    tagColor: '#e74c3c'
  };

  const tagData = [
    { label: '安全', tip: '本站采用SSL加密传输' },
    { label: '公正', tip: '开奖结果公开透明' },
    { label: '便捷', tip: '多终端流畅访问' },
    { label: '500万网彩票', tip: '核心关键词' }
  ];

  const faqList = [
    { q: '如何注册账户？', a: '点击右上角“注册”按钮，填写基本信息即可。' },
    { q: '忘记密码怎么办？', a: '在登录页点击“忘记密码”，按提示重置。' },
    { q: '如何查看开奖结果？', a: '导航栏选择“开奖信息”即可实时查看。' }
  ];

  function renderCard(container, title, contentList) {
    const card = document.createElement('div');
    card.className = 'helper-card';
    const heading = document.createElement('h3');
    heading.textContent = title;
    card.appendChild(heading);
    contentList.forEach(item => {
      const p = document.createElement('p');
      p.textContent = item;
      card.appendChild(p);
    });
    container.appendChild(card);
  }

  function renderTagRow(container) {
    const row = document.createElement('div');
    row.className = 'helper-tag-row';
    tagData.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'helper-tag';
      span.textContent = tag.label;
      span.style.backgroundColor = CONFIG.tagColor;
      span.style.color = '#fff';
      span.style.padding = '4px 10px';
      span.style.borderRadius = '14px';
      span.style.margin = '4px';
      span.style.display = 'inline-block';
      span.style.fontSize = '14px';
      span.title = tag.tip;
      row.appendChild(span);
    });
    container.appendChild(row);
  }

  function renderFaq(container) {
    const faqDiv = document.createElement('div');
    faqDiv.className = 'helper-faq';
    const heading = document.createElement('h3');
    heading.textContent = '常见问题';
    faqDiv.appendChild(heading);
    faqList.forEach(item => {
      const q = document.createElement('p');
      q.className = 'helper-faq-q';
      q.textContent = '问：' + item.q;
      faqDiv.appendChild(q);
      const a = document.createElement('p');
      a.className = 'helper-faq-a';
      a.textContent = '答：' + item.a;
      a.style.marginLeft = '16px';
      a.style.color = '#555';
      faqDiv.appendChild(a);
    });
    container.appendChild(faqDiv);
  }

  function renderBanner(container) {
    const banner = document.createElement('div');
    banner.className = 'helper-banner';
    banner.textContent = CONFIG.bannerText;
    banner.style.backgroundColor = '#f0f8ff';
    banner.style.border = '1px solid #b0d4f1';
    banner.style.padding = '12px';
    banner.style.borderRadius = '8px';
    banner.style.marginBottom = '12px';
    container.appendChild(banner);
  }

  function init() {
    const wrapper = document.createElement('div');
    wrapper.id = 'site-helper-root';
    wrapper.style.fontFamily = 'Arial, sans-serif';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '20px auto';
    wrapper.style.border = '1px solid #ddd';
    wrapper.style.borderRadius = '12px';
    wrapper.style.padding = '20px';
    wrapper.style.backgroundColor = '#fafafa';

    renderBanner(wrapper);

    const infoTitle = document.createElement('h2');
    infoTitle.textContent = '页面帮助';
    infoTitle.style.marginTop = '0';
    wrapper.appendChild(infoTitle);

    const infoList = [
      '本提示由 ' + CONFIG.siteUrl + ' 自动生成',
      '关键词：' + CONFIG.keyword,
      '如有疑问请查看常见问题或联系客服',
      '建议使用现代浏览器访问以获得最佳体验'
    ];
    renderCard(wrapper, '访问说明', infoList);

    renderTagRow(wrapper);
    renderFaq(wrapper);

    const footer = document.createElement('div');
    footer.style.marginTop = '20px';
    footer.style.fontSize = '12px';
    footer.style.color = '#888';
    footer.textContent = '© ' + new Date().getFullYear() + ' ' + CONFIG.siteUrl;
    wrapper.appendChild(footer);

    document.body.appendChild(wrapper);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();