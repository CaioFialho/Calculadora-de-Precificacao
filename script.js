function formatarMoeda(input) {
  let valor = input.value.replace(/\D/g, '');

  valor = (Number(valor) / 100).toFixed(2);

  input.value = 'R$ ' + valor.replace('.', ',');
}

function formatarPorcentagem(input) {
  let valor = input.value.replace(/\D/g, '');

  valor = (Number(valor) / 100).toFixed(2);

  input.value = valor.replace('.', ',') + '%';
  
  // Move cursor before the '%'
  input.setSelectionRange(input.value.length - 1, input.value.length - 1);
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
    // Constantes dos inputs
    const costPrice = document.getElementById('cost-price');
    const packagingCost = document.getElementById('packaging-cost');
    const shippingCost = document.getElementById('shipping-cost');
    const sellingPriceInput = document.getElementById('selling-price-input');
    const discount = document.getElementById('discount');
    const cardFee = document.getElementById('card-fee');
    const stateTax = document.getElementById('state-tax');
    const federalTax = document.getElementById('federal-tax');
    const sellingPrice = document.getElementById('selling-price');
    const result = document.getElementById('result');
    const calcForm = document.getElementById('calc-form');


    const custoTotal = getValorNumerico('cost-price') +
                       getValorNumerico('packaging-cost') +
                       getValorNumerico('shipping-cost') +
                       getValorNumerico('discount');

    const card_tax = getValorNumerico('card-fee') / 100;
    const state_tax = getValorNumerico('state-tax') / 100;
    const federal_tax = getValorNumerico('federal-tax') / 100;

    const valor_card = sellingPrice * card_tax;
    const valor_estado = custoTotal * state_tax;
    const valor_federal = sellingPrice * federal_tax;


    const margin = sellingPrice - (custoTotal + valor_card + valor_estado + valor_federal) ;
                       

    document.getElementById('margin').textContent = valor_estado.toFixed(2).replace('.', ',');
    document.getElementById('result').style.display = 'block';

}