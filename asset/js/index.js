var input_text = document.getElementById('input');
var output_text = document.getElementById('output');

var htmlEscaper = /[&^$<>'"\/]/g;
var htmlEscapes = {
     '&': '&amp;',
     '$': '&#36;',
     '"': '&#34;',
     '^': '&#94;',
     '<': '<',
     '>': '>',
     '/': '/'
    
       };   


function convert() {
     output_text.value = spl_char(input_text.value)
 }


function spl_char(value) {
    var c = "";
    for(i=0; i < value.length; i++) {
        if (/[&^$<>'"\/]/.test(value[i])) {
     c += ("" + value[i]).replace(htmlEscaper, function(match) {
         return htmlEscapes[match];
     });
        } else if(value.charCodeAt(i)> 127 ){
         c += "&#" + value.charCodeAt(i) + ';';
     } else {
         c += value.charAt(i);
     }
 }
return c;
}

/*
function spl_char(value) {
    var c = "";
    for(i=0; i < value.length; i++) {
        if(value.charCodeAt(i) > 127 || value.charCodeAt(i)===36 || value.charCodeAt(i)===34) {
            c += "&#" + value.charCodeAt(i) + ';';
        } else {
            c += value.charAt(i);
        }
            }
    return c;
}
*/

/*
    
function hightlight() {
var outputTxt = document.getElementById("output1");
var h = str.replace("Arun", "<span class = 'highlight'> +"Arun" "</span>");    
document.getElementById(output1).innerHTML = h;
}
*/