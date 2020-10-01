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

function gerartexto(){
    document.getElementById('txtinput').hidden = false;
    textarea = document.getElementById('txtinput')
    
    qtd = document.getElementById('id_qtd').value;

    if(qtd < 2){
        strPoste = "POSTE"
    }else{
        strPoste = "POSTES"
    }
    tamanho = "DAN"

    descricao = document.getElementById('id_dan').value;
    tipo = document.getElementById('id_tipo').value;
    acao = document.getElementById('id_acao').value;
    textarea.innerHTML += "\n" + acao + " " + qtd + " " + strPoste+ " "+ tipo + " " + descricao +" "+ tamanho;
    console.log(descricao)
}

function gerartextocabo(){
    document.getElementById('txtinput').hidden = false;
    textarea = document.getElementById('txtinput')
    
    qtd = document.getElementById('id_qtd_cabo').value;

    if(qtd < 2){
        strMetros = "METRO"
    }else{
        strMetros = "METROS"
    }
    desc = "DE CONDUTOR ALUMINIO"
    // tamanho = ""
    // descricao = document.getElementById('id_tipo_cabo').value;
    tipo = document.getElementById('id_tipo_cabo').value;
    acao = document.getElementById('id_acao_cabo').value;
    textarea.innerHTML += "\n" + acao + " " + qtd + " " + strMetros+ " "+ desc +" "+tipo;
    console.log(descricao)
}

  // Gerando Imagem Canvas do HTML
  // Não sendo utilizada
//   function gerarcanvas() {
//     var node = document.getElementById('resultado');
//     domtoimage.toPng(node)
//     .then(function (dataUrl) {
//         var img = new Image();
//         img.src = dataUrl;
//         document.getElementById("print").appendChild(img);
//     })
//     .catch(function (error) {
//         console.error('error!', error);
//     });
// };
    // Download da imagem
function download() {
    domtoimage.toBlob(document.getElementById('resultado'))
    .then(function (blob) {
        window.saveAs(blob, 'legendas.png');
    });
    // var link = document.getElementById('linkdownload');
    // var canvas = document.getElementsByTagName('canvas');
    // var dataURL = canvas[0].toDataURL('image/jpg', 1);
    // link.href = dataURL;
    // console.log(dataURL)
    // document.write('<a href=" '+dataURL+'" download="Legendas.svg">')
    // document.write('<img src="'+dataURL+'"/>');
    // console.log("BBBBBBBBBBBBBBBBBBB" + dataURL)
    // console.log(link)
    // link.href = dataURL;
    // document.getElementById('linkdownload').href = `<a href=" '+dataURL+'" download="Legendas.svg">
    //                                                 <img src="'+dataURL+'"/>`
    
};