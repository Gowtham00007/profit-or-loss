var initialPrice = document.querySelector('#initial-price');
var quantityStocks =document.querySelector('#quantity-stocks');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output');



function calculateProfitAndLoss(initial,quantity,current){
var input1 = initialPrice.value;
var input2 = quantityStocks.value;
var input3 = currentPrice.value;
if(input1===''){
    showOutputRed('😠 Fill out the inputs completly 😠');

}else if(input2===''){
    showOutputREd('😠 Fill out the inputs completly 😠');
}else if(input3===''){
    showOutputRed('😠 Fill out the inputs completly 😠');
}
else{


    if(initial>current){
        var loss=(initial-current)*quantity;
        var losspersentage =(loss/initial)*100;
        showOutputRed(`🥺 Hey the loss is ${loss} 😢 and the pursent is ${losspersentage}% 😭`);
        
    }else if (current>initial){
var profit = (current-initial)*quantity;
var profitPersentage=(profit/initial)*100;
showOutput(`😀 Hey the profit is ${profit} 🤑 and the persentage is ${profitPersentage}% 🥳`);
    }else{
        showOutput(` 😎  NO PAIN NO GAIN AND NO GAIN NO PAIN  😎`);
    }
}
}

submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip =Number(initialPrice.value);
    var qty =Number(quantityStocks.value);
    var curr=Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
}


function showOutput(message){
    outputBox.innerHTML=message;
    outputBox.style.color='green';
}

function showOutputRed(message){
    outputBox.innerHTML=message;
    outputBox.style.color='red';
}