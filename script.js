//Variáveis 
const list = document.querySelector('ul')
const buttonShow = document.querySelector('#show-all')
const buttonDiscount = document.querySelector('#discount')
const buttonTotalPrice = document.querySelector('#total-price')
const buttonFilter = document.querySelector('#filter-all')

//Formatar números para moedas
const formatCurrency = (value) => {
    const newValue = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    return newValue
}

//Mostrar os produtos na tela
const showAll = (productsList) => {
    let myList = ''

    productsList.forEach(product => {
        myList += `
                <li>
                    <img src=${product.src} class="photo">
                    <p>${product.name}</p>
                    <p class="price">${formatCurrency(product.price)}</p>
                </li>
            `
    });

    list.innerHTML = myList
}

//Dar 10% de desconto nos produtos e colocar novo valor na tela
const discount = () => {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrice)
}

//Somar os valores de todos os produtos
const sumAll = () => {
    const sum = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
                    <div style = "border: 1px solid #8133ff; border-radius: 5px; padding: 40px 20px; width: 284px">
                        <p style = "color:white; font-size: 20px">O valor total dos produtos é de ${formatCurrency(sum)}</p>
                    </div>
                `
}

//Filtrar os produtos para aparecer somente os veganos
const filter = () => {
    const someProducts = menuOptions.filter(item => item.vegan)

    showAll(someProducts)
}

buttonShow.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', discount)
buttonTotalPrice.addEventListener('click', sumAll)
buttonFilter.addEventListener('click', filter)



