let transactions=[];


function addTransaction(){

let text=document.getElementById("text").value;

let amount=Number(
document.getElementById("amount").value
);


if(text==="" || amount===0){

alert("Enter Details");
return;

}


let transaction={

name:text,
amount:amount

};


transactions.push(transaction);


showTransactions();

}


function showTransactions(){

let list=document.getElementById("list");

list.innerHTML="";


let income=0;
let expense=0;


transactions.forEach(t=>{

let li=document.createElement("li");

li.innerHTML=
`${t.name} : ₹${t.amount}`;

list.appendChild(li);


if(t.amount>0){

income += t.amount;

}else{

expense += t.amount;

}

});


document.getElementById("income").innerHTML=
"₹"+income;


document.getElementById("expense").innerHTML=
"₹"+Math.abs(expense);


document.getElementById("balance").innerHTML=
"₹"+(income+expense);

}
