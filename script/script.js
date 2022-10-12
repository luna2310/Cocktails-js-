
// const API = 'https://www.thecocktaildb.com/api/json/v1/1/';
// const GET_ALL_COCTAILS = API + 'filter.php?c=Cocktail';
// const GET_BY_NAME = API + 'search.php?s=';
// const GET_FILTER = API + 'filter.php?a=';
// const GET_DATAIL = API + 'lookup.php?i=';
// const GET_INGR = API + 'search.php?i=';
// // const GET_INGREDIENT = API + 'search.php?i='


// const form = document.querySelector("#search")
// const input = document.querySelector("#inp")
// const btn = document.querySelector("#btn")
// const select = document.querySelector("#select")
// const output = document.querySelector("#output")

// const getAllCoctails = async () => {
//     const request = await fetch(GET_ALL_COCTAILS)
//     const response = await request.json()
//     renderCocktails(response.drinks);
// }
// const getByName = async () => {
//     let request = ""
//     if (input.value.length > 2) {
//         request = await fetch(GET_BY_NAME + input.value)
//     }
//     else {
//         request = await fetch(GET_ALL_COCTAILS)
//     }
//     const response = await request.json()
//     renderCocktails(response.drinks);

// }

// const getFiltered = async () => {
//     const request = await fetch(GET_FILTER + input.value);
//     const response = await request.json();
//     renderCocktails(response.drinks);
// }



// const getDetail = async (id) => {
//     const request = await fetch(GET_DATAIL + id);
//     const response = await request.json();
//     renderCocktails(response);
//     // renderDetailById(response.drinks[0]);
//     // console.log(response);

// }
// const getIngr =  async ()=>{
//     const request = await fetch(GET_INGR + name );
//     const response = await request.json();
//     renderIngr(response.ingredients[0]);
// }



// // // getInfoIden()
// // const getIngredientIden = async (ingr) => {
// //     const request = await fetch(GET_INGREDIENT_IDEN+ingr)
// //     const response = await request.json()
// //     // renderCocktails(response);
// //     renderDetailById(response.drinks);

// // }
// // // getIngredientIden()




// // const getIngredient = async (idName) => {
// //     const request = await fetch(GET_INGREDIENT+ idName)
// //     const response = await request.json()
// //     console.log(response);
// //     // renderCocktails(response.ingredients);
// //     renderIngredient(response.ingredients[0]);

// // }
// // getIngredient()


// const renderIngr = () => {
//     output.innerHTML = ''
//     console.log();
//     const cardIngr = document.createElement('div')
//     const titleIngr = document.createElement('h3')
//     titleIngr.textContent = 'Name: ' + idName.strIngredient
//     const desc = document.createElement('p')
//     desc.textContent = ingr.strDescription == null? 'Описание отсутствует ': ingr.strIngredient

//     // if (idName.strDescription == null) {
//     //     desc.textContent = 'без описания'
//     // } else {
//     //     desc.textContent = 'Description: ' + ingr.strDescription
//     // }
//     // const img = document.createElement('img')
//     // img.src = `https://www.thecocktaildb.com/images/ingredients/${idName.strIngredient}-Medium.png`
//     cardIngr.append(titleIngr, img, desc)
//     output.append(cardIngr)
// }
// const renderDetailById = (detail) => {
//     output.innerHTML = ''
//     consol.log(detail);
//     const title = document.createElement('h1')
//     title.textContent = data.strDrink
//     const desc = document.createElement('p')
//     desc.textContent = data.strInstructions
//     const img = document.createElement('img')
//     img.src = data.strDrinkThumb

//     for (let key in data) {
//         if (key.includes('strIngredient' && data[key] != null)) {
//             const ingr = document.createElement('li')
//             ingr.textContent= data[key]
//             ingr.addEventListener('click',()=>{
//                 getIngr(data[key])
//             })
//             output.append(ingr)
//         }
//         // console.log(data[key]);
//     }


//     // const card = document.createElement('div');
//     // const ol = document.createElement('ol')
//     // const img = document.createElement('img');
//     // const title = document.createElement('h3');
//     // const alco = document.createElement('h2');
//     // alco.textContent = detail?.strAlcoholic;
//     // const instruction = document.createElement('h4');
//     // instruction.textContent = 'Instruction: ' + detail?.strInstructions;
//     // img.src = detail?.strDrinkThumb;
//     // title.textContent = 'Name: ' + detail?.strDrink;

//     // card.append(img, title, alco, instruction)

//     // for (let key in detail) {
//     //     if (key.includes('strIngredient') && detail[key] !== null) {
//     //         const ingr = document.createElement('li');
//     //         ingr.textContent = detail[key];
//     //         ingr.addEventListener('click', () => {
//     //             getByNameIngr(detail[key]);
//     //             audio.play()
//     //         })

//     //         card.append(ingr,);
//     //     }
//     //     if (key.includes('strMeasure') && detail[key] !== null) {
//     //         const mera = document.createElement('li');
//     //         mera.textContent = detail[key];
//     //         ol.append(mera);

