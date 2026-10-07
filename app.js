const exhibitionWorks=document.createElement('section');
exhibitionWorks.className='exhibition-works';
exhibitionWorks.setAttribute('aria-labelledby','exhibition-works-title');
exhibitionWorks.innerHTML=`
  <div class="chapter-heading">
    <span class="eyebrow">04</span>
    <div><h3 id="exhibition-works-title">전시와 수상으로 이어진 작품</h3><p class="muted">작품이 소개된 전시 현장과 선정 소식을 모았습니다. 인스타그램에서 당시 이야기도 확인할 수 있습니다.</p></div>
  </div>
  <div class="exhibition-grid">
    <article class="exhibition-card"><img src="assets/underwater-breath-one-second.png" alt="제주 AI 아트 동아리 숨비온 사라지는 것들 전시 작품" loading="lazy"><div><time datetime="2026-01-19">2026.01.19–01.25</time><h4>제주 AI 아트 동아리 숨비온 「사라지는 것들」</h4><p>〈물 밑의 숨, 1초〉 출품 · 창작오픈스튜디오 뜰</p><a href="https://www.instagram.com/reel/DTtzgdPEjfv/" target="_blank" rel="noopener noreferrer">작품 · 현장 보기 ↗</a></div></article>
    <article class="exhibition-card"><img src="assets/exhibition-idca-poster.png" alt="복을 두른 황금의 여인, 국제디지털콘텐츠협회 명화의 재탄생 전시 작품" loading="lazy"><div><time datetime="2025-06-08">2025.06.08–07.02</time><h4>국제디지털콘텐츠협회 전시회</h4><p>「명화의 재탄생」 AI 아트 작품전 · 공식 포스터 선정</p><a href="https://www.instagram.com/p/DUKN4TKkgZp/" target="_blank" rel="noopener noreferrer">현장 기록 보기 ↗</a></div></article>
    <article class="exhibition-card"><img src="assets/exhibition-gvalley.png" alt="2025 G밸리 아트쇼 대표 출품작" loading="lazy"><div><time datetime="2025-09-15">2025.09.15–09.27</time><h4>G밸리 아트쇼</h4><p>AI 아트 작품 4점 전시</p><div class="exhibition-actions"><button class="exhibition-gallery-open" type="button">출품작 4점 보기 ＋</button><a href="https://www.instagram.com/p/DOsnvLMknYH/" target="_blank" rel="noopener noreferrer">현장 기록 보기 ↗</a></div></div></article>
    <article class="exhibition-card"><img src="assets/exhibition-qingdao.jpg" alt="2025 칭다오 국제아트페스티벌 전시 작품" loading="lazy"><div><time datetime="2025-10-16">2025.10.16–10.20</time><h4>칭다오 국제아트페스티벌</h4><p>국제 아트페스티벌 참여 작품</p><a href="https://www.instagram.com/p/DP51ZYekrHh/" target="_blank" rel="noopener noreferrer">작품 · 현장 보기 ↗</a></div></article>
    <article class="exhibition-card"><img src="assets/exhibition-saekdong.png" alt="색동의 비상 작품" loading="lazy"><div><time datetime="2025-12-17">2025.12.17–12.29</time><h4>색동의 비상</h4><p>서울 인사동 신상갤러리 · 따능스쿨 하반기 전시</p><a href="https://www.instagram.com/reel/DSWZzdDEvWa/" target="_blank" rel="noopener noreferrer">작품 · 현장 보기 ↗</a></div></article>
    <article class="exhibition-card"><img src="assets/exhibition-light-rests.jpg" alt="빛이 머무는 산수 작품" loading="lazy"><div><time datetime="2025-12-04">2025.12.04–12.06</time><h4>빛이 머무는 산수</h4><p>AI 콘텐츠 페스티벌 · 서울 COEX 더플라츠</p></div></article>
    <article class="exhibition-card"><img src="assets/exhibition-seolmundae.png" alt="설문대 할망 대지를 엮다 작품" loading="lazy"><div><time datetime="2026-03-18">2026.03.18–03.28</time><h4>설문대 할망, 대지를 엮다</h4><p>국립제주박물관 「설문대 할망: AI로 다시 쓰는 창조의 신화」</p><a href="https://www.instagram.com/reel/DWP2xNmkvUE/" target="_blank" rel="noopener noreferrer">작품 · 현장 보기 ↗</a></div></article>
  </div>
  <a class="text-link" href="#/history" data-route="history">전체 수상·전시 이력 보기 →</a>`;
document.querySelector('#work').append(exhibitionWorks);
exhibitionWorks.querySelector('.text-link').remove();
const exhibitionGrid=exhibitionWorks.querySelector('.exhibition-grid');
[...exhibitionGrid.children]
  .sort((a,b)=>new Date(b.querySelector('time').dateTime)-new Date(a.querySelector('time').dateTime))
  .forEach(card=>exhibitionGrid.append(card));

