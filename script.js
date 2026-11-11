function switchPage(pageId, navButton) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    const targetPage = document.getElementById(pageId);
    if(targetPage) {
        targetPage.classList.add('active-page');
    }

    if(navButton) {
        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(btn => btn.classList.remove('active'));
        navButton.classList.add('active');
    } else {
        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(btn => {
            if(btn.getAttribute('onclick').includes(pageId)) {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    }
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}
