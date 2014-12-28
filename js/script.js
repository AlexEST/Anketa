$(function(){
	$( "#slider" ).slider({ value: 21, min: 1, max: 100, step: 1 });

	$('.radio').click(function(){
		$('.radio').removeClass('active').addClass('passive');
		$(this).removeClass('passive').addClass('active');
		var name = $(this).attr('data-hidden');
		if( $('.' + name).val() == 0){ $('.' + name).val(1);
		} else { $('.' + name).val(0); }
	});

	$('.checkbox').click(function(){ $(this).toggleClass('check'); });
});