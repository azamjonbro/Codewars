# Codewars

# 19-06-2025 yil shu kuni jamoa bilan muzokarada ishlangan masalada 9 daqiqada qilgan solutionim

["Masala sharti shundan iboratki: x2 - 2y2=1 shu masalada x2 va 2y2 ni ildizini aniqlash va to'g'ri javobni aniqlash."]


``` 
function butunson(limit){
  let javoblar = []
  for(let x = -limit; x<=limit;x++ ){
    for(let y = -limit ; y<=limit;y ++){
      if(x*x-2*y*y===1){
        javoblar.push({x,y})
      }
    }
  }
  console.log(javoblar)
}

```