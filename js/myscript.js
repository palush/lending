$(document).ready(function(){
   $('.zascroll,.zazabtn,.s7btn ').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.section_3').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
    $('.olia1').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    // $('html, body').animate({ scrollTop: $('.section_4').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        //
	    // return false; // выключаем стандартное действие
    });
	$('.olia2').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.section_8').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
	$('.olia3').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.section_5').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });
	$('.olia4').click( function(){ // ловим клик по ссылке с классом go_to
	
       
	    $('html, body').animate({ scrollTop: $('.section_3').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        
	    return false; // выключаем стандартное действие
    });


	$('.tovar_item').hover( function(){ 
	
       $(this).addClass('tovar_hover') ;
	   //$(this).find('.incart').text('Добавить в корзину') ;
	   
    },function(){ // ловим клик по ссылке с классом go_to
	
       $(this).removeClass('tovar_hover') ;
	     //$(this).find('.incart').text('Заказать') ;
    });
   
    $('.podrob,.bzak,.tovarimg img').click(function(){
		var id = $(this).attr('id_product') ;
		var name = $('.item'+id+' .nametovar').text() ;

		var desc = $('.item'+id+'.desc').text() ;
		var oldprice = $('.item'+id+' .oldprlist strike').text() ;
		var price = $('.item'+id+' .pricenum').text() ;
		var img = $('.item'+id+' .bigimg img').attr('src') ;
		//alert(oldprice) ;
		$("input[name='comment']").val(name);
		$('.hpop').text(name) ;
		$('.popapvspl strike').text(oldprice) ;
		$('.popapvspl .pricetoday').text(price) ;
		$('.popleft img').attr('src',img) ;
		$('.popapvspl, .allfon').attr('style','display:block;');
		$('.popzakbtnbig').attr('id_product',id) ;
		$('.slesh').text('#'+id) ;
		$('.bezslesh').text(desc) ;
		$('#popform .bistro').val(id) ;
		$('#popform .bistro_price').val(price) ;
		
		
		
		return false;	
	});	
	$('.popapvspl .close, .allfon').click(function(){
		$('.popapvspl, .allfon').attr('style','display:none;');
	});
	
	$(window).scroll(function(){ // задаем функцию при срабатывании события "scroll" на элементе <div>
		var topp = $(this).scrollTop();
		
		if(topp>=66){
			$('.cartpopolz_doin').addClass('fixedcart');
			$('.rightbltop').addClass('dodonfixedcart');
		}else{
			$('.cartpopolz_doin').removeClass('fixedcart');
			$('.rightbltop').removeClass('dodonfixedcart');
		} 
		if(topp>=210){
			$('.oplpol1').addClass('fixedcart');
		}else{
			$('.oplpol1').removeClass('fixedcart');
		} 
	})
	
	
	$('body').on('click','.cartpopolz_doin .cartminiitem .plus',function() { 
	
		$qnobj = $(this).prev('span').parent('div').prev('.qn_mini');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.text()) ;
		//alert(q) ;
		$qnobj.text(q+1);
		$.post(
					  "ajax.php",
					  {
						id: id,
						q:q+1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.rightbltop').html(data);
						  $('.cartpopolz_doin').addClass('fixedcart');
						  
						
					  }
			 )
		return false;	
	});	
	$('body').on('click','.cartpopolz_doin .cartminiitem .minus',function() { 
	
		$qnobj = $(this).parent('div').prev('.qn_mini');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.text()) ;
		//alert(q) ;
		if(q>1){
			
			$qnobj.text(q-1);
			$.post(
					  "ajax.php",
					  {
						id: id,
						q:q-1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.rightbltop').html(data);
						  $('.cartpopolz_doin').addClass('fixedcart');
						  
						
					  }
			 )
		}else {
			$.post(
					  "ajax.php",
					  {
						id: id,
						action:'delete'
						 
					  },function onAjaxSuccess(data){
						
						  $('.rightbltop').html(data);
						  $('.cartpopolz_doin').addClass('fixedcart');
						  
						  
						
					  }
					 )
		}
		
		return false;	
	});	
	$('.incart.add').click(function(){
		var id = parseInt($(this).attr('id_product'));
		var q = 1;
		$.post(
					  "ajax.php",
					  {
						id: id,
						q:q,
						action:'add'
						 
					  },function onAjaxSuccess(data){
						  $('.item'+id+'.add').text("в корзине");
						 $('.rightbltop').html(data);
						  $('.cartpopolz_doin').addClass('fixedcart');
						  
						
					  }
					 )
		
		return false;	
	});	
	$('.popzakbtnbig').click(function(){
		var id = parseInt($(this).attr('id_product'));
		var q = 1;
		$.post(
					  "ajax.php",
					  {
						id: id,
						q:q,
						action:'add'
						 
					  },function onAjaxSuccess(data){
						  $('.popzakbtnbig').text("Добавлен в корзину");
						 $('.rightbltop').html(data);
						  $('.cartpopolz_doin').addClass('fixedcart');
						  
						
					  }
					 )
		
		return false;	
	});	
	
	/*$('.cartpopolz').on('click','.xx',function() { 
		var id = parseInt($(this).attr('id_product'));
		
		$.post(
					  "ajax.php",
					  {
						id: id,
						action:'delete'
						 
					  },function onAjaxSuccess(data){
						
						  $('.cartpopolz').html(data);
						  
						  
						
					  }
					 )
		
		return false;	
	});*/
	//плюсминус корзина
	$('.cartblock').on('click','.plusminuscart .plus',function() { 
	
		$qnobj = $(this).prev('.qncart').find('span');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.text()) ;
		//alert(q) ;
		$qnobj.text(q+1);
		$.post(
					  "ajax_cart.php",
					  {
						id: id,
						q:q+1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.cartblock').html(data);
						  
						  
						
					  }
			 )
		return false;	
	});	
	$('.cartblock').on('click','.plusminuscart .minus',function() { 
	
		$qnobj = $(this).next('.qncart').find('span');
		var id = parseInt($(this).attr('id_product'));
		var q = parseInt($qnobj.text()) ;
		
		if(q>1){
			//alert(q) ;
			$qnobj.text(q-1);
			$.post(
					  "ajax_cart.php",
					  {
						id: id,
						q:q-1,
						action:'edit'
						 
					  },function onAjaxSuccess(data){
						   $('.cartblock').html(data);
						  
						  
						
					  }
			 )
		}else {
			$.post(
					  "ajax_cart.php",
					  {
						id: id,
						action:'delete'
						 
					  },function onAjaxSuccess(data){
						
						  $('.cartblock').html(data);
						  
						  
						
					  }
					 )
		}
		
		return false;	
	});	
	/*$('.popzakbtn').click(function(){
		var phone = $('#popform .phone').val();
		
		if(phone==''){
				$('#popform .phone').addClass('inp-error');
				
			} else {
				$('#popform .phone').removeClass('inp-error');
				$('#popform').submit();
				
			}
			return false;	
	});*/
	/*setTimeout(function () {

			cc();
			function cc(){
				var counter = 28;
				var interval = setInterval(function() {
					counter = counter - 1;
					$('.akckor span').text(counter);
					// Display 'counter' wherever you want to display it.
					//$('.items .bottom span').addClass('active');
					//setTimeout(function(){ $('.items .bottom span').removeClass('active') }, 1000);
					if (counter == 3) {
						// Display a login box
						clearInterval(interval);

					}
				}, 4000);				
			}
			
		
        },4000);  */
		var counter = 54;
		
    if ($.cookie('cookie_counter')){
      	counter = $.cookie('cookie_counter');
    }  
    $('.akckor span').text(counter);  
	var time = 10000;
	setTimeout(function () {
		time = 15000
	}, 10000);
	setTimeout(function () {
		time = 17000
	}, 11000);
	setTimeout(function () {
		time = 5000
	}, 37000);
	
	function timeout() {
		
	
		setTimeout(function () {
			counter = counter - 1;
			if(counter <=3){
				return false;
			}
          	$.cookie('cookie_counter', counter);
			$('.akckor span').text(counter);

			console.log(time);
			timeout();

		}, time);
	};
	timeout();		
	
});