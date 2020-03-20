//Me indicado pelo meu digníssimo colega Rhian, metodo wrapper


function calcInss(bruto) {
    if (bruto > 0 && bruto < 1556.95) {
        bruto -= bruto * 0.08;
        return bruto;
    } else if (bruto >= 1556.95 && bruto < 2549.93) {
        bruto -= bruto * 0.09;
        return bruto;
    } else if (bruto >= 2549.93 && bruto < 5189.83) {
        bruto -= bruto * 0.11;
        return bruto;
    } else if (bruto >= 5189.83) {
        bruto -= 570.88;
        return bruto;
    } else {
        console.log("error");
    }
}


function calcIr(bruto) {
    if (bruto > 1903.98 && bruto < 2826.66) {
        bruto -= bruto * 0.075 - 142.8;
        return bruto;
    } else if (bruto > 2826.66 && bruto < 3751.06) {
        bruto -= bruto * 0.15 - 354.8;
        return bruto;
    } else if (bruto > 3751.05 && bruto < 4664.69) {
        bruto -= bruto * 0.225 - 636.13;
        return bruto;
    } else if (bruto > 4664.68) {
        bruto -= bruto * 0.275 - 869.36;
    }
}


//Metodo wrapper em si

function calcSalario(salario) {
    inss = calcInss(salario);
    ir = calcIr(inss);
    return ir;
}

console.log(calcSalario(3000))
