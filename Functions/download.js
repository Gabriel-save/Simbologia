function download() {
  domtoimage.toBlob(document.getElementById('resultado'))
  .then(function (blob) {
      window.saveAs(blob, 'legendas.png');
  });
};