;
"use strict";

function DOMready() {


	// $('.select').on('change', function(event) {
	// 	var currentItem = ($(this).val()-1);
	// 	$('.art-slider-list').hide();
	// 	$('.art-slider-list').eq(currentItem).show();
	// 	$('.art-slider-list').slick('unslick');
	// 	$('.art-slider-list').slick({
	// 		dots: true,
	// 		arrows: false,
	// 		slidesToShow: 1,
	// 		slidersToScroll: 1,
	// 	}); 

	// });

	// $('.art-slider-list').slick({
	// 	dots: true,
	// 	arrows: false,
	// 	slidesToShow: 1,
	// 	slidersToScroll: 1,
	// });


	if($(window).width() < 1000){
		$('.content-window').css('display', 'none');
		$('.content-mobile').css('display', 'block');
	}
	else {
		$('.content-mobile').css('display', 'none');
		$('.content-window').css('display', 'block');
	}

	$('body').on("click", ".js--item-active", function(){
		var info = $(this).data('info');
		$('.infotext').html('');
		$('.infotext').text(info);
		console.log(info);
	})

	$(".draggable").draggable({ 
		stack: ".draggable"
	});
	$("#droppable").droppable({
	  accept: ".draggable",
	  tolerance:"fit",
	  // helper:'clone',
	  // activeClass: "ui-state-hover",
	  hoverClass: "ui-state-active",
	  drop:function(event, ui){
	    $(this).addClass("ui-state-highlight")
	    setTimeout(resetColor ,1000);
	  }
	});

	function resetColor(){
    	$('#droppable').css({
			'background-color': 'transparent',
			'color': 'transparent'
		});
	}

	$(".draggable").draggable({
	  start: function(){
	    $('.hello').remove();
	  },
	  drag: function(){
	  	console.log('1');
	  },
	  stop: function(){
	    $(this).draggable({ containment:"#droppable", scroll:false });
	  }
	});


	$('body').on("click", ".js--save-btn", function(){
		html2canvas(document.querySelector(".capture")).then(canvas => {
		    saveAs(canvas.toDataURL(), 'canvas.png');
		});
	})

	function saveAs(uri, filename) {
	    var link = document.createElement('a');
	    if (typeof link.download === 'string') {
	      link.href = uri;
	      link.download = filename;

	      //Firefox requires the link to be in the body
	      document.body.appendChild(link);

	      //simulate click
	      link.click();

	      //remove the link when done
	      document.body.removeChild(link);
	    } else {
	      window.open(uri);
	    }
	}

	setTimeout(function(){
		$('.d-vidjet').css({'transform':'translateX(0)','right':'45px'});
	},700);

	// var element = $(".capture"); // global variable
	// var getCanvas; // global variable
 //    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
 //    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
}

document.addEventListener("DOMContentLoaded", DOMready);