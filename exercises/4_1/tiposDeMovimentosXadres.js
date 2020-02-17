 let peça = "bishop"

 /* peça.toLowerCase(); */
 if (peça == "pawn"){
    console.log(`${peça} -- > Foward one square`);
 } else if(peça == "king"){
     console.log(`${peça} --> Exactly one square horizontally, vertically, or diagonally.`);
 } else if (peça == "queen") {
     console.log(
       `${peça} -- > can move any number of vacant squares diagonally, horizontally, or vertically.`
     );
 } else if (peça == "rook") {
     console.log(
       `${peça} --> can move any number of vacant squares vertically or horizontally. It also is moved while castling."`
     );
 } else if (peça == "knight") {
     console.log(
       `${peça} --> can move one square along any rank or file and then at an angle. The knight´s movement can also be viewed as an “L” or “7″ laid out at any horizontal or vertical angle.`
     );
 } else if (peça == "bishop") {
     console.log(
       `${peça} -- >can move any number of vacant squares in any diagonal direction`
     );
 }
 
