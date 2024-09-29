document.addEventListener('DOMContentLoaded', function() {
    const testimonios = document.querySelectorAll('.testimony_body');
    const antesBtn = document.getElementById('before');
    const siguienteBtn = document.getElementById('next');
    const scrollButton = document.getElementById('scrollToBottom');
    const moreWordsBtn = document.getElementById('moreWords');
    const form = document.getElementById('contactForm'); // Asumiendo que tu formulario tiene este ID
    let indexTestimonio = 0;

    function mostrarTestimonio(index) {
        testimonios.forEach((testimonio, i) => {
            testimonio.classList.toggle('testimony_body--show', i === index);
        });
    }

    mostrarTestimonio(indexTestimonio);

    antesBtn.addEventListener('click', () => {
        indexTestimonio = (indexTestimonio > 0) ? indexTestimonio - 1 : testimonios.length - 1;
        mostrarTestimonio(indexTestimonio);
    });

    siguienteBtn.addEventListener('click', () => {
        indexTestimonio = (indexTestimonio < testimonios.length - 1) ? indexTestimonio + 1 : 0;
        mostrarTestimonio(indexTestimonio);
    });

    // Funcionalidad para el botón "Más palabras"
    moreWordsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionPosition = wordsSection.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
            top: sectionPosition + 50,
            behavior: 'smooth'
        });
    });

    // Muestra el botón cuando se desplaza hacia abajo
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    };

    // Desplazamiento suave al hacer clic en el botón de scroll
    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto

        // Obtener los valores del formulario
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Aquí podrías enviar los datos al servidor usando fetch o XMLHttpRequest
        // Ejemplo con fetch (descomenta y ajusta la URL)
        /*
        fetch('tu-endpoint-aqui', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Mensaje enviado con éxito');
                form.reset(); // Resetea el formulario
            } else {
                alert('Error al enviar el mensaje');
            }
        })
            */
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar el mensaje');
        });
        

        // Simulación de envío exitoso
        alert('Mensaje enviado con éxito (simulación)');
        form.reset(); // Resetea el formulario
    });
});
