var randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
// const checkWinner: any = (guess1: number, guess2: number) => {
//   if (randomNumber === guess1) {
//     console.log("Il giocatore 1 ha indovinato il numero");
//   } else if (randomNumber === guess2) {
//     console.log("Il giocatore 2 ha indovinato il numero");
//   } else {
//     const absoluteDifference1: number = Math.abs(randomNumber - guess1);
//     const absoluteDifference2: number = Math.abs(randomNumber - guess2);
//     if (absoluteDifference1 < absoluteDifference2) {
//       console.log(
//         "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"
//       );
//     } else if (absoluteDifference1 > absoluteDifference2) {
//       console.log(
//         "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!"
//       );
//     } else {
//       console.log(
//         "Nessuno dei due ha azzeccato il numero casuale, entrambi i giocatori si sono avvicinati in egual modo"
//       );
//     }
//   }
// };
var checkWinner = function (guess1, guess2) {
    var absoluteDifference1 = Math.abs(randomNumber - guess1);
    var absoluteDifference2 = Math.abs(randomNumber - guess2);
    randomNumber === guess1
        ? console.log("Il giocatore 1 ha indovinato il numero")
        : randomNumber === guess2
            ? console.log("Il giocatore 2 ha indovinato il numero")
            : absoluteDifference1 < absoluteDifference2
                ? console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!")
                : absoluteDifference1 > absoluteDifference2
                    ? console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!")
                    : console.log("Nessuno dei due ha azzeccato il numero casuale, entrambi i giocatori si sono avvicinati in egual modo");
};
checkWinner(6, 1);
