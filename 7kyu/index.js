// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// sizdan so'ralyapti qator bo'yicha yig'indini hisoblang
// 3 --> 7 + 9 + 11 = 27
// 4 --> 13 + 15 + 17 + 19 = 64
// 5 --> 21 + 23 + 25 + 27 + 29 = 125
// 6 --> 31 + 33 + 35 + 37 + 39 + 41 = 216

function rowSumOddNumbers(n) {
//   bu yerda n qatorni berilgan
//   1 qator 1
//   2 qator 3 + 5 = 8
//   3 qator 7 + 9 + 11 = 27
//   4 qator 13 + 15 + 17 + 19 = 64
  return n * n * n;
//   return esa n ning kubini qaytaradi
}








// 2 -chi masala 
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// mendan eng kamida 4 ta butun son berilgan arrayning eng kichik ikkita qiymatining yig'indisini qaytarishimni sorashmoqda

// javobim esa arr.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0);

function sumTwoSmallestNumbers(arr) {
    //   arr.sort((a, b) => a - b) bu yerda arrayni tartiblaydi
    //   .slice(0, 2) bu yerda eng kichik ikkita qiymatni oladi
    //   .reduce((a, b) => a + b, 0) bu yerda yig'indisini qaytaradi
    return arr.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0);
    }
//   bu yerda 0 ni ikkinchi argument qilib berishimning sababi



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