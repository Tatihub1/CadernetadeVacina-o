// Validação para agendamento
function validar(form) {
    if (eVazio(form.nome.value)) {
        alert('Nome deve ser preenchido');
        return false;
    }
    if (eVazio(form.cpf.value)) {
        alert('CPF deve ser preenchido');
        return false;
    }
    if (eVazio(form.vacina.value)) {
        alert('Informe o tipo da vacina');
        return false;
    }
    if (eVazio(form.data.value)) {
        alert('Informe a data de agendamento');
        return false;
    }

    Enviar(form);
    return true;
}

// Exibir dados do agendamento
function Enviar(form) {
    let saida = "<h1>Agendamento Confirmado:</h1>";
    saida += "<br>Nome: " + form.nome.value;
    saida += "<br>CPF: " + form.cpf.value;
    saida += "<br>Vacina: " + form.vacina.value;
    saida += "<br>Data: " + form.data.value;
    document.write(saida);
}

