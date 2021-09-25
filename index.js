const billAmt = document.querySelector("#bill-Amt")
const cashGivenAmt = document.querySelector("#cash-given-Amt")
const btnCheck = document.querySelector("#check-btn")
const message = document.querySelector("#message")
const noOfNotes = document.querySelectorAll(".noOfNotes")
let noOfNotesValue =0;

function checkButtonClickHandler()
{
    let bill_amount = parseInt(billAmt.value)
    let cash_given_amount = parseInt(cashGivenAmt.value)
    if(bill_amount>0)
    {
        message.style.display="none";
        if(cash_given_amount>=bill_amount)
        {
            let moneyDenominations=[2000,500,100,20,10,5,1];
            let returnAmt = cash_given_amount-bill_amount;
            for(let i=0;i<7;i++)
            {
                if(returnAmt>=moneyDenominations[i])
                {
                    noOfNotesValue = Math.trunc(returnAmt/moneyDenominations[i])
                    returnAmt = returnAmt%moneyDenominations[i]                    
                }
                noOfNotes[i].innerText=noOfNotesValue;
                if(returnAmt==0)
                {
                    noOfNotesValue=0
                }
            }
        }
        else
        {
            messageHandler("Do you want to wash dishes?")
        }
    }
    else
    {
        if(isNaN(bill_amount))
        {
            messageHandler("Invalid bill amount, only number input is allowed")
        }
        else 
        {
            messageHandler("Invalid bill amount, enter amount must be greater than 0")
        }
    }
} 

function messageHandler(msg)
{
    message.style.display="block";
    message.innerText=msg;
}

btnCheck.addEventListener("click",()=>checkButtonClickHandler())
