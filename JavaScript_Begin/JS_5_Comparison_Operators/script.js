// variable
let item ='engine';

// equal to
if (item == 'engine')
{
    console.log('engine');
}

// not equal
if (item != 'engine')
{
    console.log('not engine');
}

// variable
let score = 50;

// greater than
if (item >= 60)
{
    console.log('pass');
}
else if (score < 10)
{
    console.log('meet the teacher');
}
else
{
    console.log('not pass');
}

// variable
let isEngine = item == 'engine';
console.log(isEngine);

// challenge
let balance = 100;
let itemPrice = 10

// answer - check balance & if they buy, update balance
if(balance >= itemPrice)
{
    // updatebalance
    balance -= itemPrice;
    console.log('item purchased');
    console.log(balance);
}
else
{
    console.log('not enough balance');
}


