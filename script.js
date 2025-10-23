let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.trim().length === 0) {
    qrText.classList.add("error");
    qrText.focus();

    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
    return;
  }

  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(qrText.value);
  imgBox.classList.add("show-img");
}

function clearInput() {
  qrText.value = "";
  imgBox.classList.remove("show-img");
  setTimeout(() => {
    qrImage.src = "";
  }, 1000);
  qrText.focus();
}