const exhibitionDialog=document.createElement('dialog');
exhibitionDialog.className='exhibition-gallery-dialog';
exhibitionDialog.setAttribute('aria-labelledby','exhibition-gallery-title');
exhibitionDialog.innerHTML=`<div class="exhibition-dialog-head"><div><p class="eyebrow">2025.09.15–09.27</p><h2 id="exhibition-gallery-title">G밸리 아트쇼 · 출품작 4점</h2></div><button class="exhibition-dialog-close" type="button" aria-label="전시 작품 갤러리 닫기">×</button></div><div class="exhibition-dialog-grid"><figure><img src="assets/exhibition-gvalley.png" alt="G밸리 아트쇼 출품작 1" loading="eager"><figcaption>G밸리 아트쇼 출품작 01</figcaption></figure><figure><img src="assets/exhibition-gvalley-2.png" alt="G밸리 아트쇼 출품작 2" loading="eager"><figcaption>G밸리 아트쇼 출품작 02</figcaption></figure><figure><img src="assets/exhibition-gvalley-3.jpg" alt="G밸리 아트쇼 출품작 3" loading="eager"><figcaption>G밸리 아트쇼 출품작 03</figcaption></figure><figure><img src="assets/exhibition-gvalley-4.png" alt="G밸리 아트쇼 출품작 4" loading="eager"><figcaption>G밸리 아트쇼 출품작 04</figcaption></figure></div>`;
document.body.append(exhibitionDialog);
exhibitionWorks.querySelector('.exhibition-gallery-open').addEventListener('click',()=>{exhibitionDialog.showModal();document.body.classList.add('modal-open')});
exhibitionDialog.querySelector('.exhibition-dialog-close').addEventListener('click',()=>exhibitionDialog.close());
exhibitionDialog.addEventListener('click',event=>{if(event.target===exhibitionDialog)exhibitionDialog.close()});
exhibitionDialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));

const workSection=document.querySelector('#work');
workSection.classList.add('recognition-led-work');
workSection.querySelector('.section-head h2').textContent='ARTWORKS & ACTIVITIES';
workSection.querySelector('.work-intro').textContent='제주와 한국적 미감을 AI로 재해석하며, 전시와 공모전을 통해 작품성을 인정받은 대표 작업을 소개합니다.';
workSection.querySelectorAll('.work-chapter,.all-art').forEach(section=>section.hidden=true);
workSection.querySelector('.publishing-link')?.remove();
exhibitionWorks.querySelector('.eyebrow').textContent='01';
exhibitionWorks.querySelector('#exhibition-works-title').textContent='작품 · 전시';
exhibitionWorks.querySelector('#exhibition-works-title + .muted').textContent='작품이 소개된 전시와 공모전의 주요 기록을 모았습니다. 사진과 영상으로 당시 작품과 현장을 확인할 수 있습니다.';