//     //     }

//     // }

//     card.append(ol);



//     output.append(card)
// }








// const renderCocktails = (drinks) => {
//     console.log(drinks);
//     output.innerHTML = ""
//     drinks ?
//         drinks.map(el => {
//             const card = document.createElement('div')
//             const img = document.createElement('img')
//             const title = document.createElement('h2')
//             img.src = el.strDrinkThumb
//             img.style.width = '200px'
//             title.textContent = el.strDrink

//             card.append(img, title)
//             output.append(card)
//             card.addEventListener('click', () => {
//                 console.log(el);
//                 getDetail(el.idDrink)


//                 output.innerHTML = ""
//                 const card = document.createElement('div')
//                 const img = document.createElement('img')
//                 img.src = el.strDrinkThumb
//                 img.style.width = '400px'

//                 const h2 = document.createElement('h2')
//                 h2.textContent = el.strDrink
//                 const instruction = document.createElement('h4');
//                 instruction.textContent = 'Instruction: ' + drinks.strIngredient3;





//                 // h3.addEventListener('click', () => {
//                 //     const card = document.createElement('div')
//                 //     card.style.backgroundImage = el.strDrink
//                 //     const h3 = document.createElement('h2')
//                 //     h3.textContent = el.ingredients.strIngredient
//                 //     output.append(card, h3)
//                 // })


//                 output.append(card, img, h2, instruction)
//                 // getIngredient()
//             })

//         })
//         :
//         output.innerHTML = `<h2>Server error</h2>`
// }
// form.addEventListener('submit', (e) => e.preventDefault())
// input.addEventListener('keyup', getByName)
// select.addEventListener('change', getFiltered)



// getAllCoctails()


































// const API = 'https://www.thecocktaildb.com/api/json/v1/1/';
// const GET_ALL_COCTAILS = API + 'filter.php?c=Cocktail';
// const GET_BY_NAME = API + 'search.php?s=';
// const GET_FILTER = API + 'filter.php?a=';
// const GET_INFO_IDEN = API + 'lookup.php?i=';
// const GET_INGREDIENT_IDEN = API + 'lookup.php?iid=';
// const GET_INGREDIENT = API + 'search.php?i='



// const form = document.querySelector("#search")
// const input = document.querySelector("#inp")
// const btn = document.querySelector("#btn")
// const select = document.querySelector("#select")
// const output = document.querySelector("#output")

// const getAllCocktails = async () => {
//     const request = await fetch(GET_ALL_COCTAILS);
//     const response = await request.json();
//     renderCocktails(response.drinks)
// }

// const getById = async (id) => {
//     const request = await fetch(GET_INFO_IDEN + id);
//     const response = await request.json();
//     renderDetailById(response.drinks[0]);
// }
// const getByIdIngr = async (ingr) => {
//     const request = await fetch(GET_INGREDIENT_IDEN + ingr);
//     const response = await request.json()
//     renderDetailById(response.drinks[0]);

// }

// const getByNameIngr = async (idName) => {
//     const request = await fetch(GET_INGREDIENT + idName);
//     const response = await request.json();
//     renderIngredient(response.ingredients[0]);
// }
// const renderIngredient = (idName) => {
//     output.innerHTML = ''
//     console.log(idName);
//     const cardIngr = document.createElement('div')
//     const titleIngr = document.createElement('h3')
//     titleIngr.textContent = 'Name: ' + idName.strIngredient
//     const desc = document.createElement('p')

//     if (idName.strDescription == null) {
//         desc.textContent = 'без описания'
//     } else {
//         desc.textContent = 'Description: ' + idName.strDescription
//     }
//     const img = document.createElement('img')
//     img.src = `https://www.thecocktaildb.com/images/ingredients/${idName.strIngredient}-Medium.png`
//     cardIngr.append(titleIngr, img, desc)
//     output.append(cardIngr)
// }
// const renderDetailById = (detail) => {
//     output.innerHTML = ''
//     // consol.log(detail);
//     const card = document.createElement('div');
//     const ol = document.createElement('ol')
//     const img = document.createElement('img');
//     const title = document.createElement('h3');
//     const alco = document.createElement('h2');
//     alco.textContent = detail?.strAlcoholic;
//     const instruction = document.createElement('h4');
//     instruction.textContent = 'Instruction: ' + detail?.strInstructions;
//     img.src = detail?.strDrinkThumb;
//     title.textContent = 'Name: ' + detail?.strDrink;

//     card.append(img, title, alco, instruction)

//     for (let key in detail) {
//         if (key.includes('strIngredient') && detail[key] !== null) {
//             const ingr = document.createElement('li');
//             ingr.textContent = detail[key];
//             ingr.addEventListener('click', () => {
//                 getByNameIngr(detail[key]);
//                 audio.play()
//             })

