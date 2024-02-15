function encriptar() {
  var textoOriginal = document.getElementById('texto').value.toLowerCase();
  var resultado = '';
  var palabraActual = '';
  var blockSize = 500;
  var waitTime = 10; 
  function procesarBloque(i) {
      for (; i < textoOriginal.length && i < blockSize; i++) {
          var caracter = textoOriginal.charAt(i);
          if (caracter === ' ') {
              resultado += palabraActual + '  ';
              palabraActual = '';
          } else {
              resultado += encriptarCaracter(caracter);
              resultado += ' ';
          }
      }
      if (i < textoOriginal.length) {
          setTimeout(function() {
              procesarBloque(i);
          }, waitTime);
      } else {
          resultado += palabraActual;
          document.getElementById('resultadoGato').innerText = resultado;
      }
  }

  procesarBloque(0);
}


  
  function encriptarCaracter(caracter) {
    var sonidoGato = {
      'a': 'miau',
      'b': 'miaw',
      'c': 'meow',
      'd': 'mew',
      'e': 'miao',
      'f': 'nyan',
      'g': 'pur',
      'h': 'purr',
      'i': 'hiss',
      'j': 'snarl',
      'k': 'growl',
      'l': 'yowl',
      'm': 'chirp',
      'n': 'chirrup',
      'o': 'churr',
      'p': 'mrrp',
      'q': 'mrrow',
      'r': 'murr',
      's': 'pfft',
      't': 'pffft',
      'u': 'psst',
      'v': 'screech',
      'w': 'squeak',
      'x': 'squeal',
      'y': 'yowls',
      'z': 'yowt'
    };
  
    playSpell();
    animateMago(['mago2.png', 'mago3.png', 'mago4.png','mago3.png','mago2.png', 'mago1.png']);
    return sonidoGato[caracter] || caracter;
  }
  
  function desencriptar() {  
    var textoOriginal = document.getElementById('textogato').value.toLowerCase();
    var gatones = '';

    var palabras = textoOriginal.split('  '); 
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        gatones += desencriptarPalabra(palabra);
        if (i !== palabras.length - 1) { 
            gatones += '  '; 
        }
    }

    document.getElementById('gatones').innerText = gatones;
}

function desencriptarPalabra(palabra) {
    var caracteres = palabra.split(' '); 
    var resultado = '';

    for (var j = 0; j < caracteres.length; j++) {
        var caracter = caracteres[j].trim();
        resultado += desencriptarCaracter(caracter);
    }

    return resultado;
}

  function desencriptarCaracter(caracter) {
    var sonidoPersona = {
      'miau': 'a',
      'miaw': 'b',
      'meow': 'c',
      'mew': 'd',
      'miao': 'e',
      'nyan': 'f',
      'pur': 'g',
      'purr': 'h',
      'hiss': 'i',
      'snarl': 'j',
      'growl': 'k',
      'yowl': 'l',
      'chirp': 'm',
      'chirrup': 'n',
      'churr': 'o',
      'mrrp': 'p',
      'mrrow': 'q',
      'murr': 'r',
      'pfft': 's',
      'pffft': 't',
      'psst': 'u',
      'screech': 'v',
      'squeak': 'w',
      'squeal': 'x',
      'yowls': 'y',
      'yowt': 'z'
    };
  
    playSpell();
    animateMago(['mago2.png', 'mago3.png', 'mago4.png','mago3.png','mago2.png', 'mago1.png']);
    return sonidoPersona[caracter] || caracter;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.1;
    
    document.addEventListener('click', function() {  
        backgroundMusic.play();
    });
});

var spell = new Audio('marimba-bloop.mp3');

function playSpell() {
  spell.currentTime = 0; 
  spell.play();
}


function reset() {

  document.getElementById('gatones').innerHTML = "";
  document.getElementById('resultadoGato').innerHTML = "";


  animateMago(['remover1.png', 'remover2.png', 'remover3.png','remover2.png', 'remover1.png', 'mago1.png']);
  playSpell();


  

}


// gato imagen

function animateMago(imageArray) {
  var magoImg = document.querySelector('.gatomago img');
  var currentIndex = 0;

  function changeImage() {
      magoImg.src = imageArray[currentIndex];

      currentIndex++;

      if (currentIndex >= imageArray.length) {
          currentIndex = 0;
      }
  }


  magoImg.classList.add('animate-mago');


  imageArray.forEach(function (image, index) {
      setTimeout(function () {
          changeImage();
      }, index * 150); 
  });


  magoImg.addEventListener('animationend', function () {
      this.classList.remove('animate-mago'); 
      this.src = 'mago1.png'; 
  });
}




const output = document.getElementById('resultadoGato');


function getValueInputBy(id) {
    return document.getElementById(id).value;
}


function regresarCursorInicio() {   
    input.selectionStart = 0;
    input.focus(); 
}


var historyCopy = '';

function copiarTexto(){
  renderPasteButton('visible'); 
  const textoTemporal = document.createElement('textarea'); 
  textoTemporal.textContent = document.getElementById('resultadoGato').textContent; 
  historyCopy = textoTemporal.textContent; 
  document.body.appendChild(textoTemporal); 
  textoTemporal.select(); 
  document.execCommand('copy'); 
  document.body.removeChild(textoTemporal); 
}

function pegarTexto(){
  let input = document.getElementById('textogato'); 
  input.focus(); 
  if(historyCopy) { 
      input.value = historyCopy; 
  }
  renderPasteButton('hidden'); 
}

function limpiar(){
    document.getElementById('texto').value = '';
    document.getElementById('textogato').value = '';   
}

function renderPasteButton(option) {
    var x = document.getElementById('btn-paste');
    if (option === 'hidden') { 
      x.style.visibility = 'hidden'; 
    } else { 
        x.style.visibility = 'visible'; 
    }
}



