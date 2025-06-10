document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    const scrollThreshold = 80;
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > scrollThreshold) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    
    checkScrollPosition();
    
    function checkScrollPosition() {
      if (window.pageYOffset > scrollThreshold) {
        scrollBtn.classList.add('visible');
      }
    }
  });