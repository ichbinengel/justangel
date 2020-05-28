
particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 100,
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
				"color": "#ffffff"
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
				"enable": true,
				"speed": 2.4,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 79,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 0.3
		},
		"move": {
			"enable": true,
			"speed": 8,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": true,
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
				"mode": ["repulse", "bubble"]
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
				"distance": 300,
				"size": 50,
				"duration": 0.8	,
				"opacity": 0.3,
				"speed": 3
			},
			"repulse": {
				"distance": 100,
				"duration": 0.5
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
});