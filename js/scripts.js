document.addEventListener('DOMContentLoaded', function() {
    // Inicializa EmailJS
    emailjs.init("rpLhwX_3BvjHhef9Q"); // Reemplaza con tu verdadero user_id

    // Función para mostrar la sección de misiones al hacer scroll
    const missions = document.querySelectorAll('#missions .mission');

    const showMissionsOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        missions.forEach(mission => {
            const missionTop = mission.getBoundingClientRect().top;
            if (missionTop < triggerBottom) {
                mission.classList.add('visible');
            }
        });
    };

    // Evento de scroll para mostrar misiones
    window.addEventListener('scroll', showMissionsOnScroll);
    showMissionsOnScroll(); // Llamado inicial para cargar elementos visibles al inicio
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtén los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Parámetros de EmailJS
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Envío del correo usando EmailJS
    emailjs.send('service_t4la2sm', 'template_vokzqbn', templateParams)
    .then(function(response) {
        console.log('Success!', response.status, response.text);
        alert('¡Tu mensaje ha sido enviado correctamente!'); // Notificación de éxito
    }, function(error) {
        console.error('Failed...', error);
        alert('Hubo un error al enviar el mensaje'); // Notificación de error
    });
});
