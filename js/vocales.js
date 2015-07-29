
 
var x;
x=$(document);
x.ready(inicializarEventos);




function inicializarEventos()
{	
 
   var x;
  x=$("#checkvocal");
  x.bind('click',function(){check('true')	})
	//x.click(function(){check('true')	})
	var o;
  o=$("#checkcon");
  o.click(function(){check('false')	})
 ponletra();
}
 function ponletra(){
 var abecedario=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','e','i','o','u'];
       var letra=abecedario[Math.floor((Math.random() * abecedario.length) + 1)]; 
       $('#check').text(letra);
			 
 }
 
 function contador(){}
 
function check(a)
{
     var x;	
  	 var a;
  	 var letra;
  	 var isV;
  	 var check;
  	 var vocales;
		 var vocales = ['','a','e','i','o','u'];
  	 //var letra = 'a'; 
		 
	 check=$('#checkvocal').attr('data-type');
	
	
	$('#check').text(letra);
	isV=$('#check').text();
	 
  x=$("this");
  x.css("color","#ff0000");
  x.css("background-color","#ffff00");
  x.css("font-family","Courier");
	x.text(isV);
	
	
	
	
   //myarray.push(isV);

if(jQuery.inArray(isV, vocales)>=0) {
    var z='true';
} else {
   // console.log('fuera del array'+jQuery.inArray(isV, vocales));
	  var z='false';
}
if(z==a){
//llamar funcion
console.log('Correcto');
correcto();
}else{

//llamar funcion
console.log('INCorrecto');
incorrecto();
}
 ponletra();
}
 
function incorrecto(){
$('#display').text('Ohh!!!:(');
$('#display').css('color','#FF0084');
$('#display').removeClass('pulse');
$('#display').addClass('tossing');
}
function correcto(){
$('#display').text('Bieeen!!!XD');
$('#display').css('color','#2C539E');
$('#display').css('text-shadow','white');
$('#display').removeClass('tossing');
$('#display').addClass('pulse');

}
