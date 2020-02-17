let nota = 70;
if (nota > 100 || nota < 0) {
    console.log("Error404")
}else if (nota >= 90) {
    console.log(`Você tirou A com ${nota}%!`)
}else if (nota >= 80) {
  console.log(`Você tirou B com ${nota}%!`);
}else if (nota >= 70) {
  console.log(`Você tirou C com ${nota}%!`);
}else if (nota >= 60) {
  console.log(`Você tirou D com ${nota}%!`);
}else if (nota >= 50) {
  console.log(`Você tirou E com ${nota}%!`);
}else if (nota < 50) {
  console.log(`Você tirou F com ${nota}%!`);
}