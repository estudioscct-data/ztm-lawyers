// ===== MENÚ HAMBURGUESA =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== FILTRO DE ABOGADOS (solo en equipo.html) =====
document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.filtro-btn');
    const abogados = document.querySelectorAll('.abogado-card');

    if (filtros.length > 0 && abogados.length > 0) {
        filtros.forEach(boton => {
            boton.addEventListener('click', function() {
                filtros.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filtro = this.dataset.filtro;

                abogados.forEach(abogado => {
                    if (filtro === 'todos') {
                        abogado.style.display = 'block';
                    } else {
                        if (abogado.dataset.especialidad === filtro) {
                            abogado.style.display = 'block';
                        } else {
                            abogado.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
});
// ===== CONTADOR DINÁMICO (ANIMACIÓN AL SCROLL) =====
document.addEventListener('DOMContentLoaded', function() {
    const contadores = document.querySelectorAll('.estadistica-numero');
    const velocidad = 150; // Velocidad de animación (menor = más rápido)

    // Función para animar un contador
    function animarContador(elemento) {
        const target = parseInt(elemento.dataset.target);
        const incremento = Math.ceil(target / velocidad);
        let actual = 0;

        const intervalo = setInterval(() => {
            actual += incremento;
            if (actual >= target) {
                actual = target;
                clearInterval(intervalo);
            }
            elemento.textContent = actual;
        }, 20);
    }

    // Configurar Intersection Observer para activar al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const contador = entry.target;
                // Si aún no se ha animado (no tiene clase 'contado')
                if (!contador.classList.contains('contado')) {
                    contador.classList.add('contado');
                    animarContador(contador);
                }
            }
        });
    }, { threshold: 0.5 });

    // Observar cada contador
    contadores.forEach(contador => observer.observe(contador));
});
