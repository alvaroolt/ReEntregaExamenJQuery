/**
 * @author Alvaro Leiva Toledano
 */

$(function () {
    $("<div><p>Álvaro</p><p>Leiva Toledano</p><p>Leiva Toledano</p></div>").insertAfter($("#anulaRaton"));
    $("p").css("background-color", "lightblue");

    let numParrafos = 0;
    let arrayColores = ['yellow', 'pink', 'lightgray'];
    let numAleatorio;

    $("#creaParrafos").click(function (evento) {
        numParrafos += 1;
        numAleatorio = Math.floor(Math.random() * (3));
        console.log(numAleatorio);

        $("<p>Parrafo-" + numParrafos + "</p>").css("background-color", arrayColores[numAleatorio]).appendTo($('#sectionAnnadidos'));

        $("p").mouseenter(function () {
            $(this).css("border", "2px solid black");
        });
        $("p").mouseleave(function () {
            $(this).css("border", "none");
        });
        $("p").dblclick(function () {
            $(this).css("background-color", "red");
        });
    })

    let cantidadTitulosTotales = 0;
    $("#creaTitulos").click(function (evento) {
        let cantidadTitulos;
        let num = 0;

        do {
            num += 1;
            cantidadTitulosTotales += 1;
            numAleatorio = Math.floor(Math.random() * (3));
            cantidadTitulos = $("input").val();
            $("<h1>Título-" + cantidadTitulosTotales + "</h1>").appendTo($('#sectionAnnadidos'));

            // console.log("Titulos: ", cantidadTitulos);

        } while (num < cantidadTitulos);

        $("h1").mousemove(function () {
            numAleatorio = Math.floor(Math.random() * (3));
            $(this).css("background-color", arrayColores[numAleatorio]);
        }).hide("fast").show("fast");
    })

    $("#anulaRaton").click(function (evento) {
        $("#sectionAnnadidos > h1").off();
    })

});

$(function () {
    
})