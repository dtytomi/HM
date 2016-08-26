/*!
 * Start Bootstrap - Grayscale v1.1.0 (http://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

function collapseNavbar() {
    $(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"): $(".navbar-fixed-top").removeClass("top-nav-collapse")
}

function init() {
    var e= {
        zoom:15,
        center:new google.maps.LatLng(6.642907, (3.342938)),
        disableDefaultUI:!0,
        scrollwheel:!1,
        draggable:!1,
        styles:[ {
            featureType:"water",
            elementType:"geometry",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            featureType:"landscape",
            elementType:"geometry",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            featureType:"road.highway",
            elementType:"geometry.fill",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            featureType:"road.highway",
            elementType:"geometry.stroke",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            },
            {
                weight: .2
            }
            ]
        }
        ,
        {
            featureType:"road.arterial",
            elementType:"geometry",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            featureType:"road.local",
            elementType:"geometry",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            featureType:"poi",
            elementType:"geometry",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            elementType:"labels.text.stroke",
            stylers:[ {
                visibility: "on"
            }
            ,
            {
                "hue": "#00d4ff" 
            }
            ,
            {
                "lightness": -20 
            }
            ]
        }
        ,
        {
            elementType:"labels.text.fill",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            elementType:"labels.icon",
            stylers:[ {
                visibility: "off"
            }
            ]
        }
        ,
        {
            featureType:"transit",
            elementType:"geometry",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            featureType:"administrative",
            elementType:"geometry.fill",
            stylers:[ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ,
        {
            featureType:"administrative",
            elementType:"geometry.stroke",
            "stylers": [ { 
                "hue": "#00d4ff" 
            },
            { 
                "saturation": 60 
            },
            { 
                "lightness": -20 
            },
            { 
                "gamma": 1.51 
            }
            ]
        }
        ]
    }
    ,
    t=document.getElementById("map");
    map=new google.maps.Map(t, e);
    var l="img/map-marker.png",
    o=new google.maps.LatLng(6.642907, (3.342938));
    new google.maps.Marker( {
        position: o, map: map, icon: l
    }
    )
}

$(window).scroll(collapseNavbar),
$(document).ready(collapseNavbar),
$(function() {
    $("a.page-scroll").bind("click", function(e) {
        var t=$(this);
        $("html, body").stop().animate( {
            scrollTop: $(t.attr("href")).offset().top
        }
        , 1500, "easeInOutExpo"), e.preventDefault()
    }
    )
}

),
$(".navbar-collapse ul li a").click(function() {
    "dropdown-toggle active"!=$(this).attr("class")&&"dropdown-toggle"!=$(this).attr("class")&&$(".navbar-toggle:visible").click()
}

);
var map=null;
google.maps.event.addDomListener(window, "load", init),
google.maps.event.addDomListener(window, "resize", function() {
    map.setCenter(new google.maps.LatLng(6.642907, (3.342938)))
}

);