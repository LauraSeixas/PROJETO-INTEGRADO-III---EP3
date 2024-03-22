const Medicos = [
    {
      "id": "1c497186-be9c-4b1d-b055-bcf0110cd7f4",
      "name": "Fulana das Oliveiras",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida República do Líbano 251, Recife"
    },
    {
      "id": "d336a9bb-6052-44ad-a1b8-5f279419c900",
      "name": "Beltrana das Flores",
      "medical_specialty": "Psiquiatra",
      "address": "Rua das Flores, 123, São Paulo"
    },
    {
      "id": "e70aa0c9-3ecb-4a38-8241-d0d80ff84f11",
      "name": "Sicrana das Palmeiras",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida das Palmeiras, 456, Rio de Janeiro"
    },
    {
      "id": "d7c41a57-4a46-4fc5-91f5-313eeff362fe",
      "name": "Fulano dos Pinheiros",
      "medical_specialty": "Psiquiatra",
      "address": "Rua dos Pinheiros, 789, Belo Horizonte"
    },
    {
      "id": "3f490cde-723d-45f9-a87b-4f3539dab373",
      "name": "Beltrano dos Coqueiros",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida Central, 101, Brasília"
    },
    {
      "id": "6b184d8e-f914-4b69-bb72-c75cd1b4e335",
      "name": "Sicrano dos Ipês",
      "medical_specialty": "Psiquiatra",
      "address": "Rua das Gaivotas, 567, Florianópolis"
    },
    {
      "id": "00f3eeac-c0b2-4b51-a374-7e8d7c07bcd8",
      "name": "Fulana dos Girassóis",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida dos Girassóis, 321, Salvador"
    },
    {
      "id": "47f833ce-79d9-44a3-a6c3-bc7a4469ba54",
      "name": "Beltrana das Margaridas",
      "medical_specialty": "Psiquiatra",
      "address": "Rua das Mangueiras, 654, Porto Alegre"
    },
    {
      "id": "160efd96-10c8-41e6-b978-e96f7511b9dc",
      "name": "Sicrana das Orquídeas",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida das Flores, 987, Goiânia"
    },
    {
      "id": "0e414416-4d09-42e8-a68d-99f88cd3cc05",
      "name": "Fulano dos Lírios",
      "medical_specialty": "Psiquiatra",
      "address": "Rua dos Ipês, 741, Manaus"
    },
    {
      "id": "1349155c-3dbd-44f2-98a7-666b089615b0",
      "name": "Beltrano das Acácias",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida das Acácias, 852, Curitiba"
    }
  ]

const main = document.querySelector('.main')


function renderDates(medico) {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const currentDate = new Date();
   
    // Encontra a div de datas específica para este médico
    const datasContainer = document.querySelector(`.box-doctor[key="${medico.id}"] .datas`);
    if (!datasContainer) {
        console.error("Elemento .datas não encontrado para o médico:", medico.name);
        return;
    }
   
    // Renderiza 15 dias
    for (let i = 0; i < 15; i++) {
        const date = new Date();
        date.setDate(currentDate.getDate() + i);
       
        const day = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
       
        const div = document.createElement('div');
        div.classList.add('date-item');
        div.style.display = i < 5 ? 'block' : 'none'; // Mostra apenas os primeiros 5 dias
        div.innerHTML = `
            <h5>${day} - <span>${dayOfMonth}/${month}<span></h5>
            <p>8:00</p>
            <p>10:00</p>
        `;
       
        datasContainer.appendChild(div);
    }
}

function renderAppointments() {
    Medicos.map(medico => {
        const appointmentHTML = createAppointmentHTML(medico);
        main.insertAdjacentHTML('beforeend', appointmentHTML);
        renderDates(medico);
    });
}

renderAppointments();

