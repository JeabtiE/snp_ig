// =========================================================================
// 1. คลังข้อมูลคำถาม (แยกส่วนสตอรี่หน้าคั่น และคำถามจริงออกจากกันเพื่อความกระชับ)
// =========================================================================
const questions = [
    {
        intro: [
            {
                text: "วันนี้เหนื่อยมากใช่ไหมคุณ...",
                img: "snp_cake2.png", 
                btn: "เหนื่อยนะ"
            },
            {
                text: "เรียนก็หนัก งานก็เยอะ บางทีก็ไม่รู้ด้วยซ้ำว่าเหนื่อยเพราะอะไร แค่รู้ว่า...วันนี้ต้องการอะไรบางอย่างใช่ไหมล่ะ",
                img: "snp_cake3.png", 
                btn: "เออจริง"
            },
            {
                text: "และแล้วคุณก็เผลอหลับไป...",
                img: "snp_cake4.png",   
                btn: "อ่าวไหงงั้น"
            },
            {
                text: "รู้สึกตัวอีกทีคุณก็ได้กลิ่นบางอย่างหอมอุ่น หอมหวานเหมือนมีใครกำลังอบขนมอยู่ใกล้ๆ คุณเดินตามกลิ่นนั้น...จนมาหยุดอยู่หน้าประตูบานนึง",
                img: "snp_cake3.png", 
                btn: "ร้านไรอ่ะ"
            },
            {
                text: "ร้านขนมเค้กล่ะ เหมือนพ่อครัวจะอบขนมรอคุณอยู่นะ สงสัยไหมว่าคุณจะได้กินเค้กอะไร...",
                img: "snp_cake6.png", 
                btn: "เปิดประตูเข้าไปดูกัน!!"
            },
            {
                text: "แต่พ่อครัวมีเรื่องอยากถามคุณนิดหน่อย ไม่ต้องเครียดที่จะตอบนะ แค่ตอบแบบที่มันเป็นคุณก็พอ",
                img: "snp_cake.png", 
                btn: "พร้อมละ!!"
            },
        ],
        q: "เมื่อคุณเดินเข้าไปในร้านแสงไฟอุ่นๆส่องลงมา มีกลิ่นหอมหลายอย่างผสมกันอยู่ คุณจะสังเกตเห็นอะไรเป็นอย่างแรก",
        a: [
            { text: "ชั้นวางขนมที่เรียงกันอย่างเป็นระเบียบ สวยงามและดูน่าเชื่อถือ", type: "butter" }, 
            { text: "มุมเล็กๆ ริมหน้าต่างที่มีแสงอ่อนๆ ส่องผ่านม่านบางๆ", type: "chiffon" }, 
            { text: "เสียงเพลงเบาๆ และกลิ่นขนมที่ทำให้อยากรู้ว่ามีอะไรอีกบ้าง", type: "layer" }, 
            { text: "คนอบขนมที่กำลังยิ้มและดูเหมือนรอให้คุณมาถึงอยู่", type: "freshcream" }, 
            { text: "กล่องลึกลับมุมหนึ่งที่มีฝาปิดอยู่และไม่มีป้ายชื่อ", type: "chocolate" } 
        ]
    },
    {
        intro: [
            {
                text: "เจ้าของร้านเดินมาหาคุณเขายิ้มอย่างอบอุ่นแล้วถามขึ้นมาด้วยความใส่ใจ... วันนี้เป็นยังไงบ้าง",
                btn: "จะตอบอะไรดี"
            },
        ],
        q: "คุณตอบเขากลับไปว่า...",
        a: [
            { text: "“โอเคนะ แค่เหนื่อยหน่อย แต่จัดการได้”", type: "butter" }, 
            { text: "“ไม่รู้เหมือนกัน บางทีแค่ต้องการอะไรสักอย่างที่ทำให้รู้สึกดีขึ้น”", type: "chiffon" }, 
            { text: "“เหนื่อยแต่ยังโอเค บางทีอาจต้องลองเปลี่ยนบรรยากาศ”", type: "layer" }, 
            { text: "“เหนื่อยมากเลย แต่พอได้มาที่นี่ก็รู้สึกดีขึ้นแล้ว”", type: "freshcream" }, 
            { text: "“ไม่รู้สิ ถ้าได้ทำอะไรใหม่ๆที่ต่างออกไปคงรู้สึกดีขึ้น”", type: "chocolate" } 
        ]
    },
    {
        intro: [
            {
                text: "เจ้าของร้านพาคุณเดินลึกเข้าไปผ่านประตูเล็กๆ อีกบานหนึ่ง ข้างในมีขนมหลายอย่างวางเรียงรออยู่",
                btn: "เดินตามเข้าไป"
            },
            {
                text: "เขาหันมาบอกกับคุณว่า “ที่นี่คือส่วนที่คนส่วนใหญ่ไม่ได้เข้ามาถึงนะ...”",
                btn: ". . ."
            }
        ],
        q: "ในจังหวะนั้นคุณรู้สึกยังไง?",
        a: [
            { text: "ตื่นเต้นและอยากรู้ว่ามีอะไรพิเศษกว่าข้างนอก", type: "layer" }, 
            { text: "อบอุ่นใจ เหมือนได้รับความไว้วางใจบางอย่าง", type: "freshcream" }, 
            { text: "สงบและรู้สึกเหมือนได้หายใจลึกๆ สักที", type: "chiffon" }, 
            { text: "มั่นใจว่าตัวเองมาถูกที่แล้ว", type: "butter" }, 
            { text: "ชอบที่มันไม่เหมือนที่อื่น และอยากสำรวจทุกซอกทุกมุม", type: "chocolate" } 
        ]
    },
    {
        intro: [
            {
                text: "เจ้าของร้านชี้ไปที่โต๊ะทำขนมตรงกลางห้องแล้วบอกว่า “คืนนี้คุณจะได้เค้กที่เป็นคุณที่สุด”",
                btn: ". . ."
            },
            {
                text: "“แต่ก่อนอื่น บอกผมหน่อย... มีช่วงเวลาไหนในวันธรรมดาๆ ที่คุณรู้สึกว่า นี่แหละคือตัวคุณจริงๆมั้ย”",
                btn: "ทบทวนตัวเองและตอบ"
            }
        ],
        q: "ช่วงเวลาที่เป็นตัวคุณที่สุดคือตอนไหน",
        a: [
            { text: "ตอนที่ได้ทำสิ่งที่ตั้งใจไว้สำเร็จ แม้จะเล็กน้อยแค่ไหนก็ตาม", type: "butter" }, 
            { text: "ตอนที่อยู่คนเดียวและได้คิดอะไรยาวๆ โดยไม่มีใครรบกวน", type: "chiffon" }, 
            { text: "ตอนที่ได้เจอสิ่งใหม่หรือคนใหม่ที่ไม่เคยรู้จักมาก่อน", type: "layer" }, 
            { text: "ตอนที่ได้เห็นคนที่รักมีความสุขเพราะสิ่งที่ตัวเองทำ", type: "freshcream" }, 
            { text: "ตอนที่ตัดสินใจทำอะไรตามใจตัวเองโดยไม่ต้องอธิบายให้ใครฟัง", type: "chocolate" } 
        ]
    },
    {
        intro: [
            {
                text: "เจ้าของร้านยิ้มและเริ่มลงมืออบเค้กให้คุณอย่างพิถีพิถัน...",
                btn: "นั่งรออย่างใจเย็น"
            },
            {
                text: "ในขณะที่รอ คุณมองออกไปนอกหน้าต่างเห็นท้องฟ้าตอนเย็นที่กำลังเปลี่ยนสีแสนละมุน",
                btn: "มองท้องฟ้าด้านนอก"
            }
        ],
        q: "คุณกำลังนึกถึงอะไรอยู่ในตอนนั้น",
        a: [
            { text: "นึกถึงสิ่งที่ยังต้องทำ และรู้สึกว่าพอได้พักแล้วจะกลับไปสู้ต่อได้", type: "butter" }, 
            { text: "นึกถึงความรู้สึกที่อยากเก็บเอาไว้ เหมือนช่วงเวลานี้มีความหมายบางอย่าง", type: "chiffon" }, 
            { text: "นึกถึงคนที่อยากพามาที่นี่ด้วยกัน", type: "layer" }, 
            { text: "นึกถึงคนที่รักและอยากให้เขามีวันที่ดีเหมือนกัน", type: "freshcream" }, 
            { text: "ไม่ได้คิดอะไรมาก แค่อยู่กับความรู้สึกตอนนี้ให้เต็มที่", type: "chocolate" } 
        ]
    }
];

