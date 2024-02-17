function sumar() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado = numero1 + numero2;
    document.getElementById('resultado').value = resultado;
}

function restar() { 
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado = numero1 - numero2;

    if ((numero1 > 0) && (numero2 < 0)){
      resultado = numero1 + numero2;
  }
      document.getElementById('resultado').value = resultado;
}

function multiplicar() {
      let numero1 = parseFloat(document.getElementById('numero1').value);
      let numero2 = parseFloat(document.getElementById('numero2').value);
      let resultado = numero1 * numero2;
      document.getElementById('resultado').value = resultado;
  }
  function dividir() { 
      let numero1 = parseFloat(document.getElementById('numero1').value);
      let numero2 = parseFloat(document.getElementById('numero2').value);

      if (numero2 !== 0) {
        let resultado = numero1 / numero2;
        document.getElementById('resultado').value = resultado;
    } else {
        alert('No es posible dividir entre cero.');
    }
}