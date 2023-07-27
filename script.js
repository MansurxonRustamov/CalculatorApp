let displayInput = document.querySelector("[data-inp]")
	dataSymb = document.querySelectorAll("[data-symb]")
	dataNumber = document.querySelectorAll("[data-number]")
dataSymb.forEach(function(data) {
	data.addEventListener("click",(clc)=>{
		if (displayInput.value ==0 ){
			displayInput.value="0"
		}else{
			let diSplit = displayInput.value.split("")
			displayInput.value += data.innerHTML
			if(data.innerHTML =="*" || data.innerHTML =="/" || data.innerHTML =="+" || data.innerHTML =="-"){
				if(diSplit.slice(-1).toString()=="+" ||diSplit.slice(-1).toString() =="-" || diSplit.slice(-1).toString()=="/" || diSplit.slice(-1).toString()=="*"){
					displayInput.value= displayInput.value.slice(0, diSplit.length )
				}
			}
		}
	})	
})

dataNumber.forEach(function(data1) {
	data1.addEventListener("click",()=>{
		if (displayInput.value =="0" ){
			displayInput.value =""
			displayInput.value +=data1.innerHTML;
		}else{
			displayInput.value +=data1.innerHTML;
		}
	})
})

function teng(){
	let displayValueOfEval = eval(displayInput.value)
	displayInput.value = displayValueOfEval
}
function backS(){
	let diSplit = displayInput.value.split("")
	if(displayInput.value != "0" ){
		displayInput.value= displayInput.value.slice(0, diSplit.length-1)
	}
}
function dot(){
	let diSplit = displayInput.value.split("")
	if(displayInput.value==""){
		displayInput.value = "0."
	}else if(diSplit.slice(-1).toString()=="+" ||diSplit.slice(-1).toString() =="-" || diSplit.slice(-1).toString()=="/" || diSplit.slice(-1).toString()=="*" || diSplit.slice(-1).toString()=="."){
		displayInput.value +=""
				
	}else{
		displayInput.value += "."
	}
}

