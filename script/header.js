document.addEventListener('DOMContentLoaded', function() {
    // ========== Скрытие хедера при скролле ==========
    const header = document.querySelector('.header');
    let lastScroll = 0;
    const scrollThreshold = 80;
    let isHeaderHidden = false;
  
    function handleHeaderScroll() {
      const currentScroll = window.pageYOffset;
      const scrollingDown = currentScroll > lastScroll;
      
      if (scrollingDown && !isHeaderHidden && currentScroll > scrollThreshold) {
        header.classList.add('hide');
        isHeaderHidden = true;
      } else if (!scrollingDown && isHeaderHidden) {
        header.classList.remove('hide');
        isHeaderHidden = false;
      }
      
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }
  
    // ========== Поисковая система ==========
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchContainer = document.querySelector('.search-container');
    let isSearchActive = false;
  
    function handleSearchClick() {
      searchContainer.classList.add('active');
      isSearchActive = true;
      setTimeout(() => searchInput.focus(), 10);
    }
  
    function handleSearchSubmit() {
      const query = encodeURIComponent(searchInput.value.trim());
      if (query) {
        const fandomUrl = `https://my-summer-car.fandom.com/ru/wiki/Служебная:Поиск?query=${query}`;
        window.open(fandomUrl, '_blank');
        searchInput.value = '';
        closeSearch();
      }
    }
  
    function closeSearch() {
      searchContainer.classList.remove('active');
      isSearchActive = false;
    }
  
    // ========== Инициализация ==========
    function init() {
      if (header) {
        window.addEventListener('scroll', handleHeaderScroll);
      }
  
      if (searchButton && searchInput && searchContainer) {
        searchButton.addEventListener('click', handleSearchClick);
        
        searchInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') handleSearchSubmit();
        });
  
        document.addEventListener('click', function(e) {
          if (!searchContainer.contains(e.target) && searchInput.value === '') {
            closeSearch();
          }
        });
  
        searchInput.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && searchInput.value === '') {
            closeSearch();
          }
        });
      }
    }
  
    init();
  });