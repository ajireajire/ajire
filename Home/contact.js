const scriptURL = 'https://script.google.com/macros/s/AKfycbzpwk58rZn9sm4H2sA44jc-Omy1QX-eFkpLEVStPhWkqDY_jg2Ryh4dZRYLNLvBi_sW/exec';
const form = document.getElementById('contact-form');
const response = document.getElementById('response');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(res => {
            form.reset();
            response.innerText = "✅ تم إرسال رسالتك بنجاح!";
        })
        .catch(err => {
            response.innerText = "❌ حدث خطأ في الإرسال.";
            console.error(err);
        });
});
