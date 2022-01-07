let gravar = document.querySelector('.gravar');
let iniciar = document.querySelector('.iniciar');
let parar = document.querySelector('.parar');
let cronometro = document.querySelector('.time');
let gravados = document.querySelector('.tempo-gravado');
let clear = document.querySelector('.limpar');
let historico = document.querySelector('.limpar-historico');

let hora = 00;
let minuto = 00;
let segundo = 00;
let tempo;

function iniciarCronometro(){
    segundo++;

    if (segundo > 59) {
        segundo = 0;
        minuto++;
        if (minuto > 59) {
            minuto = 0;
            hora++;
        }
    }

    cronometro.innerHTML = (hora < 10 ? '0' + hora : hora) + ' : ' + (minuto < 10 ? '0' + minuto : minuto) + ' : ' + (segundo < 10 ? '0' + segundo : segundo);
}

function pararCronometro(){
    parar.classList.add('active');
    iniciar.classList.remove('active');
    clearInterval(tempo);
}

iniciar.addEventListener('click', () => {
    iniciar.classList.add('active');
    parar.classList.remove('active');
    tempo = setInterval(() => {
        iniciarCronometro()
    }, 1000);
});

parar.addEventListener('click', () => {
    pararCronometro();
});

gravar.addEventListener('click', () => {
    gravados.innerHTML += '<p>' + (hora < 10 ? '0' + hora : hora) + ' : ' + (minuto < 10 ? '0' + minuto : minuto) + ' : ' + (segundo < 10 ? '0' + segundo : segundo) + '</p>';
});

clear.addEventListener('click', () => {
    hora = 00;
    minuto = 00;
    segundo = 00;
    cronometro.innerHTML = '00 : 00 : 00';
    pararCronometro();
});

historico.addEventListener('click', () => {
    alert('oi');
});