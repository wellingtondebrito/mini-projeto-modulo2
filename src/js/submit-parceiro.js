  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-parceiro');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Montar o objeto conforme solicitado
      const data = {
        nomeParceiro: form.nome.value.trim(),
        tipoParceiro: form.tipoParceiro.value,
        responsavelParceiro: form.responsavel.value.trim(),
        telResponsavel: form.telefone.value.trim(),
        emailResponsavel: form.email.value.trim(),
        rua: form.rua.value.trim(),
        numero: Number(form.numero.value.trim()), // número como numérico
        bairro: form.bairro.value.trim(),

        // Os booleanos a partir dos checkboxes
        papel: form.querySelector('input[name="residuos"][value="papel"]').checked,
        plastico: form.querySelector('input[name="residuos"][value="plastico"]').checked,
        vidro: form.querySelector('input[name="residuos"][value="vidro"]').checked,
        metal: form.querySelector('input[name="residuos"][value="metal"]').checked,
        oleoCozinha: form.querySelector('input[name="residuos"][value="oleo"]').checked,
        pilhaBateria: form.querySelector('input[name="residuos"][value="pilhas"]').checked,
        eletronico: form.querySelector('input[name="residuos"][value="eletronicos"]').checked,
        roupa: form.querySelector('input[name="residuos"][value="roupas"]').checked,
        outros: form.querySelector('input[name="residuos"][value="outros"]').checked
      };

      try {
        const response = await fetch('https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error('Erro ao enviar dados');
        }

        alert('Dados enviados com sucesso!');
        form.reset();

      } catch (error) {
        console.error(error);
        alert('Erro ao enviar dados, tente novamente.');
      }
    });
  });