//             card.append(ingr,);
//         }
//         if (key.includes('strMeasure') && detail[key] !== null) {
//             const mera = document.createElement('li');
//             mera.textContent = detail[key];
//             ol.append(mera);

//         }

//     }

//     card.append(ol);



//     output.append(card)
// }





// const renderCocktails = (data = []) => {
//     output.innerHTML = ''
//     data.map(element => {
//         const card = document.createElement('div')
//         const img = document.createElement('img')
//         const title = document.createElement('h3')

//         img.src = element.strDrinkThumb;
//         title.textContent = element.strDrink;

//         card.append(img, title)
//         output.append(card)
//         card.addEventListener('click', () => {
//             getById(element.idDrink)
//             audio.play()

//         })
//     })

// }

// const getCocktailByName = async (name) => {
//     const request = await fetch(GET_BY_NAME + name);
//     const response = await request.json();
//     renderCocktails(response.drinks)
// }

// input.addEventListener('keyup', (event) => {
//     getCocktailByName(event.target.value);
// })


// select.addEventListener('change', (event) => {
//     getFilter(event.target.value);
// })

// const getFilter = async (alco) => {
//     if (alco == 'All') {
//         getAllCocktails();
//     } else {
//         const request = await fetch(GET_FILTER + alco);
//         const response = await request.json();
//         renderCocktails(response.drinks)
//     }

// }


// getAllCocktails();



const API = 'https://www.thecocktaildb.com/api/json/v1/1/' 
const GET_ALL_COCKTAILS = API + 'filter.php?c=Cocktail' 
const GET_BY_NAME = API + 'search.php?s=' 
const GET_FILTER = API + 'filter.php?a=' 
const GET_DETAIL = API + 'lookup.php?i=' 
const GET_INGR = API + 'search.php?i=' 
 
const form = document.querySelector('#search') 
const input = document.getElementById('inp') 
const btn = document.getElementById('btn') 
const select = document.getElementById('select') 
const output = document.getElementById('output') 
 
const getAllCocktails = async () => {   
    const request = await fetch(GET_ALL_COCKTAILS) 
    const response = await request.json() 
    renderCocktails(response.drinks); 
} 
 
const getByName = async () => { 
    let request = '' 
    if (input.value.length > 2) { 
        request = await fetch(GET_BY_NAME + input.value) 
    } else { 
        request = await fetch(GET_ALL_COCKTAILS) 
    } 
 
    const response = await request.json() 
    renderCocktails(response.drinks); 
} 
 
const getFiltered = async () => { 
    const request = await fetch(GET_FILTER + select.value) 
    const response = await request.json() 
    renderCocktails(response.drinks); 
} 
 
const getDetail = async (id) => { 
    const request = await fetch(GET_DETAIL + id) 
    const response = await request.json() 
    renderDetail(response.drinks[0]); 
} 
 
const getIngr = async (name) => { 
    const request = await fetch(GET_INGR + name) 
    const response = await request.json() 
    renderIngr(response.ingredients[0]); 
} 
 
const renderIngr = (ingr) => { 
    output.innerHTML = '' 
    console.log(ingr); 
    const title = document.createElement('h1') 
    title.textContent = ingr.strIngredient 
    const descr = document.createElement('p') 
    descr.textContent = ingr.strDescription == null ? "Описание отсутствует" : ingr.strDescription 
    const img = document.createElement('img') 
    img.src = `https://www.thecocktaildb.com/images/ingredients/${ingr.strIngredient}-Medium.png `
    output.append(title, img, descr) 
} 
 
const renderDetail = (data) => { 
    output.innerHTML = '' 
    // console.log(data);  
    const title = document.createElement('h1') 
    title.textContent = data.strDrink 
    const img = document.createElement('img') 
    img.src = data.strDrinkThumb 
    const desc = document.createElement('p') 
    desc.textContent = data.strInstructions 
    output.append(img, title, desc) 
 
    for (let key in data) { 
        if (key.includes('strIngredient') && data[key] != null) { 
            const ingr = document.createElement('li') 
            ingr.textContent = data[key] 
            ingr.addEventListener('click', () => { 
                getIngr(data[key]) 
            }) 
            output.append(ingr) 
        } 
        // console.log(data[key]);  
    } 
 
} 
 
const renderCocktails = (drinks) => { 
    output.innerHTML = '' 
    drinks ? 
        drinks.map(el => { 
            const card = document.createElement('div') 
            const img = document.createElement('img') 
            const title = document.createElement('h2') 
            img.src = el.strDrinkThumb 
            img.style.width = '200px' 
            title.textContent = el.strDrink 
            card.addEventListener('click', () => { 
                // console.log(el);  
                getDetail(el.idDrink) 
            }) 
            card.append(img, title) 
            output.append(card) 
        }) 
        : 
        output.innerHTML = `<h1>Server error</h1>` 
} 
 
form.addEventListener('submit', (e) => e.preventDefault()) 
input.addEventListener('keyup', getByName) 
select.addEventListener('change', getFiltered) 
 
getAllCocktails()