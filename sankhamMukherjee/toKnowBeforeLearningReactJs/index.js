// 1)  Logical AND and Logical OR,

function getName(name){
    return name;
}

let a = true;
let b = false;
console.log(b && a);
console.log(a && getName('Kishan'));

// In logical AND it only checks for the first value, if first value is true then only checks next one . 
// If first value is false , will not even check next one.

// But OR will check for next value also
// ---------------------------------------------------------------------------------------------------------




// Destructuring
let id = 1;
let productName = 'Apple watch';
let rating = 5;
let product1 = {
    id,
    productName,
    rating,
}
console.log('this is the product :',product1);

// From the above observation note that, if both the key and assigning value are same then no need to repeat that, just give id, productName , rating that's all. 

// lets create another product

let product2 = {
    name:'Sandwitch box',
    rating: 3,
    description: 'Good one',
}

console.log(product2.name); // The property is accesible through this way and one more way , the desctructuring way.
// Above one is the way juniors do, we professionals do it as a pro as below.

let {name} = product2;
console.log('Destructured the object of product2 and this is it :',name)
 

                    // Lets do that for array 
let array = [1,2,3];
let [firstElem,secondElem,thirdElem,fourthElem]  = array;
console.log('first element of the array is :',firstElem);
console.log('second element of the array is :',secondElem);
console.log('third elem of the array is:',thirdElem);                   
console.log('fourth element is :',fourthElem)

                    // Interview question
                    // question) In the destructured array if non-existing element is given then what will be the output? 
                    // Answer : undefined;


// ----------------------------------------------------------------------------------------------------------------

                                // DEFAULT PARAMETERS

function multiOfTwoNumbers(num1=1,num2=5){
    console.log(`value1 is ${num1} and value2 is ${num2}`);
    return num1 * num2;
}                                
console.log('After the multiplication :',multiOfTwoNumbers());

                            // I know that you know it well

// ----------------------------------------------------------------------------------------------------------------------   

                            // Spread Operator
let arr1 = [2,3,4];
let arr2 = [5,6,7];
console.log('modification done on these 2 arrays :',[1,...arr1,...arr2]) 

// ----------------------------------------------------------------------------------------------------------------------------

                                    // Rest Parameter
function getInfo(a,b,...c){
    console.log(`value of a is ${a} , of b is ${b} , of c is ${c}`);
    console.log('type of c is :',Array.isArray(c)); //true
    console.log('so the value of c is :',c)
    return 'Kishan'
}                                    
getInfo(1,2,3,4,5,6,7,8,9)

                // Note : rest parameter should be at the last of the parameter list, don't give it as the first one.
                        // function getInfo(...c,a,b) is wrong

// -------------------------------------------------------------------------------------------------------------------------------

                                        //Find
let arr3 = [{name:'Kishan',age:27,country:"India"},{name:'Joel',age:23,country:'India'},{name:'Rahul',age:25,country:'Russia'},{name:'Jafar',age:23,country:'USA'}]                                        

let usingFind =arr3.find((val,index)=>{
    return val.country === 'India'
})
let usingFilter = arr3.filter((val,index)=>{
    return val.country === 'India';
})
let someFilter = arr3.some((val)=>{
    return val.age>23;
})
let everyFilter = arr3.every(val=>{
    return val.age > 23
})
       // Note: Here there are two people from India, Kishan and Joel but 'find' method takes only the first object that satisfied the condition

console.log('whether found the person :',usingFind)
console.log('filtered output :',usingFilter);
         //Filter filter out everyone satisfies the condition
console.log('some :',someFilter); //only one need to be true to return true
console.log('every:',everyFilter) // all need to be true to return true

// --------------------------------------------------------------------------------------------------------------------------------------            

// This part is for the API response 

let productsList = document.querySelector('.list-of-products');

async function listOfProducts(){
    try{
        let apiResponse =await fetch('https://dummyjson.com/products',{method:'GET'});
      
        let result =await apiResponse.json();

        function renderProducts(products){
            productsList.innerHTML = products.map(val=>{ return `<p>${val.title}</p>`}).join(' ')
        }


        console.log('result is :',result);
        (result.products.length > 0)? renderProducts(result.products):null
    }catch(error){
        console.log('error message is :',error.message);
    }
    


}
listOfProducts()