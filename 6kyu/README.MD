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
