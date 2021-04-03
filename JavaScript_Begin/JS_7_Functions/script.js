


function hourToMinutes(hours)
{
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);


let dayToHours = function(days)
{
    return days * 24;
};

let c = dayToHours(1);
console.log(c);


// variables
let balance = 100;
let stock = 50;
let price = 5;

function sellItem(quantity)
{
    if(quantity <= stock)
    {
        // stock = stock - quantity;
        stock -= quantity;

        // balance = balance + price * quantity;
        balance += price * quantity;

        console.log('purchase complete',balance, stock);
    }
    else
    {
        console.log('not enough stock');
    }
}

sellItem(8); 