$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-list").prepend("<li>Meow!</li>");
    $("ul#dog-list").prepend("<li>Bark, Bark!</li>");
    $("ul#cat-list").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog-list").children("li").first().click(function() {
      $(this).remove();
    });

    // $("ul#cat-list").children("li").first().click(function() {
    //
    //   $("ul#cat-list").after("<img src='img/cat.jpg' class='img-responsive' id='cat-pic'>");
    // });
    //
    // $("#cat-pic").click(function(){
    //   $("img#cat-pic").hide();
    // });

  });

  $("button#dog").click(function() {
    $("ul#cat-list").prepend("<li>Hiss!</li>");
    $("ul#dog-list").prepend("<li>Woof!</li>");
    $("ul#dog-list").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat-list").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#cat-list").click(function() {
    $("#cat-pic").show();
  });

  $("#dog-list").click(function() {
    $("#dog-pic").show();
  });

  $("#cat-pic").click(function(){
    $("#cat-pic").hide();
  });

  $("#dog-pic").click(function(){
    $("#dog-pic").hide();
  });


});
