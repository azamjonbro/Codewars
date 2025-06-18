

["https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript"]

# Oddiy, so'zlar qatori berilgan, eng qisqa so'z(lar)ning uzunligini qaytaring.

String hech qachon bo'sh bo'lmaydi va siz turli xil ma'lumotlar turlarini hisobga olishingiz shart emas.

```
function findShort(s){
  let result= []
  s.split(" ").forEach((item)=>result.push(item.length))
  return Math.min(...result)
}
 
```


# Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

```
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

```

```

function solution(str, ending){
  return str.endsWith(ending);
}

```