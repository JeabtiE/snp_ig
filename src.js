// =========================================================================
// 1. คลังข้อมูลคำถามและตัวเลือกตอบ (ธีมการเดินทางฮีลใจ - ช้อยส์สั้น กระชับ)
// =========================================================================
const questions = [
    {
        q: "ในวันที่สะสมความเหนื่อยล้ามาทั้งวัน คุณเดินหลงเข้าไปในซอยลึก แล้วเจอร้านเบเกอรี่ลับเปิดอยู่ แสงไฟในร้านที่ดึงดูดคุณเป็นแบบไหน?",
        a: [
            { text: "ไฟสีส้มสลัวๆ เงียบสงบ อบอุ่นใจ", type: "chiffon" },
            { text: "ไฟนีออนสีสดใส ดูสนุกและมีชีวิตชีวา", type: "layer" },
            { text: "ไฟคลาสสิก นิ่ง มั่นคง มองแล้วปลอดภัย", type: "butter" },
            { text: "ไฟสีนวลตา แฝงความละมุนและเป็นกันเอง", type: "freshcream" },
            { text: "ไฟสีสลัวลึกลับ ชวนให้ค้นหาดูลื่นไหล", type: "chocolate" }
        ]
    },
    {
        q: "เมื่อผลักประตูเข้าไป กลิ่นหอมแรกที่ลอยมาแตะจมูกและฮีลใจคุณได้ทันที คือกลิ่นอะไร?",
        a: [
            { text: "กลิ่นเนยสดอบใหม่ หอมกรุ่น สม่ำเสมอ", type: "butter" },
            { text: "กลิ่นผลไม้รสเปรี้ยวอมหวาน สดชื่นกระปรี้กระเปร่า", type: "freshcream" },
            { text: "กลิ่นวานิลลาผสมอบเชย มีมิติหลายชั้น", type: "layer" },
            { text: "กลิ่นช็อกโกแลตเข้มข้น หอมดุดันตามใจตัวเอง", type: "chocolate" },
            { text: "กลิ่นนมอุ่นๆ ละมุน เบาสบาย ละลายในใจ", type: "chiffon" }
        ]
    },
    {
        q: "เจ้าของร้านเดินออกมาต้อนรับด้วยรอยยิ้ม แล้วทักคุณด้วยประโยคที่ทำให้อารมณ์ดิ่งๆ ของคุณหายไป...",
        a: [
            { text: "“เหนื่อยมาทั้งวันแล้วนะ นั่งพักผ่อนก่อนสิ”", type: "chiffon" },
            { text: "“เก่งมากแล้วสำหรับวันนี้ มาหาอะไรสนุกๆ ทำกัน”", type: "layer" },
            { text: "“วันนี้ไม่เป็นไรนะ วันพรุ่งนี้เริ่มใหม่ได้เสมอ”", type: "butter" },
            { text: "“ดีใจจังที่ได้เจอคุณ มีอะไรระบายให้ฟังได้นะ”", type: "freshcream" },
            { text: "“ช่างหัวกฎเกณฑ์โลกภายนอกเถอะ ที่นี่คือพื้นที่ของคุณ”", type: "chocolate" }
        ]
    },
    {
        q: "บนตู้กระจก มีเค้กชิ้นเล็กพอดีคำ (Everyday Cake) วางอยู่ คุณเลือกหยิบชิ้นไหนแบบไม่ต้องคิด?",
        a: [
            { text: "ชิ้นที่หน้าตาเรียบง่ายที่สุด แต่รู้ว่าอร่อยชัวร์", type: "butter" },
            { text: "ชิ้นที่มีสีสันตัดกันหลายชั้น น่าทดลองชิม", type: "layer" },
            { text: "ชิ้นที่ดูนุ่มฟู เบาๆ สบายตา", type: "chiffon" },
            { text: "ชิ้นที่มีผลไม้สดท็อปอยู่ข้างบน ดูสดชื่น", type: "freshcream" },
            { text: "ชิ้นสีเข้มจัดจ้าน ดูดุดัน น่าดึงดูด", type: "chocolate" }
        ]
    },
    {
        q: "เมื่อทานเค้กชิ้นนั้นเข้าไป ความรู้สึกแรกที่แผ่ซ่านในใจคุณคืออะไร?",
        a: [
            { text: "ความอบอุ่น ปลอดภัย เหมือนได้กลับบ้าน", type: "butter" },
            { text: "ความตื่นเต้น มีพลัง อยากออกไปเจอโลกกว้าง", type: "layer" },
            { text: "ความโล่งใจ เบาสบาย ปล่อยวางทุกเรื่องเครียด", type: "chiffon" },
            { text: "ความสุขใจ อิ่มเอม อยากแบ่งปันให้คนรัก", type: "freshcream" },
            { text: "ความสะใจ เป็นตัวเอง ปลดปล่อยอิสระเต็มที่", type: "chocolate" }
        ]
    }
];

