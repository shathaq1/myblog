document.querySelectorAll('.section-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = 'none';
    });
});

// رسالة عند النقر على زر "ابدأ الآن"
document.querySelector('.cta-btn').addEventListener('click', () => {
    alert('أهلاً وسهلاً بكم! استمتعوا بتصفح المدونة.');
});

