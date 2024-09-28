// 1 задание

let int1 = prompt('введите первое число');
let int2 = prompt('введите второе число');

function EvenNumbers(int1, int2) {
    for (let i = a; i < b; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}
EvenNumbers(int1,int2);

// 2 задание

let i = 0;
while (i < 3){
    alert(`number ${i}`);
    i++;
}

// 3 задание
 
    let c = 0; 
 
    while (true) { 
        c = +prompt('введите число, больше 10'); 
        if (c < 10) break; 
    }  
 
// 4 задание
 
    function min(e, d) { 
        if (e < d) return e; 
        return d; 
    } 
 
    alert(min(+prompt('введите число e'), +prompt('введите число d'))); 
 
// 5 задание
 
    let ask = (question, yes, no) => { 
        if (confirm(question)) yes() 
        else no(); 
    } 
    ask( 
        "Вы согласны?", 
        () => alert("вы согласились."), 
        () => alert("вы отменили выполнение.") 
    ); 
 
// 6 задание
 
    ageUser = +prompt('введите ваш возраст'); 
 
    function checkAge(age) { 
        return age >= 18 || confirm('родители разрешили?'); 
    } 
 
    alert(checkAge(ageUser));