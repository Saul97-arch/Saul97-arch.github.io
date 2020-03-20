let custo = 10;

if (custo < 0) {
    console.log("Valor menor do que 0!");
}

let custoComImposto = custo * 1.2;

let valorDeVenda = 20;

let totalVendido = valorDeVenda * 1000;

let custoTotal = custoComImposto * 1000;

console.log(Math.abs(totalVendido - custoTotal));
 