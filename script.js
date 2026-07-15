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
