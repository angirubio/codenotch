//Calcular importe de producto:

var origen = "Alemania";
var bruto = 2300;
var neto = 0;
var importe = 0;


if (origen == "España" && bruto > 2000)
{
    neto = bruto*0.16
    importe = bruto+neto
    console.log(importe + " (Impuesto de 16%)")
}
else if (origen == "España" && bruto < 2000)
{
    neto = bruto*0.1
    importe = bruto+neto
    console.log(importe + " (Impuesto de 10%)")
}
else if (origen != "España" && bruto > 2000)
{
    neto = bruto*0.26
    importe = bruto+neto
    console.log(importe + " (Impuesto de 26% de aduanas)")
}
else if (origen != "España" && bruto < 2000)
{
    neto = bruto*0.2
    importe = bruto+neto
    console.log(importe + " (Impuesto de 20% de aduanas)")
}