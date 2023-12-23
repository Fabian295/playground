const one = document.querySelector('.one');
const two = document.querySelector('.two');
two.style.cssText="background-color: green; text-decoration: underline"
one.style.background = "red"
console.log('one')

const btn = document.querySelector('button')
let span = document.querySelector('span')
// let one = document.querySelector('.one')
let inputVal = document.querySelector('input').value
console.log(inputVal)
let output = span.innerHTML

console.log(span)
const numbers = [30, 20, 15, 25]

function findValue(Val) {
    
    
   
    
    return  Val == inputVal
}

btn.addEventListener('click', () => {

    output = numbers.findIndex(findValue)
    span.textContent = output
    one.textContent = numbers[output]
    // output = output
    console.log(output)
})

const url = 'https://github.com/Fabian295/cart/blob/main/data.json'

fetch(URL, {
    method: 'GET',
    mode: 'no-cors'
   })
    .then(response => response.json())
    .then(data => console.log(data))