// =========================================================================
// 2. คลังข้อมูลผลลัพธ์รสชาติเค้ก
// =========================================================================
const results = {
    butter: { 
        name: "Butter Cake", 
        icon: "🧈", 
        desc: "<b>#ClassicNeverFails</b><br>คุณคือความมั่นคงในโลกที่วุ่นวาย ไม่วิ่งตามกระแสชั่วคราว แต่เป็นคนที่ทุกคนพึ่งพาได้เสมอ นัดแล้วมาแน่ อยู่ข้างๆ ในวันที่แย่ เหมือน Butter Cake ของ S&P ที่เรียบง่ายแต่ขาดไม่ได้ในทุกวัน<br>" 
    },
    layer: { 
        name: "Layer Cake", 
        icon: "🍰", 
        desc: "<b>#MoreLayersMoreStories</b><br>คุณมีความอยากรู้อยากเห็นสูง ชอบค้นหาประสบการณ์และเปลี่ยนบรรยากาศ ในตัวคุณมีหลายด้าน หลายอารมณ์ ยิ่งคนได้รู้จัก ยิ่งพบเรื่องราวน่าค้นหา เหมือน Layer Cake ที่ทุกชั้นซ่อนความอร่อยไม่ซ้ำกันเอาไว้!<br>" 
    },
    chiffon: { 
        name: "Sponge & Chiffon Cake", 
        icon: "☁️", 
        desc: "<b>#SoftHeartsChooseSoftCakes</b><br>คุณรู้สึกกับโลกได้ลึกซึ้งกว่าคนอื่น ฟังเพลงแล้วอิน จำความรู้สึกเล็กๆ ได้ดี คุณคือ Safe Zone ที่คอยเปลี่ยนหัวใจคนรอบข้างด้วยความอ่อนโยน เหมือนเนื้อเค้ก Chiffon ที่นุ่มเบา ไม่ตะโกนดึงความสนใจ แต่ชิมเมื่อไหร่ก็ประทับใจลึกๆ<br><br>" 
    },
    freshcream: { 
        name: "Fresh Cream & Fruit Cake", 
        icon: "🍓", 
        desc: "<b>#SweetPeopleChooseFreshThings</b><br>คุณคือพลังงานบวกของคนรอบตัว ชอบดูแล คอยถามว่า 'ถึงบ้านยัง' อยู่ด้วยแล้วสบายใจและมีความสุขที่สุด เหมือนเค้กครีมสดและผลไม้ S&P ที่เปลี่ยนวันธรรมดาๆ ที่เหนื่อยล้า ให้กลายเป็นวันที่ดีขึ้นมาได้<br>" 
    },
    chocolate: { 
        name: "Cookies & Cream / Chocolate", 
        icon: "🍫", 
        desc: "<b>#NoRulesJustCravings</b><br>คุณใช้ชีวิตตามความรู้สึก ไม่ชอบถูกจำกัดกรอบ อยากกินเค้กตอนตีสองก็กิน! เป็นตัวของตัวเองชัดเจนและตรงไปตรงมา เหมือนรสชาติช็อกโกแลตเข้มข้นจัดจ้านที่คุณเลือกเพราะหัวใจเรียกร้องล้วนๆ<br><br>" 
    }
};

