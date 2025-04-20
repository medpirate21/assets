// Create navbar HTML structure
function createNavbarHTML() {
    // Modify base URL logic for IPFS
    const getBaseUrl = () => {
        const pathSegments = window.location.pathname.split('/');
        // Remove empty strings and known IPFS paths
        const filteredSegments = pathSegments.filter(segment => 
            segment && !['ipfs', 'ipns'].includes(segment)
        );
        
        if (filteredSegments.includes('socials')) {
            return '../';
        }
        return './';
    };
    
    const baseUrl = getBaseUrl();
    
    // Modified function to determine active page
    const getCurrentPage = () => {
        const path = window.location.pathname.toLowerCase();
        const lastSegment = path.split('/').pop();
        
        if (lastSegment.includes('lectures')) return 'lectures';
        if (lastSegment.includes('notes')) return 'notes';
        if (lastSegment === '' || lastSegment === 'index.html') return 'home';
        return 'home';
    };

    const currentPage = getCurrentPage();

    return `
        <!-- Mobile Top Bar -->
        <div class="mobile-top-bar">
            <button id="menuBtn" class="menu-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
            <span class="h1m">MedOracle</span>
            <button id="searchBtn" class="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="mobile-menu">
            <div class="menu-items">
                <a href="${baseUrl}socials/au.html" class="menu-item">About</a>
                <a href="${baseUrl}socials/cu.html" class="menu-item">Contact Us</a>
                <a href="${baseUrl}socials/don.html" class="menu-item">Donations</a>
                <a href="${baseUrl}socials/tos.html" class="menu-item">Terms of Service</a>
                <a href="${baseUrl}socials/pp.html" class="menu-item">Privacy Policy</a>
            </div>
        </div>

        <!-- Search Overlay -->
        <div id="searchOverlay" class="search-overlay hidden">
            <div class="search-container">
                <input type="search" placeholder="Search..." class="search-input">
                <div class="search-results"></div>
            </div>
        </div>

        <!-- Desktop Navbar -->
        <nav class="desktop-nav">
            <div class="nav-links">
                <a href="${baseUrl}index.html" class="nav-link ${currentPage === 'home' ? 'active' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    Home
                </a>
                <a href="${baseUrl}lectures.html" class="nav-link ${currentPage === 'lectures' ? 'active' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                    Lectures
                </a>
                <a href="${baseUrl}notes.html" class="nav-link ${currentPage === 'notes' ? 'active' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/></svg>
                    Notes
                </a>
            </div>
             <div class="nav-search">
             <input type="search" placeholder="Search..." class="search-input" id="pcSearchInput">
             <div id="pcSearchResults" class="pc-search-results"></div>
             </div>
             
            <button class="theme-toggle">
                <svg class="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                <svg class="sun hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </button>
        </nav>
        <!-- Mobile Bottom Bar -->
  <nav class="mobile-nav">
    <a href="${baseUrl}index.html" class="nav-link ${currentPage === 'home' ? 'active' : ''}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span>Home</span>
    </a>
    <a href="${baseUrl}lectures.html" class="nav-link ${currentPage === 'lectures' ? 'active' : ''}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
      <span>Lectures</span>
    </a>
    <a href="${baseUrl}notes.html" class="nav-link ${currentPage === 'notes' ? 'active' : ''}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
      <span>Notes</span>
    </a>
    <button class="theme-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun hidden"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    </button>
  </nav>
    `;
}

// Search functionality

