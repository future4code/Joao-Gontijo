function criandoTarefa () {
    const tarefasDoDia = document.getElementById("tarefa")
    const diasDaSemana = document.getElementById("dias-semana")
    
    if(tarefasDoDia.value !=="") {
    switch (diasDaSemana.value) {
        case "domingo":
            domingo.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "segunda":
            segunda.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "terca":
            terca.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "quarta":
            quarta.innerHTML += `<li>${tarefa.value}`
        break
        case "quinta":
            quinta.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "sexta":
            sexta.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "sabado":
            sabado.innerHTML += `<li>${tarefa.value}</li>`
        break
        default:
        break;
    }
    tarefasDoDia.value=""
    }

}
