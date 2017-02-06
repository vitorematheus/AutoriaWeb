$(document).ready(function(){
 time = 250;
 windowIsResized = false;
	
  // INÍCIO CÓDIGO PARA ANIMAÇÃO QUANDO CLICAR NUMA SECÇÃO DO NAVBAR
  function scrollTo(index){
		$('html, body').animate({
			scrollTop: $(index).offset().top
		}, 1000);
	};
	$("#about").click(function(){scrollTo("#sobre")});
	$(".navbar-inverse .navbar-brand").click(function(){scrollTo("#header")});
  // FIM CÓDIGO PARA ANIMAÇÃO QUANDO CLICAR NUMA SECÇÃO DO NAVBAR	


  // INÍCIO CÓDIGO PARA O NAVBAR MUDAR DE COR PARA QUANDO REDIMENSIONAR A WIDTH DA TELA
  $(window).on('resize', function(event){
    var windowSize = $(window).width(); // Could've done $(this).width()
    if(windowSize < 700){
      windowIsResized = true;
      $(".navbar-inverse").stop().transition({backgroundColor: 'white'}, time);
      $("ul.navbar-right>li>a").stop().transition({color: 'black'}, time);
      $(".navbar-inverse .navbar-brand").stop().transition({color: 'black', fontSize: '13px'}, time);
    }else{
      $(".navbar-inverse").stop().transition({backgroundColor: 'transparent'}, time);
      $("a").stop().transition({color: '#DCDCDC'}, time);
      $(".navbar-inverse .navbar-brand").stop().transition({color: 'white', fontSize: '18px'}, time);
      windowIsResized = false;
    }
  });
// FIM CÓDIGO PARA O NAVBAR MUDAR DE COR PARA QUANDO REDIMENSIONAR A WIDTH DA TELA


// INÍCIO CÓDIGO PARA O NAVBAR MUDAR DE ROLAR (SCROLL) A TELA PARA BAIXO
   var scroll_start = 0;
   var startchange = $('#header');
   var offset = startchange.offset();
   if (startchange.length){
   		$(document).scroll(function() { 
      		scroll_start = $(this).scrollTop();
    
          if(scroll_start > 50 && windowIsResized == false) {
            		$(".navbar-inverse").stop().transition({backgroundColor: 'white'}, time);
            		$("ul.navbar-right>li>a").stop().transition({color: 'black'}, time);
                $(".navbar-inverse .navbar-brand").stop().transition({color: 'black', fontSize: '13px'}, time);
      		} else if(scroll_start < 50 && windowIsResized == false) {
          		$(".navbar-inverse").stop().transition({backgroundColor: 'transparent'}, time);
          		$("a").stop().transition({color: '#DCDCDC'}, time);
              $(".navbar-inverse .navbar-brand").stop().transition({color: 'white', fontSize: '18px'}, time);
          	}
     		});
   }
// FIM CÓDIGO PARA O NAVBAR MUDAR DE ROLAR (SCROLL) A TELA PARA BAIXO
});