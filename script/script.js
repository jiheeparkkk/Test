$(document).ready(function(){
  $("nav>ul>li").mouseover(function(){
      $(this).find(".sub").stop().fadeIn(200);
  });
  $("nav>ul>li").mouseout(function(){
      $(this).find(".sub").stop().fadeOut(200);
  });

      var s = 0;
  setInterval(function(){
      if(s<12){
          s++;
      }else{
          s = 0;
      }

      $(".slide ul").animate({left:(-1920) * s + "px"},1000);
  },3000);

  $(".tabmenu a").click(function(){
      $(".tabmenu a").removeClass("on");
      $(this).addClass("on");

      var i = $(this).index();

      $(".tabcon div").hide();
      $(".tabcon div").eq(i).show();
  });

  $(".pop").click(function(){
      $(".popup").show();
  });

  $(".popup button").click(function(){
      $(".popup").hide();
  });

})