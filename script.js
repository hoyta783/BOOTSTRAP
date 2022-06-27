$(document).ready( function(){
    alert("Welcome to my personal webpage!");
});


   

    $( ".change" ).on("click", function() {
      if( $( "body" ).hasClass( "dark" )) {
          $( "body" ).removeClass( "dark" );
          $( ".change" ).text( "OFF" );
      } else {
          $( "body" ).addClass( "dark" );
          $( ".change" ).text( "ON" );
      }
  });


  $("button").click(function(){
    $("#p2").css("color", "red").fadeOut(2000);
  });






