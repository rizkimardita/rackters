// AUTO HEIGHT ------------------------------------ s 
//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeight = $("html").height() + "px";
    $(".contentRight").css("height", newHeight);
//    var newWidth = $("html").width() + "px";
//    $(".contentRight").css("width", newWidth);
}
// AUTO HEIGHT ------------------------------------ e 

$(document).ready(function() {
    $('.carauselList').addClass('dNone');
    $('.imgCatCont').hover(function() {
	  $('.carauselList').slideToggle();
	});
//    $('.imgCatCont').mouseout(function() {
//	  $('.carauselList').slideUp();
//	});
    
    $('.dropdownCollections').addClass('dNone');
    $('#listProduct').click(function() {
	  $('.dropdownCollections').slideToggle(100);
	});
$('.dropdownUsername').addClass('dNone');
    $('.userName').click(function() {
	  $('.dropdownUsername').slideToggle(100);
	});

    
    
    // input type file
// SEARCH INPUT ======================	S		
			$('input[type="text"]').addClass("idleField");
       		$('input[type="text"]').focus(function() {
       			$(this).removeClass("idleField").addClass("focusField");
    		    if (this.value == this.defaultValue){ 
    		    	this.value = '';
				}
				if(this.value != this.defaultValue){
	    			this.select();
	    		}
    		});
    		$('input[type="text"]').blur(function() {
    			$(this).removeClass("focusField").addClass("idleField");
    		    if ($.trim(this.value) == ''){
			    	this.value = (this.defaultValue ? this.defaultValue : '');
				}
    		});
    
    // text area
    $('textarea').addClass("idleField");
       		$('textarea').focus(function() {
       			$(this).removeClass("idleField").addClass("focusField");
    		    if (this.value == this.defaultValue){ 
    		    	this.value = '';
				}
				if(this.value != this.defaultValue){
	    			this.select();
	    		}
    		});
    		$('textarea').blur(function() {
    			$(this).removeClass("focusField").addClass("idleField");
    		    if ($.trim(this.value) == ''){
			    	this.value = (this.defaultValue ? this.defaultValue : '');
				}
    		});
    // text area
    
    
		
			$('input[type="textarea"]').addClass("idleField");
       		$('input[type="textarea"]').focus(function() {
       			$(this).removeClass("idleField").addClass("focusField");
    		    if (this.value == this.defaultValue){ 
    		    	this.value = '';
				}
				if(this.value != this.defaultValue){
	    			this.select();
	    		}
    		});
    		$('input[type="textarea"]').blur(function() {
    			$(this).removeClass("focusField").addClass("idleField");
    		    if ($.trim(this.value) == ''){
			    	this.value = (this.defaultValue ? this.defaultValue : '');
				}
    		});
		
		$(".defaultText").focus(function(srcc)
    {
        if ($(this).val() == $(this)[0].title)
        {
            $(this).removeClass("defaultTextActive");
            $(this).val("");
        }
    });
    
    $(".defaultText").blur(function()
    {
        if ($(this).val() == "")
        {
            $(this).addClass("defaultTextActive");
            $(this).val($(this)[0].title);
        }
    });
    
    $(".defaultText").blur();   
		

// input type file
// SEARCH INPUT ======================	E
    
    
});


