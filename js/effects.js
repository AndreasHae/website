$(document).ready(() => {
    let $navbarTitleLink = $('nav > h1 > a')

    $(document).scroll(() => {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= 75) {
            //$navbarTitleLink.css('display', 'inline')
            $navbarTitleLink.css('opacity', 1)
        } else {
            $navbarTitleLink.css('opacity', 0)
            //setTimeout(() => $navbarTitleLink.css('display', 'none'), 1000)
        }
    })
})