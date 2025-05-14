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

