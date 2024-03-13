function createAppointmentHTML() {
    return `
    <div class="box-appointment">
        <div class="container-my-appointments">
            <img src="/app/assets/perfil.svg" alt="mental-health" style="margin-right: 25px;">
            <div>
                <p class="title-appointment">Dra. Fulana Beltrana</p>
                <p class="subtitle-appointment-specialty">Psiquiatra</p>
                <div class="stars">
                    <img src="/app/assets/colored-star.svg" alt="star"/>
                    <img src="/app/assets/colored-star.svg" alt="star"/>
                    <img src="/app/assets/colored-star.svg" alt="star"/>
                    <img src="/app/assets/colored-star.svg" alt="star"/>
                    <img src="/app/assets/gray-star.svg" alt="star"/>
                </div>
                <p class="subtitle-appointment-adress">Endereço</p>
                <hr class="divider">
                <p class="subtitle-appointment-full-adress">
                    <img src="/app/assets/point-marker.svg"/>
                    Avenida República do Líbano 251, Recife</p>
            </div>
        </div>
        <div class="divider-between-containers"></div>
        <div class="container-detail-appointments">
            <p class="title-detail-appointment">Detalhes da <strong style="font-weight: 500;">consulta</strong></p>
            <p class="subtitle-detail-appointment">29 de Dezembro de 2023</p>
            <p class="subtitle-detail-appointment">10:00, Sexta-feira</p>
            <div class="btn-container">
                <button class="btn-cancel">Cancelar a consulta</button>
                <button class="btn-reschedule">Reagendar a consulta</button>
            </div>
        </div>
        
    </div>
    `;
}

const appointmentsContainer = document.getElementById('appointments-container');

let numAppointments = 4; 

for (let i = 0; i < numAppointments; i++) {
    appointmentsContainer.innerHTML += createAppointmentHTML();
}
