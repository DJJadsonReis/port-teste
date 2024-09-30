document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function revealSection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            } else {
                entry.target.classList.remove('reveal');
            }
        });
    }

    const observer = new IntersectionObserver(revealSection, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
