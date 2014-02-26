$(document).ready(function() 
{	
	/*$.vegas('slideshow', {
  		delay:8000,
		backgrounds:[
    		{ src:'images/bg.jpg', fade:1500 },
    		{ src:'images/bg2.jpg', fade:1500 },
    		{ src:'images/bg3.jpg', fade:1500 },
			{ src:'images/bg4.jpg', fade:1500 },
			{ src:'images/bg5.jpg', fade:1500 }
  		]
	})*/
	
	$.vegas({
  		src:'images/bg.jpg',
  		fade:1500
	});
	
	TweenMax.to( $(this).find('#monogram'), 2, {css: { paddingTop:0, opacity: 1}, delay:1, ease : Expo.easeOut });
	TweenMax.to( $(this).find('h1'), 2, {css: { paddingTop:0, opacity: 1}, delay:1.2, ease : Expo.easeOut });
	TweenMax.to( $(this).find('h2'), 2, {css: { paddingTop:0, opacity: 0.3}, delay:1.4, ease : Expo.easeOut });
	TweenMax.to( $(this).find('#social'), 2, {css: { paddingTop:0, opacity: 1}, delay:1.6, ease : Expo.easeOut });
});