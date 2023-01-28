var first = +prompt('Введите первое число')
var second = +prompt('Введите второе число')
var third = +prompt('Введите третье число')

if(first > second && second > third || third > second && second > first){
    var msg = second
}
else if(second > first && first > third || third > first && first > second){
    msg = first
}
else if(first > third && third > second || second > third && third > first){
    msg = third
}
else if(first == second && second > third || third == second && second > first || first > second && second == third || third > second && second == first){
    msg = second
}
else if(second == first && first > third || third > first && first == second || third == first && first > second || second > first && first == third){
    msg = first
}
else if(first == third && third > second || second > third && third == first || second == third && third > first || first > third && third == second){
    msg = third
}
else if(first == second && second == third && first == third){
    msg = first
}
else{
    msg = 'Ошибка! (Возможно указаны символы/буквы вместо цифр)'
}

alert(msg)