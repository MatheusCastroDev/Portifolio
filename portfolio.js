// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Modal:


const modal = document.getElementById("modal_contato");
const btn_abrir = document.getElementById("btn_contato");
const btn_fechar = document.getElementById("fechar_modal");

btn_abrir.onclick = function() {

    modal.showModal();
};

btn_fechar.onclick = function() {

    modal.close();
};

modal.addEventListener("click", (e) =>{

    if (e.target === modal) {

        modal.close()
    }
});


// Modo claro / Escuro:

const tema_btn = document.getElementById('trilho');
const body = document.body;

const salvar_tema = localStorage.getItem('tema');

if (salvar_tema === 'light') {
    body.classList.add('light-mode');
    document.documentElement.setAttribute('data-bs-theme', 'light');
}

else{
    document.documentElement.setAttribute('data-bs-theme', 'dark');
}

tema_btn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    const light_on = body.classList.contains('light-mode');

    if (light_on) {
        localStorage.setItem('tema', 'light');
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }

    else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
});



// 3. Animação de Scroll
function initScrollAnimation() {
    const elementos = document.querySelectorAll('.revelar');
    if (!elementos.length) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('ativo');
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(elemento => observador.observe(elemento));
}

document.addEventListener('DOMContentLoaded', initScrollAnimation);

if(entrada.isIntersecting){
    entrada.target.classList.add('ativo');
    observador.unobserve(entrada.target);
}