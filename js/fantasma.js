/**
 * @author Alvaro Leiva Toledano
 */

 (function () {
     JQuery.fn.fantasma = function () {
         return this.each(function (){
            
            $(this).fadeOut("slow").fadeIn(1000).css("background","#C8EEA")
         });
     };
 })();