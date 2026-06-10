
const translations = {
    th: {
        startTitle:   "เหนื่อยไหมวันนี้<br>ให้ S&amp;P เราดูแล",
        startDesc:    "ไม่จำเป็นต้องรอโอกาสพิเศษ แค่ในวันธรรมดาที่เหนื่อยล้า<br>คุณก็คู่ควรกับเค้กดีๆสักชิ้นเพื่อฮีลใจตัวเอง",
        startBtn:     "ฉันเอง \u201cเค้ก\u201d ก้อนนั้น",
        tapHint:      "จิ้มกล่องเพื่อดูเค้กของคุณ!!",
        boxIntro:     "พ่อครัววางกล่องเล็กๆ ลงบนโต๊ะแล้วบอกว่า...<br>\u201cคุณไม่จำเป็นต้องรอโอกาสพิเศษ<br>แค่ในวันธรรมดาที่เหนื่อยล้า<br>คุณก็คู่ควรกับเค้กดีๆ สักชิ้นแล้ว\u201d",
        resultLead:   "เค้กที่อบเพื่อคุณในคืนนี้คือ...",
        downloadBtn:  "ดาวน์โหลดรูป",
        shareIGBtn:   "แชร์ลง IG Story",
        retryBtn:     "กลับไปเล่นอีกรอบ",
        footerText:   "เนื้อหานี้สร้างขึ้นสำหรับการแข่งขัน Crack the Cake เท่านั้น",
        loadingMsgs:  ["พ่อครัวกำลังเอาเค้กออกจากเตา...", "แต่งหน้าเค้กให้สวยงามนิดนึง...", "เค้กออกจากเตาแล้ว!!!"],
        saveHint:     "แตะที่ภาพค้างไว้ แล้วเลือก \u2018บันทึกภาพ\u2019 เพื่อเซฟลงแกลเลอรี่ของคุณ",
        noImgAlert:   "ไม่พบรูปภาพผลลัพธ์ กรุณารอสักครู่แล้วลองใหม่อีกครั้ง"
    },
    en: {
        startTitle:   "Feeling Tired Today?<br>Let S&amp;P Take Care of You",
        startDesc:    "No need to wait for a special occasion.<br>On an ordinary, exhausting day,<br>you deserve a good piece of cake to heal your soul.",
        startBtn:     "I am that \u201cCake\u201d",
        tapHint:      "Tap the box to open your cake!!",
        boxIntro:     "The baker places a small box on the table and says...<br>\u201cYou don\u2019t need to wait for a special occasion.<br>On an ordinary, tiring day,<br>you deserve a good piece of cake.\u201d",
        resultLead:   "The cake baked specially for you tonight is...",
        downloadBtn:  "Download Image",
        shareIGBtn:   "Share to IG Story",
        retryBtn:     "Play Again",
        footerText:   "This content is created solely for the Crack the Cake competition.",
        loadingMsgs:  ["The baker is baking your cake...", "Adding the finishing touches...", "Your cake is out of the oven!!!"],
        saveHint:     "Press and hold the image, then select \u2018Save Image\u2019 to save it to your gallery.",
        noImgAlert:   "Result image not found. Please wait a moment and try again."
    }
};

