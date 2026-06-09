// =========================================================================
// 1. คลังข้อมูลคำแปลและการสลับภาษา (Localization Data)
// =========================================================================
const translations = {
    th: {
        startTitle: "เหนื่อยไหมวันนี้<br>ให้ S&P เราดูแล",
        startDesc: "ไม่จำเป็นต้องรอโอกาสพิเศษ แค่ในวันธรรมดาที่เหนื่อยล้า คุณก็คู่ควรกับเค้กดีๆสักชิ้นเพื่อฮีลใจตัวเอง",
        startBtn: "ฉันเอง “เค้ก” ก้อนนั้น",
        tapHint: "จิ้มกล่องเพื่อดูเค้กของคุณ!!",
        boxIntro: "พ่อครัววางกล่องเล็กๆ ลงบนโต๊ะแล้วบอกว่า... <br>“คุณไม่จำเป็นต้องรอโอกาสพิเศษ <br>แค่ในวันธรรมดาที่เหนื่อยล้า <br>คุณก็คู่ควรกับเค้กดีๆ สักชิ้นแล้ว”",
        resultLead: "เค้กที่อบเพื่อคุณในคืนนี้คือ...",
        downloadBtn: "ดาวน์โหลดรูป",
        shareIGBtn: "แชร์ลง IG Story",
        retryBtn: "กลับไปเล่นอีกรอบ",
        footerText: "เนื้อหานี้สร้างขึ้นสำหรับการแข่งขัน Crack the Cake เท่านั้น"
    },
    en: {
        startTitle: "Feeling Tired Today?<br>Let S&P Take Care of You",
        startDesc: "No need to wait for a special occasion. On an ordinary, exhausting day, you deserve a good piece of cake to heal your soul.",
        startBtn: "I am that “Cake”",
        tapHint: "Tap the box to open your cake!!",
        boxIntro: "The baker places a small box on the table and says... <br>“You don't need to wait for a special occasion. <br>On an ordinary, tiring day, <br>you deserve a good piece of cake.”",
        resultLead: "The cake baked specially for you tonight is...",
        downloadBtn: "Download Image",
        shareIGBtn: "Share to IG Story",
        retryBtn: "Play Again",
        footerText: "This content is created solely for the Crack the Cake competition."
    }
};

