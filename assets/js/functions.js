$(document).ready(function() {
  if ($("audio").prop('muted', false)){
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10430.svg)");
  }

$("#mute").click( function (){if( $(".mute").hasClass("paused") ) {$("audio").prop('muted', true);} else {$("audio").prop('muted', false);}});