  let numero = 7;
  let numeroDivisor = 0;
  for(let i = 1; i <= numero; i += 1) {
    if(numero % i === 0) {
      numeroDivisor += 1;
    }
  }
  console.log(numeroDivisor)
  if(numeroDivisor > 2) {
    console.log('numero não é primo')
  } else {
    console.log('numero é primo')
  } 
