// sticky menu visibility aka opacity
window.addEventListener('scroll', function()
{
    if(window.scrolly > 10) {
        document.querySelector('#navbar').getElementsByClassName.opacity = 0.1;
    } else {
        document.querySelector('#navbar').getElementsByClassName.opacity = 1;
    }
});



// smooth scrolling 
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;

        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});