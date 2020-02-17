let salarioBruto = 1800;

//Dedução do INSS
if (salarioBruto <= 1556.94) {
    salarioBruto *= 0.92;
} else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    salarioBruto *= 0.89;
} else if (salarioBruto >= 2594.93 && 5189.82) {
    salarioBruto -= 570.88;
} else if (salarioBruto <= 1903.8) {
    console.log("Isento do Imposto de renda.")
}


console.log(Math.abs(salarioBruto));