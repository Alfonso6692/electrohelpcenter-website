        // Smooth scrolling para enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Función de ejemplo
        function saludar() {
            alert('¡Hola! Bienvenido a la página web.');
        }

        // Event listener de ejemplo
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Página cargada correctamente');
        });