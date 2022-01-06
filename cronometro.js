let gravar = document.querySelector('.gravar');
let iniciar = document.querySelector('.iniciar');
let parar = document.querySelector('.parar');
let cronometro = document.querySelector('.time');

function iniciarCronometro(){
    let tempo = setInterval(cronometro, 10);
    cronometro.innerHTML = tempo;
}

function pararCronometro(){
    cronometro.innerHTML = 'parar';
}

iniciar.addEventListener('click', () => {
    iniciar.classList.add('active');
    parar.classList.remove('active');
    iniciarCronometro();
});

parar.addEventListener('click', () => {
    parar.classList.add('active');
    iniciar.classList.remove('active');
    //pararCronometro();
});