const Medicos = [
    {id:0,nome:"Dr. Fulana"},{id:1, nome: 'Dr. Cicrana'},{id:2,nome:'Dr. Dodoi da silva'},{id:3,nome:'Dr. Nicole'}
]

const main = document.querySelector('.main')

function createAppointmentHTML(medico) {
   
    return `
    <div class="carta" key=${medico.id}>
            <div class="conteudo">
            <div class="perfil">
                <img src="/app/assets/perfil.svg" alt="perfil" class="doutoraimg"/>
                <div class="doutora">
                    <h5>${medico.nome}</h5>
                    <p class="p1">Psiquiatra</p>
                    <div >
                        <img  src="/app/assets/star.png" alt="star"/>
                        <img  src="/app/assets/star.png" alt="star"/>
                        <img  src="/app/assets/star.png" alt="star"/>
                        <img  src="/app/assets/star.png" alt="star"/>
                        <img  src="/app/assets/star.png" alt="star"/>
                    </div>
                    <p class="p2">endereço</p>
                    <p class="p3">
                        Avenida República do Líbano 251, Recife 
                    </p>
                </div>
            </div>
            <div class="separacao"></div>
            <div class="agendar">
                <h3>Escolha uma data e horario</h3>
                <div class="datas">
                <div >
                     <h5>hoje</h5>
                     <p>8:00</p>
                     <p>10:00</p>
                </div>
                <div>
                    <h5>Amanhã</h5>
                    <p>8:00</p>
                    <p>10:00</p>
               </div>
                <div>
                    <h5>Quarta</h5>
                    <p>8:00</p>
                    <p>10:00</p>
                </div>
                <div>
                    <h5>Quinta</h5>
                    <p>----</p>
                    <p>----</p>
                </div>
                <div>
                    <h5>Sexta</h5>
                    <p>8:00</p>
                    <p>10:00</p>
                </div>
                <div>
                    <h5>Sabado</h5>
                    <p>8:00</p>
                    <p>10:00</p>
                </div>
            </div>
           
            </div>
           
            <img src="/app/assets/setaRight.png" alt="seta" id="seta"/>
           
            </div>
            <div class="button"><button>Agende agora</button></div>
        </div>
    `;
}



function renderAppointments(){
    Medicos.map(medico =>{
        const appointmentHTML = createAppointmentHTML(medico);
        main.insertAdjacentHTML('beforeend', appointmentHTML);
    })
}
renderAppointments()

const div1 = document.createElement('div')


const setas = document.querySelectorAll("#seta")


setas.forEach(seta=> {
   
    seta.addEventListener('click', function(){
        const datasContainer = this.parentElement.querySelector('.datas');
        
        const ultimoDia = datasContainer.querySelector('div:last-child');
        // Calcula a posição do último dia em relação à div de datas
        var posicaoUltimoDia = ultimoDia.offsetLeft;
    
        // Rola a div de datas até a posição do último dia
        if(this.classList.contains("um")){
            datasContainer.scrollTo({
                left: 0,
                behavior: 'smooth' // Adiciona uma rolagem suave
            });
            this.classList.remove("um")
        }else{
            datasContainer.scrollTo({
                left: posicaoUltimoDia,
                behavior: 'smooth' // Adiciona uma rolagem suave
            });
            this.classList.add("um")
        }
       
    })
})

let dia='';
let horario ='';
const modalAgendar = document.querySelector('.modalAgendar')
const dataAgendamento = document.querySelector('.dataAgendamento')
const buttonCancelar = document.querySelector('.buttonCancelar')
const dataPerfil = document.querySelector('.dataPerfil')
const cartas = document.querySelectorAll('.carta')
cartas.forEach(carta => carta.addEventListener('click', function(e){
    console.log(carta)
    
        if (e.target.tagName === 'P' && e.target.textContent !== '----') {
            modalAgendar.classList.remove('off')
            // Obtém o texto do elemento <p> clicado (horário)
            const horario = e.target.textContent;
    
            // Obtém o dia correspondente ao elemento <p> clicado (h5)
            const dia = e.target.parentNode.querySelector('h5').textContent;
            console.log(dia)
            console.log('Dia selecionado:', dia);
            console.log('Horário selecionado:', horario);
            const NomeMedico = dataPerfil.querySelector('h5')
            console.log(NomeMedico)
            const key= carta.getAttribute('key')
            console.log(key)
            const Medico = Medicos.filter(medico=> medico.id == key) 
            console.log(Medico)
            NomeMedico.textContent = Medico[0].nome
            const paragrafo = dataAgendamento.querySelector('p');
            paragrafo.textContent = dia+" "+ horario+ ' de Dezembro às 10:00 Fuso horário: Brasília'
    
        }
}))







buttonCancelar.addEventListener('click',function(){
    modalAgendar.classList.add('off')
})
console.log('Dia selecionado:', dia);
console.log('Horário selecionado:', horario);



