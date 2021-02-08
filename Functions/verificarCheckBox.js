function verificarCheckBox() {
  var check = document.getElementsByName("itemCheck"); 
  var imgs = document.querySelectorAll("img.image");
  
  check_ok = [];
  imgs_ok = [];

  for (var i = 0; i < check.length; i++){ 
      if (check[i].checked == true){ 
          check_ok.push(check[i].value)
          imgs_ok.push(imgs[i].src)
      };
  };
  CriarLegenda(imgs_ok,check_ok);
};