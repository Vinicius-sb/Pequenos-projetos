const seconds = document.getElementById('segundos')
const minutes = document.getElementById('minutos')
const hours = document.getElementById('horas')
const stop_btn = document.getElementById('parar')
const reset_btn = document.getElementById('resetar')
const start_btn = document.getElementById('iniciar')
let clicked = false

function count_seconds(){
    let value = seconds.innerText
    value = parseInt(value)
    value ++
    value = String(value)
    if (value.length < 2){
        seconds.innerText = '0' + value
    }
    else{
        seconds.innerText = value
    }

    if (parseInt(value) == 60){
        seconds.innerText = '00'
        count_minutes()
    }
}

function count_minutes(){
    let value = minutes.innerText
    value = parseInt(value)
    value++
    value = String(value)
    if (value.length < 2){
        minutes.innerText = '0' + value  
    }
    else{
        minutes.innerText = value
    }

    if (parseInt(value) == 60){
        minutes.innerText = '00'
        count_hours()
    }
}

function count_hours(){
    let value = hours.innerText
    value = parseInt(value)
    value ++
    value = String(value)

    if (value.length < 2){
        hours.innerText = '0' + value
    }
    else{
        hours.innerText = value
    }
}

start_btn.addEventListener('click', () => {
    if (!clicked){
        start = setInterval(count_seconds, 1000)
        clicked = true
    }
})

reset_btn.addEventListener('click', () => {
    seconds.innerText = '00'
    minutes.innerText = '00'
    hours.innerText = '00'
})

stop_btn.addEventListener('click', () => {
    clearInterval(start)
    clicked = false
})