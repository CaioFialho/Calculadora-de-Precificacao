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
  return parseFloat(
    document.getElementById(id)
      .value
      .replace(/[^\d,]/g, '')
      .replace(',', '.')
  ) || 0;
}


function calcular() {
    const custo = getValorNumerico('cost-price');
    const impostos = getValorNumerico('tax-rate');
    const margemLucro = getValorNumerico('desired-margin');


    const precoComImpostos = custo + (custo * (impostos / 100));
    const precoFinal = precoComImpostos + (precoComImpostos * (margemLucro / 100));

    document.getElementById('selling-price').textContent = precoFinal.toFixed(2).replace('.', ',');
    document.getElementById('result').classList.add('show');

}