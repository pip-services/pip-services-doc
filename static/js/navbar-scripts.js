function loadNavbar(event) {

    // fix bug with toc tree empty lines
    let tab = document.getElementById('TableOfContents')
    if (tab != null && tab.getElementsByTagName('li').length > 0) {
        for (var el of tab.getElementsByTagName('li')) {
            if (el.innerText === '') { el.remove(); }
            if (el.firstChild != null && el.firstChild.innerText === '') { el.firstChild.remove(); }
        }
    }


    // Event save current menu active item
    Array.from(document.getElementsByClassName('nav-link dropdown-item')).forEach(navItem =>
        navItem.addEventListener('click', () => localStorage['currentMenuActiveItem'] = navItem.innerText)
    )

    // load navbar scroll state 
    document.getElementById('td-section-nav').scrollTop = Number.parseFloat(localStorage['navbarScrollState']);
    document.getElementById('js-bootstrap-offcanvas').scrollTop = Number.parseFloat(localStorage['navbarScrollState']);

    // load navbar state
    if (document.getElementsByClassName('nav-link active dropdown-item').length == 0){
        Array.from(document.getElementsByClassName('nav-link dropdown-item')).forEach(navItem => {
            if (navItem.innerText.trim() == localStorage['currentMenuActiveItem'] && !['/', '/pip-services-docs/'].includes(document.location.pathname )) {
                navItem.classList.add('active');
                navItem.firstElementChild.classList.add('active');
                document.getElementById('navbarDropdownMenuLinkDesktop').innerText = localStorage['currentMenuActiveItem'];
                document.getElementById('navbarDropdownMenuLinkMobile').innerText = localStorage['currentMenuActiveItem'];
            }
        })
    }
    
    // get current active or Menu by default
    if (document.getElementsByClassName('nav-link active dropdown-item')[0] == undefined){
        localStorage['currentMenuActiveItem'] = 'Home';
        localStorage['dropdownState'] = 'Home';
    } else {
        localStorage['currentMenuActiveItem'] = document.getElementsByClassName('nav-link active dropdown-item')[0].innerText.trim();
    }
    
    

    if (localStorage['openNav'] === 'true') {
        if (document.getElementsByClassName('td-sidebar-nav-active-item').length === 0) { return; }
        // check is the last el
        if (!document.getElementById('js-bootstrap-offcanvas').classList.contains('in')) {
            let speedTransition = document.getElementsByClassName('navbar-offcanvas')[0];
            let _tmp = [...speedTransition.style];

            speedTransition.style += 'transition: 0s;'
            document.getElementById('js-bootstrap-offcanvas').classList.add('in');
            speedTransition.style.transition = _tmp
        }
    }
}

function hideAlgoliaPopUp(event) {
    if (document.getElementsByClassName('algolia-autocomplete').length > 0) {
        if (!event.target.classList.contains('algolia-autocomplete') && event.target.getAttribute('type') !== 'search') {
            let autocompleteEl = document.getElementsByClassName('ds-dropdown-menu')[0];
            autocompleteEl.style.display = 'none';
        }
    }
}

function getViewport(getWidth=false) {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    )
    if (!getWidth){
        if (width <= 576) return 'xs'
        if (width <= 768) return 'sm'
        if (width <= 992) return 'md'
        if (width <= 1200) return 'lg'
        return 'xl'
    } else {
        return width
    }
    
}

function saveNavState(event) {
    let pressedEl = event.target
    if (pressedEl.classList.contains('nav-item-tree') || pressedEl.parentElement.classList.contains('nav-item-tree') || pressedEl.parentElement.parentElement.classList.contains('nav-item-tree'))
        localStorage['openNav'] = true;
    else
        localStorage['openNav'] = false;
}

function showSearch(event) {

    if (getViewport(true) <= 1200) {
        let searchButton = document.getElementById("search-btn")
        let searchBox = document.getElementById("hidden-search");

        if (searchBox.classList.contains("d-md-none")) {
            searchBox.classList.remove("d-md-none");
            
            // hide search icon for small screens
            if (getViewport(true) <= 859) {
                // hide btn
                searchButton.classList.remove("d-md-inline-block");
                searchButton.classList.add("d-md-none");
            }

            searchBox.focus();

        } else {
            searchBox.classList.add("d-md-none");
            searchButton.classList.add("d-md-inline-block");
        }
    }
}

let saveScrollState = (e) => localStorage['navbarScrollState'] = e.target.scrollTop;

/// Adding events

// loadNavbar
document.addEventListener("readystatechange", loadNavbar);

// fixed TypeScript Highlights for generic types, removi if will be fixed in Chroma
document.addEventListener("readystatechange", () => {
    const color = '#111'; // #1e0010;

    var errCodes = document.querySelectorAll('span[style="color:#960050;background-color:#1e0010"]');

    if(errCodes.length == 0) return;

    for (let code of errCodes) {
        code.style['background-color'] = '';
        code.style['color'] = color;
    }
});


// flush local storage
window.addEventListener('close', () => {
    localStorage.removeItem('currentMenuActiveItem');
    localStorage.removeItem('openNav');
});

// save scroll state
document.getElementById('td-section-nav').addEventListener(
    'scroll', saveScrollState
);

document.getElementById('js-bootstrap-offcanvas').addEventListener(
    'scroll', saveScrollState
);

document.getElementById("search-btn").addEventListener("click", showSearch);
document.getElementById("hidden-search").addEventListener("blur", showSearch);

// save navbar in opened state for mobiles
if (getViewport(true) < 768) {
    document.body.addEventListener('click', saveNavState);
}

// algolia search animation
document.body.addEventListener("click", hideAlgoliaPopUp);