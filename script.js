const input = document.querySelector('#input')
const submit = document.querySelector('#convertBtn')
const currency = document.querySelector('#currency')
const res =document.querySelector('#res')
const handleGet = () =>{
    fetch(`https://api.exchangerate.host/latest?base=USD&symbols= ${currency.value}KGS,RUS,EUR&amount=${input.value}&places=3`)
        .then( response => response.json())
        .then(data =>{
            res.innerHTML = `${input.value} KGS = ${data.result} ${currency.value}`



            // const {rates} = retes;
            // const kgs=document.getElementById('kgs');
            // const rub=document.getElementById('rub');
            // const eur=document.getElementById('eur');
        })

}


submit.addEventListener('click', handleGet)
