//let openshopping = document.querySelector ('.shopping');
//let closeshopping =document.querySelector ('closeshopping');
//let list = document.querySelector('list');
//let listcard = document.querySelector('.listcardd');
//let body = document.querySelector('body');
//let total = document.querySelector ('.total');
// let quantity =document.querySelector ('.quantity');

// openshopping.addEventListener('click', ()=>{
//     body.classList.add ('active');
// })
// closeshopping.addEventListener ('click',()=>{
//     body.classList.remove('active');

// })

const container= document.getElementById('container')
console.log(container)
const produit= document.getElementsByClassName('produit')
const price= document.getElementsByClassName('prix-unitaire')
console.log(price[0].innerHTML)
console.log (prix)
let products =[
    {
        id: 1 ,
        name : 'i phone xsmax' , 
        Image : '1.PNG' , 
        price : 12000 
    },
    {
        id: 2 ,
        name : 'i  phone 11' , 
        Image : '2.PNG' , 
        price : 13000 
    },
    {
        id: 3 ,
        name : 'i phone 11 pro max' , 
        Image : '3.PNG' , 
        price : 22000 
    },
    {
        id: 4 ,
        name : 'i phone 12 ' , 
        Image : '4.PNG' , 
        price : 111000 
    },
    {
        id: 5 ,
        name : 'i phone 12 pro max' , 
        Image : '5.PNG' , 
        price : 16000 
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src="image/${value.image}"/>
           <div class="title">${value.name}</div>
           <div class="price">${value.price.toLocalerString()}</div>
           <button onclick="addtoCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
        console.log('newDiv')
    })
}
initApp();
function addtoCard(key){
    if (listCards[key] == null){
        listCards[key]=products [key];
        listcards[key].quantity = 1 ;
    }
    reloadcard();
}
console.log('hello')
function reloadcard(){
    listcard.innerText = '';
    let count = 0 ; 
    let totalprice = 0 ;
    listcards.forEach((value,key)=> {
    totalprice = totalprice + value.price ;
    count = count + value.quantity ;

    if(value !=null){
      let newDiv = document.createElement('li') ;
      newDiv.innerHTML = `
      <div> <img src=image/${value.image}"/></div>
      <div>${value.name}</div>
      <div>${value.price.totaleString()}</div>
      <div>${value.quantity}</div>
      <div>
       <button onClick ="change quantity(${key},${value.quantity -1 })">-</button>
       <div class ="count">${value.quantity}</div>
       <button onclick ="change quantity(${key},${value.quantity +1 })">-</button>

      </div>
      `
      listcard.appendChild(newDiv);
    }
})
     total.innerText = totalprice . toLocaleString();
     quantity.innerText = count;

}
function changeQuantity(key , quantity){
    if (quantity == 0 ) {
        delete listcards[key];
    }else {
        listcards[key].quantity = quantity ;
        listcards[key].price = quantity * products[key].price ;
    }
    reloadcard();
}

















