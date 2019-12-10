

function calcBill(){

  var jsMarsQty = document.getElementById('mars').value;
  var jsSnickersQty = document.getElementById('snickers').value;
  var jsReesesQty = document.getElementById('reeses').value;
  var jsKitkatQty = document.getElementById('kitkat').value;

  const marsPrice = 3;
  const snickersPrice = 4;
  const reesesPrice = 3.5;
  const kitkatPrice = 5;

  var totalBill = (marsPrice * jsMarsQty) + (snickersPrice * jsSnickersQty) + (reesesPrice * jsReesesQty) + (kitkatPrice * jsKitkatQty);

  alert("Total Bill is " + totalBill);

  return totalBill;


}
