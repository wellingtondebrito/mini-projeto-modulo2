const parceiroSelecionado = JSON.parse(localStorage.getItem('parceiroSelecionado'));

if (!parceiroSelecionado) {
  alert('Nenhum parceiro selecionado. Retornando à lista.');
  window.location.href = 'listagem-parceiros.html';
} else {
  carregarDadosParceiro(parceiroSelecionado);
}

function formatarData(isoDate) {
  const d = new Date(isoDate);
  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const ano = d.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function definirAvatar(tipo) {
  const avatar = document.getElementById("avatar");
  let letra = "?";
  let corFundo = "#91C995";
  let corTexto = "#fff";

  switch (tipo.toLowerCase()) {
    case "ecoponto":
      letra = "E";
      corFundo = "#225A3F";
      break;
    case "cooperativa":
      letra = "C";
      corFundo = "#4C9A61";
      break;
    case "pev":
      letra = "P";
      corFundo = "#EFD470";
      corTexto = "#225A3F";
      break;
  }

  avatar.textContent = letra;
  avatar.style.backgroundColor = corFundo;
  avatar.style.color = corTexto;
}

function carregarDadosParceiro(p) {
  document.getElementById("partnerName").textContent = p.nome;
  document.getElementById("partnerType").textContent = p.tipo;
  document.getElementById("registerDate").textContent = "Cadastro: " + formatarData(p.dataCadastro);
  document.getElementById("responsible").textContent = p.responsavel;
  document.getElementById("phone").textContent = p.telefone;
  document.getElementById("email").textContent = p.email;
  document.getElementById("street").textContent = p.endereco.rua;
  document.getElementById("number").textContent = p.endereco.numero;
  document.getElementById("district").textContent = p.endereco.bairro;

  const ul = document.getElementById("wasteList");
  ul.innerHTML = ""; // Limpa a lista antes de adicionar
  p.residuosAceitos.forEach(residuo => {
    const li = document.createElement("li");
    li.textContent = residuo;
    ul.appendChild(li);
  });

  definirAvatar(p.tipo);
}


document.getElementById("btnBack").addEventListener("click", () => {
  alert("Voltando para a listagem...");
  window.location.href = 'listagem-parceiros.html';
});