class PageSearch {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.searchResults = document.querySelector('.search-results');
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.setupSearch();
    }

    setupSearch() {
        this.searchInput?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                this.clearResults();
                return;
            }
            this.performSearch(query);
        });
    }

    clearResults() {
        if (this.searchResults) {
            this.searchResults.innerHTML = '';
        }
    }

    performSearch(query) {
        let searchableContent = this.getPageContent();
        const results = searchableContent.filter(item => 
            item.text.toLowerCase().includes(query)
        );
        this.displayResults(results, query);
    }

    getPageContent() {
        switch(this.currentPage) {
            case 'notes.html':
                return Array.from(document.querySelectorAll('.btn'))
                    .map(btn => ({
                        text: btn.textContent,
                        type: 'Note',
                        element: btn
                    }));
            case 'lectures.html':
                return [
                    ...Array.from(document.querySelectorAll('.carousel-caption'))
                        .map(caption => ({
                            text: caption.textContent,
                            type: 'Lecture',
                            element: caption
                        })),
                    ...Array.from(document.querySelectorAll('.lecture-btn'))
                        .map(btn => ({
                            text: btn.textContent,
                            type: 'Lecture Button',
                            element: btn
                        }))
                ];
            default:
                return [];
        }
    }

    displayResults(results, query) {
        if (!this.searchResults) return;

        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-result-item no-results">
                    <p>No results found</p>
                </div>`;
            return;
        }

        this.searchResults.innerHTML = results
            .map((result, index) => `
                <div class="search-result-item" data-index="${index}">
                    <div class="result-title">
                        ${this.highlightText(result.text, query)}
                    </div>
                    <div class="result-type">${result.type}</div>
                </div>
            `).join('');

        this.addResultClickHandlers(results);
    }

    highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    addResultClickHandlers(results) {
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                if (results[index]) {
                    results[index].element.scrollIntoView({ behavior: 'smooth' });
                    results[index].element.classList.add('highlighted');
                    setTimeout(() => {
                        results[index].element.classList.remove('highlighted');
                    }, 2000);
                    document.getElementById('searchOverlay').classList.add('hidden');
                }
            });
        });
    }
}

// Initialize navbar elements
function initializeNavbarElements() {
    const elements = {
        searchBtn: document.getElementById('searchBtn'),
        searchOverlay: document.getElementById('searchOverlay'),
        menuBtn: document.getElementById('menuBtn'),
        mobileMenu: document.getElementById('mobileMenu'),
        themeToggles: document.querySelectorAll('.theme-toggle')
    };

    // Initialize search
    if (elements.searchBtn && elements.searchOverlay) {
        elements.searchBtn.addEventListener('click', () => {
            elements.searchOverlay.classList.toggle('hidden');
            const searchInput = elements.searchOverlay.querySelector('.search-input');
            if (!elements.searchOverlay.classList.contains('hidden')) {
                searchInput?.focus();
            }
        });
    }

    // Initialize mobile menu
    if (elements.menuBtn && elements.mobileMenu) {
        elements.menuBtn.addEventListener('click', () => {
            elements.mobileMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!elements.menuBtn.contains(e.target) && 
                !elements.mobileMenu.contains(e.target)) {
                elements.mobileMenu.classList.remove('active');
            }
        });
    }

    // Initialize theme toggles
    elements.themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            document.querySelectorAll('.sun, .moon').forEach(icon => {
                icon.classList.toggle('hidden');
            });
            localStorage.setItem('theme', 
                document.body.classList.contains('dark') ? 'dark' : 'light'
            );
        });
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelectorAll('.sun, .moon').forEach(icon => {
            icon.classList.toggle('hidden');
        });
    }

    // Initialize search functionality
    new PageSearch();
}

// Load navbar
function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) {
        console.error('Navbar container not found');
        return;
    }
    navbarContainer.innerHTML = createNavbarHTML();
    initializeNavbarElements();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);

//downLOADPAGE//



function generateLinks(buttonId) {
    const ipfsGateway = 'https://ipfs.io/ipfs/'; // Can be changed to preferred gateway
    const encodedId = encodeURIComponent(btoa(buttonId));
    const botName = 'MedoraNd_bot'
    
    return {
        watchDownloadLink: `${ipfsGateway}${encodedId}`,
        telegramLink: `https://telegram.me/${botName}?start=file_${buttonId}`
    };
}

async function renderDownloadPage(buttonId, buttonText) {
    const mainContent = document.querySelector('main.content');
    if (!mainContent) return;

    const links = generateLinks(buttonId);

    mainContent.innerHTML = `
        <div class="card">
            <h1 id="download-title" class="download-title">${buttonText}</h1>
            <div id="download-links" class="download-links">
                <button id="watch-download-btn" class="download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Watch/Download
                </button>
                <button id="telegram-btn" class="download-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Get File on Telegram
                </button>
            </div>
        </div>
    `;

    document.getElementById('watch-download-btn').onclick = () => {
        window.location.href = links.watchDownloadLink;
    };
    document.getElementById('telegram-btn').onclick = () => {
        window.location.href = links.telegramLink;
    };
}

function handleButtonClick(event) {
    const buttonId = event.target.dataset.id;
    const buttonText = event.target.textContent;
    renderDownloadPage(buttonId, buttonText);
}

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', handleButtonClick);
  });
});

// Back to Top Button
function handleBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
      } else {
          backToTopButton.classList.remove('visible');
      }
  });

  // Scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
}

// Browser Back Button
function handleBrowserBack() {
  window.addEventListener('popstate', () => {
      // Get previous page from history
      const previousPage = document.referrer;
      if (previousPage) {
          window.location.href = previousPage;
      }
  });
}

// Initialize all handlers
document.addEventListener('DOMContentLoaded', () => {
  handleBackToTop();
  handleBrowserBack();
});

