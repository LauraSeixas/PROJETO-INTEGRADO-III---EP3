let numAppointments = [];

async function getData() {
    try {
        const response = await fetch('http://localhost:3000/api');

        const data = await response.json();

        numAppointments = Object.values(data);
        console.log(numAppointments)
        createAppointmentsHTML();
             // Selecionando elementos do DOM após os dados terem sido obtidos
            const ModalCancelar = document.querySelector('.ModalCancelar');
            const ModalReagendar =document.querySelector('.ModalReagendar');
            const btnreschedule = document.querySelectorAll('.btn-reschedule');
            const buttonCancelar = document.querySelector('.buttonCancelar');
            const buttonIconClose = document.querySelector('.iconClose');
            const buttonSair =document.querySelector('.buttonSair');
            const buttonCancelarAgenda = document.querySelector('.buttonCancelarAgenda');
            const buttonConfirmar = document.querySelector('.buttonConfirmar');
            const btncancel = document.querySelectorAll(".btn-cancel")
            //botões para fechar o modal
            buttonSair.addEventListener("click", function() {
                 console.log('cliquei');
                 ModalCancelar.classList.add("off");
                 ModalReagendar.classList.add("off");
             });
     
            buttonCancelar.addEventListener("click", function() {
                 console.log('cliquei');
                 ModalCancelar.classList.add("off");
                 ModalReagendar.classList.add("off");
             });

            buttonIconClose.addEventListener("click", function() {
                console.log('cliquei');
                ModalCancelar.classList.add("off");
                ModalReagendar.classList.add("off");
            });
            //fim dos botões para fechar o modal	

            //Selecionando os elementos do DOM após os dados terem sido obtidos
            const boxappointment = document.querySelectorAll('.box-appointment')

            boxappointment.forEach(box =>{
                //botões para abrir o modal
                btncancel.forEach(cancelar=>{
                    cancelar.addEventListener('click',function(){
                        ModalCancelar.classList.remove("off")
                    })
                })

                btnreschedule.forEach(reagendar=> {
                    reagendar.addEventListener('click',function(){
                        ModalReagendar.classList.remove("off")
                    })
                })
                //fim dos botões para abrir o modal

                //
                box.addEventListener('click',function(e){
                    buttonCancelarAgenda.addEventListener("click",function(){
                        ModalCancelar.classList.add("off")
                        box.classList.add("removido")
                        deleteData(box.getAttribute('key'))
                        
                    })

                    let horario =''
                    let dia =''
                    console.log(box)
                    ModalReagendar.addEventListener('click',function(e){
                        
                        if (e.target.tagName === 'P' && e.target.textContent !== '----') {
                            let todosHorarios = document.querySelectorAll('.ModalReagendar p');
                            todosHorarios.forEach(function(horario) {
                                horario.style.backgroundColor = ''; // Remove a cor de fundo
                                horario.style.borderRadius = ''; // Remove o border-radius
                            });
                            console.log(todosHorarios)
                            e.target.style.backgroundColor = '#A7E3E3'
                            e.target.style.borderRadius = '20px'
                            horario = e.target.textContent;
                            console.log(dia)
                            dia = e.target.parentNode.querySelector('h5').textContent;
                            
                            
                        }

                    })

                    buttonConfirmar.addEventListener('click', function(){
                        const appointmentDetails = box.querySelector('.container-detail-appointments');
                        const dateElement = appointmentDetails.querySelector('.subtitle-detail-appointment:nth-child(2)');
                        const timeElement = appointmentDetails.querySelector('.subtitle-detail-appointment:nth-child(3)');
                        dateElement.textContent =dia;
                        timeElement.textContent= horario;
                        ModalCancelar.classList.add("off")
                        ModalReagendar.classList.add("off")
                    })

                })
            })
    } catch (error) {
        console.log(error);
    }
};

getData();

async function deleteData(id) {
    const url = 'http://localhost:3000/api/' + id;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

function createAppointmentHTML(i, appointments) {
    const { name, medical_specialty, address, appointment, id } = appointments;
    return `
    <div class="box-appointment" key=${id}>
        <div class="container-my-appointments">
            <img src="/public/assets/perfil.svg" alt="mental-health" style="margin-right: 25px;">
            <div>
                <p class="title-appointment">${name}</p>
                <p class="subtitle-appointment-specialty">${medical_specialty}</p>
                <div class="stars">
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/colored-star.svg" alt="star"/>
                    <img src="/public/assets/gray-star.svg" alt="star"/>
                </div>
                <p class="subtitle-appointment-adress">Endereço</p>
                <hr class="divider">
                <p class="subtitle-appointment-full-adress">
                    <img src="/public/assets/point-marker.svg"/>
                    ${address}</p>
            </div>
        </div>
        <div class="divider-between-containers"></div>
        <div class="container-detail-appointments">
            <p class="title-detail-appointment">Detalhes da <strong style="font-weight: 600;">consulta</strong></p>
            <p class="subtitle-detail-appointment" style="margin-top: 5px;">${appointment.data}</p>
            <p class="subtitle-detail-appointment">${appointment.time}</p>
            <div class="btn-container">
                <button class="btn-cancel" data-id="${id}">Cancelar a consulta</button>
                <button class="btn-reschedule" data-id="${id}">Reagendar a consulta</button>
            </div>
        </div>
        
    </div>
    `;
}

function createAppointmentsHTML() {
    const appointmentsContainer = document.getElementById('appointments-container');
    appointmentsContainer.innerHTML = ''; 
    
    numAppointments.forEach((appointments, i) => {
        const appointmentHTML = createAppointmentHTML(i, appointments);
        appointmentsContainer.innerHTML += appointmentHTML;
    });
}

// const seta = document.querySelector("#seta")

// seta.addEventListener('click', function () {
//     var ultimoDia = document.querySelector('.datas div:last-child');
//     var datas = document.querySelector('.datas');
//     var posicaoUltimoDia = ultimoDia.offsetLeft;
    
    
//     if (datas.scrollLeft + datas.clientWidth >= datas.scrollWidth) {
        
//         datas.scrollTo({
//             left: 0,
//             behavior: 'smooth'
//         });
//     } else {
        
//         datas.scrollTo({
//             left: posicaoUltimoDia,
//             behavior: 'smooth'
//         });
//     }
// });




