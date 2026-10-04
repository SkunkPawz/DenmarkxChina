const translations = {
  en: {
    skip:'Skip to content',navAbout:'Our vision',navServices:'How we work',navWork:'Selected work',navContact:'Let’s connect',
    heroTitle:'Danish inspiration.<br>Chinese possibilities.',heroDescription:"Preserve what makes your brand Danish. Shape its story and digital experience for Chinese audiences, bringing market insight and creative expression together.",heroExplore:'Explore the possibilities',heroWork:'Discover our work',heroBottom:'Two perspectives. One shared ambition.',
    aboutEyebrow:'CONNECTING CULTURES & OPPORTUNITIES',aboutTitle:'The best of Denmark.<br>A world of possibility.',aboutLead:"A gateway connecting Danish brands with China, making distinctive products and stories easier to understand.",aboutText:"Best of Denmark brings Chinese market and cultural insight, networks and opportunities. Shmel turns that insight into brand communication, content and digital experiences. Together, we preserve Danish identity, heritage and craftsmanship while adapting how the story reaches Chinese customers and partners.",partnerOne:'China market & cultural insight<br>Strategy · Networks · Opportunities',partnerTwo:'Brand & creative expression<br>Identity · Content · Digital experiences',aboutNote:'Platform proposal: companies can pay to participate, be featured or activate campaigns.',
    servicesEyebrow:"KEEP · ADAPT · CREATE",servicesTitle:"Keep your Danish identity.<br>Make your story travel.",servicesIntro:"Your products, heritage and craftsmanship are the starting point. Understand the brand first, then decide what to keep, adapt and create for Chinese audiences.",service1Title:"Keep what makes you distinctive",service1Text:"Audit positioning, visual identity, tone of voice and key messages. Keep Danish identity, heritage and craftsmanship at the heart of the brand.",service2Title:"Adapt how your story travels",service2Text:"Use China research to refine messaging, visual communication, product storytelling and the customer journey—from information hierarchy and calls to action to clear reasons to trust.",service3Title:"Create for your next audience",service3Text:"Create selected website pages, landing pages, product presentations and social content for China. Turn agreed designs into digital experiences that work across devices.",servicesExtra:"Carry the same story across websites, content, packaging, menus, signage and print.",servicesLink:'Find your way to collaborate',
    readinessEyebrow:"CHINA READINESS / FROM INSIGHT TO IMPLEMENTATION",readinessTitle:"Understand the brand.<br>Build the next chapter.",readinessIntro:"Begin with a paid brand and website assessment and China research. Agree what to keep, adapt and create, then choose the design and development work you need. We define the scope together at each stage.",readinessCta:"Start with an assessment",step1Title:"Understand",step1Text:"Audit the brand and existing website, identify communication gaps, research Chinese competitors and category websites, and understand what information customers expect.",step2Title:"Adapt",step2Text:"Define structure, information hierarchy, messaging, calls to action, trust signals and product presentation, keeping Danish identity at the core.",step3Title:"Design",step3Text:"Redesign agreed pages, adapt the visual language, add page content where needed and prepare a Chinese-facing landing-page concept.",step4Title:"Implement",step4Text:"Develop the agreed designs, make them work across screen sizes, integrate the changes and check the experience before launch.",
    workEyebrow:'THE SHMEL CREATIVE PORTFOLIO',workTitle:'Good ideas.<br>Made visible.',workIntro:"Selected work from Shmel Agency’s original portfolio shows our approach to brands, content and digital experiences. China adaptation brings those creative capabilities together with research, strategy and the customer journey.",portfolioDownload:'View the full portfolio (PDF)',filterAll:'All work',filterBrand:'Brand & packaging',filterDigital:'Digital & social',filterCampaign:'Campaigns & spaces',portfolioNote:'These examples demonstrate creative and design capabilities; they do not indicate that these brands have entered China through this platform.',
    quote:"“Strong products. A distinctive Danish identity.<br>A story shaped for Chinese audiences.”",togetherText:"Imagine a Danish furniture brand. Thoughtful design, craftsmanship and heritage are strengths to preserve. We would review how the website explains materials, product details and the brand story, and how customers build trust and take the next step. Best of Denmark contributes market and cultural insight; Shmel turns the research into information hierarchy, product storytelling, visual direction and a homepage or product-page concept—from discovering the brand to understanding, trusting and making contact.",teamNote:'Founded in 2026, Shmel is an early-stage creative marketing agency with a small core team and flexible, project-based collaborators.',
    connectEyebrow:'LET’S CREATE WHAT’S NEXT',connectTitle:'The next story starts<br>with a conversation.',connectText:"Whether you are a Danish brand exploring China or a Chinese partner interested in Danish companies, start with your goals and existing website. Together, we can define the right next step.",connectCta:'Create a partnership brief',proposalDownload:'Read the partnership proposal (English PDF)',connectNote:'Download your brief and share it with the team. This website does not submit or collect your information.',footer:'Danish inspiration. Chinese possibilities.',backTop:'Back to top ↑',
    briefTitle:'Your partnership brief',briefIntro:'Create a brief to download and share. Your details stay in your browser.',formName:'Name / company',formEmail:'Contact email (optional)',formInterest:'Area of interest',interest1:'Brand visibility & business partnerships',interest2:"Brand assessment & China adaptation",interest3:"Website design, development & content",formMessage:"Your goals, existing website and what you would like to explore",formDownload:'Download your brief ↓',briefSuccess:'Your brief has been downloaded. Share it with your partnership contact.'
  }
};
Object.assign(translations.en, {
  "service1Tag": "KEEP / BRAND FOUNDATIONS",
  "service2Tag": "ADAPT / COMMUNICATION",
  "service3Tag": "CREATE / CONTENT & DIGITAL",
  "guideTitle": "China Brand Adaptation Guide",
  "guideText": "A starting deliverable could be a 10–20-page guide covering positioning, key messages, visual direction, communication examples, website recommendations and social/content direction. Contents and length depend on the agreed scope.",
  "showcaseFlow": "Original website → 3–5 specific findings → Chinese customer journey → Redesign concept",
  "showcaseText": "For an adaptation showcase, we would start with the existing website, explain specific observations about communication and product presentation, then show a homepage or product-page concept shaped around the Chinese customer journey. Proposed designs would be clearly labeled as concepts by Shmel."
});
const projects = [
  {id:'dannis',category:'campaign',title:['Danni’s Bar','Danni’s Bar'],tag:['品牌战略 · 空间设计','BRAND STRATEGY · INTERIOR DESIGN'],description:['围绕让年轻与年长客人都感到自在的理念，Shmel 从零参与酒吧概念开发。作品结合市场研究、竞品分析、品牌战略、视觉识别、室内设计与社交媒体方向，将复古元素和本地情怀融入现代设计。','Developed around a place where younger and older generations could feel at home together. Shmel combined market research, competitor analysis, brand strategy, visual identity, interior design, social media direction and marketing ideas, blending vintage iconography and local nostalgia with modern design.']},
  {id:'luxury',category:'brand',title:['奢华品牌包装','Luxury packaging'],tag:['包装 · 视觉表达','PACKAGING · VISUAL DIRECTION'],description:['选自作品集的奢华品牌包装设计，展示包装视觉、排版与产品呈现的创意探索。','Luxury packaging examples from the portfolio, exploring visual identity, typography and product presentation.']},
  {id:'digital',category:'digital',title:['数字品牌体验','Digital brand experience'],tag:['网站概念 · 界面设计','WEBSITE CONCEPT · UI DESIGN'],description:['作品集中的网站设计模型，通过布局、视觉层级与品牌叙事探索数字体验。本案例为设计模型。','A website mock-up from the portfolio, exploring layout, visual hierarchy and brand storytelling in a digital experience. This example is a design concept.']},
  {id:'packaging',category:'brand',title:['品牌包装设计','Brand packaging'],tag:['品牌识别 · 产品包装','IDENTITY · PRODUCT PACKAGING'],description:['作品集中的品牌包装系列，展示品牌视觉如何延伸至产品、标签与包装形式。','A selection of brand packaging work showing how a visual identity can extend across products, labels and packaging formats.']},
  {id:'events',category:'campaign',title:['让活动走进城市','Events in the city'],tag:['活动推广 · 户外广告','EVENT PROMOTION · OUTDOOR DESIGN'],description:['活动广告设计示例，将视觉创意应用于宣传物料和户外媒介模型，形成一致的活动表达。','Event advertising examples applying creative direction across promotional materials and outdoor media mock-ups.']},
  {id:'social',category:'digital',title:['Am.cor.inc 社交内容','Am.cor.inc social content'],tag:['社交媒体 · 内容策略','SOCIAL MEDIA · CONTENT'],description:['从零建立 Instagram 形象，涵盖帖子、视频、Stories、文案与内容，并提供账号表现分析和社交媒体建议。','An Instagram presence built from scratch, including posts, videos, Stories, captions and content, alongside account performance analysis and social media recommendations.']},
  {id:'caat',category:'brand',title:['CAAT! 剧场品牌','CAAT! theatre identity'],tag:['吉祥物 · 标志设计','MASCOT · LOGO DESIGN'],description:['为 CAAT! 剧场工作室创作的吉祥物与标志，以鲜明角色形象传达品牌个性。','A mascot and logo for the CAAT! theatre studio, using an expressive character to communicate the brand’s personality.']},
  {id:'posters',category:'campaign',title:['海报的视觉语言','The language of posters'],tag:['创意概念 · 海报设计','CREATIVE CONCEPT · POSTER DESIGN'],description:['作品集中的海报设计，将排版、图像与色彩结合，为活动和创意项目建立视觉表达。','Poster examples combining typography, imagery and color to create visual expression for events and creative projects.']},
  {id:'logos',category:'brand',title:['小标志，大个性','Small marks. Big character.'],tag:['标志设计 · 视觉识别','LOGO DESIGN · VISUAL IDENTITY'],description:['选自作品集的标志设计探索，展示多种品牌视觉方向与识别风格。','A selection of logo explorations from the portfolio, showing a range of visual directions and identity styles.']}
];
Object.assign(translations.en, {
  waterEyebrow:'TWO CULTURES. ONE SHARED CURRENT.',
  waterTitle:'We go with your flow.<br>Then explore a little deeper.',
  waterIntro:'Follow the current as you scroll: a Chinese water dragon winds through the page while a Copenhagen-inspired Little Mermaid swims around its curves. Two cultures, connected by water.',
  waterAlt:'An underwater illustration of a Chinese water dragon meeting a bronze-toned Little Mermaid sitting on a rock.',
  dragonLabel:'CHINESE WATER DRAGON',mermaidLabel:'COPENHAGEN · THE LITTLE MERMAID',
  flowTitle:'We go with your flow',flowText:'Your goals. Your pace. We agree the scope together, then move through assessment, strategy, design and development as your brand needs.',
  diveTitle:'A deep dive into your company',diveText:'We dive into positioning, identity, tone of voice and key messages, then review your existing website to find where the story or customer journey loses clarity.',
  currentTitle:'Keeping up with the currents',currentText:'We research Chinese competitors, category websites and audience expectations, connecting shifts in culture, visual communication and digital experiences with a direction that still feels like your brand.'
});
const chinese = {};
document.querySelectorAll('[data-i18n]').forEach(el => {chinese[el.dataset.i18n] = el.innerHTML;});
chinese.briefSuccess = '您的简报已下载。请将其分享给您的合作联系人。';
document.querySelectorAll('[data-i18n-alt]').forEach(el => {chinese[el.dataset.i18nAlt] = el.alt;});
translations.zh = chinese;
let language = 'zh';
try {const saved = localStorage.getItem('best-of-denmark-language'); if(saved === 'en' || saved === 'zh') language = saved;} catch {}
let filter = 'all';
let activeProject = null;
const grid = document.getElementById('project-grid');
const projectDialog = document.getElementById('project-dialog');
const briefDialog = document.getElementById('brief-dialog');
const index = () => language === 'zh' ? 0 : 1;
function renderProjects() {
  grid.replaceChildren();
  projects.filter(p => filter === 'all' || p.category === filter).forEach(p => {
    const button = document.createElement('button'); button.className='project-card'; button.type='button';
    button.setAttribute('aria-label', (language === 'zh' ? '查看作品：' : 'View project: ') + p.title[index()]);
    button.innerHTML=`<div class="project-image"><img src="../Assets/portfolio/${p.id}.webp" alt="" loading="lazy" width="640" height="474"></div><div class="project-meta"><h3>${p.title[index()]}</h3><span aria-hidden="true">↗</span></div><p>${p.tag[index()]}</p>`;
    button.addEventListener('click', () => {activeProject=p; renderDetail(); openDialog(projectDialog);});
    grid.append(button);
  });
}
function renderDetail() {
  if(!activeProject) return;
  const p=activeProject;
  document.getElementById('detail-title').textContent=p.title[index()];
  document.getElementById('detail-category').textContent=p.tag[index()];
  document.getElementById('detail-description').textContent=p.description[index()];
  const img=document.getElementById('detail-image'); img.src=`../Assets/portfolio/${p.id}.webp`; img.alt=p.title[index()];
  projectDialog.setAttribute('aria-labelledby','detail-title');
}
function applyLanguage() {
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {el.alt=translations[language][el.dataset.i18nAlt];});
  document.querySelectorAll('[data-i18n]').forEach(el => {const value=translations[language][el.dataset.i18n]; if(value!==undefined) el.innerHTML=value;});
  document.getElementById('language').innerHTML=language==='zh'?'EN <span>⇄</span> 中文':'中文 <span>⇄</span> EN';
  document.getElementById('language').setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');
  document.querySelectorAll('.close-dialog').forEach(el=>el.setAttribute('aria-label',language==='zh'?'关闭':'Close'));
  document.querySelector('.filters').setAttribute('aria-label',language==='zh'?'作品分类':'Portfolio filters');
  document.querySelector('nav').setAttribute('aria-label',language==='zh'?'主导航':'Main navigation');
  document.title=language==='zh'?'Best of Denmark × Shmel | 丹麦之选':'Best of Denmark × Shmel | Danish inspiration. Chinese possibilities.';
  document.getElementById('brief-status').textContent='';
  renderProjects(); renderDetail();
}
document.getElementById('language').addEventListener('click',()=>{language=language==='zh'?'en':'zh';try{localStorage.setItem('best-of-denmark-language',language);}catch{} applyLanguage();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProjects();}));
function openDialog(dialog) {dialog.showModal();document.body.classList.add('modal-open');}
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();}});});
document.getElementById('open-brief').addEventListener('click',()=>{briefDialog.setAttribute('aria-label',translations[language].briefTitle);openDialog(briefDialog);});
document.getElementById('brief-form').addEventListener('submit',event=>{
  event.preventDefault(); const data=new FormData(event.target);
  const interest=event.target.elements.interest.selectedOptions[0].textContent;
  const text=['BEST OF DENMARK × SHMEL','合作需求 / Partnership brief','',`${translations[language].formName}: ${data.get('company')}`,`${translations[language].formEmail}: ${data.get('email')||'—'}`,`${translations[language].formInterest}: ${interest}`,'',translations[language].formMessage,data.get('message')].join('\n');
  const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='Best-of-Denmark-partnership-brief.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  document.getElementById('brief-status').textContent=translations[language].briefSuccess;
});
applyLanguage();

