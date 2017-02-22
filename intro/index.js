// qnd o documetno estiver pronto, vai executar a função. $ de dselecionar o documento interito
$(document).ready(function(){
  // FUNÇÃO QND SCROLL(ROLAR O MOUSE) INDEX É UMA VARIAVEL. VAI SELECIONAR O BODY E HTML E VAI FAZER ANIMAÃO. VAi COLOCAR O TOPO DO HTML E BODY NO TOPO DO ELEMNTO INDEX EM 
  //1500ms. 
	function scrollTo(index){
		$('html, body').animate({
			scrollTop: $(index).offset().top-50
		}, 1500);
	};


  /**/
	$(".navButton").click(function(){scrollTo($(this).data("scroll"))});
	$(".navbar-inverse .navbar-brand").click(function(){scrollTo("#header")});	


   var scroll_start = 0;
   var startchange = $('#header');
   var offset = startchange.offset();
   if (startchange.length){

   		$(document).scroll(function() { 
      		scroll_start = $(this).scrollTop();
      		if(scroll_start > 50) {
          		$(".navbar-inverse").css('background-color', 'white');
          		$("ul.navbar-right>li>a").css('color', 'black');
              $(".navbar-inverse .navbar-brand").css('color', 'black');
    		} else {
        		$('.navbar-inverse').css('background-color', 'transparent');
        		$("a").css('color', '#DCDCDC');
            $(".navbar-inverse .navbar-brand").css('color', '#DCDCDC');
        	}
   		});
   }

$(".glyphicon-estrutura").hover(function(){
  $(this).stop().transition({scale: '0.8', borderColor:'white'})
}, function(){
  $(this).stop().transition({scale: '1', borderColor:'orange'})
})
  //tooltip
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  //tooltip
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });


    /*CÓDIGO PARA video modal*/
    $('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});


});


$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});
