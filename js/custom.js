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

$(document).ready(function() {
	$('#formContact').submit(function() {
		postContactToGoogle();
		return false;
	})	
});
