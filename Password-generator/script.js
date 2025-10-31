// class Employee{
// logIn(){
//     console.log(`Employee has logged in`)
// }
// logOut(){
//     console.log(`Employee has logged out`)
// }
// requestLeave(leaves){
//     console.log(`Employee has requested ${leaves} leaves`)
// }
// }
// class Programmer extends Employee{
//     requestedCoffee(x){
//         console.log(`Employee has requested ${x} coffee`)
//     }
//     requestLeave(leaves){
//        super.requestLeave(5)
//        console.log(`One extra is granted`)
//     }

// }
// let e = new Programmer()
// e.logIn()
// e.requestLeave(4)
// class complex{
//     constructor(real,imaginary){
//     this.real = real
//     this.imaginary = imaginary}

// add(num){
//     this.real = this.real + num.real
//     this.imaginary = this.imaginary + num.imaginary
// }
// }
// let a = new complex(2,4)
// let v = new complex(6,8)
// a.add(v)
// console.log(`${a.real}` + `${a.imaginary}i`)

class Password {
    constructor(strongPassword) {
       
        this.pass = ""
    }
    generatePassword(len) {
        this.pass = "";
        let chars = "abcdefghijklmnopqrstuvxz"
        let numbers = "1234567890"
        let special = "!@#$%^&*()_+{}:<>?~`[]=-\';,./"
        let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWZ"

        if (len < 3) {
            console.log(`Your password should atleast 3 characters long`)
        }
        else {
            let i = 0
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += special[Math.floor(Math.random() * special.length)]
                this.pass += UpperCase[Math.floor(Math.random() * UpperCase.length)]
                i += 3
            }
            this.pass = this.pass.substr(0, len)

            return this.pass
        }
    }
}
const p = new Password()
const inputBox = document.getElementById("input")
const btn = document.getElementById("generateBtn")
const copyImg = document.getElementById("copyImg"); 

const copiedMsg = document.createElement("span")
copiedMsg.textContent = "Copied!";
copiedMsg.classList.add ("copied-msg")
document.body.appendChild(copiedMsg);

btn.addEventListener("click", () => {
  const password = p.generatePassword(15); 
  inputBox.value = password;
});

input.addEventListener("click", (e) => {
const inputRightEdge = input.getBoundingClientRect().right;
const clickX = e.clientX
const copyAreaWidth = 35;
if(inputRightEdge - clickX<= copyAreaWidth){
    if (input.value.trim() !== "") {
        navigator.clipboard.writeText(input.value);

        const rect = inputBox.getBoundingClientRect();
        copiedMsg.style.left = rect.left + rect.width / 2- 30 + "px"
        copiedMsg.style.top = rect.top - 30 + "px"
        copiedMsg.classList.add("show")
        setTimeout(()=> copiedMsg.classList.remove("show"),1000 );
    }
       
    }
})
