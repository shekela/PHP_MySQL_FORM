$(document).ready(function(){
	$('#BTN').click(function(e) {
	   
       e.preventDefault();

	   var firstname = $('#fname').val();
	   var lastname = $('#lname').val();
	   var email = $('#email').val();

	   if(firstname != '' && lastname != '' && email != ''){
	   	 $("#MSGBOX").css("background-color", "green");
         $("MSGBOXTEXT").css("color", "black");
         setTimeout(location.reload.bind(location), 2000);
	   }
	   else{
	   	$("#MSGBOXTEXT").text($("#MSGBOXTEXT").text().replace("Added Succesfully", "Please fill all fields"));
	   	$("#MSGBOX").css("background-color", "red");
	   	$("#MSGBOXTEXT").css("color", "black");
	   	setTimeout(location.reload.bind(location), 7000);
	   }
      

       

	   $.ajax({
    	type:'POST',
    	url:'process.php',
        data: $('form').serialize(),
        success: function(result){
           
        }
    });
	   
	   
	});
});