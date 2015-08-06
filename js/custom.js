/* Custom JS for Code Gym 
–––––––––––––––––––––––––––––––––––––––––––––––––– 
[Table Of Contents]

	01 - CONTACT
	02 - HOW IT WORKS
*/


/* –––––––––––––––––––––––––––––––––––––––––––––––
01 - CONTACT
–––––––––––––––––––––––––––––––––––––––––––––––––– */

function postContactToGoogle () {
	var name = $('#contactName').val();
	var email = $('#contactEmail').val();
	var message = $('#contactMessage').val();

	$.ajax({
		url: "https://docs.google.com/forms/d/1O-h-OQazEgGn9lwf7kNYL-fpwT8c1AI_N0v7is4mttA/formResponse",
		data: {'entry.212631191': name, 'entry.1381694881':email, 'entry.515619592': message, },
		type: "POST",
		dataType: "xml",
		statusCode: {
			0: function() {
				$('#contact .box').toggle();
				$('#boxSendSuccess').toggle();
			},
			200: function() {
				$('#contact .box').toggle();
				$('#boxSendFailure').toggle();
			}
		}
	});
}

function postRegisterHamburgToGoogle () {
	var nameRegister = $('#registerHamburg #mainRegisterName').val();
	var emailRegister = $('#registerHamburg #mainRegisterEmail').val();
	var startDates = $('#datesList').val();
	var messageRegister = $('#registerHamburg #mainRegisterComment').val();


	$.ajax ({
		url: "https://docs.google.com/forms/d/1UdNjaeLUutI1RCaDN9G-MULMVYd1zMHXOdkMq7vfEWs/formResponse", 
		data: {'entry.2100843075': nameRegister, 'entry.969521207': emailRegister, 'entry.1188960316':startDates, 'entry.936694200': messageRegister},
		type: "POST",
		dataType: 'xml',
		statusCode: {
			0: function() {
				$('#registerHamburg .modal-header').toggle();
				$('#registerHamburg .modal-body').toggle();
				$('#registerHamburg .modal-footer #buttonSubmit').attr("disabled", "disabled");
				$('#registerHamburgSuccess').toggle();
			},
			200: function() {
				$('#registerHamburg .modal-header').toggle();
				$('#registerHamburg .modal-body').toggle();
				$('#registerHamburg .modal-footer #buttonSubmit').attr("disabled", "disabled");
				$('#registerHamburgFailure').toggle();
			}
		}
	});
}	

function postRegisterMyCityToGoogle () {
	var nameRegister = $('#registerCity #cityRegisterName').val();
	var emailRegister = $('#registerCity #cityRegisterEmail').val();
	var myCity = $('#registerCity #cityRegisterCity').val();
	var messageRegister = $('#registerCity #cityRegisterComment').val();

	$.ajax ({
		url: "https://docs.google.com/forms/d/1qGeo_YHxjjnVUxgdaW4hvrYJV2Yngf04TFoHtYMJuf8/formResponse",
		data: {'entry.275212063': nameRegister, 'entry.2018228417': emailRegister, 'entry.473071324': myCity, 'entry.1522915950': messageRegister},
		type: 'POST',
		dataType: 'xml',
		statusCode: {
			0: function () {
				$('#registerCity .modal-header').toggle();
				$('#registerCity .modal-body').toggle();
				$('#registerCity .modal-footer #buttonSubmit').attr("disabled", "disabled");
				$('#registerCitySuccess').toggle();
			},
			200: function (){
				$('#registerCity .modal-header').toggle();
				$('#registerCity .modal-body').toggle();
				$('#registerCity .modal-footer #buttonSubmit').attr("disabled", "disabled");
				$('#registerCityFailure').toggle();

			}
		}

	});

}

$(document).ready(function() {
	$('#registerHamburg').submit(function() {
		postRegisterHamburgToGoogle();
		return false;
	})

	$('#registerCity').submit(function() {
		postRegisterMyCityToGoogle();
		return false;
	})

	$('#formContact').submit(function() {
		postContactToGoogle();
		return false;
	})	
});

/* –––––––––––––––––––––––––––––––––––––––––––––––
02 - HOW IT WORKS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
if (window.matchMedia('(min-width: 768px)').matches){
	$('.box1').hover(function() {
		$('.boxRegister').toggleClass("flipped");
	})
} else {
	$('.box1').click(function() {
		$('.boxRegister').toggleClass("flipped");
	})
}


$('.box2').hover(function() {
	$('.boxPlan').toggleClass("flipped");
})

$('.box3').hover(function() {
	$('.boxMeet').toggleClass("flipped");
})

$('.box4').hover(function() {
	$('.boxPlaces').toggleClass("flipped");
})

/* –––––––––––––––––––––––––––––––––––––––––––––––
03 - SCROLLING
–––––––––––––––––––––––––––––––––––––––––––––––––– */

$('.navbar ul li a[href^="#"]').on('click', function(e){
	e.preventDefault();
	var hash = this.hash;
	$('html, body').animate({
		scrollTop: $(hash).offset().top }, 800, function() {
			window.location.hash = hash; 
	}); 
});

$('#main .maintext a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var hash = this.hash;
	$('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function() {
		window.location.hash = hash; 
	});
});


