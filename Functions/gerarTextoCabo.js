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