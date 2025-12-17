// template_wka4m1e     template ID     all from emailjs
// service_c950c79      service ID
// 51nb-QBJRj0u6-yKB    user ID


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_c950c79',
        'template_wka4m1e',
        event.target,
        '51nb-QBJRj0u6-yKB'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavilable. Please contact me directly at zchesnut03@gmail.com"
        );
    })
}
