const Medico = [
    {id:0,},{id:1},{id:2}
]
const main = document.querySelectorAll('.main')

const div1 = document.createElement('div')

console.log(main)
const seta = document.querySelector("#seta")
const seta1 = document.querySelector("#seta1")
console.log(seta)



seta1.addEventListener('click', function(){
    var ultimoDia = document.querySelector('.datas1 div:last-child');
    

    // Calcula a posição do último dia em relação à div de datas
    var posicaoUltimoDia = ultimoDia.offsetLeft;

    // Rola a div de datas até a posição do último dia
    if(seta.classList.contains("um")){
        document.querySelector('.datas1').scrollTo({
            left: 0,
            behavior: 'smooth' // Adiciona uma rolagem suave
        });
        seta.classList.remove("um")
    }else{
        document.querySelector('.datas1').scrollTo({
            left: posicaoUltimoDia,
            behavior: 'smooth' // Adiciona uma rolagem suave
        });
        seta.classList.add("um")
    }
   
})
seta.addEventListener('click', function(){
    var ultimoDia = document.querySelector('.datas div:last-child');
    

    // Calcula a posição do último dia em relação à div de datas
    var posicaoUltimoDia = ultimoDia.offsetLeft;

    // Rola a div de datas até a posição do último dia
    if(seta.classList.contains("um")){
        document.querySelector('.datas').scrollTo({
            left: 0,
            behavior: 'smooth' // Adiciona uma rolagem suave
        });
        seta.classList.remove("um")
    }else{
        document.querySelector('.datas').scrollTo({
            left: posicaoUltimoDia,
            behavior: 'smooth' // Adiciona uma rolagem suave
        });
        seta.classList.add("um")
    }
   
})



const agendar = document.querySelector('.datas')

console.log(agendar)
let dia='';
let horario ='';
const modalAgendar = document.querySelector('.modalAgendar')
const dataAgendamento = document.querySelector('.dataAgendamento')
const buttonCancelar = document.querySelector('.buttonCancelar')
agendar.addEventListener('click', function(e) {
    // Verifica se o elemento clicado é um <p>
    modalAgendar.classList.remove('off')
    if (e.target.tagName === 'P') {
        // Obtém o texto do elemento <p> clicado (horário)
        const horario = e.target.textContent;

        // Obtém o dia correspondente ao elemento <p> clicado (h5)
        const dia = e.target.parentNode.querySelector('h5').textContent;

        console.log('Dia selecionado:', dia);
        console.log('Horário selecionado:', horario);
        const paragrafo = dataAgendamento.querySelector('p');
        paragrafo.textContent = dia+" "+ horario+ ' de Dezembro às 10:00 Fuso horário: Brasília'

    }
});


buttonCancelar.addEventListener('click',function(){
    modalAgendar.classList.add('off')
})
console.log('Dia selecionado:', dia);
console.log('Horário selecionado:', horario);