const awardsList=document.querySelector('#history .awards-list');
awardsList.insertAdjacentHTML('beforeend','<li><h4>아차상</h4><p>2025 · K-헤리티지 국가유산진흥원 〈작호도를 찾아라〉 기획전</p><a class="history-instagram" href="https://www.instagram.com/reel/DNs59oG5CjK/" target="_blank" rel="noopener noreferrer">수상 기록 보기 ↗</a></li>');
const awardItems=[...awardsList.children];
const grandPrizeItem=awardItems.find(item=>item.querySelector('h4')?.textContent==='대상');
const excellenceItem=awardItems.find(item=>item.querySelector('h4')?.textContent==='우수상');
const honorableItem=awardItems.find(item=>item.querySelector('h4')?.textContent==='입선');
awardItems.forEach(item=>item.querySelector('h4')?.classList.add('award-title'));
grandPrizeItem.querySelector('h4').classList.add('award-title-grand');
grandPrizeItem.querySelector('p').textContent='2025.11.29 · 제주컵 국제요트대회 제주 GEN AI 영상제';
excellenceItem.querySelector('p').textContent='2025.11.01 · 제주젠 GEN AI 영상제';
honorableItem.querySelector('p').textContent='2024 · ICT정보문화페스티벌 AI 영상콘텐츠 이미지 부문';
const kHeritageItem=[...awardsList.children].find(item=>item.textContent.includes('작호도를 찾아라'));
awardsList.insertBefore(kHeritageItem,honorableItem);
kHeritageItem.querySelector('h4').classList.add('award-title');
kHeritageItem.classList.add('award-record-with-media');
kHeritageItem.insertAdjacentHTML('afterbegin','<a class="award-record-image" href="https://www.instagram.com/reel/DNs59oG5CjK/" target="_blank" rel="noopener noreferrer" aria-label="작호도를 찾아라 아차상 수상 작품 보기"><img src="assets/award-kheritage.png" alt="K-헤리티지 작호도를 찾아라 기획전 아차상 수상 작품" loading="lazy"></a>');
grandPrizeItem.insertAdjacentHTML('beforeend','<a class="award-instagram-link" href="https://www.instagram.com/reel/Ddamk0FSo2O/" target="_blank" rel="noopener noreferrer">인스타그램에서 대상 수상작 보기 ↗</a>');
excellenceItem.insertAdjacentHTML('beforeend','<a class="award-instagram-link" href="https://www.instagram.com/reel/DQo6nA-EmX7/" target="_blank" rel="noopener noreferrer">인스타그램에서 우수상 수상작 보기 ↗</a>');
const ictAwardItem=[...awardsList.children].find(item=>item.textContent.includes('ICT정보문화페스티벌'));
ictAwardItem.classList.add('award-record-with-media');
ictAwardItem.insertAdjacentHTML('afterbegin','<a class="award-record-image" href="https://www.instagram.com/p/DDMrQFETAEp/" target="_blank" rel="noopener noreferrer" aria-label="ICT정보문화페스티벌 입선 작품 보기"><img src="assets/award-ict-2024.png" alt="ICT정보문화페스티벌 AI 영상콘텐츠 이미지 부문 일반부 입선 작품" loading="lazy"></a>');
ictAwardItem.insertAdjacentHTML('beforeend','<a class="history-instagram" href="https://www.instagram.com/p/DDMrQFETAEp/" target="_blank" rel="noopener noreferrer">수상 작품 보기 ↗</a>');
const officialPosterItem=[...document.querySelectorAll('#history .history-more li')].find(item=>item.textContent.includes('공식 포스터 선정'));
officialPosterItem.classList.add('award-record-with-media');
officialPosterItem.insertAdjacentHTML('afterbegin','<figure class="award-record-image"><img src="assets/award-official-poster-2025.png" alt="복을 두른 황금의 여인, 국제디지털콘텐츠협회 전시회 공식 포스터 선정 작품" loading="lazy"><figcaption>복을 두른 황금의 여인</figcaption></figure>');
const onchaeumArtItem=[...document.querySelectorAll('#history .history-more li')].find(item=>item.textContent.includes('AI 아트 수록작 선정'));
onchaeumArtItem.classList.add('award-record-with-media');
onchaeumArtItem.insertAdjacentHTML('afterbegin','<figure class="award-record-image"><img src="assets/award-onchaeum-art-2024.png" alt="따능스쿨 온채움 아트 매거진 공모전 수록작 엮인 조화" loading="lazy"><figcaption>엮인 조화</figcaption></figure>');
const exhibitionsColumn=[...document.querySelectorAll('#history .history-columns > div')].find(column=>column.querySelector('h3')?.textContent==='EXHIBITIONS');
exhibitionsColumn.querySelector('.history-list').insertAdjacentHTML('afterbegin','<li><span class="history-date">2026.01.19–01.25</span><h4>제주 AI 아트 동아리 숨비온 「사라지는 것들」</h4><p>제주시 관덕로 창작오픈스튜디오 뜰</p><a class="history-instagram" href="https://www.instagram.com/reel/DTtzgdPEjfv/" target="_blank" rel="noopener noreferrer">작품 · 현장 보기 ↗</a></li>');

const workCareerSummary=document.createElement('section');
workCareerSummary.className='work-career-summary';
workCareerSummary.innerHTML='<div class="chapter-heading"><span class="eyebrow">02</span><div><h3>주요 활동 · 수상 · 자격</h3><p class="muted">작품 활동의 성과와 전문 이력을 한곳에서 확인할 수 있습니다.</p></div></div>';
const featuredProject=document.querySelector('#history .featured-project');
const awardsColumn=awardsList.closest('.history-columns > div');
const credentials=document.querySelector('#history .credentials-compact');
awardsColumn.querySelector('h3').textContent='수상 · 선정';
awardsColumn.querySelector(':scope > .muted')?.remove();
workCareerSummary.append(featuredProject,awardsColumn,credentials);
exhibitionWorks.insertAdjacentElement('afterend',workCareerSummary);