const questions = [
    {
        intro: {
            th: [
                { text: "วันนี้เหนื่อยมากใช่ไหม...", img: "snp_cake10.png", btn: "ก็เหนื่อยนะ" },
                { text: "เรียนก็หนัก งานก็เยอะ บางทีก็ไม่รู้ด้วยซ้ำว่าเหนื่อยเพราะอะไร<br>วันนี้ก็เหนื่อยมากจนเผลอหลับไป...", img: "snp_cake3.png", btn: "z Z z" },
                { text: "รู้สึกตัวอีกทีคุณก็เดินตามกลิ่นหอมหวานจนมาหยุดอยู่หน้าประตูบานนึง ร้านขนมเค้กล่ะ<br>เหมือนพ่อครัวจะอบเค้กรอคุณอยู่นะ", img: "snp_cake7.png", btn: "เข้าไปในร้าน" },
                { text: "ก่อนอื่น พ่อครัวมีเรื่องอยากถามคุณนิดหน่อย<br>ไม่ต้องเครียดที่จะตอบนะ แค่ตอบแบบที่มันเป็นคุณก็พอ", img: "snp_cake4.png", btn: "พร้อมละ" }
            ],
            en: [
                { text: "You must be really tired today, aren't you?...", img: "snp_cake8.png", btn: "Yeah, quite tired" },
                { text: "Heavy studying, endless work, sometimes you don't even know why you're so exhausted.<br>Today was just so tiring that you accidentally fell asleep...", img: "snp_cake3.png", btn: "z Z z" },
                { text: "Waking up again, you find yourself following a sweet aroma<br>until you stop right in front of a door. It's a cake shop!<br>It looks like the baker is baking a cake just for you.", img: "snp_cake7.png", btn: "Enter the shop" },
                { text: "First, the baker has a few questions for you.<br>Don't worry over the answers, just be true to yourself.", img: "snp_cake4.png", btn: "I'm ready" }
            ]
        },
        q: {
            th: "เมื่อคุณเดินเข้าไปในร้าน มีกลิ่นหอมอบอวน คุณสังเกตเห็นอะไรเป็นอย่างแรก",
            en: "As you step into the shop filled with sweet aromas, what is the first thing you notice?"
        },
        a: {
            th: [
                { text: "ชั้นวางขนมที่เรียงกันอย่างเป็นระเบียบ สวยงามและดูน่าเชื่อถือ", type: "butter" },
                { text: "มุมเล็กๆ ริมหน้าต่างที่มีแสงอ่อนๆ ส่องผ่านม่านบางๆ", type: "chiffon" },
                { text: "เสียงเพลงเบาๆ และกลิ่นหอมที่ทำเอาอยากรู้ว่าเป็นเค้กอะไร", type: "layer" },
                { text: "พ่อครัวที่กำลังยิ้มและรอให้คุณมาถึงอยู่", type: "fruit" },
                { text: "ถาดอบขนมที่คลุมด้วยผ้า วางอยู่มุมนึง", type: "choco" }
            ],
            en: [
                { text: "Perfectly organized shelves, looking beautiful and professional.", type: "butter" },
                { text: "A cozy corner by the window with soft light through thin curtains.", type: "chiffon" },
                { text: "Soft background music and a sweet scent making you wonder what kind of cake it is.", type: "layer" },
                { text: "The baker smiling warmly, waiting for your arrival.", type: "fruit" },
                { text: "A baking tray covered with a cloth, placed in the corner.", type: "choco" }
            ]
        }
    },
    {
        intro: {
            th: [{ text: "เจ้าของร้านเดินมาหาคุณ เขายิ้มอย่างอบอุ่นแล้วถามขึ้นมาด้วยความใส่ใจ...<br>วันนี้เป็นยังไงบ้าง", btn: "จะตอบอะไรดี" }],
            en: [{ text: "The baker walks up to you, smiles warmly,<br>and asks with genuine care, 'How was your day?'", btn: "What should I say?" }]
        },
        q: {
            th: "คุณตอบเขากลับไปว่า...",
            en: "You reply to him..."
        },
        a: {
            th: [
                { text: "\u201cโอเคนะ แค่เหนื่อยนิดหน่อย แต่จัดการได้\u201d", type: "butter" },
                { text: "\u201cไม่รู้เหมือนกัน บางทีแค่ต้องการอะไรสักอย่างที่ทำให้รู้สึกดีขึ้น\u201d", type: "chiffon" },
                { text: "\u201cเหนื่อยแต่ยังโอเค บางทีอาจต้องลองเปลี่ยนบรรยากาศ\u201d", type: "layer" },
                { text: "\u201cเหนื่อยมากเลย แต่พอได้มาที่นี่ก็รู้สึกดีขึ้นแล้ว\u201d", type: "fruit" },
                { text: "\u201cไม่รู้สิ ถ้าได้ลองทำอะไรใหม่ๆ ที่ต่างออกไปคงรู้สึกดีขึ้น\u201d", type: "choco" }
            ],
            en: [
                { text: "\u201cI'm fine, just a bit tired but I can handle it.\u201d", type: "butter" },
                { text: "\u201cI don't know, maybe I just need something to make me feel better.\u201d", type: "chiffon" },
                { text: "\u201cTired but doing okay. Maybe I need a change of scenery.\u201d", type: "layer" },
                { text: "\u201cSo exhausted, but being here already makes me feel better.\u201d", type: "fruit" },
                { text: "\u201cNot sure, doing something completely new might help.\u201d", type: "choco" }
            ]
        }
    },
    {
        intro: {
            th: [
                { text: "พ่อครัวพาคุณเดินลึกเข้าไปผ่านประตูเล็กๆ บานหนึ่ง<br>ข้างในมีขนมหลายอย่างวางเรียงรายอยู่", btn: "เดินตามเขาเข้าไป" },
                { text: "เขาหันมาบอกกับคุณว่า<br>\u201cปกติผมไม่ค่อยชวนใครเข้ามามุมนี้ของร้านนะ...\u201d", btn: ". . ." }
            ],
            en: [
                { text: "The baker leads you deeper inside through a small door.<br>Inside, various treats await.", btn: "Follow him in" },
                { text: "He turns and tells you,<br>\u201cUsually, I rarely invite anyone into this corner of the shop...\u201d", btn: ". . ." }
            ]
        },
        q: {
            th: "พอได้ยินอย่างนั้นแล้ว...คุณรู้สึกยังไง",
            en: "Hearing that... how do you feel?"
        },
        a: {
            th: [
                { text: "ตื่นเต้นและอยากรู้ว่ามีจะมีอะไรพิเศษกว่าด้านนอก", type: "layer" },
                { text: "อบอุ่นใจ เหมือนเราได้รับความไว้วางใจ", type: "fruit" },
                { text: "สงบและรู้สึกเหมือนได้ผ่อนคลายความกังวลลงสักที", type: "chiffon" },
                { text: "อืมเฉยๆ นะ", type: "butter" },
                { text: "ร้านนี้แปลกดีแหะ อดที่จะอยากสำรวจทุกซอกทุกมุมไม่ได้เลย", type: "choco" }
            ],
            en: [
                { text: "Excited and curious to see what special thing is inside.", type: "layer" },
                { text: "Heartwarmed, feeling like I've earned a special trust.", type: "fruit" },
                { text: "Peaceful, feeling like I can finally let go of my worries.", type: "chiffon" },
                { text: "Hmm, just neutral.", type: "butter" },
                { text: "This shop is intriguing. I can't help but want to explore every single corner.", type: "choco" }
            ]
        }
    },
    {
        intro: {
            th: [
                { text: "เจ้าของร้านชี้ไปที่โต๊ะทำขนมตรงกลางห้องแล้วบอกว่า<br>\u201cคืนนี้คุณจะได้เค้กที่เป็นคุณที่สุด\u201d", btn: ". . ." },
                { text: "\u201cคุณช่วยบอกผมหน่อย...<br>มีโมเมนต์ไหนในวันธรรมดาๆ ที่คุณรู้สึกว่า นี่แหละคือตัวคุณ\u201d", btn: "ครุ่นคิดสักพัก" }
            ],
            en: [
                { text: "The baker walks to the prep table in the center and says,<br>\u201cTonight, I will bake the cake that defines you best.\u201d", btn: ". . ." },
                { text: "\u201cTell me...<br>is there a moment on an ordinary day<br>where you feel truly yourself?\u201d", btn: "Reflect for a moment" }
            ]
        },
        q: {
            th: "โมเมนต์ที่เป็นตัวคุณที่สุดคือตอนไหน",
            en: "When is the moment you feel most like yourself?"
        },
        a: {
            th: [
                { text: "ตอนที่ทำสิ่งที่ตั้งใจไว้สำเร็จ แม้จะเป็นเรื่องเล็กน้อยแค่ไหนก็ตาม", type: "butter" },
                { text: "ตอนที่อยู่คนเดียวแล้วได้คิดอะไรเรื่อยเปื่อย โดยไม่มีใครมารบกวน", type: "chiffon" },
                { text: "ตอนที่ได้ลองอะไรใหม่ๆ หรือทำความรู้จักกับคนใหม่ๆ", type: "layer" },
                { text: "ตอนที่เราได้ทำสิ่งดีๆ ให้คนที่เรารักมีความสุข", type: "fruit" },
                { text: "ตอนที่ตัดสินใจทำตามเสียงหัวใจตัวเอง มากกว่าฟังเสียงสังคม", type: "choco" }
            ],
            en: [
                { text: "When achieving what I set out to do, no matter how small it is.", type: "butter" },
                { text: "When I am alone, letting my mind wander without interruptions.", type: "chiffon" },
                { text: "When trying new things or making new acquaintances.", type: "layer" },
                { text: "When making my loved ones happy with something I did.", type: "fruit" },
                { text: "When choosing to follow my heart rather than listening to society.", type: "choco" }
            ]
        }
    },
    {
        intro: {
            th: [
                { text: "พ่อครัวยิ้มและเริ่มลงมืออบเค้กให้คุณอย่างพิถีพิถัน...", btn: "นั่งรออย่างใจเย็น" },
                { text: "ในขณะที่รอ คุณเหม่อมองออกไปนอกหน้าต่าง<br>เห็นท้องฟ้าตอนเย็นที่กำลังเปลี่ยนสีแสนละมุน", btn: "เหม่อมองฟ้า" }
            ],
            en: [
                { text: "The baker smiles and carefully begins to bake your cake...", btn: "Wait patiently" },
                { text: "While waiting, you look out the window,<br>watching the soft evening sky changing colors.", btn: "Gaze at the sky" }
            ]
        },
        q: {
            th: "ท้องฟ้านั้นทำให้คุณนึกถึงอะไร",
            en: "What does that sky make you think about?"
        },
        a: {
            th: [
                { text: "นึกถึงสิ่งที่ยังต้องทำ และรู้สึกว่าพอได้พักก็มีแรงจะกลับไปสู้ต่อ", type: "butter" },
                { text: "อยากเก็บความรู้สึกในช่วงเวลาที่มีความหมายนี้เอาไว้", type: "chiffon" },
                { text: "ถ้าได้มาที่นี้ในบรรยากาศอื่นๆ มาพบผู้คนใหม่ๆ ความรู้สึกจะเป็นยังไงนะ", type: "layer" },
                { text: "นึกถึงคนที่เรารักและอยากพาเขามาใช้เวลาดีๆที่นี่ร่วมกัน", type: "fruit" },
                { text: "ไม่ได้คิดอะไรมาก แค่อยากซึบซับความรู้สึกดีๆ ตอนนี้ให้เต็มที่", type: "choco" }
            ],
            en: [
                { text: "Thinking about tasks ahead, feeling recharged to go back and fight.", type: "butter" },
                { text: "Wanting to cherish the feelings of this meaningful moment.", type: "chiffon" },
                { text: "Wondering how it would feel to visit this place in a different mood or meet new people.", type: "layer" },
                { text: "Thinking of loved ones and wishing to bring them here to share good times.", type: "fruit" },
                { text: "Nothing much, just fully immersing myself in the current pleasant moment.", type: "choco" }
            ]
        }
    }
];

