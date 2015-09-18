function printLang(theLang) {
	$.ajax({
	    url: 'languages.xml',
	    success: function(xml) {
	        $(xml).find('translation').each(function(){
	            var id = $(this).attr('id');
	            var text = $(this).find(theLang);
	            $('.'+id).html(text);
	        });
	    }
	});
};
$(document).ready(function() {
	printLang('pt');
});
$(document).on('click', 'button.language', function(event) {
	if ($(this).attr('lang') == 'pt') {
		printLang('pt');
	} else if ($(this).attr('lang') == 'en') {
		printLang('en');
	}
});
