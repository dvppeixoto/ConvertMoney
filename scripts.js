const button = document.getElementById('convert-button')


const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000048

const convertValues = () => { //função para converter valores
    
    //Início do Cálculo da função convertValues
    const inputReais = document.getElementById('input-real').value //Estou pegando somente o valor do input e armazenando.
    const resultDolar = inputReais / dolar 
    const resultEuro = inputReais / euro
    const resultBitcoin = inputReais / bitcoin
    
    
    //Armazenando o valor em Real e a moeda a ser convertida da section. 
    const currencyValue = document.getElementById('currency-value')
    const realValue = document.getElementById('real-value')
    
    //Formatando o valor realValue na section e contatenando com o valor do input.  
    realValue.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    //Se o valor do select for US$ Dólar americano faça o cálculo do dólar na section
    if(select.value === "US$ Dólar americano") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
        ).format(resultDolar)
    }
    //Se o valor do select for € Euro faça o cálculo do euro na section.
    if(select.value === "€ Euro") {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
        ).format(resultEuro)
    
    }
    //Se o valor do select fot Bitcoin faça o cálculo do bitcoin na section.
    if(select.value === "Bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BTC' }
        ).format(resultBitcoin.toFixed(0))
    }

    
}   //fim da função de converter valores.

//Evento para ouvir o click e chamar a função convertValues.
button.addEventListener('click', convertValues)


//agora vamos trabalhar em cima do select para a mudança da moeda.

//Estamos pegando o select currency-select inteiro que contém as options.
const select = document.getElementById('currency-select')

//Início da função para mudar a bandeira e o nome da moeda convertida no final da section.
changeCurrency = () => {
    //Estamos armazenando a moeda US padrão convertida no final da section.
    const currencyName = document.getElementById('currency-name')
    //Estamos armazenando a figura US padrão convertida no final da section.
    const currencyImg = document.getElementById('currency-img')
    
    //Se o valor do select for US$ Dólar americano, permanece o nome default Dólar americano e permanece o símbolo da moeda US$.
    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.svg"
    }
    
    //Se o valor do select for € Euro, altera o nome para Euro e altera o símbolo dos US$ para o euro.
    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.svg"
    }
    //Se o valor do select for bitcoin, altera o nome para bitcoin e altera o símbolo para bitcoin.
    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.svg"
    }
    //chamamos a função convertValues para mudar o valor convertido automaticamente ao mudar o select.
    convertValues()

}

//a análise começa sempre pelo primeiro modo de operar o aplicativo.
//01 evento de escuta de change que executa a função changeCurrency.
select.addEventListener('change', changeCurrency) 



