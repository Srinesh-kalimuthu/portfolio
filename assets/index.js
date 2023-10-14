let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}













const scriptURL = 'https://script.google.com/macros/s/AKfycbzdBI9OCsenePLsUHwQi5vBfztzMfN_IHWmo1AFSh16odpsQMXeXZbONykzJZlE5Zi0/exec'
const form = document.forms['submit-to-google-sheet']
const messageintimation = document.getElementById("messageintimation")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            messageintimation.innerHTML = "👍🏻"
            setTimeout(function () {
                messageintimation.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})