const goldenAwardFilm=document.querySelector('.motion-choice[data-film="golden-world"]');
goldenAwardFilm.dataset.film='giomar-cinematic-gold-16x9';
goldenAwardFilm.dataset.poster='golden-world-poster.webp';
goldenAwardFilm.dataset.title='GIOMAR · Cinematic Gold';
goldenAwardFilm.dataset.description='금빛과 한국적 미감을 담아낸 GIOMAR의 시네마틱 영상입니다.';
goldenAwardFilm.querySelector('img').src='assets/golden-world-poster.webp';
goldenAwardFilm.querySelector('span').textContent='GIOMAR · Cinematic Gold';
goldenAwardFilm.querySelector('small').textContent='18초 · 시네마틱 영상';
const parkoneSelectedFilm=document.querySelector('.motion-choice[data-film="breath-resonance"]');
parkoneSelectedFilm.dataset.film='parkone-media-art';
parkoneSelectedFilm.dataset.poster='parkone-guardian-frame.jpg';
parkoneSelectedFilm.dataset.title='여의도 파크원 미디어아트';
parkoneSelectedFilm.dataset.description='여의도 파크원 미디어아트 전시작가 선정 · 2026년 5월부터 대형 미디어월에서 작품 영상 송출';
parkoneSelectedFilm.querySelector('img').src='assets/parkone-guardian-frame.jpg';
parkoneSelectedFilm.querySelector('span').textContent='여의도 파크원 미디어아트';
parkoneSelectedFilm.querySelector('small').textContent='현장 영상 · 전시작가 선정';

