document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello! I'm Sameer Sharma, a tech enthusiast, an aspiring software developer with skills in web development and problem solving.";
    const typingSpeed = 20; // Speed in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById('typed-text').innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            document.getElementById('cursor').style.display = 'none';
        }
    }

    typeWriter();

    // Add scroll animations
    const sections = document.querySelectorAll('section');
    const options = {
        // threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slideIn');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
