const Medicos = [
    {
      "id": "1c497186-be9c-4b1d-b055-bcf0110cd7f4",
      "name": "Fulana das Oliveiras",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida República do Líbano 251, Recife",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "d336a9bb-6052-44ad-a1b8-5f279419c900",
      "name": "Beltrana das Flores",
      "medical_specialty": "Psiquiatra",
      "address": "Rua das Flores, 123, São Paulo",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "e70aa0c9-3ecb-4a38-8241-d0d80ff84f11",
      "name": "Sicrana das Palmeiras",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida das Palmeiras, 456, Rio de Janeiro",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "d7c41a57-4a46-4fc5-91f5-313eeff362fe",
      "name": "Fulano dos Pinheiros",
      "medical_specialty": "Psiquiatra",
      "address": "Rua dos Pinheiros, 789, Belo Horizonte",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "3f490cde-723d-45f9-a87b-4f3539dab373",
      "name": "Beltrano dos Coqueiros",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida Central, 101, Brasília",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "6b184d8e-f914-4b69-bb72-c75cd1b4e335",
      "name": "Sicrano dos Ipês",
      "medical_specialty": "Psiquiatra",
      "address": "Rua das Gaivotas, 567, Florianópolis",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "00f3eeac-c0b2-4b51-a374-7e8d7c07bcd8",
      "name": "Fulana dos Girassóis",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida dos Girassóis, 321, Salvador",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "47f833ce-79d9-44a3-a6c3-bc7a4469ba54",
      "name": "Beltrana das Margaridas",
      "medical_specialty": "Psiquiatra",
      "address": "Rua das Mangueiras, 654, Porto Alegre",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "160efd96-10c8-41e6-b978-e96f7511b9dc",
      "name": "Sicrana das Orquídeas",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida das Flores, 987, Goiânia",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "0e414416-4d09-42e8-a68d-99f88cd3cc05",
      "name": "Fulano dos Lírios",
      "medical_specialty": "Psiquiatra",
      "address": "Rua dos Ipês, 741, Manaus",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    },
    {
      "id": "1349155c-3dbd-44f2-98a7-666b089615b0",
      "name": "Beltrano das Acácias",
      "medical_specialty": "Psiquiatra",
      "address": "Avenida das Acácias, 852, Curitiba",
      "appointments": [
        {
          "date": "2024-03-21",
          "times": ["08:00", "10:00", "14:00"]
        },
        {
          "date": "2024-03-22",
          "times": ["09:00", "11:00", "15:00"]
        }
      ]
    }
  ]

const main = document.querySelector('.main')


function renderDates(medico) {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
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
            <p class="title-detail-doctor">Escolha uma <strong style="font-weight: 500;">data e horário</strong></p>
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

        // Obtém o texto do elemento <p> clicado (horário)
        const horario = e.target.textContent;

        // Obtém o dia correspondente ao elemento <p> clicado (h5)
        const dia = e.target.parentNode.querySelector('h5').textContent;
        console.log('Dia selecionado:', dia);
        console.log('Horário selecionado:', horario);

        const key = carta.getAttribute('key');
        const Medico = Medicos.find(medico => medico.id == key);

        if (Medico) {
            const NomeMedico = dataPerfil.querySelector('h5');
            NomeMedico.textContent = Medico.name;

            const EspecialidadeMedico = dataPerfil.querySelector('p');
            EspecialidadeMedico.textContent = Medico.medical_specialty;

            const mes = new Date().toLocaleString('default', { month: 'long' });
      
            const textoFinal = `${dia.split('/')[0]} de ${mes} às ${horario} da manhã`;

            const paragrafo = dataAgendamento.querySelector('p');
            paragrafo.textContent = textoFinal;

            const endereco = document.querySelector('.dataEnderecamento p');
            endereco.textContent = Medico.address;

            dataToBeSent = {
              name: Medico.name,
              medical_specialty: Medico.medical_specialty,
              address: Medico.address,
              appointment: textoFinal
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

function sendData(dataToBeSent) {
  let name = dataToBeSent.name;
  let medical_specialty = dataToBeSent.medical_specialty
  let address = dataToBeSent.address;
  let appointment = dataToBeSent.appointment;

  try {
      if (dataToBeSent.name !== "" && dataToBeSent.medical_specialty !== "") {
      const data = {
        name,
        medical_specialty,
        address,
        appointment
      };
  
      const options = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      };
      console.log('options', options);
      fetch('/api', options)
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(data => {
              console.log(data);
              location.reload();
              console.log('Dados enviados com sucesso!');
              alert('Dados enviados com sucesso!');
              console.log(location.reload());
          }
          )
          .catch(err => {
            console.error('Erro ao processar a requisição:', err);
          });
      }
  } catch (error) {
      console.log('Erro ao enviar os dados: ' + error);
      throw new Error('Erro ao enviar os dados: ' + error.message);
  }
};