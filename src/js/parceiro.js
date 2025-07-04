const parceiroSelecionado = {
  tipo: "Ecoponto",
  dataCadastro: "2023-02-15",
  nome: "Ecoponto Verde Iririu",
  responsavel: "João Silva",
  telefone: "(47) 99999-8888",
  email: "contato@ecopontoverdemar.com",
  endereco: {
    rua: "Rua das Palmeiras",
    numero: "150",
    bairro: " Iririu "
  },
  residuosAceitos: ["Papel", "Plástico", "Metal", "Vidro"]
};

function formatarData(isoDate) {
  const d = new Date(isoDate);
  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const ano = d.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function definirAvatar(tipo) {
  const avatar = document.getElementById("avatar");
  let letra = tipo.charAt(0).toUpperCase();
  let cor = "#91C995";

  switch (tipo.toLowerCase()) {
    case "ecoponto":
      letra = "E";
      cor = "#225A3F";
      break;
    case "cooperativa":
      letra = "C";
      cor = "#4C9A61";
      break;
    case "pev":
      letra = "P";
      cor = "#EFD470";
      avatar.style.color = "#225A3F";
      break;
    default:
      letra = "?";
      cor = "#91C995";
  }

  avatar.textContent = letra;
  avatar.style.backgroundColor = cor;
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
  ul.innerHTML = "";
  p.residuosAceitos.forEach(residuo => {
    const li = document.createElement("li");
    li.textContent = residuo;
    ul.appendChild(li);
  });

  definirAvatar(p.tipo);
}

document.getElementById("btnBack").addEventListener("click", () => {
  alert("Voltando para a listagem...");
  
});

carregarDadosParceiro(parceiroSelecionado);
