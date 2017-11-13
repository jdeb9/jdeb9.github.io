
$(document).ready(function(){

  // Activate the side menu
  $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff */ },  // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    }
  );

});

function updatePage(title, content) {
  //hide title
  $( "#page-title" ).fadeOut( 200, function() {});

  //hide content
  $( "#main-page-content" ).fadeOut( 200, function() {
    //update content
    $( "#page-title" ).html(title);
    $("#page-content").html(content);
    $( "#page-title" ).fadeIn( 300, function() {});
    $( "#main-page-content" ).fadeIn( 300, function(){});
  });
}
