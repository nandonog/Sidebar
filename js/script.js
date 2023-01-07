 // Funções e o que vai ser mostrado na tela

const bodyMain = document.querySelector('.body-main')
const homeSobre = document.querySelector('.home-sobre')
const homeSidebar = document.querySelector('.home-sidebar')
const homeSid = document.querySelector('.sidebar-btn-home')
const timerSid = document.querySelector('.sidebar-btn-timer')
const msgSid = document.querySelector('.sidebar-btn-msg')
const tema = document.querySelector('.sidebar-tema')
const temaBtn = document.querySelector('.tema-btt')

const noDisplay = () => {
    homeSobre.setAttribute('class', 'display-n')
}


homeSid.addEventListener('click', () => {
    homeSidebar.classList.add('display-n')
    homeSobre.classList.remove('display-n')

})
timerSid.addEventListener('click', () => {
    homeSidebar.classList.remove('display-n')
    homeSobre.classList.add('display-n')

})
msgSid.addEventListener('click', () => {

})

tema.addEventListener('click', () => {
    bodyMain.classList.toggle('sidebar-body')
    temaBtn.classList.toggle('btn-tema')
    
})



// Criando o timer


const time = document.querySelector('.timer-h3');
let seconds = 0;
let timer;

const criaTimer = (segundos) => {
    const timer = new Date(segundos * 1000);
    return timer.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    })
}

const goTimer = () => {
    clearInterval(timer)
        timer = setInterval( () => {
            seconds++
            time.innerHTML = criaTimer(seconds)
        },1000)
}


document.addEventListener('click', (e) => {
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')) {
        clearInterval(timer)
        goTimer()
    }

    if(elemento.classList.contains('parar')) {
       clearInterval(timer);
    }

    if(elemento.classList.contains('zerar')) {
        clearInterval(timer)
        time.innerText = '00:00:00';
        seconds = 0;
    }
})