const results = {
    butter: { th: { img: "butter_th.png" }, en: { img: "butter_en.png" } },
    chiffon:{ th: { img: "chiffon_th.png"}, en: { img: "chiffon_en.png"} },
    layer:  { th: { img: "layer_th.png"  }, en: { img: "layer_en.png"  } },
    fruit:  { th: { img: "fruit_th.png"  }, en: { img: "fruit_en.png"  } },
    choco:  { th: { img: "choco_th.png"  }, en: { img: "choco_en.png"  } }
};

let currentLang          = 'th';
let currentQuestionIndex = 0;
let currentIntroIndex    = 0;
let scores               = { butter: 0, layer: 0, chiffon: 0, fruit: 0, choco: 0 };
let currentWinningType   = 'butter';
let typewriterInterval   = null;

let boxTapCount  = 0;
let boxTapLocked = false;
const TARGET_TAPS = 10;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
}

let _typewriteOnDone = null;   
let _typewriteFullHtml = '';   

function typewrite(container, html, speed = 15, onDone = null) {
    clearInterval(typewriterInterval);
    container.innerHTML = '';
    _typewriteOnDone  = onDone;
    _typewriteFullHtml = html;

    const tokens = [];
    const regex = /(<[^>]+>)|([^<])/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        tokens.push(match[0]);
    }

    let i = 0;
    let accumulated = '';
    typewriterInterval = setInterval(() => {
        if (i < tokens.length) {
            accumulated += tokens[i++];
            container.innerHTML = accumulated;
        } else {
            clearInterval(typewriterInterval);
            _typewriteOnDone = null;
            if (onDone) onDone();
        }
    }, speed);
}


