function getNumber(num){
    var input_var=document.getElementById('input');
    switch(num){
        case 1:
        input_var.value += '1';
        break;
        case 2:
        input_var.value += '2';
        break;
        case 3:
        input_var.value += '3';
        break;
        case 4:
        input_var.value += '4';
        break;
        case 5:
        input_var.value += '5';
        break;
        case 6:
        input_var.value += '6';
        break;
        case 7:
        input_var.value += '7';
        break;
        case 8:
        input_var.value += '8';
        break;
        case 9:
        input_var.value += '9';
        break;
        case 0:
        input_var.value += '0';
        break;

    }
}
// for the clear button
function clearScreen()
{
    document.getElementById('input').value="";
    document.getElementById('answer').value="";
}
// for the mathematics operation sign
function getOperand(operand)
{
var input_var=document.getElementById('input');
switch(operand){
    case '+':
    input_var.value += '+';
        break;
        case '-':
        input_var.value += '-';
            break;
            case 'x':
            input_var.value += '*';
                break;
                case '/':
                input_var.value += '/';
                    break;
                    case '+/-':
                    input_var.value += '-' +  input_var.value;
                        break;

}

}
// for the backspace button
function backspace()
{
var input_var=document.getElementById('input');
var xyz= input_var.value;
if (xyz.length > 0)
{
xyz=xyz.substring(0, xyz.length-1);
input_var.value=xyz;
}
}
// for the compute (equalto) button
function compute()
{
    var input_var=document.getElementById('input');
    ans = Math.floor(+eval(input_var.value));
    document.getElementById('answer').value= '=' + ans;

}
// for the brackets button
var z=0;
function brackets()
{
    var input_var=document.getElementById('input');
    if(z==0){
        input_var.value += '(';
        z=1;
    }else if (z==1){
        input_var.value += ')';
        z=0;
    }

}