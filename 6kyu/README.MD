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