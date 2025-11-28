

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
[https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript] \
### Bu safar hech qanday hikoya, nazariya yo'q. Quyidagi misollar funktsiyani qanday yozishni ko'rsatadi accum:

Misollar:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
a..zAkkum parametri faqat va dan harflarni o'z ichiga olgan satrdir A..Z.
```
const accum = (s)=>  s.toLowerCase().split("").map((item,index)=> item.toUpperCase() +item.repeat(index).toLowerCase()).join("-")
``` 



[https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript]

### Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)
```
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
```

```
function dnaStrand(dna){
    let result = ""
    for(harf of dna){
        if(harf =="A"){
            result+="T"
        }
        else if(harf=="T"){
            result+="A"
        }
        else if(harf =="G"){
            result+="C"
        }
        else{
            result+="G"
        }
    }
    return result
    
}
dnaStrand("AAAA")
```