// =========================================================================
// 2. คลังข้อมูลคำถาม 2 ภาษา (Questions & Multilingual Intros)
// =========================================================================
const questions = [
    {
        intro: {
            th: [
                { text: "วันนี้เหนื่อยมากใช่ไหม...", img: "snp_cake2.png", btn: "ก็เหนื่อยนะ" },
                { text: "เรียนก็หนัก งานก็เยอะ บางทีก็ไม่รู้ด้วยซ้ำว่าเหนื่อยเพราะอะไร", img: "snp_cake3.png", btn: "เออจริง" },
                { text: "วันนี้ก็เหนื่อยมากจนเผลอหลับไป...", img: "snp_cake4.png", btn: "z Z z" },
                { text: "รู้สึกตัวอีกทีคุณก็เดินตามกลิ่นหอมหวานจนมาหยุดอยู่หน้าประตูบานนึง", img: "snp_cake3.png", btn: "ที่นี้ที่ไหนกัน!!!" },
                { text: "ร้านขนมเค้กล่ะ เหมือนพ่อครัวจะอบเค้กรอคุณอยู่นะ", img: "snp_cake6.png", btn: "เข้าไปในร้าน" },
                { text: "ก่อนอื่น พ่อครัวมีเรื่องอยากถามคุณนิดหน่อย ไม่ต้องเครียดที่จะตอบนะ แค่ตอบแบบที่มันเป็นคุณก็พอ", img: "snp_cake.png", btn: "พร้อมละ" }
            ],
            en: [
                { text: "Are you very tired today?...", img: "snp_cake2.png", btn: "Yeah, quite tired" },
                { text: "Heavy studying, endless tasks, sometimes you don't even know why you're so exhausted.", img: "snp_cake3.png", btn: "Totally true" },
                { text: "Today was so tiring that you accidentally fell asleep...", img: "snp_cake4.png", btn: "z Z z" },
                { text: "Waking up, you follow a sweet aroma until you stop in front of a door.", img: "snp_cake3.png", btn: "Where on earth am I?!" },
                { text: "It's a cake shop, and the baker seems to be baking a cake just for you.", img: "snp_cake6.png", btn: "Enter the shop" },
                { text: "First, the baker has a few questions for you. Don't stress, just answer in a way that is truly you.", img: "snp_cake.png", btn: "I'm ready" }
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
            th: [
                { text: "เจ้าของร้านเดินมาหาคุณเขายิ้มอย่างอบอุ่นแล้วถามขึ้นมาด้วยความใส่ใจ... วันนี้เป็นยังไงบ้าง", btn: "จะตอบอะไรดี" }
            ],
            en: [
                { text: "The baker walks up to you, smiles warmly, and asks with genuine care, 'How was your day?'", btn: "What should I say?" }
            ]
        },
        q: {
            th: "คุณตอบเขากลับไปว่า...",
            en: "You reply to him..."
        },
        a: {
            th: [
                { text: "“โอเคนะ แค่เหนื่อยนิดหน่อย แต่จัดการได้”", type: "butter" },
                { text: "“ไม่รู้เหมือนกัน บางทีแค่ต้องการอะไรสักอย่างที่ทำให้รู้สึกดีขึ้น”", type: "chiffon" },
                { text: "“เหนื่อยแต่ยังโอเค บางทีอาจต้องลองเปลี่ยนบรรยากาศ”", type: "layer" },
                { text: "“เหนื่อยมากเลย แต่พอได้มาที่นี่ก็รู้สึกดีขึ้นแล้ว”", type: "fruit" },
                { text: "“ไม่รู้สิ ถ้าได้ลองทำอะไรใหม่ๆ ที่ต่างออกไปคงรู้สึกดีขึ้น”", type: "choco" }
            ],
            en: [
                { text: "“I'm fine, just a bit tired but I can handle it.”", type: "butter" },
                { text: "“I don't know, maybe I just need something to make me feel better.”", type: "chiffon" },
                { text: "“Tired but doing okay. Maybe I need a change of scenery.”", type: "layer" },
                { text: "“So exhausted, but being here already makes me feel better.”", type: "fruit" },
                { text: "“Not sure, doing something completely new might help.”", type: "choco" }
            ]
        }
    },
    {
        intro: {
            th: [
                { text: "พ่อครัวพาคุณเดินลึกเข้าไปผ่านประตูเล็กๆ บานหนึ่ง ข้างในมีขนมหลายอย่างวางเรียงรายอยู่", btn: "เดินตามเขาเข้าไป" },
                { text: "เขาหันมาบอกกับคุณว่า “ปกติผมไม่ค่อยชวนใครเข้ามามุมนี้ของร้านนะ...”", btn: ". . ." }
            ],
            en: [
                { text: "The baker leads you deeper inside through a small door. Inside, various treats await.", btn: "Follow him in" },
                { text: "He turns and tells you, “Usually, I rarely invite anyone into this corner of the shop...”", btn: ". . ." }
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
                { text: "เจ้าของร้านชี้ไปที่โต๊ะทำขนมตรงกลางห้องแล้วบอกว่า “คืนนี้คุณจะได้เค้กที่เป็นคุณที่สุด”", btn: ". . ." },
                { text: "“คุณช่วยบอกผมหน่อย... มีโมเมนต์ไหนในวันธรรมดาๆ ที่คุณรู้สึกว่า นี่แหละคือตัวคุณ”", btn: "ครุ่นคิดสักพัก" }
            ],
            en: [
                { text: "The baker walks to the prep table in the center and says, “Tonight, I will bake the cake that defines you best.”", btn: ". . ." },
                { text: "“Tell me... is there a moment on an ordinary day where you feel truly yourself?”", btn: "Reflect for a moment" }
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
                { text: "ในขณะที่รอ คุณเหม่อมองออกไปนอกหน้าต่าง เห็นท้องฟ้าตอนเย็นที่กำลังเปลี่ยนสีแสนละมุน", btn: "เหม่อมองฟ้า" }
            ],
            en: [
                { text: "The baker smiles and carefully begins to bake your cake...", btn: "Wait patiently" },
                { text: "While waiting, you look out the window, watching the soft evening sky changing colors.", btn: "Gaze at the sky" }
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
                { text: "ถ้าได้มาที่นี้ในบรรยากาศอื่นๆ มาพบผู้คนใหม่ๆความรู้สึกจะเป็นยังไงนะ", type: "layer" },
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

// =========================================================================
// 3. คลังข้อมูลรูปภาพ Artwork ทั้งหมด 5 รสชาติ (10 ไฟล์รูปภาพ)
// 🌟 อัปเดตผูก Path ตามรูปโครงสร้างโฟลเดอร์ล่าสุดของน้าเรียบร้อยครับ!
// =========================================================================
const results = {
    butter: { 
        th: { img: "butter_th.png" }, 
        en: { img: "butter_en.png" }
    },
    chiffon: { 
        th: { img: "chiffon_th.png" }, 
        en: { img: "chiffon_en.png" }
    },
    layer: { 
        th: { img: "layer_th.png" }, 
        en: { img: "layer_en.png" }
    },
    fruit: { 
        th: { img: "fruit_th.png" }, 
        en: { img: "fruit_en.png" }
    },
    choco: { 
        th: { img: "choco_th.png" }, 
        en: { img: "choco_en.png" }
    }
};

// ตัวแปรควบคุมระบบเกม
let currentLang = 'th';
let currentQuestionIndex = 0;
let currentIntroIndex = 0; 
let scores = { butter: 0, layer: 0, chiffon: 0, fruit: 0, choco: 0 };
let typewriterInterval; 
let currentWinningType = 'butter';

// ตัวแปรสำหรับระบบเคาะกล่องเค้ก
let boxTapCount = 0;
const targetTaps = 10; 

// =========================================================================
// 4. ฟังก์ชันระบบเปลี่ยนภาษา (Language Switching Engine)
// =========================================================================
function changeLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-lang-${lang}`).classList.add('active');
    
    document.getElementById('start-title').innerHTML = translations[lang].startTitle;
    document.getElementById('start-desc').innerText = translations[lang].startDesc;
    document.getElementById('start-quiz-btn').innerText = translations[lang].startBtn;
    
    document.getElementById('tap-hint-msg').innerText = translations[lang].tapHint;
    document.getElementById('result-lead-text').innerText = translations[lang].resultLead;
    document.getElementById('download-btn-text').innerText = translations[lang].downloadBtn;
    document.getElementById('share-ig-btn-text').innerText = translations[lang].shareIGBtn;
    document.getElementById('retry-btn-text').innerText = translations[lang].retryBtn;
    
    if (document.getElementById('footer-competition-text')) {
        document.getElementById('footer-competition-text').innerText = translations[lang].footerText;
    }
    
    if (document.getElementById('result-screen').classList.contains('active')) {
        const cakeImageElement = document.getElementById('result-cake-image');
        if (cakeImageElement) {
            cakeImageElement.src = results[currentWinningType][currentLang].img;
        }
    }
    
    if (document.getElementById('intermission-screen').classList.contains('active')) {
        showIntermission();
    }
    if (document.getElementById('box-tap-screen').classList.contains('active')) {
        showBoxIntroScreen();
    }
}

function showBoxIntroScreen() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('intermission-screen').classList.remove('active');
    document.getElementById('result-screen').classList.remove('active');
    
    const boxScreen = document.getElementById('box-tap-screen');
    if (boxScreen) boxScreen.classList.add('active');
    
    boxTapCount = 0;
    if(document.getElementById('tap-progress-fill')) document.getElementById('tap-progress-fill').style.width = "0%";
    if(document.getElementById('tap-count-text')) document.getElementById('tap-count-text').innerText = boxTapCount;
    
    const boxIntroText = translations[currentLang].boxIntro;
    const textContainer = document.getElementById('box-story-text');
    if(!textContainer) return;
    
    textContainer.innerHTML = '<span class="cursor"></span>'; 
    let index = 0;
    clearInterval(typewriterInterval); 

    typewriterInterval = setInterval(() => {
        if (index < boxIntroText.length) {
            textContainer.innerHTML = boxIntroText.substring(0, index + 1) + '<span class="cursor"></span>';
            index++;
        } else {
            clearInterval(typewriterInterval);
        }
    }, 40); 
}

function tapCakeBox() {
    if (boxTapCount < targetTaps) {
        boxTapCount++;
        if(document.getElementById('tap-count-text')) document.getElementById('tap-count-text').innerText = boxTapCount;
        const progressPercentage = (boxTapCount / targetTaps) * 100;
        if(document.getElementById('tap-progress-fill')) document.getElementById('tap-progress-fill').style.width = `${progressPercentage}%`;
        
        const boxImg = document.getElementById('cake-box-img');
        if (boxImg) {
            boxImg.classList.add('shake-animation');
            setTimeout(() => boxImg.classList.remove('shake-animation'), 200);
        }
        
        if (boxTapCount >= targetTaps) {
            setTimeout(() => {
                document.getElementById('box-tap-screen').classList.remove('active');
                showResult(); 
            }, 300);
        }
    }
}

function startQuiz() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('lang-switcher').style.display = 'none'; 
    currentIntroIndex = 0; 
    currentQuestionIndex = 0;
    showIntermission(); 
}

function showIntermission() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    if (currentQuestionIndex >= questions.length) {
        showBoxIntroScreen();
        return;
    }

    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('intermission-screen').classList.add('active');
    
    const nextBtn = document.getElementById('next-to-quiz-btn');
    nextBtn.style.display = "none"; 

    const currentQ = questions[currentQuestionIndex];
    const localizedIntro = currentQ.intro[currentLang];
    
    let fullText = "";
    let currentImg = ""; 
    let buttonText = currentLang === 'th' ? "เดินต่อ" : "Continue";  

    if (Array.isArray(localizedIntro)) {
        const sceneData = localizedIntro[currentIntroIndex];
        if (typeof sceneData === 'object') {
            fullText = sceneData.text;
            currentImg = sceneData.img || ""; 
            buttonText = sceneData.btn || buttonText;
        } else {
            fullText = sceneData;
        }
    }
    
    const intermissionImgElement = document.getElementById('intermission-img');
    if (intermissionImgElement) {
        if (currentImg && currentImg.trim() !== "") {
            intermissionImgElement.src = currentImg;
            intermissionImgElement.style.display = "block"; 
        } else {
            intermissionImgElement.style.display = "none";  
        }
    }

    nextBtn.innerText = buttonText;
    const textContainer = document.getElementById('typewriter-text');
    if(textContainer) {
        textContainer.innerHTML = '<span class="cursor"></span>'; 
        let index = 0;
        clearInterval(typewriterInterval); 

        typewriterInterval = setInterval(() => {
            if (index < fullText.length) {
                textContainer.innerHTML = fullText.substring(0, index + 1) + '<span class="cursor"></span>';
                index++;
            } else {
                clearInterval(typewriterInterval);
                nextBtn.style.display = "inline-block";
            }
        }, 40); 
    }
}

function goToActualQuiz() {
    const currentQ = questions[currentQuestionIndex];
    const localizedIntro = currentQ.intro[currentLang];
    
    if (Array.isArray(localizedIntro) && currentIntroIndex < localizedIntro.length - 1) {
        currentIntroIndex++; 
        showIntermission();  
    } else {
        currentIntroIndex = 0; 
        
        document.getElementById('intermission-screen').classList.remove('active');
        document.getElementById('quiz-screen').classList.add('active');

        document.getElementById('question-text').innerText = currentQ.q[currentLang];
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        currentQ.a[currentLang].forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('option-btn');
            button.onclick = () => selectAnswer(answer.type);
            optionsContainer.appendChild(button);
        });
    }
}

function selectAnswer(type) {
    scores[type]++;
    currentQuestionIndex++;
    document.getElementById('quiz-screen').classList.remove('active');
    
    if (currentQuestionIndex >= questions.length) {
        showBoxIntroScreen();
    } else {
        showIntermission();
    }
}

// =========================================================================
// 5. ฟังก์ชันแสดงผลหน้า Result ฉบับดึงรูปภาพแยกรายภาษา
// =========================================================================
function showResult() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('intermission-screen').classList.remove('active'); 
    if(document.getElementById('box-tap-screen')) document.getElementById('box-tap-screen').classList.remove('active');
    
    document.getElementById('result-screen').classList.add('active');
    document.getElementById('progress').style.width = `100%`;

    let maxType = 'butter';
    let maxScore = -1;
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxType = type;
        }
    }

    currentWinningType = maxType;

    const finalResultImage = results[maxType][currentLang].img;
    const cakeImageElement = document.getElementById('result-cake-image');
    if (cakeImageElement) {
        cakeImageElement.src = finalResultImage;
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    currentIntroIndex = 0;
    scores = { butter: 0, layer: 0, chiffon: 0, fruit: 0, choco: 0 };
    document.getElementById('result-screen').classList.remove('active');
    if(document.getElementById('box-tap-screen')) document.getElementById('box-tap-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('lang-switcher').style.display = 'flex'; 
    document.getElementById('progress').style.width = `0%`;
}

function downloadTicket() {
    const area = document.getElementById('download-area');
    html2canvas(area, { useCORS: true, backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = `My_SP_Cake_${currentWinningType}_${currentLang}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}

function shareToInstagramStory() {
    const area = document.getElementById('download-area');
    
    html2canvas(area, { useCORS: true, backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = `My_SP_Cake_${currentWinningType}_${currentLang}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        setTimeout(() => {
            const instagramStoryUrl = "instagram://story-camera";
            const webInstagramUrl = "https://www.instagram.com/";

            if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                window.location.href = instagramStoryUrl;
                
                setTimeout(() => {
                    if (!document.hidden) {
                        window.open(webInstagramUrl, '_blank');
                    }
                }, 1500);
            } else {
                window.open(webInstagramUrl, '_blank');
            }
        }, 500);
    });
}