// =========================================================================
// 2. คลังข้อมูลผลลัพธ์รสชาติเค้ก (อิงตามข้อมูลกลุ่มเค้ก S&P และ MBTI)
// =========================================================================
const results = {
    butter: { 
        name: "Butter Cake - The Achiever", 
        icon: "🧈", 
        desc: "<b>#ClassicNeverFails</b><br>คุณคือความมั่นคงในโลกที่วุ่นวาย ไม่ตามกระแส เป็นคนที่ทุกคนพึ่งพาได้เสมอ นัดแล้วมาแน่ อยู่ข้างๆ ในวันที่แย่ เหมือน Butter Cake ของ S&P ที่เรียบง่ายแต่ขาดไม่ได้!<br><br><b>รสชาติของคุณ:</b> Butter Vanilla, Coffee, Chocolate" 
    },
    layer: { 
        name: "Layer Cake - The Social Explorer", 
        icon: "🍰", 
        desc: "<b>#MoreLayersMoreStories</b><br>คุณมีความอยากรู้อยากเห็นสูง ชอบค้นหาประสบการณ์ใหม่ๆ มีหลายด้าน หลายอารมณ์ ยิ่งรู้จักยิ่งมีเรื่องราวน่าค้นหา เหมือน Layer Cake ที่ทุกชั้นมีรายละเอียดไม่ซ้ำกัน!<br><br><b>รสชาติของคุณ:</b> Layer Vanilla, Pandan, Orange" 
    },
    chiffon: { 
        name: "Sponge & Chiffon Cake - The Dreamer", 
        icon: "☁️", 
        desc: "<b>#SoftHeartsChooseSoftCakes</b><br>คุณรู้สึกกับโลกได้ลึกซึ้งกว่าคนอื่น เป็น Safe Zone ที่คอยเปลี่ยนหัวใจคนรอบข้างด้วยความอ่อนโยน เหมือนเนื้อเค้ก Chiffon และ Sponge ที่นุ่มเบา ไม่ตะโกนดึงความสนใจ แต่ชิมเมื่อไหร่ก็ประทับใจ!<br><br><b>รสชาติของคุณ:</b> Black Forest, Chocolate Fudge, Hokkaido" 
    },
    freshcream: { 
        name: "Fresh Cream & Fruit Cake - The Optimist", 
        icon: "🍓", 
        desc: "<b>#SweetPeopleChooseFreshThings</b><br>คุณคือพลังงานบวกของคนรอบตัว ชอบดูแล คอยถามว่า 'ถึงบ้านยัง' อยู่ด้วยแล้วสบายใจที่สุด เหมือนเค้กครีมสดและผลไม้ S&P ที่เปลี่ยนวันธรรมดาให้กลายเป็นวันที่ดีขึ้น!<br><br><b>รสชาติของคุณ:</b> Strawberry, Blueberry, Mango, Young Coconut" 
    },
    chocolate: { 
        name: "Cookies & Cream / Chocolate Lovers - The Indulgent Rebel", 
        icon: "🍫", 
        desc: "<b>#NoRulesJustCravings</b><br>คุณใช้ชีวิตตามความรู้สึก ไม่ชอบถูกจำกัดกรอบ อยากกินเค้กตอนตีสองก็กิน! เป็นตัวของตัวเองชัดเจน เหมือนรสชาติช็อกโกแลตและคุกกี้แอนด์ครีมที่เข้มข้น จัดจ้าน เลือกเพราะความชอบล้วนๆ!<br><br><b>รสชาติของคุณ:</b> Cookies & Cream, Chocolate Butter, Chocolate Fudge" 
    }
};

// =========================================================================
// 3. ระบบควบคุมการทำงานของตัวเกม (Game Logic)
// =========================================================================
let currentQuestionIndex = 0;
let scores = { butter: 0, layer: 0, chiffon: 0, freshcream: 0, chocolate: 0 };

function startQuiz() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    showQuestion();
}

function showQuestion() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQ = questions[currentQuestionIndex];
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

function selectAnswer(type) {
    scores[type]++;
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    document.getElementById('quiz-screen').classList.remove('active');
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
    scores = { butter: 0, layer: 0, chiffon: 0, freshcream: 0, chocolate: 0 };
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('progress').style.width = `0%`;
}