let n = parseInt(prompt("Nhập vào 1 số n: "));

let res = 1;
for(let i = 1; i <= n; i++)
{
    res *= i;
}
alert(res);