
function descuentos(numproductos) {
  let productos=[1];
  let preciototal
  let numproductos=parseInt(prompt("ingrese el numero de productos que desea comprar"))
  for(let i=1;i<=numproductos;i++)
  {let precio=parseInt(prompt("ingrese el precio del producto numero "+i))
    productos.push(precio)
    alert("el precio del producto numero "+i+" es : "+productos[i])
    preciototal=preciototal+productos[i];
  }
  alert("el precio total de las compras es de "+preciototal)
  }
  descuentos();