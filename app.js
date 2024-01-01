const one = document.querySelector('.one');
const two = document.querySelector('.two');
two.style.cssText="background-color: green; text-decoration: underline"
one.style.background = "red"
console.log('one')

const btn = document.querySelector('button')
let span = document.querySelector('span')
let site = document.querySelector('.site__grid')
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

// const URL = 'https://github.com/Fabian295/cart/blob/main/data.json';

// fetch(URL, {
//     method: 'GET',
//     mode: 'no-cors'
//    })
//     .then(response => response.json())
//     .then(data => console.log(data))

let PRODUCTS = [];

// const URL = 'list.https://gist.github.com/prof3ssorSt3v3/b829743fae4a4b9edea00c9e0226b727';
const URL = 'list.json';

fetch(URL, {
    method: 'GET',
    mode: 'no-cors'
   })
    .then(response => response.json())
    .then(data =>{
        PRODUCTS.push(data)  ;
         console.log(PRODUCTS)
         return PRODUCTS
        })


// let p = document.createElement('p')
// console.log(JSON.stringify(PRODUCTS))
// // div.textContent = JSON.parse(JSON.stringify(PRODUCTS))
// p.textContent = JSON.stringify(PRODUCTS[0])
// console.log(p)
// document.body.appendChild(p);
const sec = document.getElementById('section')
document.addEventListener('DOMContentLoaded', () => {
    let prods = PRODUCTS;
    prods.forEach((product) => {
        let p = document.createElement('p')
        let title = product.title
        p.textContent = title
        site.appendChild(p)
        // console.log(p)
        console.log(PRODUCTS)
        console.log(product)
    })
})

let proddy = PRODUCTS[0][0]
console.log(proddy)

proddy.forEach(prod => {
    console.log(prod[0])
})