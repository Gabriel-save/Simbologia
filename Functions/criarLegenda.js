function CriarLegenda(imgs_ok,check_ok) {
  document.getElementById('resultado').hidden = false;
  document.getElementById('downbtn').hidden = false;
  // document.getElementById('footer').hidden = false;
  // document.getElementById('print').hidden = false;
  result = document.getElementById('resultado'); //Div onde será armezenado as checkbox selecionados;


  for ( x in imgs_ok,check_ok) {
      console.log(check_ok[x])
      if(check_ok[x] == "Aterramento"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "75px" style="margin-left: 15px"/>
                              <label>${check_ok[x]} </label><br>`);
      }
      else if(check_ok[x] == "Para-raio"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "75px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Chave Fusível Instalar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "65px" style="margin-left: 15px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Chave Fusível Retirar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "65px" style="margin-left: 15px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Circular Existente"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "40px" style="margin-left: 15px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Fibra Existente"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "40px" style="margin-left: 15px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Fibra Instalar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "40px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Madeira Existente"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "40px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Madeira Instalar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "40px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Circular Retirar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "45px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Circular Instalar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "45px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Duplo T Retirar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "35px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Fibra Retirar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "40px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Madeira Retirar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "40px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Duplo T Existente"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "35px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Poste Duplo T Instalar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "35px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Iluminação Pública"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "75px" style="margin-left: 15px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Rede BT Retirar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "100px" style="margin-left: 4px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Rede MT Retirar"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "100px" style="margin-left: 4px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Rede BT Existente"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "100px" style="margin-left: 4px" />
                              <label>${check_ok[x]} </label><br>`);
      }

      else if(check_ok[x] == "Rede MT Existente"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "100px" style="margin-left: 4px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }
      
      else if(check_ok[x] == "Rede BT Isolada"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "100px" style="margin-left: 4px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }
      
      else if(check_ok[x] == "Rede MT Compacta"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "100px" style="margin-left: 4px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }
      
      else if(check_ok[x] == "Rede Projetada"){
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "100px" style="margin-left: 4px" />
                              <label style="text-align: right">${check_ok[x]} </label><br>`);
      }
      
      else{
          result.innerHTML += (`<img src="${imgs_ok[x]}" width = "45px" style="margin-left: 15px" />
                          <label style="text-align: right">${check_ok[x]} </label><br>`);
      }
      

      // result.innerHTML += (`<img src="${imgs_ok[x]}" width = "50px"/>
      //                      <label>${check_ok[x]} </label><br>`);Rede BT Existente
  };

  // alert("Imagem gerada para Download")
};