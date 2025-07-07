document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    alert('ID do parceiro não informado. Redirecionando...');
    window.location.href = 'listagem-parceiros.html';
    return;
  }

  fetch(`https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros/${id}`)
    .then(res => {
      if (!res.ok) throw new Error('Parceiro não encontrado');
      return res.json();
    })
    .then(parceiro => carregarDadosParceiro(parceiro))
    .catch(err => {
      console.error(err);
      alert('Erro ao carregar os dados do parceiro.');
      window.location.href = 'listagem-parceiros.html';
    });
});

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
    case "eco":
      letra = "E";
      corFundo = "#225A3F";
      break;
    case "coo":
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
  document.getElementById("partnerName").textContent = p.nomeParceiro;
  document.getElementById("partnerType").textContent = p.tipoParceiro;
  document.getElementById("registerDate").textContent = "Cadastro: " + formatarData(p.dataCriacao);
  document.getElementById("responsible").textContent = p.responsavelParceiro;
  document.getElementById("phone").textContent = p.telResponsavel;
  document.getElementById("email").textContent = p.emailResponsavel;
  document.getElementById("street").textContent = p.rua;
  document.getElementById("number").textContent = p.numero;
  document.getElementById("district").textContent = p.bairro;

  const ul = document.getElementById("wasteList");
  ul.innerHTML = "";

  const residuos = {
    papel: "Papel",
    plastico: "Plástico",
    vidro: "Vidro",
    metal: "Metal",
    oleoCozinha: "Óleo de Cozinha",
    pilhaBateria: "Pilha / Bateria",
    eletronico: "Eletrônico",
    roupa: "Roupa",
    outros: "Outros"
  };

  for (const [chave, nome] of Object.entries(residuos)) {
    if (p[chave]) {
      const li = document.createElement("li");
      li.textContent = nome;
      ul.appendChild(li);
    }
  }

  definirAvatar(p.tipoParceiro);
}

document.getElementById("btnBack").addEventListener("click", () => {
  window.location.href = 'listagem-parceiros.html';
});