// A continuous body winds behind panels and crosses in front at their edges.
const journey = document.querySelector('.wave-background');
const swimmer = document.getElementById('swimming-mermaid');
const swimRoute = document.getElementById('page-swim-route');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let swimFrame=0;
const svgNS='http://www.w3.org/2000/svg';
const bodyTexture=new Image();
const bubbleField=document.querySelector('.bubble-field');
for(let i=0;i<28;i++){
  const bubble=document.createElement('span');bubble.className='water-bubble';
  bubble.style.setProperty('--bubble-x',`${3+(i*37)%94}%`);
  bubble.style.setProperty('--bubble-y',`${(i*17)%100}%`);
  bubble.style.setProperty('--bubble-size',`${9+(i*11)%33}px`);
  bubble.style.setProperty('--bubble-duration',`${13+(i*7)%15}s`);
  bubble.style.setProperty('--bubble-delay',`${-((i*3)%25)}s`);
  bubbleField.append(bubble);
}
bodyTexture.dragonTextureBounds={x:0,y:176,width:2172,height:380};
bodyTexture.src='../Assets/dragon-body-strip.png';
bodyTexture.onload=()=>layoutDragon();
function anatomyImage(file,x,y,width,height){
  const image=document.createElementNS(svgNS,'image');image.setAttribute('href',`../Assets/${file}`);
  for(const [key,value] of Object.entries({x,y,width,height}))image.setAttribute(key,value);
  return image;
}
function routePose(distance){
  const length=swimRoute.getTotalLength(),p=swimRoute.getPointAtLength(distance);
  const a=swimRoute.getPointAtLength(Math.max(0,distance-4)),b=swimRoute.getPointAtLength(Math.min(length,distance+4));
  const norm=Math.hypot(b.x-a.x,b.y-a.y)||1;
  return {x:p.x,y:p.y,tx:(b.x-a.x)/norm,ty:(b.y-a.y)/norm,angle:Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI};
}
function attachLeg(parts,distance,side,width,scale,id){
  const p=routePose(distance),g=document.createElementNS(svgNS,'g');g.id=id;
  const x=p.x-p.ty*side*width*.3,y=p.y+p.tx*side*width*.3;
  g.setAttribute('transform',`translate(${x} ${y}) rotate(${p.angle-70}) scale(${scale} ${side*scale})`);
  g.append(anatomyImage('dragon-leg.png',-17,-15,145,150));parts.append(g);
  return {y:p.y-120*scale,height:260*scale};
}
function layoutDragon(){
  const w=journey.clientWidth,h=journey.offsetHeight,mobile=w<700;
  const width=mobile?60:140,scale=mobile?.53:1;
  const left=mobile?32:Math.max(90,(w-1240)/2+40),right=w-left;
  const headX=mobile?w-92:right-35;
  document.querySelectorAll('.page-dragon svg').forEach(svg=>svg.setAttribute('viewBox',`0 0 ${w} ${h}`));
  let x=headX,y=28,route=`M ${x} ${y}`,edge=right;
  const frontRanges=[],sections=[...journey.querySelectorAll(':scope > .section')];
  const stagePoints=[];
  sections.forEach((section,i)=>{
    const bottom=section.getBoundingClientRect().bottom-journey.getBoundingClientRect().top;
    const bend=edge===right?-1:1;
    route+=` C ${x+bend*55} ${y+100}, ${edge-bend*22} ${bottom-115}, ${edge} ${bottom+25}`;
    x=edge;y=bottom+25;
    if([0,3,5].includes(i)){
      const nextX=edge===right?left:right,nextY=bottom+(mobile?125:210);
      route+=` C ${x+bend*120} ${y+135}, ${nextX-bend*120} ${nextY-135}, ${nextX} ${nextY}`;
      if(i!==3)frontRanges.push({y:bottom-45,height:mobile?225:335});
      stagePoints.push({y:bottom+75});x=nextX;y=nextY;edge=nextX;
    }
  });
  route+=` C ${x} ${y+40}, ${x+(edge===right?-1:1)*65} ${y+50}, ${x+(edge===right?-1:1)*100} ${y+40}`;
  swimRoute.setAttribute('d',route);
  const parts=document.getElementById('dragon-parts');parts.replaceChildren();
  const head=document.createElementNS(svgNS,'g');head.id='dragon-head';
  const hw=mobile?185:330,hh=hw*1186/1325;
  head.append(anatomyImage('dragon-head-gentle.png',headX-hw*.49,28-hh,hw,hh));
  document.getElementById('dragon-head-parts').replaceChildren(head);
  const length=swimRoute.getTotalLength();
  for(const [f,side,id] of [[.038,-1,'dragon-front-leg-left'],[.045,1,'dragon-front-leg-right'],[.85,-1,'dragon-rear-leg-left'],[.86,1,'dragon-rear-leg-right']]){
    frontRanges.push(attachLeg(parts,length*f,side,width,scale,id));
  }
  const tailPoint=routePose(length-85*scale),tail=document.createElementNS(svgNS,'g');tail.id='dragon-tail';
  tail.setAttribute('transform',`translate(${tailPoint.x} ${tailPoint.y}) rotate(${tailPoint.angle}) scale(${scale} ${-scale})`);
  tail.append(anatomyImage('dragon-tail.png',-15,-43,310,155));parts.append(tail);
  if(bodyTexture.complete && bodyTexture.naturalWidth && window.renderDragonBody){
    window.renderDragonBody(document.getElementById('dragon-back-body'),document.getElementById('dragon-front-body'),swimRoute,bodyTexture,width,[],w,h);
    journey.dataset.dragonReady='true';
  }
  requestSwimUpdate();
}
function updateSwimmer(){
  swimFrame=0;const bounds=journey.getBoundingClientRect();
  const progress=reducedMotion.matches?.48:Math.max(0,Math.min(1,(window.innerHeight*.55-bounds.top)/bounds.height));
  const length=swimRoute.getTotalLength(),point=swimRoute.getPointAtLength(length*progress),next=swimRoute.getPointAtLength(Math.min(length,length*progress+5));
  const norm=Math.hypot(next.x-point.x,next.y-point.y)||1,offset=window.innerWidth<700?18:30;
  const swimX=Math.max(45,Math.min(journey.clientWidth-45,point.x-(next.y-point.y)/norm*offset));
  swimmer.style.left=`${swimX}px`;swimmer.style.top=`${point.y+(next.x-point.x)/norm*offset}px`;
  swimmer.style.transform='translate(-50%,-50%)';swimmer.querySelector('img').style.transform=next.x>point.x?'scaleX(-1)':'scaleX(1)';swimmer.dataset.progress=progress.toFixed(3);
}
function requestSwimUpdate(){if(!swimFrame)swimFrame=requestAnimationFrame(updateSwimmer);}
window.addEventListener('scroll',requestSwimUpdate,{passive:true});window.addEventListener('resize',layoutDragon);reducedMotion.addEventListener('change',requestSwimUpdate);
new ResizeObserver(layoutDragon).observe(journey);
layoutDragon();

