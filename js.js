function showContent(contentId) {

    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');	
    });

    document.getElementById(contentId).classList.add('active');
    event.target.classList.add('active');
}
