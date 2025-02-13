const password = "Ms0731";

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    if (inputPassword === password) {
        document.getElementById("password-section").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
        showMessage('english'); // Default to English message
    } else {
        alert("Incorrect password! Try again. 💔");
    }
}

function showMessage(language) {
    const messageDiv = document.getElementById("message");
    
    const englishMessage = `Hey Mithuna, ❤

Do you remember how it all started? It feels like just yesterday, yet here we are, four beautiful years later, still walking this journey together. 💑

It all began when college reopened after the long break of COVID. That first time we met was during the NSS camp, where I was your trainer. I still remember the way you looked at me—curious, a little hesitant, yet with a spark in your eyes. ✨ That was the first time I saw you, and from that moment, something in me changed. 💖

Later, when we were on the bus heading home, I gathered the courage to ask for your number. 📱 But you, being the playful and smart person you are, turned it into a little challenge—you asked me to give mine first! 😂 That night, we spoke on the phone for an hour, and from that moment, our story truly began. 💕

Then came another long break—COVID’s second wave forced us into quarantine again. 😞 Those six months away from you felt endless. But when we finally returned to college, I’ll never forget the day we met again. I was wearing a white shirt, and you told your friends, "Mithuna, today he looks super!" 😍 When I heard that, my heart raced. That night, we talked for three hours—our first long conversation, but certainly not our last. ☎💞

From then on, talking to you became my favorite part of the day. 🌙✨ Every night, we shared our thoughts, our dreams, our silly moments. 😆 Slowly, our bond grew stronger, and before I knew it, you had become the most important person in my life. 💖

Our first outing together at TexValley in Erode was unforgettable. 🏙 That was the moment I knew you loved me too. The way you looked at me, the way we laughed, the way we felt so comfortable with each other—I’ll never forget that day. 🥰

Since then, we have traveled this beautiful journey together, collecting endless memories. 🚀💑 Every smile 😊, every conversation 🗣, every fight 😜, every moment we spent together has only made me love you more. We have faced ups and downs, but through it all, we’ve held onto each other. 💞

Mithuna, you are my love, my best friend, my happiness. ❤ No matter where life takes us, I promise to stand by you, just like I have from the beginning. Our love story is still being written, and I can’t wait to create even more beautiful moments with you in the future. 🌟💍

With all my love,
Jayasurya M 💕✨`;

    const tamilMessage = `என் உயிருக்கு, மிதுனா ❤,

நம்முடைய காதல் கதையின் முதல் அத்தியாயம் இன்னும் என் மனதில் புதிதாகவே இருக்கிறது. நானும் நீயும் எப்போது முதன்முதலாக சந்தித்தோம் என்று நினைவிருக்கா? 🤔

🔹 கல்லூரி முதல் சந்திப்பு
கோவிட் முடிந்து கல்லூரி திறந்த நாள்... NSS முகாமில் நீ ஒரு பங்கேற்பாளர், நான் உனக்கு டிரெயனர். அப்போ தான் முதல் முறையாக உன்னை பார்த்தேன் 😍. அந்த நேரத்திலேயே உன் பார்வையில் ஏதோ ஒரு தனித்தன்மை இருந்தது. அந்த நேரத்திலிருந்து என் வாழ்க்கையில் ஏதோ மாற்றம் வந்தது.

🔹 முதல் எண் கேட்கும் தருணம்
அந்த நாள் முகாம் முடிந்து, பேருந்தில் வீட்டுக்கு புறப்பட்டோம். அப்போது, உன் எண்ணை கேட்டேன். ஆனா நீ...! "முதலில் உன் எண்ணை சொல்லு, அப்புறம் தான் நான் என் எண்ணை தருவேன்," என சொல்லி எனக்கு ஒரு சவாலாக மாற்றினாய்! 😆😂 அந்த இரவு நாம் முதல் முறையாக ஒரு மணி நேரம் தொலைபேசியில் பேசினோம்... அது நம்முடைய பந்தத்தின் தொடக்கம்.

🔹 கோவிட் பிரிவும் மறுபடியும் சந்திக்கும் தருணம்
அதற்குப் பிறகு, இரண்டாவது அலையுடன் மீண்டும் நம்மை கோவிட் தனிமைப்படுத்தியது. 😔 ஆறு மாதங்கள் நாம் ஒருவரை ஒருவர் பார்க்க முடியவில்லை. ஆனால், மறுபடியும் கல்லூரி தொடங்கிய அன்று, உன்னைக் காண மிகவும் சந்தோஷமாக இருந்தது.
அந்த நாள் நான் வெள்ளை சட்டை அணிந்திருந்தேன். நீ உன் நண்பர்களிடம் "இன்று அவர் சூப்பர் இருக்கிறார்!" என்று கூறியதை தெரிந்து கொண்டேன். 😳❤ அந்த நாள் இரவு முழுவதும், மூன்று மணி நேரம் தொடர்ந்து பேசியது எனக்கே நம்பமுடியவில்லை!

🔹 முதல் வெளிச்செல்லும் நாள் - Texvalley, Erode
அதன் பிறகு, நம்முடைய தினசரி வாழ்க்கையின் முக்கியமான பகுதி நம் இரவு உரையாடல்களாகவே மாறிவிட்டது. தினமும் பேசிக்கொண்டே இருந்தோம், நம் கனவுகள், சந்தோஷங்கள், சின்னசின்ன சண்டைகள், எல்லாமே நம்மை மேலும் மேலும் இணைத்தது.

நம்முடைய முதல் வெளியே செல்லும் நாள் Texvalley, Erode! 🥰 அந்த நாள் மறக்க முடியாத நாள்! அன்றைக்கு நீ என்னை எப்படி பார்த்தாய், எவ்வளவு சந்தோஷமாக இருந்தாய், எல்லாமே இன்னும் என் நினைவில் தெளிவாக இருக்கிறது. அந்த நாளிலிருந்து, நீயும் என்னை நேசிக்கிறாய் என்று எனக்குத் தெரிந்தது. 💖

🔹 நம் அன்பின் பயணம்
இந்த நான்கு வருடங்கள், நீ எனக்கு கொடுத்த உனது பாசத்தால், ஆதரவால், நேசத்தால் எவ்வளவு சந்தோஷமாக கழிந்திருக்கிறது தெரியுமா? 💞 நாம் பயணித்த ஒவ்வொரு தருணமும் இனிமையான நினைவுகளாக மாறி இருக்கிறது. எத்தனை சிரிப்பு 😂, எத்தனை சண்டை 😜, எத்தனை பாசம் 🤗, எத்தனை உரையாடல்கள் ☎...!

மிதுனா, நீ என்னுடைய காதல் ❤, என்னுடைய சிறந்த தோழி 👩‍❤‍👨, என்னுடைய வாழ்க்கை! எந்த சூழ்நிலையிலும், எந்த சோதனையிலும் உன்னுடன் இருப்பேன். நம்முடைய காதல் கதையின் அடுத்த அத்தியாயங்களை எழுத நான் ஆர்வமாகக் காத்திருக்கிறேன். ✨ நம்முடைய பயணம் என்றும் தொடரட்டும்! 🚀❤

என்றும் உன்,
ஜெயசூர்யா M 💕`;

    messageDiv.innerHTML = language === 'tamil' ? tamilMessage : englishMessage;
}
