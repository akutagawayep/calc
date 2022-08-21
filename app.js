
let plus=`+`
let minus="-"
let multiply="*"
let dividing="/"
let equal=`=`
let firstValue=+prompt(`Введите первое значение:`);
let secondValue=+prompt(`Введите второе значение:`);
let answer_1=(firstValue+secondValue)
let answer_2=(firstValue-secondValue)
let answer_3=(firstValue*secondValue)
let answer_4=(firstValue/secondValue)
let task=`
${firstValue} ${plus} ${secondValue} ${equal} ${answer_1}
${firstValue} ${minus} ${secondValue} ${equal} ${answer_2}
${firstValue} ${multiply} ${secondValue} ${equal} ${answer_3}
${firstValue} ${dividing} ${secondValue} ${equal} ${answer_4}`
console.log(task);
// console.log(plus);
// console.log(secondValue);
// console.log(equal);
// console.log(firstValue+secondValue);
