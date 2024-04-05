function greeting() {
	document.write("<h1><span>Simple Calculator</span></h1>")
	document.write("<h2>This Calculator is made by <span>'JS Function'</span> and also using <span>'JS Dom Manipulation'</span></h2>")
}
greeting()
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

function addition(){
	document.write("<head><title>Simple Calculator | Addition</title>></head>")
	number1=input1.valueAsNumber
	number2=input2.valueAsNumber
	document.write("The addition of the declared two numbers is: "+(number1+number2))
}

document.write("<h3>Addition</h3>")

const input1 = document.createElement("input")
input1.className = "user"
input1.type = "number"
document.body.appendChild(input1)
document.write("<br>")

const input2 = document.createElement("input")
input2.className = "add"
input2.type = "number"
document.body.appendChild(input2)
document.write("<br>")
document.write("<br>")

const button = document.createElement("input")
button.className = "btn"
button.placeholder = "The addition of the declared two numbers -"
document.body.appendChild(button)
document.write("<br>")

button.addEventListener("click",addition) 
document.write("<br>")
document.write("<br>")

function substraction(){
	document.write("<head><title>Simple Calculator | Substraction</title>></head>")
	number3=input3.valueAsNumber
	number4=input4.valueAsNumber
	document.write("The substraction of the declared two numbers is: "+(number3-number4))
}

document.write("<h3>Substraction</h3>")

const input3 = document.createElement("input")
input3.className = "user"
input3.type = "number"
document.body.appendChild(input3)
document.write("<br>")

const input4 = document.createElement("input")
input4.className = "add"
input4.type = "number"
document.body.appendChild(input4)
document.write("<br>")
document.write("<br>")

const button2 = document.createElement("input")
button2.className = "btn"
button2.placeholder = "The substraction of the declared two numbers -"
document.body.appendChild(button2)
document.write("<br>")

button2.addEventListener("click",substraction) 
document.write("<br>")
document.write("<br>")

function multiplication(){
	document.write("<head><title>Simple Calculator | Multiplication</title>></head>")
	number5=input5.valueAsNumber
	number6=input6.valueAsNumber
	document.write("The multiplication of the declared two numbers is : "+(number5*number6))
}

document.write("<h3>Multiplication</h3>")

const input5 = document.createElement("input")
input5.className = "user"
input5.type = "number"
document.body.appendChild(input5)
document.write("<br>")

const input6 = document.createElement("input")
input6.className = "add"
input6.type = "number"
document.body.appendChild(input6)
document.write("<br>")
document.write("<br>")

const button3 = document.createElement("input")
button3.className = "btn"
button3.placeholder = "The multiplication of the declared two numbers -"
document.body.appendChild(button3)
document.write("<br>")

button3.addEventListener("click",multiplication) 
document.write("<br>")
document.write("<br>")

function division(){
	document.write("<head><title>Simple Calculator | Division</title>></head>")
	number7=input7.valueAsNumber
	number8=input8.valueAsNumber
	document.write("The division of the declared two numbers is : "+(number7/number8))
}

document.write("<h3>Division</h3>")

const input7 = document.createElement("input")
input7.className = "user"
input7.type = "number"
document.body.appendChild(input7)
document.write("<br>")

const input8 = document.createElement("input")
input8.className = "add"
input8.type = "number"
document.body.appendChild(input8)
document.write("<br>")
document.write("<br>")

const button4 = document.createElement("input")
button4.className = "btn"
button4.placeholder = "The division of the declared two numbers -"
document.body.appendChild(button4)
document.write("<br>")

button4.addEventListener("click",division) 
document.write("<br>")
document.write("<br>")