# 6 kyu strings :

### Convert string to camel case


Metod/funksiyani shunday to‘ldiringki, u tire ( - ) yoki pastki chiziq ( _ ) bilan ajratilgan so‘zlarni camelCase ko‘rinishiga o‘tkazsin.
Natijadagi birinchi so‘z faqat asl matnda ham bosh harf bilan boshlangan bo‘lsa, bosh harf bilan yozilishi kerak (buni Upper Camel Case yoki Pascal Case ham deyiladi).
Keyingi so‘zlarning hammasi esa doimo bosh harf bilan boshlanishi kerak.

Misollar:

- "the-stealth-warrior" → "theStealthWarrior"

- "The_Stealth_Warrior" → "TheStealthWarrior"

- "The_Stealth-Warrior" → "TheStealthWarrior"

```js

function toCamelCase(str) {
  str = str.split("_").join("-");

  return str.split("-").map((item, index) => {
    if (index === 0) {
      return item;
    }
    return item[0].toUpperCase() + item.slice(1);
  }).join("");
}
```

### Replace With Alphabet Position

Berilgan matndagi har bir harfni uning alifbodagi tartib raqami bilan almashtiring. Masalan, a = 1, b = 2, c = 3 va hokazo.
Shart: faqat harflar hisobga olinadi, boshqa belgilar e'tiborga olinmaydi. Katta va kichik harflar farqlanmaydi.

Misollar:
```misol 
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
```

#### 1-chi yechim:
```js
function alphabetPosition(text) {
  const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
  return text.split("").filter((item)=> /^[a-zA-Z]+$/.test(item)).map((item, index)=> lowercaseAlphabet.indexOf(item.toLowerCase())+1).join(" ")
}
```

#### 2-chi yechim:
```js

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .map(c => c.charCodeAt(0) - 96)
    .filter(n => n > 0 && n <= 26)
    .join(" ");
}
// faqat buni chatgpt menga bonus sifatida yozib berdi schemadagi xatoliklarni solishtirganimda
```

## Find The Parity Outlier

Sizga butun sonlarni o'z ichiga olgan massiv (uzunligi kamida 3 bo'lishi mumkin, lekin juda katta bo'lishi mumkin) berilgan. Massiv butunlay toq sonlardan yoki bitta butun sondan tashqari butunlay juft sonlardan iborat N. Massivni argument sifatida qabul qiladigan va ushbu "chetga" qaytaradigan usulni yozing N.

# Misol uchun
``` test
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
```
```JavaScript
function findOutlier(arr) {
  const boshlangich = arr.slice(0, 3);
  const asos = boshlangich.filter(n => n % 2 === 0).length >= 2;

  return arr.find(n => asos ? n % 2 !== 0 : n % 2 === 0);
}
```

## Dublicat encoded 

Ushbu mashqning maqsadi satrni yangi satrga aylantirishdir, bunda yangi satrdagi har bir belgi "("asl satrda faqat bir marta paydo bo'lganda yoki ")"asl satrda bir necha marta paydo bo'lganda paydo bo'ladi. Belgining nusxasi ekanligini aniqlashda bosh harflarni e'tiborsiz qoldiring.

### Example

``` note
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

```
const duplicateEncode= (word) =>word.toLowerCase().split("").map((item)=> word.toLowerCase().indexOf(item) == word.toLowerCase().lastIndexOf(item) ?"(" : ")").join("")
```