function skipTypewriter(container) {
    if (!typewriterInterval) return;   
    clearInterval(typewriterInterval);
    typewriterInterval = null;
    container.innerHTML = _typewriteFullHtml;
    const cb = _typewriteOnDone;
    _typewriteOnDone   = null;
    _typewriteFullHtml = '';
    if (cb) cb();
}

function setProgress(pct) {
    const el = document.getElementById('progress');
    if (el) el.style.width = `${pct}%`;
}

function changeLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-lang-${lang}`).classList.add('active');

    const t = translations[lang];

    document.getElementById('start-title').innerHTML   = t.startTitle;
    document.getElementById('start-desc').innerHTML    = t.startDesc;
    document.getElementById('start-quiz-btn').innerText= t.startBtn;

    document.getElementById('tap-hint-msg').innerText      = t.tapHint;
    document.getElementById('result-lead-text').innerText  = t.resultLead;
    document.getElementById('download-btn-text').innerText = t.downloadBtn;
    document.getElementById('share-ig-btn-text').innerText = t.shareIGBtn;
    document.getElementById('retry-btn-text').innerText    = t.retryBtn;

    const footerEl = document.getElementById('footer-competition-text');
    if (footerEl) footerEl.innerText = t.footerText;

    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen && loadingScreen.classList.contains('active')) {
        const statusText = document.getElementById('loading-status-text');
        if (statusText) statusText.innerText = t.loadingMsgs[0];
    }

    if (document.getElementById('result-screen').classList.contains('active')) {
        const img = document.getElementById('result-cake-image');
        if (img) img.src = results[currentWinningType][lang].img;
    }

    if (document.getElementById('intermission-screen').classList.contains('active')) {
        showIntermission();
    }
    if (document.getElementById('box-tap-screen').classList.contains('active')) {
        showBoxTapScreen();
    }
}

function startQuiz() {
    document.getElementById('lang-switcher').style.display = 'none';
    currentIntroIndex    = 0;
    currentQuestionIndex = 0;
    showIntermission();
}

function showIntermission() {
    setProgress((currentQuestionIndex / questions.length) * 100);

    if (currentQuestionIndex >= questions.length) {
        showBoxTapScreen();
        return;
    }

    showScreen('intermission-screen');

    const nextBtn = document.getElementById('next-to-quiz-btn');
    if (nextBtn) nextBtn.style.display = 'none';

    const scene   = questions[currentQuestionIndex].intro[currentLang];
    const data    = Array.isArray(scene) ? scene[currentIntroIndex] : scene;
    const text    = (typeof data === 'object') ? data.text : data;
    const imgSrc  = (typeof data === 'object' && data.img) ? data.img : '';
    const btnText = (typeof data === 'object' && data.btn)
        ? data.btn
        : (currentLang === 'th' ? 'เดินต่อ' : 'Continue');

    const imgEl = document.getElementById('intermission-img');
    if (imgEl) {
        if (imgSrc) {
            imgEl.src     = imgSrc;
            imgEl.style.display = 'block';
        } else {
            imgEl.style.display = 'none';
        }
    }

    if (nextBtn) nextBtn.innerText = btnText;

    const textEl = document.getElementById('typewriter-text');
    if (textEl) {
        // กดที่หน้า intermission (ไม่ใช่ปุ่ม) → skip typewriter
        const screen = document.getElementById('intermission-screen');
        screen.onclick = (e) => {
            if (e.target.closest('button')) return;
            if (typewriterInterval) skipTypewriter(textEl);
        };

        typewrite(textEl, text, 40, () => {
            if (nextBtn) nextBtn.style.display = 'inline-block';
        });

        // cursor บอก hint ว่ากดได้ระหว่างพิมพ์
        textEl.style.cursor = 'pointer';
    }
}

function goToActualQuiz() {
    const scene = questions[currentQuestionIndex].intro[currentLang];

    if (Array.isArray(scene) && currentIntroIndex < scene.length - 1) {
        currentIntroIndex++;
        showIntermission();
        return;
    }

    currentIntroIndex = 0;
    showScreen('quiz-screen');

    const q = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.q[currentLang];

    const container = document.getElementById('options-container');
    if (container) {
        container.innerHTML = '';
        q.a[currentLang].forEach(ans => {
            const btn = document.createElement('button');
            btn.innerText = ans.text;
            btn.className = 'option-btn';
            btn.onclick   = () => selectAnswer(ans.type);
            container.appendChild(btn);
        });
    }
}

function selectAnswer(type) {
    event.currentTarget && event.currentTarget.classList.add('selected');

    setTimeout(() => {
        scores[type]++;
        currentQuestionIndex++;

        if (currentQuestionIndex >= questions.length) {
            showBoxTapScreen();
        } else {
            currentIntroIndex = 0;
            showIntermission();
        }
    }, 180);
}

function showBoxTapScreen() {
    showScreen('box-tap-screen');

    boxTapCount  = 0;
    boxTapLocked = false;

    const fill    = document.getElementById('tap-progress-fill');
    const countEl = document.getElementById('tap-count-text');
    if (fill)    fill.style.width = '0%';
    if (countEl) countEl.innerText = '0';

    const textEl = document.getElementById('box-story-text');
    if (textEl) {
        // กดที่ข้อความ (ไม่ใช่กล่องเค้ก) → skip typewriter
        textEl.style.cursor = 'pointer';
        textEl.onclick = () => {
            if (typewriterInterval) skipTypewriter(textEl);
        };
        typewrite(textEl, translations[currentLang].boxIntro, 40);
    }
}

function tapCakeBox() {
    if (boxTapLocked || boxTapCount >= TARGET_TAPS) return;

    boxTapCount++;

    const fill    = document.getElementById('tap-progress-fill');
    const countEl = document.getElementById('tap-count-text');
    if (fill)    fill.style.width = `${(boxTapCount / TARGET_TAPS) * 100}%`;
    if (countEl) countEl.innerText = boxTapCount;

    const boxImg = document.getElementById('cake-box-img');
    if (boxImg) {
        boxImg.classList.add('shake-animation');
        setTimeout(() => boxImg.classList.remove('shake-animation'), 200);
    }

    if (boxTapCount >= TARGET_TAPS) {
        boxTapLocked = true;
        setTimeout(startLoadingScreen, 300);
    }
}

function startLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) { showResult(); return; }

    showScreen('loading-screen');

    const barFill    = document.getElementById('loading-bar-fill');
    const statusText = document.getElementById('loading-status-text');
    const messages   = translations[currentLang].loadingMsgs;

    let progress = 0;
    if (barFill)    barFill.style.width = '0%';
    if (statusText) statusText.innerText = messages[0];

    const iv = setInterval(() => {
        progress++;
        if (barFill) barFill.style.width = `${progress}%`;

        if (progress === 35 && statusText) {
            statusText.style.opacity = '0';
            setTimeout(() => { statusText.innerText = messages[1]; statusText.style.opacity = '1'; }, 300);
        }
        if (progress === 70 && statusText) {
            statusText.style.opacity = '0';
            setTimeout(() => { statusText.innerText = messages[2]; statusText.style.opacity = '1'; }, 300);
        }
        if (progress >= 100) {
            clearInterval(iv);
            setTimeout(() => showResult(), 400);
        }
    }, 30);
}

function showResult() {
    showScreen('result-screen');
    setProgress(100);

    currentWinningType = Object.entries(scores).reduce(
        (best, [type, score]) => (score > best[1] ? [type, score] : best),
        ['butter', -1]
    )[0];

    const img = document.getElementById('result-cake-image');
    if (img) {
        img.classList.remove('revealed');
        img.src = results[currentWinningType][currentLang].img;
        img.onload = () => requestAnimationFrame(() => img.classList.add('revealed'));
        if (img.complete) requestAnimationFrame(() => img.classList.add('revealed'));
    }
}

async function downloadTicket() {
    const img = document.getElementById('result-cake-image');
    if (!img || !img.src || img.src === window.location.href) {
        alert(translations[currentLang].noImgAlert);
        return;
    }

    try {
        const res  = await fetch(img.src);
        const blob = await res.blob();
        const file = new File([blob], 'BakeYourSoul.png', { type: blob.type });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: translations[currentLang].resultLead,
                text:  '#CrackTheCake',
            });
            return;
        }
    } catch (err) {
        console.warn('Web Share API failed, falling back:', err);
    }

    openImageInNewTab(img.src);
}

async function shareToInstagramStory() {
    const img = document.getElementById('result-cake-image');
    if (!img || !img.src || img.src === window.location.href) {
        alert(translations[currentLang].noImgAlert);
        return;
    }

    try {
        const res  = await fetch(img.src);
        const blob = await res.blob();
        const file = new File([blob], 'BakeYourSoul.png', { type: blob.type });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: '#CrackTheCake' });
        } else {
            openImageInNewTab(img.src, translations[currentLang].saveHint);
        }
    } catch (err) {
        console.warn('IG share fallback:', err);
        openImageInNewTab(img.src, translations[currentLang].saveHint);
    }

    setTimeout(() => {
        window.location.href = 'instagram://story-camera';
        setTimeout(() => {
            if (document.hasFocus()) window.open('https://www.instagram.com/', '_blank');
        }, 1500);
    }, 500);
}

function openImageInNewTab(url, hint) {
    const saveHint = hint || translations[currentLang].saveHint;
    const w = window.open();
    if (!w) return;
    w.document.write(`<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>BakeYourSoul</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap" rel="stylesheet">
<style>
  body{margin:0;background:#121212;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;font-family:'Prompt',sans-serif;color:#fff;padding:20px;box-sizing:border-box}
  img{max-width:100%;max-height:75vh;object-fit:contain;border-radius:14px;box-shadow:0 12px 36px rgba(0,0,0,.6)}
  .hint{margin-top:22px;background:rgba(255,255,255,.14);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);padding:14px 24px;border-radius:30px;font-size:14px;line-height:1.5;text-align:center;max-width:90%;border:1px solid rgba(255,255,255,.12)}
</style>
</head>
<body>
<img src="${url}" alt="S&P Result Cake">
<div class="hint">${saveHint}</div>
</body></html>`);
    w.document.close();
}


function resetQuiz() {
    currentQuestionIndex = 0;
    currentIntroIndex    = 0;
    boxTapCount          = 0;
    boxTapLocked         = false;
    scores               = { butter: 0, layer: 0, chiffon: 0, fruit: 0, choco: 0 };
    clearInterval(typewriterInterval);

    const switcher = document.getElementById('lang-switcher');
    if (switcher) switcher.style.display = 'flex';

    showScreen('start-screen');
}