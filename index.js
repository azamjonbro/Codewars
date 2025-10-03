// let a = 1
// let b = 2
// let c = 2

// if (a + b > c || b + c > a || c + a > b) {
//  console.log(true);
// }
// console.log(a + c > b)



// function longest(s1, s2) {
//    let prop1 = s1.split("").sort()

//    console.log(prop1);
   
//    let prop2 = s2.split("").sort()
//     let result = new Set(...prop1, ...prop2)
//     console.log(result);
//     // return Array.from(result).join("");
//     return [...new Set(s1 + s2)].sort().join('');
// }

// console.log(longest("aretheyhere", "yestheyarehere"));


function openOrSenior(data){
 let result = []
  data.map((item, index)=>{
   console.log(item[0]);
    let value = item[0]+item[1]
    if(value>55){
      result.push("Senior")
    }
    else{
      result.push("Open")
    }
  })
  return result
}


console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
