document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('container-info');
    const text = "I am a full-stack programmer and a systems engineering student with a passion for developing innovative solutions. My skill set includes HTML, CSS, JavaScript, Python, Java, Django, MySQL, and PostgreSQL. Additionally, I enjoy the challenge of competitive programming and have participated in several coding marathons. As a junior developer, I am constantly seeking opportunities to learn and grow, always eager to expand my knowledge and contribute to dynamic projects.";
    let index = 0;
    const speed = 10; // Speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
