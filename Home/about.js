document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.querySelector(".changeBtn");
    const paragraph = document.querySelector(".parragraf");

    // إنشاء زر الإخفاء وإعداده
    const hideBtn = document.createElement("button");
    hideBtn.textContent = "إخفاء المعلومات";
    hideBtn.className = "changeBtn"; // نفس التنسيق
    hideBtn.style.display = "none"; // مخفي مبدئياً

    // نضع الزر بعد زر اقرأ المزيد
    readMoreBtn.parentNode.insertBefore(hideBtn, readMoreBtn.nextSibling);


    const fullText = `
        <strong>أجير</strong>        يتميز بكونه سهل الاستخدام، لا يتطلب أي معرفة قانونية أو تقنية، مجاني بالكامل ومتاح للجميع، يحترم خصوصيتك ولا يقوم بجمع أو تخزين أي بيانات، ويعتمد على مقتضيات مدونة الشغل المغربية وآخر التحديثات القانونية.
        <br><br>
        في عالم تتسارع فيه وتتعقد فيه المساطر القانونية، تزداد الحاجة إلى أدوات رقمية تسهّل على الأفراد الوصول إلى حقوقهم الأساسية، خاصة في ميدان الشغل. ومن هنا، جاءت رسالة أجير: تبسيط القانون، وتمكين الأجير. نحن نؤمن بأن القانون ليس حكرًا على الخبراء، وأن كل أجير في المغرب له الحق في فهم حقوقه واحتساب مستحقاته القانونية بطريقة سهلة، شفافة، ودقيقة.
        <br><br>
        رسالتنا تقوم على ثلاثة مبادئ أساسية. أولًا، الوصول السهل إلى المعلومة القانونية، حيث نسعى إلى تبسيط المقتضيات القانونية بلغة واضحة وترجمتها إلى أدوات عملية تساعد المستخدم على الفهم دون الحاجة إلى الرجوع إلى نصوص معقدة أو مصطلحات جامدة. ثانيًا، التمكين الذاتي للأجراء والمشغلين، فنحن لا نقوم فقط بالحساب، بل نسعى إلى نشر الوعي القانوني وتمكين المستخدم من اتخاذ قرارات مبنية على معرفة. ثالثًا، الحياد والثقة، فالموقع ليس تابعًا لأي جهة حكومية أو نقابية، وهو مستقل ويعتمد فقط على القانون المغربي، ولا يقدم استشارات ولا ينحاز لأي طرف.
        <br><br>
        رسالتنا هي ببساطة: أن تكون المعلومة القانونية في متناول كل من يحتاجها، وأن يشعر الأجير بالأمان القانوني، وأن نساهم في بناء مجتمع أكثر وعيًا وعدالةً وإنصافًا.
        <br><br>
        في أجير، نضع خصوصيتك في المقام الأول. لا نطلب منك إدخال أي بيانات شخصية كاسمك أو بريدك الإلكتروني، وجميع المعلومات التي تدخلها تبقى على جهازك ولا يتم تخزينها أو مشاركتها مع أي طرف.
        <br><br>
        أجير هو ثمرة شغف مشترك بين مهنيين في القانون ومطورين مغاربة في مجال LegalTech، هدفهم المشترك هو رقمنة الوصول إلى العدالة وتعزيز الثقافة القانونية العملية في المجتمع المغربي.
        <br><br>
        إذا كانت لديك أي ملاحظات، اقتراحات أو أسئلة، يمكنك التواصل معنا عبر صفحة الاتصال. نحن نرحب بكل رأي يساعدنا على تطوير هذه الأداة لفائدة الجميع.
    `;



    // عند الضغط على زر "اقرأ المزيد"
    readMoreBtn.addEventListener("click", function () {
        paragraph.innerHTML = fullText;
        readMoreBtn.style.display = "none";
        hideBtn.style.display = "inline-block";
    });

    // عند الضغط على زر "إخفاء المعلومات"
    hideBtn.addEventListener("click", function () {
        paragraph.innerHTML = "";
        hideBtn.style.display = "none";
        readMoreBtn.style.display = "inline-block";
    });
});
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
});

// close menu when the close buttone is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());