const routeGroups={
  home:['.hero','.quick-links'],
  about:['#about','.create-section'],
  work:['#work','#publications'],
  motion:['#motion'],
  class:['#class'],
  history:['#history'],
  contact:['#contact']
};
const allRouteViews=[...new Set(Object.values(routeGroups).flatMap(selectors=>selectors.flatMap(selector=>[...document.querySelectorAll(selector)])))];
const mainMenuBack=document.createElement('a');
mainMenuBack.className='main-menu-back';
mainMenuBack.href='#/home';
mainMenuBack.dataset.route='home';
mainMenuBack.setAttribute('aria-label','메인 메뉴로 돌아가기');
mainMenuBack.innerHTML='<span aria-hidden="true">←</span> MAIN MENU';
document.querySelector('main').prepend(mainMenuBack);
const aboutLink=document.createElement('a');
aboutLink.className='hero-about-link';
aboutLink.href='#/work';
aboutLink.dataset.route='work';
aboutLink.textContent='대표 작품 보기 →';
document.querySelector('.hero-bio').insertAdjacentElement('afterend',aboutLink);
document.querySelector('.hero .eyebrow').remove();
document.querySelector('.hero-bio').innerHTML='제주의 자연과 한국적 미감을 바탕으로<br>AI를 통해 새로운 시각 언어를 만듭니다.';
document.querySelector('.hero .actions .text-link').innerHTML='문의 · 협업 <span>↗</span>';
const workQuickLink=document.querySelector('.quick-links a[href="#/work"]');
workQuickLink.querySelector('strong').textContent='작품';
workQuickLink.querySelector('small').textContent='작품 · 컬렉션 · 전시';
const historyQuickLink=document.querySelector('.quick-links a[href="#/history"]');
historyQuickLink.remove();
document.querySelector('nav a[href="#/history"]').remove();
document.querySelector('nav a[href="#/contact"]').textContent='문의 · 협업 ↗';
document.querySelector('.quick-links').classList.add('four-items');
const quickLinks=[...document.querySelectorAll('.quick-links a')];
const quickLabels=[['작품','ARTWORKS','작품 · 컬렉션 · 전시'],['영상','MOTION','AI 영상 · 브랜드 필름 · 미디어아트'],['강의 · 교육','EDUCATION','기관 · 학교 · 도서관 · 워크숍'],['문의 · 협업','CONTACT','전시 · 강의 · 브랜드 · 프로젝트']];
quickLinks.forEach((link,index)=>{const [title,en,description]=quickLabels[index];link.querySelector('.quick-number').textContent=String(index+1).padStart(2,'0');link.querySelector('strong').textContent=title;link.querySelector('small').textContent=description;const english=document.createElement('em');english.className='quick-en';english.textContent=en;link.querySelector('strong').insertAdjacentElement('afterend',english)});
const routeTitles={home:'GIOMAR by SEOGYEONG',about:'소개',work:'작품',motion:'영상',class:'교육',history:'이력',contact:'상담'};
const getRoute=()=>{const value=location.hash.replace(/^#\/?/,'').split('/')[0];const normalized=value==='history'||value==='publications'?'work':value;return routeGroups[normalized]?normalized:'home'};
const renderRoute=()=>{const route=getRoute();const visible=new Set(routeGroups[route].flatMap(selector=>[...document.querySelectorAll(selector)]));allRouteViews.forEach(view=>{const show=visible.has(view);view.classList.toggle('route-hidden',!show);view.toggleAttribute('aria-hidden',!show)});document.body.dataset.route=route;document.querySelectorAll('[data-route],nav a').forEach(link=>{const active=(link.dataset.route||link.hash.replace(/^#\/?/,''))===route;link.classList.toggle('active',active);if(link.closest('nav'))link.toggleAttribute('aria-current',active)});document.title=`${routeTitles[route]} | GIOMAR by SEOGYEONG`;scrollTo({top:0,behavior:'instant'});requestAnimationFrame(()=>visible.forEach(view=>view.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))))};
addEventListener('hashchange',renderRoute);
renderRoute();

const curriculumPrograms=[
  ['생성형 AI로 아이디어·콘텐츠 기획','다양한 생성형 AI 도구의 기초 활용부터 프롬프트 작성, 수업·홍보·창작 콘텐츠 아이디어 기획까지 배웁니다.'],
  ['AI 이미지·영상·미디어아트 제작','AI 이미지와 디지털아트를 만들고, 영상·숏폼·미디어아트 작품으로 확장합니다.'],
  ['AI 그림동화·컬러링북·전자책','이야기와 AI 삽화를 활용해 그림동화·컬러링북·전자책을 기획하고 완성합니다.'],
  ['AI 인스타툰·Canva 콘텐츠 디자인','AI로 인스타툰을 만들고, Canva로 카드뉴스·홍보 콘텐츠·개인 브랜드 이미지를 구성합니다.'],
  ['디지털 윤리·딥페이크 예방','생성형 AI를 올바르게 사용하는 방법과 딥페이크의 위험·예방 방법을 배웁니다.'],
  ['기관·학교 맞춤형 AI 창작 실습','연령과 교육 목적에 맞춰 이미지·영상·그림동화·숏폼 중 하나의 결과물을 완성합니다.']
];
document.querySelector('#class .lecture-more')?.remove();
const curriculum=document.querySelector('#class .curriculum');
const lectureInquiry=document.querySelector('#class .teach-grid .button');
lectureInquiry.classList.add('curriculum-inquiry');
lectureInquiry.innerHTML='강의 · 출강 · 협업 문의 <span aria-hidden="true">↓</span>';
curriculum.prepend(lectureInquiry);
document.querySelectorAll('#class .curriculum details').forEach((detail,index)=>{const program=curriculumPrograms[index];if(!program)return;const summary=detail.querySelector('summary');summary.childNodes[0].nodeValue=program[0];detail.querySelector('p').textContent=program[1]});
curriculum.insertAdjacentHTML('beforeend','<details class="certification-program"><summary>협회 연계 AI·디지털 콘텐츠 자격 과정<span>＋</span></summary><div class="certification-inline"><p>국제디지털콘텐츠협회 제주지국장으로 활동하며, 기관의 교육 목적과 대상에 맞춘 자격 과정과 자격증 발급 연계 교육을 운영할 수 있습니다.</p><ul aria-label="운영 가능한 자격 교육 분야"><li>AI 디지털 콘텐츠 강사</li><li>AI 영상 콘텐츠 강사</li><li>AI 디지털 아트 작가</li><li>AI 출판 콘텐츠 작가</li><li>Canva·SNS 콘텐츠 디자인</li><li>POD 굿즈 제작</li></ul><a href="https://www.aischool.life/channels/L2NoYW5uZWxzLzE3NzEw/pages/home" target="_blank" rel="noopener noreferrer">국제디지털콘텐츠협회 교육 페이지 보기 ↗</a></div></details>');
const educationValue=document.createElement('section');
educationValue.className='education-value';
educationValue.innerHTML='<p class="eyebrow">WHY GIOMAR EDUCATION</p><h3>작품을 만드는 작가의 경험을,<br>결과물이 남는 교육으로 연결합니다.</h3><div><article><strong>01</strong><h4>현장 경험</h4><p>전시·수상·출판 경험을 실제 수업 사례로 연결합니다.</p></article><article><strong>02</strong><h4>맞춤 설계</h4><p>기관의 목적과 학습자의 연령·수준에 맞춰 구성합니다.</p></article><article><strong>03</strong><h4>결과물 중심</h4><p>아이디어부터 이미지·영상·책 등 완성 작품까지 함께합니다.</p></article></div>';
document.querySelector('#class .education-history').insertAdjacentElement('beforebegin',educationValue);

// 주요 강의는 연도만 표시하고, 2026년 활동을 먼저 배치합니다.
const institutionGrid=document.querySelector('#class .institution-grid');
const institutionCards=[...institutionGrid.querySelectorAll('article')];
const institutionYears=new Map([
  ['(주)카카오','2025'],
  ['제주평생교육진흥원 도민대학','2025–2026'],
  ['제주탐라도서관','2025'],
  ['제주고등학교','2026'],
  ['제주세화중학교','2025']
]);
institutionCards.forEach(card=>{
  const name=card.querySelector('h4').textContent.trim();
  const year=institutionYears.get(name);
  if(year) card.querySelector('small').textContent=year;
});
const institutionOrder=['제주고등학교','제주평생교육진흥원 도민대학','(주)카카오','제주탐라도서관','제주세화중학교'];
institutionOrder.forEach(name=>{
  const card=institutionCards.find(item=>item.querySelector('h4').textContent.trim()===name);
  if(card) institutionGrid.append(card);
});
const currentInstitution=institutionCards.find(card=>card.querySelector('h4').textContent.trim()==='제주고등학교');
if(currentInstitution) currentInstitution.classList.add('institution-featured');

const languageSwitch=document.createElement('div');
languageSwitch.className='language-switch';
languageSwitch.setAttribute('aria-label','언어 선택');
languageSwitch.innerHTML='<button type="button" data-lang="ko">KR</button><span aria-hidden="true">|</span><button type="button" data-lang="en">EN</button>';
const topUtility=document.createElement('div');
topUtility.className='top-utility';
const instagramUtility=document.createElement('a');
instagramUtility.href=document.querySelector('[data-contact="instagram"]').href;
instagramUtility.target='_blank';
instagramUtility.rel='noopener noreferrer';
instagramUtility.textContent='인스타그램 · 지오마르 ↗';
instagramUtility.setAttribute('aria-label','인스타그램 · 지오마르 새 창에서 열기');
instagramUtility.innerHTML='<span class="instagram-label-full">인스타그램 · 지오마르 ↗</span><span class="instagram-label-mobile">인스타그램 ↗</span>';
const kakaoUtility=document.createElement('a');
kakaoUtility.href=document.querySelector('[data-contact="kakao"]').href;
kakaoUtility.target='_blank';
kakaoUtility.rel='noopener noreferrer';
kakaoUtility.textContent='1:1 문의 ↗';
const emailUtility=document.createElement('a');
emailUtility.href=document.querySelector('[data-contact="inquiry"]').href;
emailUtility.textContent='이메일 ↗';
topUtility.append(instagramUtility,kakaoUtility,emailUtility,languageSwitch);
document.body.append(topUtility);
const translations=new Map([
  ['소개','ABOUT'],['작품','ARTWORKS'],['영상','MOTION'],['교육','EDUCATION'],['상담 ↗','CONTACT ↗'],
  ['AI는 도구,','AI is the tool,'],['감성은 이야기,','emotion is the story,'],['작품은 나의 언어.','and art is my language.'],
  ['제주의 자연과 한국적 미감을 바탕으로','Rooted in Jeju’s nature and Korean aesthetics,'],['AI를 통해 새로운 시각 언어를 만듭니다.','I create a new visual language through AI.'],
  ['대표 작품 보기 →','VIEW FEATURED WORKS →'],['← MAIN MENU','← MAIN MENU'],
  ['작품 · 전시','ARTWORKS · EXHIBITIONS'],['작품이 소개된 전시와 공모전의 주요 기록을 모았습니다. 사진과 영상으로 당시 작품과 현장을 확인할 수 있습니다.','Selected exhibitions and public presentations of my work, documented through images and video.'],
  ['대표 수상작','FEATURED AWARD-WINNING WORKS'],['대표 수상작을 먼저 살펴보고, 작품 이미지는 수상 기록에서 확인할 수 있습니다.','Explore the featured award winners, then view each work in its award record.'],['대상 · 영상','GRAND PRIZE · FILM'],['공식 포스터 선정','OFFICIAL POSTER SELECTION'],['수상작','AWARD-WINNING WORK'],['수상작 · 영상','AWARD-WINNING FILM'],['숨결과 울림','Breath and Resonance'],['복을 두른 황금의 여인','Woman Draped in Golden Fortune'],['제주컵 국제요트대회 제주 GEN AI 영상제 · 대상','Jeju Cup International Yacht Race GEN AI Film Festival · Grand Prize'],['국제디지털콘텐츠협회 「명화의 재탄생」 작품전','International Digital Content Association · Reborn by AI Exhibition'],['작품 · 선정 기록 보기 →','VIEW WORK · SELECTION →'],['작품 · 수상 기록 보기 →','VIEW WORK · AWARD RECORD →'],['수상 기록 보기 →','VIEW AWARD RECORD →'],['수상 영상 보기 →','VIEW AWARD FILM →'],
  ['주요 활동 · 수상 · 자격','CAREER · AWARDS · CREDENTIALS'],['작품 활동의 성과와 전문 이력을 한곳에서 확인할 수 있습니다.','A concise record of awards, professional activities and credentials.'],
  ['수상 · 선정','AWARDS · SELECTIONS'],['대상','GRAND PRIZE'],['우수상','EXCELLENCE AWARD'],['아차상','HONORABLE MENTION'],['입선','SELECTED'],
  ['인스타그램에서 대상 수상작 보기 ↗','VIEW GRAND PRIZE WORK ON INSTAGRAM ↗'],['인스타그램에서 우수상 수상작 보기 ↗','VIEW EXCELLENCE AWARD WORK ON INSTAGRAM ↗'],['수상 기록 보기 ↗','VIEW AWARD RECORD ↗'],['수상 작품 보기 ↗','VIEW AWARD WORK ↗'],
  ['자격 · 활동','CREDENTIALS · ACTIVITIES'],['전체 자격 및 이력 보기','VIEW ALL CREDENTIALS'],
  ['그림동화·컬러링북 출판','PICTURE BOOKS · COLORING BOOKS'],['이야기와 이미지를 책으로 연결합니다.','Bringing stories and images together in books.'],['온라인 서점에서 출간 도서를 만나보세요.','Explore the published titles through online bookstores.'],
  ['처음 만나는 AI,','YOUR FIRST ENCOUNTER WITH AI,'],['나의 첫 작품이 되기까지.','FROM IDEA TO YOUR FIRST CREATION.'],['AI를 처음 접하는 사람도 창작의 흐름을 이해하고,','Designed for beginners to understand the creative process,'],['수업 안에서 자신만의 결과물을 직접 완성하도록 가르칩니다.','and complete an original work during the class.'],
  ['강의 · 출강 · 협업 문의','LECTURES · WORKSHOPS · COLLABORATION'],['주요 강의 · 출강','SELECTED LECTURES · WORKSHOPS'],
  ['작품을 만드는 작가의 경험을,','FROM AN ARTIST’S CREATIVE PRACTICE,'],['결과물이 남는 교육으로 연결합니다.','TO EDUCATION THAT PRODUCES REAL WORK.'],['현장 경험','FIELD EXPERIENCE'],['전시·수상·출판 경험을 실제 수업 사례로 연결합니다.','Exhibition, award and publishing experience brought into the classroom.'],['맞춤 설계','CUSTOM PROGRAMS'],['기관의 목적과 학습자의 연령·수준에 맞춰 구성합니다.','Designed around each institution, age group and skill level.'],['결과물 중심','OUTCOME-FOCUSED'],['아이디어부터 이미지·영상·책 등 완성 작품까지 함께합니다.','From an initial idea to a completed image, film or book.'],
  ['생성형 AI로 아이디어·콘텐츠 기획','GENERATIVE AI IDEAS · CONTENT PLANNING'],['AI 이미지·영상·미디어아트 제작','AI IMAGE · VIDEO · MEDIA ART'],['AI 그림동화·컬러링북·전자책','AI PICTURE BOOKS · COLORING BOOKS · E-BOOKS'],['AI 인스타툰·Canva 콘텐츠 디자인','AI INSTATOON · CANVA CONTENT DESIGN'],['디지털 윤리·딥페이크 예방','DIGITAL ETHICS · DEEPFAKE PREVENTION'],['기관·학교 맞춤형 AI 창작 실습','CUSTOM AI CREATION FOR INSTITUTIONS · SCHOOLS'],
  ['함께 만드는','LET’S CREATE'],['새로운 이야기.','A NEW STORY TOGETHER.'],['강의·특강·워크숍·전시·콘텐츠 프로젝트 협업을 진행합니다.','Available for lectures, workshops, exhibitions and creative collaborations.'],
  ['문의 · 협업','CONTACT · COLLABORATION'],['문의 · 협업 ↗','CONTACT · COLLABORATION ↗'],['이메일 ↗','EMAIL ↗'],['이메일 보내기 ↗','SEND EMAIL ↗'],['카카오톡으로 문의','KAKAO INQUIRY'],['인스타그램 · 지오마르 ↗','INSTAGRAM · GIOMAR ↗'],['1:1 문의 ↗','1:1 INQUIRY ↗'],['1:1 오픈채팅 ↗','OPEN CHAT ↗'],
  ['작품 · 현장 보기 ↗','VIEW WORK · EXHIBITION ↗'],['현장 기록 보기 ↗','VIEW EXHIBITION RECORD ↗'],['출품작 4점 보기 ＋','VIEW 4 WORKS ＋'],['현장 영상 보기 ↗','VIEW ON-SITE VIDEO ↗']
]);
const reverseTranslations=new Map([...translations].map(([ko,en])=>[en,ko]));
const applyLanguage=lang=>{const map=lang==='en'?translations:reverseTranslations;const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{if(node.parentElement?.closest('.language-switch,.quick-en'))return;const value=node.nodeValue.trim();if(map.has(value))node.nodeValue=node.nodeValue.replace(value,map.get(value))});quickLinks.forEach((link,index)=>{const [ko,en,koDescription]=quickLabels[index];const enDescriptions=['Works · Collections · Exhibitions','AI Video · Brand Films · Media Art','Institutions · Schools · Libraries · Workshops','Exhibitions · Lectures · Brands · Projects'];link.querySelector('strong').textContent=lang==='en'?en:ko;link.querySelector('.quick-en').textContent=lang==='en'?ko:en;link.querySelector('small').textContent=lang==='en'?enDescriptions[index]:koDescription});document.documentElement.lang=lang==='en'?'en':'ko';languageSwitch.querySelectorAll('button').forEach(button=>{const active=button.dataset.lang===lang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});localStorage.setItem('giomar-language',lang)};
languageSwitch.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.lang)));
applyLanguage(localStorage.getItem('giomar-language')==='en'?'en':'ko');

document.querySelector('.menu-toggle').addEventListener('click',e=>{const b=e.currentTarget;const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}));
const dialog=document.querySelector('#art-dialog');
document.querySelectorAll('.art-open').forEach(button=>button.addEventListener('click',()=>{const d=button.dataset;document.querySelector('#dialog-image').src=d.fullSrc||`assets/${d.image}.webp`;document.querySelector('#dialog-image').alt=d.title;document.querySelector('#dialog-title').textContent=d.title;document.querySelector('#dialog-category').textContent=d.category;document.querySelector('#dialog-description').textContent=d.description;dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
const videos=[...document.querySelectorAll('video')];videos.forEach(v=>v.addEventListener('play',()=>videos.forEach(other=>{if(other!==v)other.pause()})));
document.addEventListener('visibilitychange',()=>{if(document.hidden)videos.forEach(v=>v.pause())});
const config=window.GIOMAR_CONTACT||{};const safeURL=value=>{try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href:null}catch{return null}};
for(const key of ['instagram','kakao']){const url=safeURL(config[key]);if(url){const a=document.querySelector(`[data-contact="${key}"]`);a.href=url;a.target='_blank';a.rel='noopener noreferrer'}}
const inquiry=document.querySelector('[data-contact="inquiry"]');if(config.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)){inquiry.href=`mailto:${encodeURIComponent(config.email)}?subject=${encodeURIComponent('GIOMAR 강의·출강·협업 문의')}`;inquiry.removeAttribute('target');inquiry.querySelector('.inquiry-label').textContent='강의 · 출강 · 협업 문의'}else if(safeURL(config.instagram)){inquiry.href=safeURL(config.instagram)}
for(const key of ['youtube','blog']){const url=safeURL(config[key]);if(url){const a=document.createElement('a');a.href=url;a.textContent=key.toUpperCase()+' ↗';a.target='_blank';a.rel='noopener noreferrer';document.querySelector('#extra-contacts').append(a)}}
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.section-head,.artwork,.create-grid article').forEach(el=>{el.classList.add('reveal');observer.observe(el)})}

const motionPlayer=document.querySelector('#motion-player');
document.querySelectorAll('.motion-choice').forEach(button=>button.addEventListener('click',()=>{if(button.getAttribute('aria-pressed')==='true')return;motionPlayer.pause();const d=button.dataset;motionPlayer.poster=`assets/${d.poster||`${d.film}-poster.webp`}`;motionPlayer.querySelector('source').src=`assets/${d.film}.mp4`;motionPlayer.setAttribute('aria-label',d.title);motionPlayer.load();document.querySelector('#motion-title').textContent=d.title;document.querySelector('#motion-copy').textContent=d.description;document.querySelectorAll('.motion-choice').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))}));
document.querySelector('.archive-works')?.addEventListener('toggle',e=>{if(e.currentTarget.open)e.currentTarget.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))});


document.querySelectorAll("details").forEach(d=>d.addEventListener("toggle",()=>{if(d.open)d.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"))}));

const projectDialog=document.querySelector('#project-video-dialog');
const projectVideo=document.querySelector('#project-video');
document.querySelector('.project-video-open').addEventListener('click',()=>{const source=projectVideo.querySelector('source');if(!source.src){source.src=source.dataset.src;projectVideo.load()}projectDialog.showModal();document.body.classList.add('modal-open');projectVideo.play().catch(()=>{})});
document.querySelector('.project-video-close').addEventListener('click',()=>projectDialog.close());
projectDialog.addEventListener('close',()=>{projectVideo.pause();document.body.classList.remove('modal-open')});
projectDialog.addEventListener('click',e=>{if(e.target===projectDialog){const r=projectDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)projectDialog.close()}});