// Carousel functionality
function initHomeCarousel() {
    const track = document.querySelector('#home-carousel .carousel-track');
    if (!track) return;

    // Clone cards for infinite scroll
    const cards = track.children;
    [...cards].forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Pause on hover
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        track.style.animationPlayState = 'running';
        handleSwipe();
    });

    function handleSwipe() {
        const diffX = touchStartX - touchEndX;
        if (Math.abs(diffX) > 50) {
            track.style.transform = `translateX(${diffX > 0 ? '-20px' : '20px'})`;
            setTimeout(() => {
                track.style.transform = '';
            }, 300);
        }
    }

    // Lazy load images
    const images = track.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    initHomeCarousel();
});

// Add PC Search functionality
function initializePCSearch() {
    const pcSearchInput = document.getElementById('pcSearchInput');
    const pcSearchResults = document.getElementById('pcSearchResults');

    if (!pcSearchInput || !pcSearchResults) {
        console.error('Search elements not found');
        return;
    }

    // Get searchable content from current page
    function getPageContent() {
        const buttons = Array.from(document.querySelectorAll('.btn')).map(btn => ({
            text: btn.textContent.trim(),
            type: 'button'
        }));
        
        const carouselCaptions = Array.from(document.querySelectorAll('.carousel-caption')).map(caption => ({
            text: caption.textContent.trim(),
            type: 'carousel'
        }));

        return [...buttons, ...carouselCaptions];
    }

    // Search handler
    pcSearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            pcSearchResults.style.display = 'none';
            return;
        }

        const content = getPageContent();
        const results = content.filter(item => 
            item.text.toLowerCase().includes(searchTerm)
        );

        if (results.length) {
            pcSearchResults.innerHTML = results.map(result => `
                <div class="pc-search-item">
                    <i class="fas fa-${result.type === 'button' ? 'arrow-right' : 'image'}"></i>
                    <span>${result.text}</span>
                </div>
            `).join('');
            pcSearchResults.style.display = 'block';
        } else {
            pcSearchResults.innerHTML = '<div class="pc-no-results">No results found</div>';
            pcSearchResults.style.display = 'block';
        }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-search')) {
            pcSearchResults.style.display = 'none';
        }
    });
}

// Load navbar and initialize search
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    // Wait for navbar to be loaded
    setTimeout(() => {
        initializePCSearch();
    }, 100);
});

function initializePCSearch() {
    const pcSearchInput = document.getElementById('pcSearchInput');
    const pcSearchResults = document.getElementById('pcSearchResults');

    if (!pcSearchInput || !pcSearchResults) {
        console.error('Search elements not found');
        return;
    }

    function getPageContent() {
        const buttons = Array.from(document.querySelectorAll('.btn')).map(btn => ({
            text: btn.textContent.trim(),
            type: 'button',
            element: btn
        }));
        
        const carouselCaptions = Array.from(document.querySelectorAll('.carousel-caption')).map(caption => ({
            text: caption.textContent.trim(),
            type: 'carousel',
            element: caption.closest('.carousel-card')
        }));

        return [...buttons, ...carouselCaptions];
    }

    pcSearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            pcSearchResults.style.display = 'none';
            return;
        }

        const content = getPageContent();
        const results = content.filter(item => 
            item.text.toLowerCase().includes(searchTerm)
        );

        if (results.length) {
            pcSearchResults.innerHTML = results.map((result, index) => `
                <div class="pc-search-item" data-index="${index}">
                    <i class="fas fa-${result.type === 'button' ? 'arrow-right' : 'image'}"></i>
                    <span>${result.text}</span>
                </div>
            `).join('');

            // Add click handlers to results
            const resultItems = pcSearchResults.querySelectorAll('.pc-search-item');
            resultItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    const targetElement = results[index].element;
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    pcSearchResults.style.display = 'none';
                    pcSearchInput.value = '';
                    
                    // Highlight the element briefly
                    targetElement.classList.add('highlight');
                    setTimeout(() => targetElement.classList.remove('highlight'), 2000);
                });
            });

            pcSearchResults.style.display = 'block';
        } else {
            pcSearchResults.innerHTML = '<div class="pc-no-results">No results found</div>';
            pcSearchResults.style.display = 'block';
        }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-search')) {
            pcSearchResults.style.display = 'none';
        }
    });
}

