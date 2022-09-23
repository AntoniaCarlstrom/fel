var thumbSelect = document.querySelectorAll('.thumb'),
    windowSelect = document.querySelector('.window'),
    thumbCount;

for (thumbCount = 0; thumbCount < thumbSelect.length; thumbCount++) {
    thumbSelect[thumbCount].onmouseover = function() {
        windowSelect.src = this.src;
    };
};