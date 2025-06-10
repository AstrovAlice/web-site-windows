document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImg = document.getElementById('fullscreenImage');
    const closeBtn = document.querySelector('.close-btn');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const imgId = this.getAttribute('data-id');
            openFullscreenImage(imgId);
        });
    });
    
    closeBtn.addEventListener('click', closeFullscreen);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeFullscreen();
        }
    });
    
    function openFullscreenImage(id) {
        const targetImg = document.querySelector(`.gallery-img[data-id="${id}"]`);
        if (targetImg) {
            fullscreenImg.src = targetImg.src;
            fullscreenImg.alt = targetImg.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeFullscreen() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFullscreen();
        }
    });
});