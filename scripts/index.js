$(document).ready(function() {

	var tog = false;
	var userScrolled = false;
	var past = false;
	var blink = false;
	var navBar = $("#navb");
	var gift = $("#gift");

	$('[data-toggle="popover"]').popover();
  $(navBar).height("70px");
	$(window).scroll(function() {
		userScrolled = true;
		$("#tx").text($(this).scrollTop());
	});

	$('#togbt').click(function() {
		if(!tog){
			$(navbarToggler).addClass('bg-warning');
			tog = true;
		}
		else {
			$(navbarToggler).removeClass('bg-warning');
			tog = false;
			}
});

	function contrae() {
    $(navBar).animate({'height': "60px"}, 100);
    $(navBar).addClass('bg-warning');
		$(navbarToggler).addClass('bg-warning');
  }

	function expande() {
    $(navBar).animate({'height': "90px"}, 100);
    $(navBar).removeClass('bg-warning');
		$(navbarToggler).removeClass('bg-warning');
	}

  setInterval(function(){
    if(blink){
      blink = false;
      gift.css('color', 'yellow');
    } else {
      blink = true;
      gift.css('color', 'red');
    }
  }, 300);

	setInterval(function() {
		if(userScrolled) {
			userScrolled = false;
			if($(window).scrollTop() > 150) {
				if(!past) {
					past = true;
					contrae();
				}
			}
			else {
				if(past) {
					past = false;
					expande();
				}
			};
		}
	}, 100);

	particlesJS('particles-js',
	{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
	);
});
