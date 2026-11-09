const DIMS={
  E1:{name:'喜',en:'Joy',group:'七情',desc:'你很在意一件事能不能让自己开心，也很会发现生活里的小美好。'},E2:{name:'怒',en:'Rage',group:'七情',desc:'遇到不公平或不合理的事，你很难装作没看见，往往会想办法改变。'},E3:{name:'忧',en:'Anxiety',group:'七情',desc:'你喜欢提前想一想可能出什么问题，准备好了才会更安心。'},E4:{name:'思',en:'Reflection',group:'七情',desc:'碰到事情，你通常想先弄明白，再决定该怎么做。'},E5:{name:'悲',en:'Compassion',group:'七情',desc:'你很容易注意到别人的难处，也愿意照顾对方的感受。'},E6:{name:'恐',en:'Fear',group:'七情',desc:'你在意安全和稳定，不喜欢事情突然失去控制。'},E7:{name:'惊',en:'Wonder',group:'七情',desc:'新东西很容易吸引你，变化和未知也会让你觉得有意思。'},
  D1:{name:'财富欲',en:'Wealth',group:'六欲',desc:'你看重实际收获，希望花出去的时间和精力最后能有结果。'},D2:{name:'权力欲',en:'Power',group:'六欲',desc:'你希望事情能按计划推进，关键时候也愿意站出来做决定。'},D3:{name:'爱欲',en:'Love',group:'六欲',desc:'你很看重关系，也希望重要的人真的懂你。'},D4:{name:'美欲',en:'Beauty',group:'六欲',desc:'你很看重品质和美感，也喜欢用自己的方式表达。'},D5:{name:'自由欲',en:'Freedom',group:'六欲',desc:'你希望自己有选择权，不喜欢被别人安排或定义。'},D6:{name:'意义欲',en:'Meaning',group:'六欲',desc:'你希望做的事不只是完成任务，还要真的值得。'}
};
const Q_ARCHIVE=[
 ['朋友突然邀请你加入一个全新的计划，但目前一切都还不确定，你第一反应是：',[['想了解更多细节，再决定是否参与',{E3:3}],['觉得未知本身也很有吸引力，可以先试试看',{E7:3,E1:2}],['会思考这件事未来可能带来的变化',{D6:3}],['先考虑它是否适合自己的生活节奏',{D5:3,E6:2}]]],
 ['当你完成一个长期目标后，你最容易产生的感觉是：',[['终于证明自己可以做到',{E2:3}],['接下来还想探索新的可能',{E7:3}],['希望这件事能够产生更大的价值',{D6:3}],['想好好享受这一刻',{E1:3}]]],
 ['如果有一天你拥有更多时间，你最可能：',[['学习一直感兴趣但没机会接触的东西',{E4:3}],['陪伴重要的人',{D3:3}],['做一些以前不敢尝试的事情',{D5:3,E7:2}],['建立一个更稳定的生活方式',{E6:3}]]],
 ['面对别人提出与你不同的观点，你通常：',[['会想弄清楚对方为什么这样想',{E5:3}],['会坚持自己的判断',{E2:3}],['会观察这个观点有没有实际价值',{D1:3}],['会反思是不是自己的表达方式需要调整',{E4:3}]]],
 ['如果你突然获得一笔额外收入，你更倾向：',[['留下一部分，为未来增加保障',{D1:3,E6:2}],['投入到自己长期想做的事情',{D6:3,D1:2}],['改善生活品质',{D4:3,E1:2}],['与身边重要的人分享',{D3:3}]]],
 ['别人评价你的时候，你更在意：',[['他是否真正理解你',{D3:3}],['他是否认可你的能力',{E2:3}],['他是否看到了你的努力',{E3:3}],['他是否感受到你的善意',{E5:3}]]],
 ['面对生活中的变化，你更像：',[['提前准备各种可能',{E3:3}],['期待新的体验',{E7:3}],['先观察规律，再寻找机会',{E4:3}],['希望变化能够带来成长',{D6:3}]]],
 ['你看到一个很有争议的事情时：',[['想知道事情背后的原因',{E4:3}],['第一时间产生情绪反应',{E2:3}],['会考虑怎样解决问题',{D2:3}],['会关注受到影响的人',{E5:3}]]],
 ['如果别人突然打乱你的计划：',[['会有些不舒服，因为节奏被改变',{D5:3}],['觉得也许会出现新的机会',{E7:3}],['会重新安排，让事情继续推进',{E3:3}],['会先理解对方为什么这样做',{E5:3}]]],
 ['你认为人生最重要的是：',[['拥有选择自己生活的能力',{D5:3}],['不断成为更好的自己',{D6:3}],['建立属于自己的成果',{D1:3}],['和重要的人保持连接',{D3:3}]]],
 ['当你看到别人取得成功时：',[['会研究对方的方法',{D1:3}],['会激发自己的动力',{E2:3}],['会思考成功背后的规律',{E4:3}],['会真心替对方开心',{E5:3}]]],
 ['你更容易被什么吸引？',[['一个未知的新领域',{E7:3}],['一个值得深入研究的问题',{E4:3}],['一个精致美好的事物',{D4:3}],['一个能够影响很多人的机会',{D2:3}]]],
 ['如果朋友遇到困难，你通常：',[['陪伴对方，让他感觉被支持',{D3:3}],['帮他分析解决方法',{E4:3}],['鼓励他重新振作',{E1:3}],['提供实际资源帮助',{D1:3}]]],
 ['你最难接受的是：',[['被别人限制选择',{D5:3}],['努力没有结果',{E2:3}],['重要的人不理解自己',{D3:3}],['生活失去稳定感',{E6:3}]]],
 ['当你压力很大时，你更可能：',[['独处整理思绪',{E4:3}],['找人交流释放情绪',{D3:3}],['转移注意寻找快乐',{E1:3}],['制定计划重新控制局面',{D2:3}]]],
 ['如果重新选择一次人生方向：',[['希望体验更多不同可能',{E7:3,D5:2}],['希望拥有更大的影响力',{D2:3}],['希望做真正有价值的事情',{D6:3}],['希望拥有更安心的生活',{E6:3}]]],
 ['你购买一件东西时，更关注：',[['它是否真正实用并值得投入',{D1:3}],['它是否能让自己拥有更多选择',{D5:3}],['它是否代表自己的审美',{D4:3}],['它是否带来快乐体验',{E1:3}]]],
 ['别人需要你做决定时：',[['会分析各种可能结果',{E3:3}],['会快速做出选择',{D2:3}],['会考虑大家的感受',{E5:3}],['会选择最符合长期价值的方案',{D6:3}]]],
 ['你更希望别人记住你的：',[['能力',{D2:3}],['品味',{D4:3}],['温度',{D3:3}],['成就',{D1:3}]]],
 ['旅行时，你更喜欢：',[['提前规划路线',{E3:3}],['随机发现惊喜',{E7:3}],['深入了解当地文化',{D4:3}],['享受舒适环境',{E1:3}]]],
 ['如果有人误解你：',[['希望通过沟通让对方理解自己',{D3:3}],['觉得没必要证明',{D5:3}],['会反思自己哪里可以调整',{E4:3}],['会觉得有些委屈',{E5:3}]]],
 ['你做重要选择时，更依赖：',[['过去经验',{E6:3,E3:2}],['内心感觉',{E1:3}],['数据分析',{E4:3}],['长远价值',{D6:3}]]],
 ['如果拥有更多影响力，你希望：',[['改变一些不合理的事情',{E2:3}],['创造更好的作品',{D4:3}],['帮助更多人',{E5:3}],['获得更多认可',{D2:3}]]],
 ['你觉得自己最大的特点：',[['想得比别人深',{E4:3}],['感受比别人多',{D4:3}],['行动力比别人强',{E2:3}],['对未知保持兴趣',{E7:3}]]],
 ['人生低谷时期，你最依靠：',[['对未来的规划',{E6:3}],['内心坚持的价值',{D6:3}],['身边重要的人',{D3:3}],['改变现状的行动',{D2:3}]]],
 ['如果用一句话描述你追求的人生：',[['活成自己喜欢的样子',{D5:3,D4:2}],['创造一些值得留下的东西',{D6:3,D1:2}],['拥有稳定而安心的生活',{E6:3}],['体验更多可能',{E7:3}]]]
];
const JUDGMENT_WORDS={
 E1:['明朗','从快乐、体验和生命热度中获得行动能量'],E2:['破局','对阻碍与不公反应敏锐，并倾向用行动打破僵局'],E3:['筹谋','习惯预见变化，通过准备与规划建立安全感'],E4:['洞察','先理解规律与本质，再形成自己的判断'],E5:['共情','能敏锐感知他人的处境，并以善意回应世界'],E6:['守序','尊重风险与边界，重视稳定、可靠和可控'],E7:['探索','容易被未知与变化点燃，愿意走向新的可能'],
 D1:['经营者','最终把精力投向资源积累、成果创造与长期价值'],D2:['掌舵者','最终追求影响局面、推动决策和承担领导责任'],D3:['联结者','最终重视亲密关系、真诚理解与深度连接'],D4:['造美者','最终希望创造审美、质感与独特表达'],D5:['自由者','最终守护自主选择、个人边界与生活自由'],D6:['追光者','最终寻找成长、使命以及值得投入的意义']
};
const PROFILE_NAMES={
 E1:'逐光',E2:'破局',E3:'远虑',E4:'洞察',E5:'共情',E6:'守界',E7:'探新',
 D1:'经营者',D2:'掌舵者',D3:'联结者',D4:'造美者',D5:'自由者',D6:'追光者'
};
const PROFILE_KEYWORDS={
 E1:['体验','热情'],E2:['行动','边界'],E3:['准备','周全'],E4:['理解','深思'],E5:['善意','体察'],E6:['稳定','秩序'],E7:['好奇','变化'],
 D1:['成果','积累'],D2:['影响','担当'],D3:['亲密','理解'],D4:['审美','表达'],D5:['自主','选择'],D6:['成长','价值']
};
const GUIDES={
 E1:{focus:'别让即时愉悦替代真正重要的选择',question:'这件事除了让我开心，还会留下什么？',action:'为一个重要目标安排 25 分钟不被打扰的投入。'},
 E2:{focus:'先分辨愤怒在保护什么，再决定如何行动',question:'我真正不能接受的是结果、规则，还是边界被侵犯？',action:'把不满写成一个事实、一项诉求和一个可执行动作。'},
 E3:{focus:'让准备服务于行动，而不是延迟行动',question:'我还缺少关键信息，还是只是在等待完全确定？',action:'为当前担忧设一个最小预案，然后完成下一步。'},
 E4:{focus:'给思考设置出口，避免停留在理解之中',question:'我已经想明白到足以做出哪一个决定？',action:'把一个反复思考的问题压缩成结论和下一步。'},
 E5:{focus:'理解别人时，也把自己的需要放进关系里',question:'如果不只照顾对方，我此刻还需要什么？',action:'在一次沟通中明确表达一个真实需要。'},
 E6:{focus:'尊重风险，同时区分危险与不熟悉',question:'这件事真的不可控，还是只是超出我的惯常范围？',action:'选择一件风险可控的新尝试，并提前设好退出条件。'},
 E7:{focus:'保留探索力，也为新鲜感建立筛选标准',question:'这个新可能值得我持续投入三个月吗？',action:'从多个兴趣中只选一个，完成一次有结果的小实验。'},
 D1:{focus:'让资源积累对应明确用途，而不只是数字增长',question:'我想获得的资源，最终要支持怎样的生活？',action:'为时间或金钱设定一个具体用途和停止线。'},
 D2:{focus:'把影响力用于推动结果，而不是包办一切',question:'这件事必须由我控制，还是只需要我推动？',action:'明确一项自己负责的决定，同时授权他人一项决定。'},
 D3:{focus:'追求连接时，保留清晰的自我边界',question:'我是因为真心愿意，还是害怕关系因此改变？',action:'对重要的人说出一个期待，也说出一条边界。'},
 D4:{focus:'让审美成为表达工具，而不是开始行动的门槛',question:'现在需要做到更美，还是先做到完整？',action:'先交付一个可用版本，再安排一次集中优化。'},
 D5:{focus:'自由不仅是摆脱限制，也是主动承担选择',question:'我想离开什么，又愿意为选择承担什么？',action:'主动删去一个低价值承诺，为重要事项留出固定时间。'},
 D6:{focus:'把宏大意义落到可完成的小结果上',question:'今天哪一步最能证明这件事值得继续？',action:'把长期方向拆成一个本周可以完成并验证的成果。'}
};
const COMBINATION={
 E1:{mode:'从当下体验与积极感受出发',gift:'让选择保有热情与生命力',risk:'可能为了即时感受忽略长期代价'},
 E2:{mode:'迅速识别阻碍，并产生改变现状的冲动',gift:'在关键时刻敢于推动变化',risk:'可能在情绪最强时过早作出决定'},
 E3:{mode:'先预判变化并准备应对方案',gift:'让行动更周全、更有安全余量',risk:'可能因持续预演风险而延迟开始'},
 E4:{mode:'先理解规律，再形成自己的判断',gift:'让决定建立在更深的理解上',risk:'可能停留在分析中，错过行动窗口'},
 E5:{mode:'先感知他人的处境和关系变化',gift:'让决定兼顾影响与人的感受',risk:'可能把别人的需要放在自己之前'},
 E6:{mode:'优先确认边界、风险和可控程度',gift:'让选择更稳定，也更少留下隐患',risk:'可能把不熟悉误判为不可接受的风险'},
 E7:{mode:'被未知、变化与新的可能吸引',gift:'让你更容易发现新的路径',risk:'可能不断开启新方向，却缺少持续投入'},
 D1:{aim:'把选择导向资源积累与实际成果',gift:'能把投入转化为看得见的价值',risk:'可能用收益衡量所有值得投入的事'},
 D2:{aim:'把选择导向影响局面与掌握主动',gift:'能承担决定并推动事情向前',risk:'可能在不需要控制时也难以放手'},
 D3:{aim:'把选择导向连接、亲密与相互理解',gift:'能建立有温度且深入的关系',risk:'可能为了维持连接而让渡自身边界'},
 D4:{aim:'把选择导向质感、审美与独特表达',gift:'能为普通事物建立更高的表达标准',risk:'可能因为不够完美而推迟完成'},
 D5:{aim:'把选择导向自主空间与更多可能',gift:'能守住边界并选择自己的生活方式',risk:'可能把必要承诺也感受为限制'},
 D6:{aim:'把选择导向成长、价值与长期意义',gift:'能为长期投入找到持续理由',risk:'可能因期待足够有意义而轻视微小成果'}
};
const PLAIN_EFFECTS={
 E1:{start:'你会先关注这件事能不能带来快乐和好体验',impact:'这让你比较容易发现生活中的亮点',watch:'但也要留意，别为了眼前开心忽略长期结果'},
 E2:{start:'你会很快察觉哪里不合理、哪里需要改变',impact:'这让你在关键时刻敢于站出来推动事情',watch:'但情绪上来时，容易说得太快或决定得太急'},
 E3:{start:'你会先想到可能出错的地方，并提前准备',impact:'这让你做事更周全，也更少手忙脚乱',watch:'但如果一直等到完全放心，可能迟迟无法开始'},
 E4:{start:'你会先把事情想明白，再决定怎么做',impact:'这让你的判断通常有逻辑、有依据',watch:'但想得太久时，可能错过最合适的行动时间'},
 E5:{start:'你会先感受到别人的难处和情绪',impact:'这让你很会体谅人，也愿意在别人需要时提供帮助',watch:'但你可能把别人的感受看得太重，忘了自己也有需要'},
 E6:{start:'你会先确认风险、边界和事情是否可控',impact:'这让你的选择更稳，也不容易留下明显隐患',watch:'但有时只是“不熟悉”，不一定真的“危险”'},
 E7:{start:'你会先看到新的可能，并想去试一试',impact:'这让你容易打开新局面，找到别人没想到的路径',watch:'但兴趣变化太快时，可能开始很多、完成很少'},
 D1:{start:'真正做决定时，你很看重投入是否值得、结果是否实际',impact:'这会推动你积累资源，并把努力变成看得见的成果',watch:'但不是所有重要的事，都能立刻算出回报'},
 D2:{start:'真正做决定时，你希望自己能影响结果、掌握主动',impact:'这让你愿意负责，也能推动犹豫不决的事情',watch:'但并不是每件事都需要由你控制'},
 D3:{start:'真正做决定时，你很在意关系、连接和彼此理解',impact:'这会让你认真经营重要的人，并愿意投入感情',watch:'但为了留住关系而不断退让，会让你越来越累'},
 D4:{start:'真正做决定时，你会在意品质、审美和表达是否到位',impact:'这让你能把普通的东西做得更有质感',watch:'但如果总觉得还不够好，完成就会变得很困难'},
 D5:{start:'真正做决定时，你很在意有没有选择权和自主空间',impact:'这会帮助你守住边界，活得更像自己',watch:'但必要的承诺不一定是在限制你'},
 D6:{start:'真正做决定时，你会问这件事是否值得、是否有长远意义',impact:'这让你愿意为真正认同的方向长期投入',watch:'但日常的小成果，同样是意义的一部分'}
};
function overallJudgment(emotion,desire){let r=calculate(),emotions=r.sorted.filter(key=>DIMS[key].group==='七情'),desires=r.sorted.filter(key=>DIMS[key].group==='六欲'),secondEmotion=emotions[1],secondDesire=desires[1],secondary=[];if(r.scores[emotion]-r.scores[secondEmotion]<=12)secondary.push(`「${DIMS[secondEmotion].name}」也很明显`);if(r.scores[desire]-r.scores[secondDesire]<=12)secondary.push(`「${DIMS[secondDesire].name}」也会影响你的选择`);let extra=secondary.length?`另外，${secondary.join('，')}。`:'';return`遇到事情时，「${DIMS[emotion].name}」通常是你的第一反应。真正做选择时，你更在意「${DIMS[desire].name}」。${extra}`}
const app=document.querySelector('#app');let state={step:-1,answers:[],orders:[]};
const PROGRESS_KEY='seven-desires-progress-v4';
const ACCESS_KEY='seven-desires-access-v1';
const RESULT_KEY='seven-desires-last-result-v3';
function saveProgress(){try{localStorage.setItem(PROGRESS_KEY,JSON.stringify({step:state.step,answers:state.answers,orders:state.orders}))}catch(error){/* 无痕模式或存储受限时仍可正常答题 */}}
function loadProgress(){try{let saved=JSON.parse(localStorage.getItem(PROGRESS_KEY));if(saved&&Number.isInteger(saved.step)&&saved.step>=0&&saved.step<Q.length&&Array.isArray(saved.answers)&&Array.isArray(saved.orders)&&saved.orders.length===Q.length)return saved}catch(error){}return null}
function clearProgress(){try{localStorage.removeItem(PROGRESS_KEY)}catch(error){}}
function saveLastResult(){try{localStorage.setItem(RESULT_KEY,JSON.stringify({answers:state.answers,orders:state.orders,completedAt:new Date().toISOString()}))}catch(error){/* 存储受限时不影响结果生成 */}}
function loadLastResult(){try{let saved=JSON.parse(localStorage.getItem(RESULT_KEY));if(saved&&Array.isArray(saved.answers)&&saved.answers.length===Q.length&&saved.answers.every(Number.isInteger)&&Array.isArray(saved.orders)&&saved.orders.length===Q.length)return{step:Q.length-1,answers:saved.answers,orders:saved.orders,completedAt:saved.completedAt}}catch(error){}return null}
function shuffleIndexes(length){let indexes=Array.from({length},(_,i)=>i);for(let i=indexes.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[indexes[i],indexes[j]]=[indexes[j],indexes[i]]}return indexes}
function createOptionOrders(){return Q.map(([,options])=>shuffleIndexes(options.length))}
const ACCESS_CODES=new Set([
 '7KQ9-M4XZ','P6R2-W8HC','N4V7-3JQK','8XDM-5R2P','C9W4-K7YN',
 'M3Q8-V6TR','H7P5-X9KC','R2ZN-8W4M','K6T9-Q3VX','W4HC-7P2N',
 'X8R3-M9QF','V5K7-C2WP','Q9N4-H6TX','T3XM-8K5R','P7C2-V9QW',
 'Z4R8-N3KH','M9W5-X7CP','K2Q6-T8VN','H8V3-R5XM','C7P9-W4QK'
]);
function validAccessCode(value){return ACCESS_CODES.has(value.trim().toUpperCase())}
function hasAccess(){try{return localStorage.getItem(ACCESS_KEY)==='yes'}catch(error){return false}}
function beginTest(){state={step:0,answers:[],orders:createOptionOrders()};document.querySelector('#restartTop').hidden=true;saveProgress();quiz();window.scrollTo(0,0)}
function redeem(force=false){if(!force&&hasAccess()){beginTest();return}document.querySelector('#restartTop').hidden=true;app.innerHTML=`<section class="redeem"><div class="redeem-card"><div class="eyebrow">七情六欲分布测试</div><h1>输入兑换码</h1><p>输入购买后获得的兑换码，验证成功即可开始测试。</p><label for="accessCode">兑换码</label><input id="accessCode" type="text" inputmode="text" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX"><div class="redeem-error" id="redeemError" aria-live="polite"></div><button class="primary" id="redeemSubmit">验证并开始测试</button></div></section>`;let input=document.querySelector('#accessCode'),submit=document.querySelector('#redeemSubmit'),error=document.querySelector('#redeemError');function verify(){let value=input.value.trim().toUpperCase();input.value=value;if(!validAccessCode(value)){error.textContent='兑换码不正确，请检查后重新输入。';input.classList.add('invalid');return}try{localStorage.setItem(ACCESS_KEY,'yes')}catch(storageError){}beginTest()}submit.onclick=verify;input.oninput=()=>{input.classList.remove('invalid');error.textContent=''};input.onkeydown=event=>{if(event.key==='Enter')verify()};setTimeout(()=>input.focus(),0)}
function home(){let saved=loadProgress();document.querySelector('#restartTop').hidden=true;app.innerHTML=`<section class="hero"><div><div class="eyebrow">七情六欲 · 13 维分布</div><h1>看见你的<br><em>情与欲</em></h1><p class="lead">通过 26 个人生情境，呈现七情与六欲在你本次选择中的相对分布。没有标准答案，也不定义你是谁。</p><div class="hero-actions"><button class="primary" id="start">${saved?'重新开始':'开始测试'}</button>${saved?`<button class="secondary" id="continue">继续上次测试 · ${saved.step+1}/${Q.length}</button>`:''}</div><div class="meta-row"><span><b>26</b> 道情境选择</span><span><b>13</b> 个分布维度</span><span><b>约 5</b> 分钟完成</span></div></div><div class="hero-art"><span class="index">七情 · 六欲</span><div class="orbit"><span class="orbit-label ol1">喜</span><span class="orbit-label ol2">欲</span><span class="orbit-label ol3">思</span><span class="orbit-label ol4">惧</span><div class="center-mark">观心</div></div><span class="note">DISTRIBUTION OF EMOTIONS & DESIRES</span></div></section>`;document.querySelector('#start').onclick=redeem;let continueButton=document.querySelector('#continue');if(continueButton)continueButton.onclick=()=>{state=saved;quiz()}}
function quiz(){let [title,opts]=Q[state.step],pct=(state.step+1)/Q.length*100,order=state.orders[state.step]||opts.map((_,i)=>i),moving=false;app.innerHTML=`<section class="quiz"><div class="progress-head"><span>探索进度</span><small>${String(state.step+1).padStart(2,'0')} / ${Q.length}</small></div><div class="progress" role="progressbar" aria-label="答题进度" aria-valuemin="1" aria-valuemax="${Q.length}" aria-valuenow="${state.step+1}"><i style="width:${pct}%"></i></div><div class="question"><div class="q-no">QUESTION ${String(state.step+1).padStart(2,'0')}</div><h2 id="questionTitle" tabindex="-1">${title}</h2><p class="question-hint">四种安排只能选一种。选你最可能接受的，也包括它的代价。</p><div class="options" role="group" aria-labelledby="questionTitle">${order.map((originalIndex,displayIndex)=>{let option=opts[originalIndex],selected=state.answers[state.step]===originalIndex;return`<button class="option${selected?' selected':''}" data-i="${originalIndex}" aria-pressed="${selected}"><span class="letter" aria-hidden="true">${'ABCD'[displayIndex]}</span><span>${option[0]}</span></button>`}).join('')}</div></div><div class="quiz-nav">${state.step?'<button class="back" id="back">← 返回上一题</button>':''}</div></section>`;document.querySelectorAll('.option').forEach(b=>b.onclick=()=>{if(moving)return;moving=true;state.answers[state.step]=+b.dataset.i;document.querySelectorAll('.option').forEach(option=>{option.disabled=true;option.classList.toggle('selected',option===b);option.setAttribute('aria-pressed',option===b)});saveProgress();setTimeout(()=>{if(state.step<Q.length-1){state.step++;saveProgress();quiz()}else loading()},320)});let back=document.querySelector('#back');if(back)back.onclick=()=>{state.step--;saveProgress();quiz()}}
function loading(){saveLastResult();clearProgress();app.innerHTML=`<section class="loading"><div><div class="loader-ring"></div><h2>正在生成七情六欲分布</h2><p>整理十三个维度 · 计算相对强度</p></div></section>`;setTimeout(result,900)}
function toTendencyScores(rates){
 let entries=Object.entries(rates),values=entries.map(([,value])=>value),mean=values.reduce((sum,value)=>sum+value,0)/values.length,variance=values.reduce((sum,value)=>sum+(value-mean)**2,0)/values.length,deviation=Math.sqrt(variance),rawRange=Math.max(...values)-Math.min(...values),scale=18+Math.min(4,rawRange*10);
 if(!deviation)return Object.fromEntries(entries.map(([key])=>[key,50]));
 // 原始差异越明确，展示对比越强；差异较小时适度收敛，避免制造虚假的极端结论。
 return Object.fromEntries(entries.map(([key,value])=>[key,Math.round(Math.max(10,Math.min(95,50+(value-mean)/deviation*scale)))]))
}
function calculateRates(questionIndexes){let raw=Object.fromEntries(Object.keys(DIMS).map(k=>[k,0])),max=Object.fromEntries(Object.keys(DIMS).map(k=>[k,0]));questionIndexes.forEach(qi=>{let options=Q[qi][1],chosen=options[state.answers[qi]][1];Object.entries(chosen).forEach(([key,value])=>raw[key]+=value);Object.keys(DIMS).forEach(key=>max[key]+=Math.max(...options.map(option=>option[1][key]||0)))});return Object.fromEntries(Object.keys(DIMS).map(key=>[key,max[key]?raw[key]/max[key]:0]))}
function pearsonCorrelation(a,b){let meanA=a.reduce((sum,value)=>sum+value,0)/a.length,meanB=b.reduce((sum,value)=>sum+value,0)/b.length,numerator=0,sumA=0,sumB=0;a.forEach((value,index)=>{let da=value-meanA,db=b[index]-meanB;numerator+=da*db;sumA+=da*da;sumB+=db*db});let denominator=Math.sqrt(sumA*sumB);return denominator?numerator/denominator:0}
function calculateConsistency(){let firstIndexes=Q.slice(0,13).map((_,index)=>index),secondIndexes=Q.slice(13).map((_,index)=>index+13),first=calculateRates(firstIndexes),second=calculateRates(secondIndexes),correlation=pearsonCorrelation(Object.values(first),Object.values(second)),consistency=correlation>=.55?'较高':correlation>=.25?'中等':'较低';return{correlation,consistency}}
function calculate(){let indexes=Q.map((_,index)=>index),rates=calculateRates(indexes),emotionRates=Object.fromEntries(Object.entries(rates).filter(([key])=>DIMS[key].group==='七情')),desireRates=Object.fromEntries(Object.entries(rates).filter(([key])=>DIMS[key].group==='六欲')),scores={...toTendencyScores(emotionRates),...toTendencyScores(desireRates)},radarScores=scores,sorted=Object.keys(scores).sort((a,b)=>scores[b]-scores[a]),stability=calculateConsistency();return{scores,radarScores,rates,sorted,...stability}}
function level(score){return score>=70?'主导区':score>=45?'平衡区':'低频区'}
function result(){let r=calculate(),emotion=r.sorted.filter(k=>DIMS[k].group==='七情'),desire=r.sorted.filter(k=>DIMS[k].group==='六欲'),topEmotion=emotion[0],topDesire=desire[0],low=r.sorted.at(-1),topThree=r.sorted.slice(0,3),profileName=`${PROFILE_NAMES[topEmotion]}${PROFILE_NAMES[topDesire]}`,keywords=[...PROFILE_KEYWORDS[topEmotion],...PROFILE_KEYWORDS[topDesire]];state.result=r;state.profileName=profileName;document.querySelector('#restartTop').hidden=false;app.innerHTML=`<section class="result"><div class="result-hero simple-result-hero"><div class="result-intro"><div class="archive-no">YOUR EMOTIONS & DESIRES</div><p class="profile-label">你的七情六欲画像</p><h1>${profileName}</h1><p class="profile-combination">${DIMS[topEmotion].name} × ${DIMS[topDesire].name}</p><div class="keyword-row">${keywords.map(word=>`<span>${word}</span>`).join('')}</div><p class="result-summary">${overallJudgment(topEmotion,topDesire)}</p><p class="result-topline">本次前三：${topThree.map(k=>`${DIMS[k].name} ${r.scores[k]}`).join(' · ')}</p></div><div class="drive-pills"><div class="drive-pill"><small>第一反应 · 七情主导</small><b>${DIMS[topEmotion].name}<em>${r.scores[topEmotion]}</em></b><span>${level(r.scores[topEmotion])}</span></div><div class="drive-pill"><small>最终选择 · 六欲主导</small><b>${DIMS[topDesire].name}<em>${r.scores[topDesire]}</em></b><span>${level(r.scores[topDesire])}</span></div></div></div><section class="section radar-section"><span class="section-kicker">01 · 整体分布</span><h2>十三维七情六欲图谱</h2><div class="radar-wrap"><canvas class="radar" id="radar" width="700" height="700"></canvas></div><p class="disclaimer">左侧是七情，右侧是六欲。先看整体形状，再看下方排名比较具体分数。</p></section>${structureSection(emotion,desire,r,topEmotion,topDesire)}${rankingSection(emotion,desire,r)}${impactSection(r,topEmotion,topDesire)}${observations(r,topEmotion,topDesire,low)}${lifeAdvice(r,topEmotion,topDesire,low)}${consistencyCard(r)}<div class="result-bottom-actions"><button class="primary" id="poster">保存海报</button><button class="secondary" id="restart">再测一次</button></div></section>`;drawRadar(document.querySelector('#radar'),r.radarScores,false,r.scores);document.querySelector('#poster').onclick=downloadPoster;document.querySelector('#restart').onclick=beginTest;window.scrollTo(0,0)}
function rankList(keys,r,kind){return`<div class="rank-card ${kind}"><div class="rank-title"><h3>${kind==='emotion'?'七情':'六欲'}</h3><span>点击维度查看说明</span></div><div class="rank-list">${keys.map((k,i)=>`<details class="rank-detail"><summary class="rank-item"><span class="rank-no">${String(i+1).padStart(2,'0')}</span><b>${DIMS[k].name}</b><div class="rank-bar"><i style="width:${r.radarScores[k]}%"></i></div><strong>${r.scores[k]}</strong><small>${level(r.scores[k])}</small></summary><p>${DIMS[k].desc}</p></details>`).join('')}</div></div>`}
function rankingSection(emotion,desire,r){return`<section class="section ranking-section"><span class="section-kicker">03 · 你的分布</span><h2>再看哪些情与欲更明显</h2><p class="section-lead">分数越高，代表它在这次答题中越容易影响你。点击名称可以查看简单说明。</p><div class="ranking-grid">${rankList(emotion,r,'emotion')}${rankList(desire,r,'desire')}</div><div class="scale-note"><span><i class="high"></i>70–100 主导区</span><span><i class="mid"></i>45–69 平衡区</span><span><i class="low"></i>0–44 低频区</span></div></section>`}
function impactSection(r,t,s){let e=PLAIN_EFFECTS[t],d=PLAIN_EFFECTS[s];return`<section class="section impact-section"><span class="section-kicker">04 · 这会怎样影响你</span><h2>${DIMS[t].name}负责你的第一反应，${DIMS[s].name}影响你的最终选择</h2><p class="impact-opening">${e.start}；而${d.start}。简单来说，你会先用“情”感受事情，再用“欲”决定精力要投向哪里。</p><div class="impact-grid"><article class="impact-card good"><span>它带给你的力量</span><p>${e.impact}；同时，${d.impact}。</p></article><article class="impact-card watch"><span>它可能带来的困扰</span><p>${e.watch}；同时也要记住，${d.watch}。</p></article></div><div class="plain-example"><span>放到现实中</span><p>遇到重要事情时，你可能一边受到「${DIMS[t].name}」带来的感受影响，一边又用「${DIMS[s].name}」衡量是否值得继续。真正适合你的决定，需要同时照顾感受和长期结果。</p></div></section>`}
function lifeAdvice(r,t,s,l){let e=GUIDES[t],d=GUIDES[s],low=GUIDES[l];return`<section class="section advice-simple"><span class="section-kicker">06 · 给你的人生建议</span><h2>不用改变自己，只要让选择多一步</h2><div class="simple-advice-list"><article><b>01</b><div><h3>做决定时，别只听第一反应</h3><p>先问自己：“${e.question}” 再问：“${d.question}” 两个答案都能接受，再往下走。</p></div></article><article><b>02</b><div><h3>把你的主导力量用在具体事情上</h3><p>${d.action} 不需要一次改变很多，先完成一个看得见的小结果。</p></div></article><article><b>03</b><div><h3>偶尔补上「${DIMS[l].name}」这个视角</h3><p>${low.action} 低分不是缺点，只是提醒你：遇到卡住的事情时，可以换一种平时不常用的方式。</p></div></article></div><div class="one-action"><span>今天可以做的一件事</span><p>${e.action}</p></div></section>`}
function spreadInfo(keys,r){let values=keys.map(k=>r.scores[k]),range=Math.max(...values)-Math.min(...values);return{range,label:range>=50?'起伏鲜明':range>=30?'层次分明':'相对均衡'}}
function structureSection(emotion,desire,r,t,s){let e=spreadInfo(emotion,r),d=spreadInfo(desire,r),top=r.sorted.slice(0,2),gap=r.scores[top[0]]-r.scores[top[1]],shape=r.scores[top[1]]>=70&&gap<=12?'双峰结构':gap>=20?'单峰结构':'渐层结构',copy=shape==='双峰结构'?`「${DIMS[top[0]].name}」与「${DIMS[top[1]].name}」共同位于高位，两股力量会交替或同时影响选择。`:shape==='单峰结构'?`「${DIMS[top[0]].name}」明显高于其他维度，本次选择呈现出清晰的中心方向。`:`各维度之间逐级过渡，没有单一维度完全主导本次选择。`,ce=COMBINATION[t],cd=COMBINATION[s];return`<section class="section structure-section"><span class="section-kicker">03 · 情欲结构</span><h2>${shape} · ${DIMS[t].name} × ${DIMS[s].name}</h2><p class="section-lead">从整体形态到核心组合，看两组力量如何共同影响选择。</p><div class="structure-grid"><div class="shape-card"><span>整体形态</span><strong>${shape}</strong><p>${copy}</p></div><div class="spread-card emotion"><span>七情起伏</span><strong>${e.label}</strong><div class="spread-track"><i style="width:${Math.min(100,e.range*1.6)}%"></i></div><small>最高与最低相差 ${e.range} 分</small></div><div class="spread-card desire"><span>六欲起伏</span><strong>${d.label}</strong><div class="spread-track"><i style="width:${Math.min(100,d.range*1.6)}%"></i></div><small>最高与最低相差 ${d.range} 分</small></div></div><div class="combo-block"><p class="combo-statement">你往往${ce.mode}，并${cd.aim}。</p><div class="combo-grid"><article><span>顺畅状态</span><h3>两股力量彼此支持</h3><p>${ce.gift}，同时${cd.gift}。</p></article><article><span>内在张力</span><h3>需要留意的偏移</h3><p>${ce.risk}；与此同时，${cd.risk}。</p></article></div><div class="tension-question"><span>平衡问题</span><p>“我现在的反应，既照顾了「${DIMS[t].name}」带来的感受，也服务于「${DIMS[s].name}」真正想抵达的方向吗？”</p></div></div></section>`}
function observations(r,t,s,l){let tg=GUIDES[t],sg=GUIDES[s],lg=GUIDES[l];return`<section class="section guidance-section"><span class="section-kicker">05 · 情境指引</span><h2>在三个时刻使用这份结果</h2><p class="section-lead">建议来自本次主导与低频维度，用来帮助你在具体情境中多看一步。</p><div class="guidance-grid"><article class="guide-card desire"><div class="guide-top"><span>做重要决定时</span><b>${DIMS[s].name}</b></div><h3>确认真正想抵达的方向</h3><dl><dt>先问自己</dt><dd>${sg.question}</dd><dt>然后行动</dt><dd>${sg.action}</dd></dl></article><article class="guide-card emotion"><div class="guide-top"><span>压力升高时</span><b>${DIMS[t].name}</b></div><h3>${tg.focus}</h3><dl><dt>先问自己</dt><dd>${tg.question}</dd><dt>恢复动作</dt><dd>${tg.action}</dd></dl></article><article class="guide-card low"><div class="guide-top"><span>与人产生分歧时</span><b>${DIMS[l].name}</b></div><h3>借用一个平时较少调用的视角</h3><dl><dt>换个问题</dt><dd>${lg.question}</dd><dt>一次练习</dt><dd>${lg.action}</dd></dl></article></div><div class="next-step"><span>现在就做</span><p>${tg.action}</p></div></section>`}
function consistencyCard(r){let text=r.consistency==='较高'?'相似情境中的选择较为接近，本次分布相对稳定。':r.consistency==='中等'?'相似情境中的选择有少量变化，结果适合作为当前状态的参考。':'相似情境中的选择差异较大，结果更适合作为观察线索。';return`<details class="about-result"><summary>关于本次结果</summary><div class="about-content"><div><span>作答稳定度</span><b>${r.consistency}</b><div class="consistency-track"><i class="${r.consistency==='较高'?'high':r.consistency==='中等'?'medium':'low'}"></i></div><p>${text}</p></div><ul><li>分数只比较本次作答中的 13 个维度。</li><li>结果不是人格类型、人群百分位或能力评分。</li><li>本测试不构成专业心理诊断结论。</li></ul></div></details>`}
function drawRadar(c,scores,poster=false,displayScores=null){
 let x=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2+10,R=w*.31,desireKeys=Object.keys(DIMS).filter(k=>DIMS[k].group==='六欲'),emotionKeys=Object.keys(DIMS).filter(k=>DIMS[k].group==='七情'),keys=[...desireKeys,...emotionKeys],angles={};x.clearRect(0,0,w,h);
 desireKeys.forEach((key,i)=>angles[key]=(-75+i*(150/(desireKeys.length-1)))*Math.PI/180);
 emotionKeys.forEach((key,i)=>angles[key]=(105+i*(150/(emotionKeys.length-1)))*Math.PI/180);
 for(let ring=1;ring<=4;ring++){x.beginPath();keys.forEach((key,i)=>{let a=angles[key],rr=R*ring/4,px=cx+Math.cos(a)*rr,py=cy+Math.sin(a)*rr;i?x.lineTo(px,py):x.moveTo(px,py)});x.closePath();x.strokeStyle=poster?'rgba(200,169,106,.28)':'rgba(142,162,194,.22)';x.lineWidth=1;x.stroke()}
 keys.forEach(key=>{let angle=angles[key];x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(angle)*R,cy+Math.sin(angle)*R);x.strokeStyle=poster?'rgba(200,169,106,.18)':'rgba(142,162,194,.13)';x.stroke();let labelRadius=R+(poster?42:50),label=displayScores?`${DIMS[key].name} ${displayScores[key]}`:DIMS[key].name;x.fillStyle=DIMS[key].group==='七情'?(poster?'#b8d3ff':'#9db8e9'):(poster?'#e58a9f':'#d37589');x.font=`${poster?18:22}px "Microsoft YaHei"`;x.textAlign=Math.cos(angle)>0?'left':'right';x.textBaseline=Math.sin(angle)>.5?'top':Math.sin(angle)<-.5?'bottom':'middle';x.fillText(label,cx+Math.cos(angle)*labelRadius,cy+Math.sin(angle)*labelRadius)});
 x.font=`600 ${poster?20:22}px "Noto Serif SC","Microsoft YaHei"`;x.textBaseline='middle';x.fillStyle=poster?'#b8d3ff':'#89a9e8';x.textAlign='right';x.fillText('七情',cx-R*.72,cy-R-(poster?52:62));x.fillStyle=poster?'#e58a9f':'#c95870';x.textAlign='left';x.fillText('六欲',cx+R*.72,cy-R-(poster?52:62));
 function drawGroup(groupKeys,stroke,fill){x.beginPath();x.moveTo(cx,cy);groupKeys.forEach(key=>{let angle=angles[key],radius=R*scores[key]/100;x.lineTo(cx+Math.cos(angle)*radius,cy+Math.sin(angle)*radius)});x.closePath();x.fillStyle=fill;x.strokeStyle=stroke;x.lineWidth=poster?3:2;x.fill();x.stroke()}
 drawGroup(keys.filter(key=>DIMS[key].group==='七情'),poster?'#b8d3ff':'#7189b6',poster?'rgba(113,137,182,.3)':'rgba(113,137,182,.2)');
 drawGroup(keys.filter(key=>DIMS[key].group==='六欲'),poster?'#e58a9f':'#a94858',poster?'rgba(169,72,88,.34)':'rgba(169,72,88,.2)')
}
function drawWrappedText(context,text,x,y,maxWidth,lineHeight){let line='';for(let char of text){let test=line+char;if(context.measureText(test).width>maxWidth&&line){context.fillText(line,x,y);line=char;y+=lineHeight}else line=test}if(line)context.fillText(line,x,y);return y}
function downloadPoster(){
 let c=document.querySelector('#posterCanvas'),x=c.getContext('2d'),r=state.result,t=r.sorted.find(key=>DIMS[key].group==='七情'),s=r.sorted.find(key=>DIMS[key].group==='六欲');
 x.fillStyle='#171716';x.fillRect(0,0,1080,1440);x.strokeStyle='#60412f';x.lineWidth=2;x.strokeRect(52,52,976,1336);
 x.fillStyle='#8b3a3a';x.fillRect(75,77,64,64);x.fillStyle='#fff';x.font='bold 28px "Noto Serif SC","Microsoft YaHei"';x.textAlign='center';x.fillText('情',107,120);
 x.textAlign='left';x.fillStyle='#d9ceb8';x.font='26px "Noto Serif SC","Microsoft YaHei"';x.fillText('七情六欲分布',164,119);x.fillStyle='#8e8679';x.font='15px Arial';x.fillText('SEVEN EMOTIONS · SIX DESIRES',75,180);
 x.fillStyle='#c8a96a';x.font='16px "Microsoft YaHei"';x.fillText('你的七情之首 × 六欲之首',75,280);
 x.fillStyle='#f1eadf';x.font='bold 65px "Noto Serif SC","Microsoft YaHei"';x.fillText(state.profileName||`${DIMS[t].name} × ${DIMS[s].name}`,72,390);
 x.fillStyle='#8b3a3a';x.font='bold 108px Georgia';x.fillText(`${r.scores[t]}分`,74,518);x.fillStyle='#9c9385';x.font='18px "Microsoft YaHei"';x.fillText('个人倾向分',310,510);
 x.fillStyle='#c8a96a';x.fillRect(75,574,110,2);x.fillStyle='#f1eadf';x.font='bold 52px "Noto Serif SC","Microsoft YaHei"';x.fillText('七情六欲分布',74,655);x.fillStyle='#9c9385';x.font='19px "Microsoft YaHei"';x.fillText(`${DIMS[t].name} ${r.scores[t]}分  ·  ${DIMS[s].name} ${r.scores[s]}分`,75,700);
 x.fillStyle='#c8a96a';x.font='16px "Microsoft YaHei"';x.fillText('分布解读',75,770);x.fillStyle='#c7c0b4';x.font='18px "Microsoft YaHei"';drawWrappedText(x,overallJudgment(t,s),75,815,275,32);
 let tmp=document.createElement('canvas');tmp.width=620;tmp.height=620;drawRadar(tmp,r.radarScores,true,r.scores);x.drawImage(tmp,390,610,620,620);
 x.fillStyle='#8e8679';x.font='17px "Microsoft YaHei"';x.fillText(`七情之首  ${DIMS[t].name} ${r.scores[t]}分     ·     六欲之首  ${DIMS[s].name} ${r.scores[s]}分`,75,1280);
 x.fillStyle='#c8a96a';x.font='15px "Microsoft YaHei"';x.fillText('呈现本次作答中的七情六欲相对分布',75,1340);
 let a=document.createElement('a');a.download='七情六欲分布报告.png';a.href=c.toDataURL('image/png');a.click();toast('分享海报已生成')
}
function toast(msg){let t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=msg;document.body.append(t);setTimeout(()=>t.remove(),2500)}
structureSection=()=>'';
const RESULT_TENSIONS={
 E1:[['享受当下，也想积累成果','想给自己一次旅行，又反复计算花费。若每次享受都要证明回报，休息也会变成另一项任务。'],['想带动气氛，也想掌握节奏','你热心组织活动，别人却未必同样投入。对方的兴致不高，不一定代表不配合你。'],['想分享快乐，也期待被回应','你精心安排约会，对方的反应却很平淡。一次期待落空，可能被你理解成自己不被重视。'],['容易心动，也有自己的标准','一件东西的设计让你很想买下。隔一天再看，才能分清长期喜欢和当下的兴奋。'],['想随心安排，也要兑现承诺','新邀约很有趣，原来的安排却已经答应。频繁临时改变计划，会让别人难以依赖你的承诺。'],['想做喜欢的事，也希望值得','新计划让你兴奋，重复练习却让你怀疑方向。兴趣暂时下降，并不能说明这件事没有价值。']],
 E2:[['想争一口气，也要算投入','被质疑时，你可能立刻接下更难的任务。证明自己的冲动，容易让你忽略报酬和时间是否相称。'],['想解决问题，也容易全部接手','团队出错时，你可能直接自己做。问题暂时解决了，但责任没有重新分配，下次还会落到你身上。'],['想讲清不满，也怕伤到关系','争执时说得很重，冷静后又忙着修复。真正需要讨论的事，容易淹没在道歉和解释里。'],['不愿将就，也要控制返工','看到粗糙的交付，你可能想全部重做。先说明哪些必须改，哪些下次优化，才能守住标准和工期。'],['想守住自主，也可能拒绝帮助','别人提建议时，你可能先感到被干涉。分清建议本身和对方的口气，避免把有用的信息一起推开。'],['想改变现状，也需要选择战场','遇到不合理的规则，你可能很快站出来。行动之前确认谁能改变它，能减少只有消耗、没有进展的对抗。']],
 E3:[['想抓住机会，也怕投入落空','你反复核算一个项目的风险，却迟迟没有做小规模尝试。更多资料未必比一次真实反馈更有帮助。'],['想掌握局面，也不断发现变数','项目启动后，你可能频繁补充预案。确认越多，团队越不敢自主推进，你也越难抽身。'],['想靠近对方，也怕关系变化','对方回复慢了，你可能开始回想自己哪里说错。反复确认能短暂安心，也可能增加彼此的压力。'],['想交得漂亮，也怕留下遗憾','交付前还在调整细小措辞，核心内容却没来得及试用。细节的确定感，可能挤掉了更重要的验证。'],['想保留选择，也怕选错','考虑换工作时，你一直收集信息、保留退路。选择看似很多，实际生活却长期停在原处。'],['想走对方向，也怕浪费时间','你比较了很多课程和计划，却很少实际体验。越想一次选对，越缺少帮助判断的亲身经历。']],
 E4:[['想理解规律，也想得到成果','研究一个机会时，你看了很多资料，却还没联系第一个客户。理解很充分，现实反馈仍然缺席。'],['想讲清道理，也想推动执行','方案解释得很完整，别人却没有行动。逻辑之外，对方也需要知道自己能参与哪些决定。'],['想理解关系，也想被理解','对方说委屈时，你可能先分析原因。你在解决问题，对方此刻想要的却可能只是被听见。'],['想表达准确，也容易过度打磨','一段介绍反复修改，概念更严谨，读者却更难抓住重点。试着先让一个人读懂，再继续优化。'],['想独立判断，也难接受无理由的安排','接到任务时，你可能先追问为什么。区分值得争取的自主权和日常协作成本，能省下很多消耗。'],['想找到可信方向，也想每步都有理由','你很擅长解释长期计划，却难以在尚未想透时开始。有些答案，需要先做一次才能得到。']],
 E5:[['想体谅对方，也需要合理回报','合作方说有困难，你就接受额外工作。若不重新约定范围和费用，体谅容易变成单方面承担。'],['想让大家舒服，也想事情推进','同事做不完，你就主动补位。短期避免了尴尬，长期却让分工问题一直没有机会被解决。'],['想维持亲密，也容易先退让','对方不开心，你先答应请求，再独自消化不情愿。表面平静的关系，也可能在积累没有说出口的不满。'],['想让别人满意，也想保留表达','修改意见每条都照做，最后作品却没有清晰方向。你需要先确定这次最重要的受众和标准。'],['想尊重别人，也想保留空间','不想参加的邀约拖着不回复，既怕伤人又不愿答应。明确拒绝和解释一次，往往比悬着更好相处。'],['想帮助别人，也要守住自己的计划','看到困难就投入，容易让临时求助占满整周。限定能帮助的时间，才能让善意持续下去。']],
 E6:[['想稳定积累，也怕失去已有的','新机会收入不确定，熟悉的位置更让你安心。需要一起比较的，还有继续留下的成长空间和时间成本。'],['想降低风险，也容易事事把关','交接后仍要求每步确认，你可能成了所有任务的必经节点。规定何时需要汇报，比全程盯住更容易持续。'],['想关系可靠，也担心生活变化','对方想尝试新安排，你先强调现状的好处。担心值得讨论，也需要给对方的变化留出空间。'],['想品质可靠，也舍不得熟悉形式','作品完成度一直很稳，新风格却始终没机会试。用一个小部分试验，可以避免整件推翻的风险。'],['想自由，也舍不得熟悉的安心','你想离开受限的环境，却在机会出现时犹豫。把真实损失和对陌生的不适分开，才知道需要准备什么。'],['想走得长远，也希望条件齐备','你很认同一个方向，却不断推迟第一步。先找一个可退出的小尝试，比等待所有保障更容易得到答案。']],
 E7:[['想抓新机会，也想得到回报','多个项目看起来都有潜力，你很难放下任何一个。注意力分散后，最有希望的那个也没有得到足够投入。'],['想打开局面，也容易频繁转向','旧方案还没跑完，你已经想到下一种方法。团队不断跟着换方向，也就失去了验证原方案的机会。'],['想一起探索，也需要照顾节奏','你喜欢临时起意，对方需要提前安排。新体验若总靠对方迁就，会积累不被照顾的感受。'],['想尝试新风格，也想形成作品','参考和形式不断更新，作品却一直没有完成。留一版成品，比同时保留所有灵感更能帮助你找到表达。'],['想保留可能，也不喜欢承诺','新的邀约出现时，你总舍不得拒绝。选择越留越多，真正能自主支配的时间却越来越少。'],['想探索方向，也希望长期投入','新领域容易点燃你，基础练习却很重复。兴趣下降就换方向，可能让你一直停在入门阶段。']]
};
const RESULT_SCENES={
 D1:[['在工作里','接到额外任务时，确认回报是报酬、能力还是可复用的成果。只有“以后有机会”的承诺，值得再问一句具体是什么。'],['在关系里','你可能用解决实际问题表达关心。先问对方需要帮忙、陪伴还是认可，减少付出很多却彼此没被满足的时刻。'],['做选择时','比较机会时，把收入之外的时间占用也写进去。回报更高的选择，可能正在消耗你最稀缺的资源。']],
 D2:[['在工作里','进度卡住时，先区分缺一个决定还是一个执行者。如果两者都由你补上，同样的问题下次还会回来。'],['在关系里','给方案之前，问一句“你想一起想办法，还是先让我听你说”。这能减少好意被理解成干涉的时刻。'],['做选择时','你可能偏向自己能主导的选项。先明确需要哪些决定权，避免为了掌控过程承担整件事。']],
 D3:[['在工作里','不合理的要求出现时，把分歧落到工期和范围上。只靠加班维持好感，难以换来可持续的合作。'],['在关系里','想要回应时，说一个具体期待，例如“忙完后告诉我一声”。给对方一个能回应的请求，少让彼此猜测。'],['做选择时','亲近的人不赞同时，先写下自己的理由。分清认同对方的建议，以及害怕让对方失望。']],
 D4:[['在工作里','交付前列出最影响使用的三项标准。先完成它们，把剩余细节放到下一次优化里。'],['在关系里','安排仪式或惊喜前，问问对方真正喜欢什么。精心设计的形式，也需要回应具体的需要。'],['做选择时','把外观、体验和日常使用分开评价。让你心动的东西，也需要适合真实生活的频率。']],
 D5:[['在工作里','接下任务前，说清结果、期限和哪些部分由你决定。减少执行中反复感到被干涉的消耗。'],['在关系里','需要独处时，说明时间和回来联系的安排。表达边界的同时，给关系一个可预期的回应。'],['做选择时','想离开一份工作时，同时写下离开后的一周怎么过。具体的生活安排，更能检验你想去的方向。']],
 D6:[['在工作里','面对重复任务，明确它在支持哪个具体结果。如果确实没有价值，再带着事实讨论调整。'],['在关系里','分享成长计划时，也听听对方现在想过怎样的生活。共同前进，需要双方都有参与定义方向的空间。'],['做选择时','用一次小实践，确认自己是否愿意做其中最普通、最重复的部分，再决定长期投入。']]
};
function resultInsight(t,s){return RESULT_TENSIONS[t][Number(s.slice(1))-1]}
rankingSection=((render)=>(...args)=>render(...args).replace('03 · 你的分布','02 · 你的分布'))(rankingSection);
impactSection=(r,t,s)=>{let [title,copy]=resultInsight(t,s);return `<section class="section impact-section"><span class="section-kicker">03 · 内在拉扯</span><h2>${title}</h2><p class="impact-opening">${copy}</p><p class="section-lead insight-note">这是这组倾向可能出现的矛盾，可以对照最近一次真实经历看看是否符合你。</p></section>`};
observations=(r,t,s)=>`<section class="section guidance-section"><span class="section-kicker">04 · 放进生活里</span><h2>留意这三个具体时刻</h2><div class="guidance-grid">${RESULT_SCENES[s].map(([title,copy],i)=>`<article class="guide-card ${i===0?'emotion':i===1?'desire':'low'}"><div class="guide-top"><span>0${i+1}</span></div><h3>${title}</h3><p class="scene-copy">${copy}</p></article>`).join('')}</div></section>`;
lifeAdvice=(r,t,s)=>`<section class="section advice-simple"><span class="section-kicker">05 · 只做一件事</span><h2>${GUIDES[t].focus}</h2><div class="one-action"><span>用最近一件让你纠结的事试一试</span><p>${GUIDES[t].action}</p><p class="action-check">做完后再问自己：${GUIDES[s].question}</p></div></section>`;
document.querySelector('#restartTop').onclick=beginTest;let lastResult=loadLastResult();if(lastResult&&hasAccess()){state=lastResult;result()}else redeem(true);
