const botoes = document.getElementById('teclado')
let displayzinho =''

document.getElementById('senha').addEventListener('keydown', function(e) {
    if (e.key != '') {
        e.preventDefault()
        alert('É necessário utilizar o teclado virtual para digitar a senha.');
    }
});

function num(valor){
    if (valor == 10){
        displayzinho = ""
        valor = ""
    }
    else if(valor == 11 ){
        valor= ""
        if(displayzinho.length >= 4 && displayzinho.length <= 6){
        alert("Senha válida. Você será redirecionado para a página secreta.")
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";}
        else{
            alert("Senha inválida. Tente novamente.")
            displayzinho = ""
        }
    } 
    else if(displayzinho.length > 5){
        alert('Senha deve ter até seis dígitos.')
        displayzinho = ""
        valor= ""
    }
    displayzinho = displayzinho + valor
    document.getElementById('senha').value = displayzinho 
  }