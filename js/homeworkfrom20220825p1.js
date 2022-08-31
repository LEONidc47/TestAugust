// 2. Написать функцию, которая выводит переданное ей число задом наперед.
// Например: число 1234 вывести как 4321.

//реалізація простим способом
// function reverseNum(a, r=0) {
//   // console.log(r)
//   if (!a) return r;
//   r = r * 10 + (a % 10);
//   return reverseNum(Math.floor(a / 10), r);
// }
// console.log(reverseNum(12345));
// console.log(reverseNum(1));
// console.log(reverseNum(12));
// console.log(reverseNum(45));

//реалізація методом "діалогу" з користувачем
let inp01 = document.getElementById("inp01");
inp01.addEventListener("keyup", () => {
  let res01 = document.getElementById("res01");
  //   let val = +inp01.value;
  let val = Math.floor(inp01.value); //Варіант як обійти випадок коли користувач вводить число з наченнями після коми
  if (val<0){
    val=Math.abs(inp01.value)//на випадок якщо введеться від'ємне значення
  }
  //рекурсивна функція
  function reverseNum(a, r = 0) {
    if (!a) return r;
    r = r * 10 + (a % 10);
    return reverseNum(Math.floor(a / 10), r);
  }
  res01.value = reverseNum(val);
  console.log(
    `Задача №2. Введене значення: ${val} з результатом: ${reverseNum(val)}`
  );
});

// 3. Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

//реалізація способом рекурсивої функції
// function sumNumber(a3) {
//   a3 = `${a3}`; //перетворюємо в рядок
//   if (a3.length == 1) return +a3; //для випадку, коли довжина рядка =1 символу - повертаємо його
//   return +a3[0] + sumNumber(a3.slice(1)); //інакце до першого значення масиву (рядка) додаємо результат виклику цієї ж функції. Spice(1) роблю новий масив без першого елемента (a3[0]) і передаю його в функцію
// }
// console.log(sumNumber(1357));
// console.log(sumNumber(123));

//реалізація методом "діалогу" з користувачем
let inp02 = document.getElementById("inp02");
inp02.addEventListener('keyup',()=>{
    let res02 = document.getElementById("res02");
    let val2 = Math.floor(inp02.value); //Варіант як обійти випадок коли користувач вводить число з наченнями після коми
    if (val2<0){
      val2=Math.abs(inp01.value)//на випадок якщо введеться від'ємне значення
    }
    //рекурсивна функція
    function sumNumber(a3) {
        a3 = `${a3}`; //перетворюємо в рядок
        if (a3.length == 1) return +a3; //для випадку, коли довжина рядка =1 символу - повертаємо його
        return +a3[0] + sumNumber(a3.slice(1)); //інакце до першого значення масиву (рядка) додаємо результат виклику цієї ж функції. Spice(1) роблю новий масив без першого елемента (a3[0]) і передаю його в функцію
      }
      res02.value = sumNumber(val2);
      console.log(
        `Задача №3. Введене значення: ${val2} з результатом: ${sumNumber(val2)}`
      );
})