// Mobile Search Function
function initializeMobileSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = searchOverlay?.querySelector('.search-input');
    const searchResults = searchOverlay?.querySelector('.search-results');

    console.log('Initializing mobile search...');

    if (!searchBtn || !searchOverlay || !searchInput || !searchResults) {
        console.error('Search elements not found');
        return;
    }

    // Open search overlay
    searchBtn.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        searchOverlay.classList.remove('hidden');
        searchInput.focus();
    });

    // Close on overlay click
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            closeSearchOverlay();
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchOverlay();
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        // Get page-specific content
        const buttons = Array.from(document.querySelectorAll('.btn')).map(btn => ({
            text: btn.textContent.trim(),
            type: 'button',
            element: btn
        }));

        const carouselCaptions = Array.from(document.querySelectorAll('.carousel-caption')).map(caption => ({
            text: caption.textContent.trim(),
            type: 'carousel',
            element: caption.closest('.carousel-card')
        }));

        const allContent = [...buttons, ...carouselCaptions];
        
        // Filter results
        const results = allContent.filter(item => 
            item.text.toLowerCase().includes(searchTerm)
        );

        // Display results
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result" data-type="${result.type}">
                    <i class="fas fa-${result.type === 'button' ? 'arrow-right' : 'image'}"></i>
                    <span>${result.text}</span>
                </div>
            `).join('');

            // Add click handlers to results
            document.querySelectorAll('.search-result').forEach((item, index) => {
                item.addEventListener('click', () => {
                    const targetElement = results[index].element;
                    closeSearchOverlay();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Highlight the element
                    targetElement.classList.add('highlight');
                    setTimeout(() => targetElement.classList.remove('highlight'), 2000);
                });
            });
        } else {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
        }
    });

    function closeSearchOverlay() {
        document.body.style.overflow = '';
        searchOverlay.classList.add('hidden');
        searchInput.value = '';
        searchResults.innerHTML = '';
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileSearch();
});

// Smooth scroll for contents links
function initializeContentsNavigation() {
    document.querySelectorAll('.contents-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Add to DOM ready event listeners
document.addEventListener('DOMContentLoaded', () => {
    // ...existing initialization code...
    initializeContentsNavigation();
});

// Disable context menu and long press
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('touchstart', e => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });
document.addEventListener('touchend', e => {
    const now = Date.now();
    if (e.target.lastTouch && now - e.target.lastTouch < 500) {
        e.preventDefault();
    }
    e.target.lastTouch = now;
}, { passive: false });

// Enhanced long press prevention
function disableLongPress() {
    // Only prevent context menu (right click)
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Prevent long press on images and links only
    document.querySelectorAll('img, a').forEach(element => {
        element.addEventListener('touchstart', e => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: true });

        element.addEventListener('contextmenu', e => e.preventDefault());
    });

    // Allow normal touch interactions
    document.removeEventListener('touchstart', disableLongTouch);
    document.removeEventListener('touchend', disableLongTouch);
    document.removeEventListener('touchcancel', disableLongTouch);
    document.removeEventListener('selectstart', disableLongTouch);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    disableLongPress();
});

// Telegram-specific long press prevention
// function preventLongPress() {
//     // Prevent context menu
//     window.oncontextmenu = e => e.preventDefault();
//     document.oncontextmenu = e => e.preventDefault();

//     // Prevent selection
//     document.onselectstart = e => e.preventDefault();

//     // Comprehensive touch event prevention
//     const preventEvent = e => {
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//     };

//     // Handle all possible touch events
//     const events = [
//         'contextmenu',
//         'touchstart',
//         'touchmove',
//         'touchend',
//         'touchcancel',
//         'selectionchange',
//         'selectstart',
//         'gesturestart',
//         'gesturechange',
//         'gestureend',
//         'touchforcechange',
//         'MSHoldVisual',
//         'copy',
//         'cut',
//         'paste'
//     ];

//     events.forEach(eventName => {
//         document.addEventListener(eventName, preventEvent, { 
//             passive: false,
//             capture: true 
//         });
//     });

//     // Additional Telegram WebView specific handlers
//     if (window.TelegramWebviewProxy) {
//         document.addEventListener('touchhold', preventEvent, { passive: false });
//     }

//     // Force remove any existing selection
//     setInterval(() => {
//         if (window.getSelection) {
//             window.getSelection().removeAllRanges();
//         }
//     }, 100);
// }

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    preventLongPress();
});

// NEW FUNCTION

// Back button functionality
function goBack() {
    window.history.back();
  }

  // Navigation function to prevent showing link on hover
function navigateTo(url) {
    window.location.href = url;
  }
  
  // Disable long press for mobile
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });

  !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DisableDevtool=t()}(this,function(){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1})}function e(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");t=e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=c(n);return H(this,i?(e=c(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function s(e,t){var n,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length)return i&&(e=i),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,u=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){u=!0,o=e},f:function(){try{r||null==i.return||i.return()}finally{if(u)throw o}}}}function t(){if(d.url)window.location.href=d.url;else if(d.rewriteHTML)try{document.documentElement.innerHTML=d.rewriteHTML}catch(e){document.documentElement.innerText=d.rewriteHTML}else{try{window.opener=null,window.open("","_self"),window.close(),window.history.back()}catch(e){console.log(e)}setTimeout(function(){window.location.href=d.timeOutUrl||"https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host))},500)}}var d={md5:"",ondevtoolopen:t,ondevtoolclose:null,url:"",timeOutUrl:"",tkName:"ddtk",interval:500,disableMenu:!0,stopIntervalTime:5e3,clearIntervalWhenDevOpenTrigger:!1,detectors:[0,1,3,4,5,6,7],clearLog:!0,disableSelect:!1,disableCopy:!1,disableCut:!1,disablePaste:!1,ignore:null,disableIframeParents:!0,seo:!0,rewriteHTML:""},U=["detectors","ondevtoolclose","ignore"];function q(e){var t,n=0<arguments.length&&void 0!==e?e:{};for(t in d){var i=t;void 0===n[i]||o(d[i])!==o(n[i])&&-1===U.indexOf(i)||(d[i]=n[i])}"function"==typeof d.ondevtoolclose&&!0===d.clearIntervalWhenDevOpenTrigger&&(d.clearIntervalWhenDevOpenTrigger=!1,console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"))}function v(){return(new Date).getTime()}function h(e){var t=v();return e(),v()-t}function z(n,i){function e(t){return function(){n&&n();var e=t.apply(void 0,arguments);return i&&i(),e}}var t=window.alert,o=window.confirm,r=window.prompt;try{window.alert=e(t),window.confirm=e(o),window.prompt=e(r)}catch(e){}}var p,y,B,b={iframe:!1,pc:!1,qqBrowser:!1,firefox:!1,macos:!1,edge:!1,oldEdge:!1,ie:!1,iosChrome:!1,iosEdge:!1,chrome:!1,seoBot:!1,mobile:!1};function W(){function e(e){return-1!==t.indexOf(e)}var t=navigator.userAgent.toLowerCase(),n=function(){var e=navigator,t=e.platform,e=e.maxTouchPoints;if("number"==typeof e)return 1<e;if("string"==typeof t){e=t.toLowerCase();if(/(mac|win)/i.test(e))return!1;if(/(android|iphone|ipad|ipod|arch)/i.test(e))return!0}return/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())}(),i=!!window.top&&window!==window.top,o=!n,r=e("qqbrowser"),u=e("firefox"),c=e("macintosh"),a=e("edge"),l=a&&!e("chrome"),f=l||e("trident")||e("msie"),s=e("crios"),d=e("edgios"),v=e("chrome")||s,h=!n&&/(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(t);Object.assign(b,{iframe:i,pc:o,qqBrowser:r,firefox:u,macos:c,edge:a,oldEdge:l,ie:f,iosChrome:s,iosEdge:d,chrome:v,seoBot:h,mobile:n})}function M(){for(var e=function(){for(var e={},t=0;t<500;t++)e["".concat(t)]="".concat(t);return e}(),t=[],n=0;n<50;n++)t.push(e);return t}function w(){d.clearLog&&B()}var K="",V=!1;function F(){var e=d.ignore;if(e){if("function"==typeof e)return e();if(0!==e.length){var t=location.href;if(K===t)return V;K=t;var n,i=!1,o=s(e);try{for(o.s();!(n=o.n()).done;){var r=n.value;if("string"==typeof r){if(-1!==t.indexOf(r)){i=!0;break}}else if(r.test(t)){i=!0;break}}}catch(e){o.e(e)}finally{o.f()}return V=i}}}var X=function(){return!1};function g(n){var t,e,i=74,o=73,r=85,u=83,c=123,a=b.macos?function(e,t){return e.metaKey&&e.altKey&&(t===o||t===i)}:function(e,t){return e.ctrlKey&&e.shiftKey&&(t===o||t===i)},l=b.macos?function(e,t){return e.metaKey&&e.altKey&&t===r||e.metaKey&&t===u}:function(e,t){return e.ctrlKey&&(t===u||t===r)};n.addEventListener("keydown",function(e){var t=(e=e||n.event).keyCode||e.which;if(t===c||a(e,t)||l(e,t))return T(n,e)},!0),t=n,d.disableMenu&&t.addEventListener("contextmenu",function(e){if("touch"!==e.pointerType)return T(t,e)}),e=n,d.disableSelect&&m(e,"selectstart"),e=n,d.disableCopy&&m(e,"copy"),e=n,d.disableCut&&m(e,"cut"),e=n,d.disablePaste&&m(e,"paste")}function m(t,e){t.addEventListener(e,function(e){return T(t,e)})}function T(e,t){if(!F()&&!X())return(t=t||e.event).returnValue=!1,t.preventDefault(),!1}var O,D=!1,S={};function N(e){S[e]=!1}function $(){for(var e in S)if(S[e])return D=!0;return D=!1}(_=O=O||{})[_.Unknown=-1]="Unknown",_[_.RegToString=0]="RegToString",_[_.DefineId=1]="DefineId",_[_.Size=2]="Size",_[_.DateToString=3]="DateToString",_[_.FuncToString=4]="FuncToString",_[_.Debugger=5]="Debugger",_[_.Performance=6]="Performance",_[_.DebugLib=7]="DebugLib";var k=function(){function n(e){var t=e.type,e=e.enabled,e=void 0===e||e;i(this,n),this.type=O.Unknown,this.enabled=!0,this.type=t,this.enabled=e,this.enabled&&(t=this,Q.push(t),this.init())}return u(n,[{key:"onDevToolOpen",value:function(){var e;console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this.type,"】")),d.clearIntervalWhenDevOpenTrigger&&te(),window.clearTimeout(J),d.ondevtoolopen(this.type,t),e=this.type,S[e]=!0}},{key:"init",value:function(){}}]),n}(),G=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.DebugLib})}return u(t,[{key:"init",value:function(){}},{key:"detect",value:function(){var e;(!0===(null==(e=null==(e=window.eruda)?void 0:e._devTools)?void 0:e._isShow)||window._vcOrigConsole&&window.document.querySelector("#__vconsole.vc-toggle"))&&this.onDevToolOpen()}}],[{key:"isUsing",value:function(){return!!window.eruda||!!window._vcOrigConsole}}]),t}(),Y=0,J=0,Q=[],Z=0;function ee(o){function e(){l=!0}function t(){l=!1}var n,i,r,u,c,a,l=!1;function f(){(a[u]===r?i:n)()}z(e,t),n=t,i=e,void 0!==(a=document).hidden?(r="hidden",c="visibilitychange",u="visibilityState"):void 0!==a.mozHidden?(r="mozHidden",c="mozvisibilitychange",u="mozVisibilityState"):void 0!==a.msHidden?(r="msHidden",c="msvisibilitychange",u="msVisibilityState"):void 0!==a.webkitHidden&&(r="webkitHidden",c="webkitvisibilitychange",u="webkitVisibilityState"),a.removeEventListener(c,f,!1),a.addEventListener(c,f,!1),Y=window.setInterval(function(){if(!(o.isSuspend||l||F())){var e,t,n=s(Q);try{for(n.s();!(e=n.n()).done;){var i=e.value;N(i.type),i.detect(Z++)}}catch(e){n.e(e)}finally{n.f()}w(),"function"==typeof d.ondevtoolclose&&(t=D,!$()&&t&&d.ondevtoolclose())}},d.interval),J=setTimeout(function(){b.pc||G.isUsing()||te()},d.stopIntervalTime)}function te(){window.clearInterval(Y)}var P=8;function ne(e){for(var t=function(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,i=-271733879,o=-1732584194,r=271733878,u=0;u<e.length;u+=16){var c=n,a=i,l=o,f=r;n=E(n,i,o,r,e[u+0],7,-680876936),r=E(r,n,i,o,e[u+1],12,-389564586),o=E(o,r,n,i,e[u+2],17,606105819),i=E(i,o,r,n,e[u+3],22,-1044525330),n=E(n,i,o,r,e[u+4],7,-176418897),r=E(r,n,i,o,e[u+5],12,1200080426),o=E(o,r,n,i,e[u+6],17,-1473231341),i=E(i,o,r,n,e[u+7],22,-45705983),n=E(n,i,o,r,e[u+8],7,1770035416),r=E(r,n,i,o,e[u+9],12,-1958414417),o=E(o,r,n,i,e[u+10],17,-42063),i=E(i,o,r,n,e[u+11],22,-1990404162),n=E(n,i,o,r,e[u+12],7,1804603682),r=E(r,n,i,o,e[u+13],12,-40341101),o=E(o,r,n,i,e[u+14],17,-1502002290),i=E(i,o,r,n,e[u+15],22,1236535329),n=j(n,i,o,r,e[u+1],5,-165796510),r=j(r,n,i,o,e[u+6],9,-1069501632),o=j(o,r,n,i,e[u+11],14,643717713),i=j(i,o,r,n,e[u+0],20,-373897302),n=j(n,i,o,r,e[u+5],5,-701558691),r=j(r,n,i,o,e[u+10],9,38016083),o=j(o,r,n,i,e[u+15],14,-660478335),i=j(i,o,r,n,e[u+4],20,-405537848),n=j(n,i,o,r,e[u+9],5,568446438),r=j(r,n,i,o,e[u+14],9,-1019803690),o=j(o,r,n,i,e[u+3],14,-187363961),i=j(i,o,r,n,e[u+8],20,1163531501),n=j(n,i,o,r,e[u+13],5,-1444681467),r=j(r,n,i,o,e[u+2],9,-51403784),o=j(o,r,n,i,e[u+7],14,1735328473),i=j(i,o,r,n,e[u+12],20,-1926607734),n=I(n,i,o,r,e[u+5],4,-378558),r=I(r,n,i,o,e[u+8],11,-2022574463),o=I(o,r,n,i,e[u+11],16,1839030562),i=I(i,o,r,n,e[u+14],23,-35309556),n=I(n,i,o,r,e[u+1],4,-1530992060),r=I(r,n,i,o,e[u+4],11,1272893353),o=I(o,r,n,i,e[u+7],16,-155497632),i=I(i,o,r,n,e[u+10],23,-1094730640),n=I(n,i,o,r,e[u+13],4,681279174),r=I(r,n,i,o,e[u+0],11,-358537222),o=I(o,r,n,i,e[u+3],16,-722521979),i=I(i,o,r,n,e[u+6],23,76029189),n=I(n,i,o,r,e[u+9],4,-640364487),r=I(r,n,i,o,e[u+12],11,-421815835),o=I(o,r,n,i,e[u+15],16,530742520),i=I(i,o,r,n,e[u+2],23,-995338651),n=L(n,i,o,r,e[u+0],6,-198630844),r=L(r,n,i,o,e[u+7],10,1126891415),o=L(o,r,n,i,e[u+14],15,-1416354905),i=L(i,o,r,n,e[u+5],21,-57434055),n=L(n,i,o,r,e[u+12],6,1700485571),r=L(r,n,i,o,e[u+3],10,-1894986606),o=L(o,r,n,i,e[u+10],15,-1051523),i=L(i,o,r,n,e[u+1],21,-2054922799),n=L(n,i,o,r,e[u+8],6,1873313359),r=L(r,n,i,o,e[u+15],10,-30611744),o=L(o,r,n,i,e[u+6],15,-1560198380),i=L(i,o,r,n,e[u+13],21,1309151649),n=L(n,i,o,r,e[u+4],6,-145523070),r=L(r,n,i,o,e[u+11],10,-1120210379),o=L(o,r,n,i,e[u+2],15,718787259),i=L(i,o,r,n,e[u+9],21,-343485551),n=C(n,c),i=C(i,a),o=C(o,l),r=C(r,f)}return Array(n,i,o,r)}(function(e){for(var t=Array(),n=(1<<P)-1,i=0;i<e.length*P;i+=P)t[i>>5]|=(e.charCodeAt(i/P)&n)<<i%32;return t}(e),e.length*P),n="0123456789abcdef",i="",o=0;o<4*t.length;o++)i+=n.charAt(t[o>>2]>>o%4*8+4&15)+n.charAt(t[o>>2]>>o%4*8&15);return i}function x(e,t,n,i,o,r){return C((t=C(C(t,e),C(i,r)))<<o|t>>>32-o,n)}function E(e,t,n,i,o,r,u){return x(t&n|~t&i,e,t,o,r,u)}function j(e,t,n,i,o,r,u){return x(t&i|n&~i,e,t,o,r,u)}function I(e,t,n,i,o,r,u){return x(t^n^i,e,t,o,r,u)}function L(e,t,n,i,o,r,u){return x(n^(t|~i),e,t,o,r,u)}function C(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}var _=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.RegToString,enabled:b.qqBrowser||b.firefox})}return u(t,[{key:"init",value:function(){var t=this;this.lastTime=0,this.reg=/./,p(this.reg),this.reg.toString=function(){var e;return b.qqBrowser?(e=(new Date).getTime(),t.lastTime&&e-t.lastTime<100?t.onDevToolOpen():t.lastTime=e):b.firefox&&t.onDevToolOpen(),""}}},{key:"detect",value:function(){p(this.reg)}}]),t}(),ie=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.DefineId})}return u(t,[{key:"init",value:function(){var e=this;this.div=document.createElement("div"),this.div.__defineGetter__("id",function(){e.onDevToolOpen()}),Object.defineProperty(this.div,"id",{get:function(){e.onDevToolOpen()}})}},{key:"detect",value:function(){p(this.div)}}]),t}(),oe=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.Size,enabled:!b.iframe&&!b.edge})}return u(t,[{key:"init",value:function(){var e=this;this.checkWindowSizeUneven(),window.addEventListener("resize",function(){setTimeout(function(){e.checkWindowSizeUneven()},100)},!0)}},{key:"detect",value:function(){}},{key:"checkWindowSizeUneven",value:function(){var e=function(){if(re(window.devicePixelRatio))return window.devicePixelRatio;var e=window.screen;return!(re(e)||!e.deviceXDPI||!e.logicalXDPI)&&e.deviceXDPI/e.logicalXDPI}();if(!1!==e){var t=200<window.outerWidth-window.innerWidth*e,e=300<window.outerHeight-window.innerHeight*e;if(t||e)return this.onDevToolOpen(),!1;N(this.type)}return!0}}]),t}();function re(e){return null!=e}var A,ue=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.DateToString,enabled:!b.iosChrome&&!b.iosEdge})}return u(t,[{key:"init",value:function(){var e=this;this.count=0,this.date=new Date,this.date.toString=function(){return e.count++,""}}},{key:"detect",value:function(){this.count=0,p(this.date),w(),2<=this.count&&this.onDevToolOpen()}}]),t}(),ce=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.FuncToString,enabled:!b.iosChrome&&!b.iosEdge})}return u(t,[{key:"init",value:function(){var e=this;this.count=0,this.func=function(){},this.func.toString=function(){return e.count++,""}}},{key:"detect",value:function(){this.count=0,p(this.func),w(),2<=this.count&&this.onDevToolOpen()}}]),t}(),ae=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.Debugger,enabled:b.iosChrome||b.iosEdge})}return u(t,[{key:"detect",value:function(){var e=v();100<v()-e&&this.onDevToolOpen()}}]),t}(),le=function(){n(t,k);var e=l(t);function t(){return i(this,t),e.call(this,{type:O.Performance,enabled:b.chrome||!b.mobile})}return u(t,[{key:"init",value:function(){this.maxPrintTime=0,this.largeObjectArray=M()}},{key:"detect",value:function(){var e=this,t=h(function(){y(e.largeObjectArray)}),n=h(function(){p(e.largeObjectArray)});if(this.maxPrintTime=Math.max(this.maxPrintTime,n),w(),0===t||0===this.maxPrintTime)return!1;t>10*this.maxPrintTime&&this.onDevToolOpen()}}]),t}(),fe=(e(A={},O.RegToString,_),e(A,O.DefineId,ie),e(A,O.Size,oe),e(A,O.DateToString,ue),e(A,O.FuncToString,ce),e(A,O.Debugger,ae),e(A,O.Performance,le),e(A,O.DebugLib,G),A);var R=Object.assign(function(e){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return{success:!e,reason:e}}var n;if(R.isRunning)return t("already running");if(W(),n=window.console||{log:function(){},table:function(){},clear:function(){}},B=b.ie?(p=function(){return n.log.apply(n,arguments)},y=function(){return n.table.apply(n,arguments)},function(){return n.clear()}):(p=n.log,y=n.table,n.clear),q(e),d.md5&&ne(function(e){var t=window.location.search,n=window.location.hash;if(""!==(t=""===t&&""!==n?"?".concat(n.split("?")[1]):t)&&void 0!==t){n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),e=t.substr(1).match(n);if(null!=e)return unescape(e[2])}return""}(d.tkName))===d.md5)return t("token passed");if(d.seo&&b.seoBot)return t("seobot");R.isRunning=!0,ee(R);var i=R,o=(X=function(){return i.isSuspend},window.top),r=window.parent;if(g(window),d.disableIframeParents&&o&&r&&o!==window){for(;r!==o;)g(r),r=r.parent;g(o)}return("all"===d.detectors?Object.keys(fe):d.detectors).forEach(function(e){new fe[e]}),t()},{isRunning:!1,isSuspend:!1,md5:ne,version:"0.3.8",DetectorType:O,isDevToolOpened:$});_=function(){if("undefined"==typeof window||!window.document)return null;var n=document.querySelector("[disable-devtool-auto]");if(!n)return null;var i=["disable-menu","disable-select","disable-copy","disable-cut","disable-paste","clear-log"],o=["interval"],r={};return["md5","url","tk-name","detectors"].concat(i,o).forEach(function(e){var t=n.getAttribute(e);null!==t&&(-1!==o.indexOf(e)?t=parseInt(t):-1!==i.indexOf(e)?t="false"!==t:"detector"===e&&"all"!==t&&(t=t.split(" ")),r[function(e){if(-1===e.indexOf("-"))return e;var t=!1;return e.split("").map(function(e){return"-"===e?(t=!0,""):t?(t=!1,e.toUpperCase()):e}).join("")}(e)]=t)}),r}();return _&&R(_),R});
