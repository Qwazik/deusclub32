$(document).ready(function() {	

		//var id = '#dialog';
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		//$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		/*$('#mask').fadeIn(500);	
		$('#mask').fadeTo("slow",0.9);	*/
	
		//Get the window height and width
		/*var winH = $(window).height();
		var winW = $(window).width();*/
              
		//Set the popup window to center
		/*$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);*/
	
		//transition effect
		//$(id).fadeIn(0); 	
	
	//if close button is clicked
	/*$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
		$("#logo").fadeIn(5000);
		$(".left,.right,#social,#footer,#contact").fadeIn(11000);

	});	*/	
	
	//if mask is clicked
	/*$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
		$('#fon_modal_window','#modal_window').hide();
		$("#logo").fadeIn(5000);
		$(".left,.right,#social,#footer,#contact").fadeIn(11000);
	});		*/
	$('#fon_modal_window','#modal_window').hide();
	$("#logo").fadeIn(5000);
	$(".left,.right,#social,#footer,#contact").fadeIn(8000);
});

function showContent(link,namediv) 
{ 
var cont = document.getElementById(namediv); 
var http = createRequestObject(); 
if( http ) { 
http.open('get', link); 
http.onreadystatechange = function () { 
if(http.readyState == 4) {
document.getElementById('fon_modal_window').style.display = "block";
 
cont.innerHTML = http.responseText; 
var elements = cont.getElementsByTagName('script'); 
var len = elements.length; 
 
for (var i = 0; i < len; i++) { 
eval.call(window, elements[i].innerHTML); 
} 
} 
} 
http.send(null); 
} else { 
document.location = link; // если ajax-объект не удается создать, просто перенаправляем на адрес 
} 
}
// создание контактов 
function showContents(link,namediv) 
{ 
var cont = document.getElementById(namediv); 
var http = createRequestObject(); 
if( http ) { 
http.open('get', link); 
http.onreadystatechange = function () { 
if(http.readyState == 4) {
cont.innerHTML = http.responseText; 
var elements = cont.getElementsByTagName('script'); 
var len = elements.length; 
for (var i = 0; i < len; i++) { 
eval.call(window, elements[i].innerHTML); 
} 
} 
} 
http.send(null); 
} 
} 
// создание ajax объекта 
function createRequestObject() { 
try { return new XMLHttpRequest() } 
catch(e) { 
try { return new ActiveXObject('Msxml2.XMLHTTP') } 
catch(e) { 
try { return new ActiveXObject('Microsoft.XMLHTTP') } 
catch(e) { return null; } 
} 
} 
}
function show_contact(a,b)
{
if(b=='open')	
{document.getElementById(a).style.display = "block";}
else 	
{document.getElementById(a).style.display = "none";}	
}
