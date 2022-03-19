const button = document.getElementById('convert-button')


const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000048

const convertValues = () => { //função para converter valores
    const inputReais = document.getElementById('input-real').value //o .value vai pegar somente o valor de todo o input.
    let resultDolar = inputReais / dolar 
    let resultEuro = inputReais / euro
    let resultBitcoin = inputReais / bitcoin

    const currencyValue = document.getElementById('currency-value')
    const realValue = document.getElementById('real-value')
    
    realValue.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if(select.value === "US$ Dólar americano") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
        ).format(resultDolar)
    }

    if(select.value === "€ Euro") {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
        ).format(resultEuro)

    }

    if(select.value === "Bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BTC' }
        ).format(resultBitcoin.toFixed(0))
    }

    

}

button.addEventListener('click', convertValues)
//assim que ouvir o click chama a função convertValues.

//agora vamos trabalhar em cima do select para a mudança da moeda.
const select = document.getElementById('currency-select')

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.svg"
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.svg"
    }

    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.svg"
    }
    convertValues()

}

select.addEventListener('change', changeCurrency) //a análise começa sempre por aqui.


