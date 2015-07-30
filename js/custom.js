/* Custom JS for Code Gym 
–––––––––––––––––––––––––––––––––––––––––––––––––– 
[Table Of Contents]

	01- HOW IT WORKS
	02 - CONTACT
*/

/* –––––––––––––––––––––––––––––––––––––––––––––––
01 - HOW IT WORKS
–––––––––––––––––––––––––––––––––––––––––––––––––– */	

	/*Box 1 - Register */

	// var worksRegisterTitle = $("#how-works #titleRegister");
	// var worksRegisterText = $("#how-works #textRegister");
	// var parentRegisterBox = worksRegisterTitle.parent('div');

	// parentRegisterBox.hover(
	// 	function(){
	// 	worksRegisterText.toggle();
	// 	worksRegisterTitle.toggle();
	// 	parentRegisterBox.toggleClass('box1-active, box1');
	// });

	/*Box 2 - Plan */
	
	// var worksPlanTitle = $("#how-works #titlePlan");
	// var worksPlanText = $("#how-works #textPlan");
	// var parentBoxPlan = worksPlanTitle.parent('div');

	// parentBoxPlan.click(function(){
	// 	worksPlanText.toggle();
	// 	worksPlanTitle.toggle();
	// 	parentBoxPlan.toggleClass('box1-active, box2');
	// });


/* –––––––––––––––––––––––––––––––––––––––––––––––
02 - CONTACT
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
				$('#registerHamburg').toggle();
			}
		}
	});
}	

$(document).ready(function() {
	$('#registerHamburg').submit(function() {
		postRegisterHamburgToGoogle();
		return false;
	})

	$('#formContact').submit(function() {
		postContactToGoogle();
		return false;
	})	
});


// TODO: 1.) 200 function for HH Register Modal, 2.) My City Register Modal
