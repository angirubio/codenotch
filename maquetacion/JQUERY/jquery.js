function hello () {    
//     document.getElementById("boton2").disabled = false
    document.getElementById("foto").src = "https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae"
//     document.getElementById("div1").innerHTML = "<h1>Buenos días</h1><button onclick='hola()'>Click aquí</button> <p>Clases de programación</p>"
}

// function hola() {
//     document.getElementById("div1").innerHTML = ""
// }

// function remove_pic() {
//     document.getElementById("foto").src = ""
//     document.getElementById("boton2").disabled = true
// }

// var hola = "hola"

// function hello () {
    // $("#result").html(hola)
    // document.getElementById("result").innerHTML = hola
    // $(".mi_parrafo").html(hola)
    // document.getElementByClass("mi_parrafo").innerHTML = hola
    // $("button").html(hola)
    // $("#boton4").attr("disabled", true)
// }

// var imagen = "https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae"

// function hello () {
//     $("#foto").src(imagen)
// }

// $(function(){})

// $(function(){ })

$(function(){

    $("#boton2").on("click", function(){
        $("#foto").hide(1000)
    })
    $("#boton3").on("click", function(){
        $("#foto").show(1000)
    })
    $("#boton4").on("click", function(){
        $("#foto").replaceWith("<p id='foto'>Buenos días</p>")
    })
    $("#boton5").on("click", function(){
        $("#foto").remove()
    })
})

function desaparecer () {
    document.getElementById("foto").style.display = "none"
}