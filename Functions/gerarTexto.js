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