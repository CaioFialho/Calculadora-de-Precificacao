function formatarMoeda(input) {
  let valor = input.value.replace(/\D/g, '');

  valor = (Number(valor) / 100).toFixed(2);

  input.value = 'R$ ' + valor.replace('.', ',');
}

function formatarPorcentagem(input) {
  let valor = input.value.replace(/\D/g, '');

  valor = (Number(valor) / 100).toFixed(2);

  input.value = valor.replace('.', ',') + '%';
}

function getValorNumerico(id) {
  return parseFloat(document.getElementById(id).value.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
}


function calcular() {
  const custo = getValorNumerico('cost-price');
  const imposto = getValorNumerico('tax-rate');
  const margem = getValorNumerico('desired-margin');

  const precoComImposto = custo * (1 + imposto / 100);
  const precoFinal = precoComImposto * (1 + margem / 100);

  document.getElementById('selling-price').textContent =
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(precoFinal);
}