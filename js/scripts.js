  var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30
  });
  jQuery(document).ready(function($){
    $('nav').prepend('<div class="menu-icon"><i class="fa fa-bars" aria-hidden="true"></i></div>');
    $(".menu-icon").on("click", function(){
      $(".nav").slideToggle();
      $(this).toggleClass("active");
    });
  });

  $(".h11").mouseout(function(e){
    $(".h1").css("background", "#485460");
  });
  $(".h11").mousemove(function(e){
    $(".h1").css("background", "#49cbcd");
  });
  $(".h21").mouseout(function(e){
    $(".h2").css("background", "#485460");
  });
  $(".h21").mousemove(function(e){
    $(".h2").css("background", "#49cbcd");
  });
  $(".h31").mouseout(function(e){
    $(".h3").css("background", "#485460");
  });
  $(".h31").mousemove(function(e){
    $(".h3").css("background", "#49cbcd");
  });
  $(document).ready(function(){
     $('input#name, input#email, textarea#message').unbind().blur( function(){
         var id = $(this).attr('id');
         var val = $(this).val();
       switch(id)
       {
             case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                  $(this).addClass('not_error');
                  $(this).next('.error-box').text('Принято')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
               }
                else
                {
                   $(this).removeClass('not_error').addClass('error');
                   $(this).next('.error-box').html('&bull; поле "Имя" обязательно для заполнения<br> &bull; длина имени должна составлять не менее двух символов<br> &bull; поле должно содержать только русские или латинские буквы')
                                              .css('color','red')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
            break;
           case 'email':
               var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
               if(val != '' && rv_email.test(val))
               {
                  $(this).addClass('not_error');
                  $(this).next('.error-box').text('Принято')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
               }
               else
               {
                  $(this).removeClass('not_error').addClass('error');
                  $(this).next('.error-box').html('&bull; поле "Email" обязательно для заполнения<br> &bull; поле должно содержать правильный email-адрес<br> (например: example123@mail.ru)')
                                             .css('color','red')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
               }
           break;
          case 'message':
              if(val != '' && val.length < 5000)
              {
                 $(this).addClass('not_error');
                 $(this).next('.error-box').text('Принято')
                                           .css('color','green')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $(this).removeClass('not_error').addClass('error');
                 $(this).next('.error-box').html('&bull; поле "Текст письма" обязательно для заполнения')
                                           .css('color','red')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
          break;
       }
     });
  });
  $(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  });