// ตัวแปรควบคุมระบบเกม
let currentQuestionIndex = 0;
let currentIntroIndex = 0; 
let scores = { butter: 0, layer: 0, chiffon: 0, freshcream: 0, chocolate: 0 };
let typewriterInterval; 

// ตัวแปรสำหรับระบบเคาะกล่องเค้ก
let boxTapCount = 0;
const targetTaps = 10; 

// ฟังก์ชันเปิดหน้าพิมพ์เรื่องราวก่อนได้รับกล่อง (ปรับปรุงความปลอดภัย มั่นใจ 100%)
function showBoxIntroScreen() {
    // ซ่อนหน้าจอหลักอื่นๆ ทั้งหมดก่อน
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('intermission-screen').classList.remove('active');
    document.getElementById('result-screen').classList.remove('active');
    
    // เปิดหน้าแกะกล่องเค้ก
    const boxScreen = document.getElementById('box-tap-screen');
    if (boxScreen) {
        boxScreen.classList.add('active');
    } else {
        console.error("หาหน้าจอ id='box-tap-screen' ใน HTML ไม่เจอครับน้า!");
        return;
    }
    
    // รีเซ็ตค่าการกดและแถบความคืบหน้า
    boxTapCount = 0;
    if(document.getElementById('tap-progress-fill')) document.getElementById('tap-progress-fill').style.width = "0%";
    if(document.getElementById('tap-count-text')) document.getElementById('tap-count-text').innerText = boxTapCount;
    
    // ข้อความซึ้งๆ ที่น้าต้องการให้พิมพ์วิ่ง
    const boxIntroText = "“เจ้าของร้านวางกล่องเล็กๆ ลงบนโต๊ะต่อหน้าคุณแล้วบอกว่า... คุณไม่จำเป็นต้องรอให้ถึงวันเกิด ไม่ต้องรอโอกาสพิเศษ แค่วันธรรมดาๆที่เหนื่อยล้า คุณก็คู่ควรกับเค้กดีๆสักชิ้นแล้ว”";
    
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

// ฟังก์ชันเมื่อผู้เล่นกดจิ้มที่รูปกล่องเค้ก รัวๆ
function tapCakeBox() {
    if (boxTapCount < targetTaps) {
        boxTapCount++;
        
        // อัปเดตตัวเลขแสดงผลและหลอด Progress
        if(document.getElementById('tap-count-text')) document.getElementById('tap-count-text').innerText = boxTapCount;
        const progressPercentage = (boxTapCount / targetTaps) * 100;
        if(document.getElementById('tap-progress-fill')) document.getElementById('tap-progress-fill').style.width = `${progressPercentage}%`;
        
        // เพิ่มลูกเล่นเอฟเฟกต์สั่น ดุ๊กดิ๊ก ตอนกด
        const boxImg = document.getElementById('cake-box-img');
        if (boxImg) {
            boxImg.classList.add('shake-animation');
            setTimeout(() => boxImg.classList.remove('shake-animation'), 200);
        }
        
        // ถ้ากดครบตามจำนวนที่กำหนดแล้ว ให้เด้งไปหน้าผลลัพธ์สรุปทันที
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
    currentIntroIndex = 0; 
    currentQuestionIndex = 0;
    showIntermission(); 
}

function showIntermission() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    // ********** [จุดแก้บั๊ก 1]: ถ้าทำควิซครบทุกข้อแล้ว ห้ามไปโชว์หน้าตั๋วผลลัพธ์ ให้เลี้ยวไปที่หน้าเปิดกล่องเค้กทันที! **********
    if (currentQuestionIndex >= questions.length) {
        showBoxIntroScreen();
        return;
    }

    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('intermission-screen').classList.add('active');
    
    const nextBtn = document.getElementById('next-to-quiz-btn');
    nextBtn.style.display = "none"; 

    const currentQ = questions[currentQuestionIndex];
    
    let fullText = "";
    let currentImg = ""; 
    let buttonText = "เดินต่อ";  

    if (Array.isArray(currentQ.intro)) {
        const sceneData = currentQ.intro[currentIntroIndex];
        if (typeof sceneData === 'object') {
            fullText = sceneData.text;
            currentImg = sceneData.img || ""; 
            buttonText = sceneData.btn || "เดินต่อ";
        } else {
            fullText = sceneData;
        }
    } else {
        fullText = currentQ.intro;
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
    
    if (Array.isArray(currentQ.intro) && currentIntroIndex < currentQ.intro.length - 1) {
        currentIntroIndex++; 
        showIntermission();  
    } else {
        currentIntroIndex = 0; 
        
        document.getElementById('intermission-screen').classList.remove('active');
        document.getElementById('quiz-screen').classList.add('active');

        document.getElementById('question-text').innerText = currentQ.q;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        currentQ.a.forEach(answer => {
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
    
    // ********** [จุดแก้บั๊ก 2]: เช็กหลังคลิกเลือกคำตอบ ถ้าครบ 5 ข้อแล้ว ให้ยิงตรงไปหน้ากล่องเค้กโดยตรง **********
    if (currentQuestionIndex >= questions.length) {
        showBoxIntroScreen();
    } else {
        showIntermission();
    }
}

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

    const finalResult = results[maxType];
    document.getElementById('cake-icon').innerText = finalResult.icon;
    document.getElementById('cake-name').innerText = finalResult.name;
    document.getElementById('cake-desc').innerHTML = finalResult.desc;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    currentIntroIndex = 0;
    scores = { butter: 0, layer: 0, chiffon: 0, freshcream: 0, chocolate: 0 };
    document.getElementById('result-screen').classList.remove('active');
    if(document.getElementById('box-tap-screen')) document.getElementById('box-tap-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('progress').style.width = `0%`;
}

// =========================================================================
// 4. ระบบดาวน์โหลดรูปภาพตั๋วผลลัพธ์ (HTML to Image)
// =========================================================================
function downloadTicket() {
    const targetElement = document.getElementById("download-area");
    const downloadButton = document.querySelector(".btn-download");
    
    downloadButton.innerText = "กำลังปรุงรูปภาพ...";
    downloadButton.style.opacity = "0.7";
    downloadButton.disabled = true;

    html2canvas(targetElement, {
        backgroundColor: "#1A1D24", 
        scale: 2,                                  
        logging: false,
        useCORS: true              
    }).then(canvas => {
        const imageURL = canvas.toDataURL("image/png");
        const createDownloadLink = document.createElement("a");
        
        createDownloadLink.download = "sp-everyday-cake-ticket.png"; 
        createDownloadLink.href = imageURL;
        createDownloadLink.click(); 

        downloadButton.innerText = "ดาวน์โหลดรูปเสร็จสิ้น";
        downloadButton.style.opacity = "1";
        downloadButton.disabled = false;
    }).catch(error => {
        console.error("เกิดข้อผิดพลาดในการดาวน์โหลดรูปภาพ:", error);
        alert("ขออภัย ระบบไม่สามารถดาวน์โหลดรูปภาพได้ในขณะนี้ กรุณาแคปหน้าจอแทนนะครับ");
        downloadButton.innerText = "ดาวน์โหลดรูปเสร็จสิ้น";
        downloadButton.style.opacity = "1";
        downloadButton.disabled = false;
    });
}
