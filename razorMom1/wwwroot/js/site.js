// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
(function () {

    let hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),

        doToggle: function (e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };

    hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
    //tog bort nedanstående, då funkade ej länkarna
    /*hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });*/

}());