function createAppointmentHTML(medico) {
    return `
        <div class="box-doctor" key=${medico.id}>
            <div class="container-my-doctors">
                <img src="/public/assets/perfil.svg" alt="mental-health" style="margin-right: 25px; widht="50px"">
                <div>
                    <p class="title-doctor">${medico.name}</p>
                    <p class="subtitle-doctor-specialty">${medico.medical_specialty}</p>
                    <div class="stars">
                        <img src="/public/assets/colored-star.svg" alt="star"/>
                        <img src="/public/assets/colored-star.svg" alt="star"/>
                        <img src="/public/assets/colored-star.svg" alt="star"/>
                        <img src="/public/assets/colored-star.svg" alt="star"/>
                        <img src="/public/assets/gray-star.svg" alt="star"/>
                    </div>
                    <p class="subtitle-doctor-adress">Endereço</p>
                    <hr class="divider">
                    <p class="subtitle-doctor-full-adress">
                        <img src="/public/assets/point-marker.svg"/>
                        ${medico.address}</p>
                </div>
            </div>
            <div class="divider-between-containers"></div>
            <div class="container-detail-doctors">
            <p class="title-detail-doctor">Escolha uma <strong style="font-weight: 600;">data e horário</strong></p>
                <div class="agendar">
                    <div class="datas">
                    </div>
                    <img src="/public/assets/setaRight.png" alt="seta" class="seta"/>
                </div>

            </div>
        </div>
    </div>
`;
}
/* <div class="button">
<button>Agende Agora</button>
</div> */

const div1 = document.createElement('div')


// const setas = document.querySelectorAll(".seta");
// setas.forEach(seta=> {
   
//     seta.addEventListener('click', function(){
//         const datasContainer = this.parentElement.querySelector('.datas');
        
//         const ultimoDia = datasContainer.querySelector('div:last-child');
//         // Calcula a posição do último dia em relação à div de datas
//         var posicaoUltimoDia = ultimoDia.offsetLeft;
    
//         // Rola a div de datas até a posição do último dia
//         if(this.classList.contains("um")){
//             datasContainer.scrollTo({
//                 left: 0,
//                 behavior: 'smooth' // Adiciona uma rolagem suave
//             });
//             this.classList.remove("um")
//         }else{
//             datasContainer.scrollTo({
//                 left: posicaoUltimoDia,
//                 behavior: 'smooth' // Adiciona uma rolagem suave
//             });
//             this.classList.add("um")
//         }
       
//     })
// })

let dia='';
let horario ='';
const modalAgendar = document.querySelector('.modalAgendar')
const dataAgendamento = document.querySelector('.dataAgendamento')
const buttonCancelar = document.querySelector('.buttonCancelar')
const buttonClose = document.querySelector('.iconClose')
const dataPerfil = document.querySelector('.dataPerfil')
let dataToBeSent = {};

const cartas = document.querySelectorAll('.box-doctor')
cartas.forEach(carta => carta.addEventListener('click', function(e) {

    if (e.target.tagName === 'P' && e.target.textContent !== '----') {
        modalAgendar.classList.remove('off');

        const horario = e.target.textContent;

        const diaCompleto = e.target.parentNode.querySelector('h5').textContent;
        console.log('diaCompleto selecionado:', diaCompleto);
        console.log('Horário selecionado:', horario);

        const key = carta.getAttribute('key');
        const Medico = Medicos.find(medico => medico.id == key);

        if (Medico) {
            const NomeMedico = dataPerfil.querySelector('h5');
            NomeMedico.textContent = Medico.name;

            const EspecialidadeMedico = dataPerfil.querySelector('p');
            EspecialidadeMedico.textContent = Medico.medical_specialty;
            const data = new Date(); 
            const mes = new Date().toLocaleString('default', { month: 'long' });
            const ano = data.getFullYear();

            const textoFinal = `${diaCompleto.split('/')[0]} de ${mes} às ${horario} da manhã`;

            const dia = diaCompleto.split(' - ')[1].split('/')[0];
            const diaDaSemana = diaCompleto.split(' - ')[0];
            const appointmentTextFirstPart = `${dia} de ${mes} de ${ano}`;
            const appointmentTextSecondPart = `${horario}, ${diaDaSemana}`

            const paragrafo = dataAgendamento.querySelector('p');
            paragrafo.textContent = textoFinal;

            const endereco = document.querySelector('.dataEnderecamento p');
            endereco.textContent = Medico.address;

            dataToBeSent = {
              name: Medico.name,
              medical_specialty: Medico.medical_specialty,
              address: Medico.address,
              appointment: {
                data: appointmentTextFirstPart, 
                time: appointmentTextSecondPart
              }
          };
        } else {
            console.error('Médico não encontrado');
        }
    }
}));

buttonCancelar.addEventListener('click',function(){
    modalAgendar.classList.add('off')
});

buttonClose.addEventListener('click',function(){
    modalAgendar.classList.add('off')
});

const buttonConfirmar = document.querySelector('.buttonConfirmar');

buttonConfirmar.addEventListener('click', function() {
  sendData(dataToBeSent);
});

function sendData(dataToBeSent) {};