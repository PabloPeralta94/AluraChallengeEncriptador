const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");
var regex = /^[a-z \n]+$/;

const textFound = document.querySelector(".text-found");
const notFound = document.querySelector(".not-found");

let message;

document.addEventListener("keyup", () => {
  let de = "ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç´",
    a = "AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc",
    re = new RegExp("[" + de + "]", "ug");

  encryptText.value = encryptText.value.replace(re, (match) =>
    a.charAt(de.indexOf(match))
  );

  encryptText.value = encryptText.value.toLowerCase();
});

function encrypt() {
  if (!regex.test(encryptText.value)) {
    return alert("No se permiten Mayusculas o caracteres especiales");
  } 

  else if(encryptText.value ){
    message = encryptText.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    .replaceAll("o", "ober");

  copyText.value = message;
  encryptText.value = "";
  textFound.classList.remove("display-none");
  notFound.classList.add("display-none");

  }
  else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function decrypt() {
  if (encryptText.value) {
    message = encryptText.value
      .replaceAll("ai", "a")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    copyText.value = message;
    encryptText.value = "";
    textFound.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function copy() {
  copyText.select();
  copyText.setSelectionRange(0, 99999);  
  navigator.clipboard.writeText(copyText.value);
}
