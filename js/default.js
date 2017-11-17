
$(document).ready(function(){

  //set default page content
  $( "#about-link" ).parent().addClass("active");
  $( "#page-title" ).html( $( "#about-me-title" ).html() );
  $( "#page-content" ).html( $( "#about-me" ).html() );

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

  //navigation buttons + content setting
  $( ".brand-logo" ).on( "click", function() {
    updatePage($( "#about-me-title" ).html() , $( "#about-me" ).html());
  });

  $( "#about-link" ).on( "click", function(event) {
    setActive(event.target);
    updatePage($( "#about-me-title" ).html() , $( "#about-me" ).html());
  });

  $( "#projects-link" ).on( "click", function() {
    setActive(event.target);
    updatePage($( "#projects-title" ).html() , $( "#projects" ).html());
  });

  // $( "#studies-link" ).on( "click", function() {
  //   setActive(event.target);
  //   updatePage($( "#studies-title" ).html() , $( "#studies" ).html());
  // });

  $( "#contact-link" ).on( "click", function() {
    setActive(event.target);
    updatePage($( "#contact-title" ).html() , $( "#contact" ).html());
  });

});

//update the page with specified content
function updatePage(title, content) {
  //hide title and footer
  $( "#page-title" ).fadeOut( 150, function() {});
  $( "#standard-footer" ).fadeOut( 150, function() {});

  //hide page content
  $( "#page-content" ).fadeOut( 150, function() {
    //update content
    $( "#page-title" ).html(title);
    $( "#page-content" ).html(content);

    $( "#page-title" ).fadeIn( 200, function() {});
    $( "#page-content" ).fadeIn( 200, function(){});
    $( "#standard-footer" ).fadeIn( 200, function() {});
  });
}

function setActive(current_nav_link) {
  //deselect all other nav links
  document.getElementById( "about-link" ).parentNode.classList.remove("active");
  document.getElementById( "projects-link" ).parentNode.classList.remove("active");
  // document.getElementById( "studies-link" ).parentNode.classList.remove("active");
  document.getElementById( "contact-link" ).parentNode.classList.remove("active");
  // classList.remove("CLASS_NAME");
  // d.className += " otherclass";

  $(current_nav_link).parent().addClass("active");
}
