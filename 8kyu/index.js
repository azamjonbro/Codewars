//birichi masala

function twoSort(s) {
  return s.sort()[0].split("").join("***")
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])

// javob esa b***i***t***c***o***i***n


// keyingi masala

function isVow(a){
   const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return a.map(num => {
    const char = String.fromCharCode(num);
    return vowels.includes(char) ? char : num;
  });
}




//https://www.codewars.com/kata/5aa736a455f906981800360d/solutions/javascript

// the best path
// function feast(beast, dish) {
// 	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

// medium solution 
// function feast(beast, dish) {
// console.log(beast, dish)
// let firstItem= beast.split("")[0]
// let secondItem = beast.split("")[beast.length-1]

// console.log(firstItem,secondItem)
// if(dish.split('')[0]==firstItem&& dish.split("")[dish.length-1]==secondItem){
//     return true
// }
// else{
//     return false
// }
// }


