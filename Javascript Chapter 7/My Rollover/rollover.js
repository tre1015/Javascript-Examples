// Tra'Mel Marshall
"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.href;
    };

    image1.onmouseover = function() {
        image1.src = "images/castle.jpg";
    };
    image1.onmouseout = function() {
        image1.src = "images/ninja.jpg";
    };
    
    image2.onmouseover = function() {
        image2.src = "images/food.jpg";
    };
    image2.onmouseout = function() {
        image2.src = "images/judo.jpg";
    };
};
