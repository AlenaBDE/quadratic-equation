function compareN(a,b){
    if (a>b) return 1;
    if (a<b) return -1;

}


module.exports = function solveEquation(equation) {
    var pos;
    var mas = equation.split(/\D+/g);
    if (mas.length == 5) mas.splice(0, 1);
    if (equation[0] == '-') mas[0] = mas[0]*-1;
    pos = equation.indexOf(mas[2]);
    if (equation[pos-2] == '-') mas[2] = mas[2]*-1;
    pos = equation.indexOf(mas[3]);
    if (equation[pos-2] == '-') mas[3] = mas[3]*-1;

    var a = +mas[0];
    var b = +mas[2];
    var c = +mas[3];
    var diz = eval(Math.pow(b,2)-4*a*c)//расчёт дискреминанта
    var res = [Math.round(eval((-b+Math.sqrt(diz))/(2*a))),Math.round(eval((-b-Math.sqrt(diz))/(2*a)))];
    res.sort(compareN)
    return res;
};

