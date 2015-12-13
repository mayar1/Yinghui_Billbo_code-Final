$(function(){
   Parse.$ =jQuery;
   Parse.initialize("KZN4EZh4ePF17AgmyisA3NXDhkWMUgUXdwJvz50o", "kx4WFuQDAcosa4KfMSsYOIJIfmJ8rMCsCN6sojY4");

   var TextObject = Parse.Object.extend("TextObject");
   var textObject = new TextObject();
   $(".usera").parent().siblings().show();
   $(".usera").hide();
   
   $(".form-signin").on("submit",function(e){
   	e.preventDefault();
      var data = $(this).serializeArray();
      username = data[0].value;
      password = data[1].value;
      Parse.User.logIn(username,password, {
           success: function(user) {
           	location.href="users.html";
             sessionStorage.setItem( "user", username );
            }

       });
    })
   
  
   $(".form-signin2").on("submit",function(e){
    e.preventDefault();
      var data1 = $(this).serializeArray();
      username = data1[0].value;
      password = data1[1].value;
      var user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
      user.signUp(null, {
        success: function(user) {
         alert("Hi" + username +", welcome to Billbo");
         window.location.href="users.html";
        },
        error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
        }
      });
    });

  $('.form-logout').on('submit', function (e) {
        // Prevent Default Submit Event
        e.preventDefault();

        console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
        }


        // or
        window.location.href = "index.html";
  });


})




