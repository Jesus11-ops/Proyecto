/*RELOJ*/
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    $('#time').text(timeString);
}

$(document).ready(function() {
    updateClock(); // Initial call to set the clock
    setInterval(updateClock, 1000); // Update the clock every second
});


  
  /*GEOLOCALIZACION*/
  document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([8.94617, -75.44275], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([8.94617, -75.44275]).addTo(map)
        .bindPopup('Sahagun-Cordoba')
        .openPopup();
});


/*CORREO*/
$(document).ready(function () {
    $("#sendMessage").click(function () {
      var message = $("#message").val();
      var recipientEmail = "castellanoj914@gmail.com"; // Dirección de correo preestablecida
      sendEmail(recipientEmail, message);
    });
  
    function sendEmail(email, message) {
      var mailtoLink = `mailto:${email}?body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    }
  });
  
/*CARRUSEL*/
// Configuración para el desplazamiento automático cada 3 segundos
$('.carousel').carousel({
  interval: 3000 // tiempo en milisegundos
});