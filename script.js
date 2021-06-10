$(".button1").click(function(){
  $(".img1").hide();
  $(".text1").hide();
  $(".button1").hide();
  $(".img2").fadeIn();
  $(".text2").fadeIn();
  $(".button2").hide();
  $("body").css("background", "#8cd3ff");
});

$(".button2").click(function(){
   $(".img1").hide();
  $(".text1").hide();
  $(".button1").hide();
  $(".button2").hide();
  $(".button3").fadeIn();
  $(".button4").fadeIn();
  $(".img3").fadeIn();
  $(".text3").fadeIn();
  $("body").css("background", "#8cd3ff");
});

$(".img2").dblclick(function(){
  $(".scene1").show();  
  $(".scene2").hide();
     $("body").css("background", "##8cd3ff");
});

$(".button4").click(function(){
   $(".scene3").hide();
  $(".scene5").show(); 
  $("body").css("background", "##8cd3ff");
 
});

$(".button3").click(function(){
   $(".scene3").hide();
  $(".scene4").show(); 
  $("body").css("background", "##8cd3ff");
 
});

$(".button5").hover(function(){
   $(".scene4").hide();
  $(".scene1").show(); 
  $("body").css("background", "##8cd3ff");
 
});

$(".img5").dblclick(function(){
  $(".scene6").show();  
  $(".scene5").hide();
     $("body").css("background", "##8cd3ff");
});

$(".img6").click(function(){
  $(".scene7").show();  
  $(".scene6").hide();
     $("body").css("background", "##8cd3ff");
});

$(".button7").click(function(){
   $(".scene7").hide();
  $(".scene1").show(); 
  $("body").css("background", "##8cd3ff");
 
});