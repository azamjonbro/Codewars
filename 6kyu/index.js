//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript


// Sizga bo'sh bo'lmagan satr beriladi . Sizning vazifangiz satrning o'rta belgilarini qaytarishdir.

// Agar satr uzunligi toq bo'lsa, o'rta belgini qaytaring.
// Agar satr uzunligi teng bo'lsa, o'rtadagi 2 ta belgini qaytaring.


// function getMiddle(s) {

//   let str = Math.floor(s.length/2)
//   if(s.length%2==0){
//     return s.slice(str-1, str+1)
//   }
//   else{
//     return s.slice(str, str+1)
//   }
// }


// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// Sizga raqamlar qatori beriladi. Siz toq raqamlarni o'sish tartibida tartiblashingiz kerak, shu bilan birga juft raqamlarni asl joyida qoldirishingiz kerak.
// function sortArray(array) {
//   const toqSon = array.filter(qiymat => qiymat % 2 !== 0).sort((a, b) => a - b);

//    let toqOrni = 0;

//   return array.map(n => {
//       if (n % 2 !== 0) {
//         return toqSon[toqOrni++];
//       }
//       return n;
//   });
// }
