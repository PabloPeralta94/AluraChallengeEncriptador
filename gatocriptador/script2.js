function encriptar() {
  var textoOriginal = document.getElementById('texto').value.toLowerCase();
  var resultado = '';

  for (var i = 0; i < textoOriginal.length; i++) {
    var caracter = textoOriginal.charAt(i);
    if (caracter === ' ') {
      resultado += ' '; // Use space to represent space
    } else {
      resultado += encriptarCaracter(caracter) + ',';
    }
  }

  document.getElementById('resultadoGato').textContent = resultado;
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

  return sonidoGato[caracter] || caracter;
}

function desencriptar() {
  var textoOriginal = document.getElementById('textogato').value.toLowerCase();
  var gatones = '';

  var caracteres = textoOriginal.split(',');
  for (var i = 0; i < caracteres.length; i++) {
    var caracter = caracteres[i].trim();
    if (caracter === ' ') {
      gatones += ' '; // Use space to represent space
    } else {
      gatones += desencriptarCaracter(caracter);
    }
  }

  document.getElementById('gatones').textContent = gatones;
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

  return sonidoPersona[caracter] || caracter;
}
