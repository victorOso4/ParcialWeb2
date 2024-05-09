const express = require('express');
const app = express();
const port = 3000;

var utiles = [{id: 1, name: 'Cereales', price: 7.000 , FechaVencimiento: '14/02/24', CategoriaProduc:'A', Descripcion:'Calidad1' },
                {id: 2, name: 'Pan tajado', price: 10000,  FechaVencimiento: '15/03/24', CategoriaProduc:'B', Descripcion : 'Calidad2'},
                {id: 3, name: 'Mortadela', price: 11000 , FechaVencimiento:'15/04/24', CategoriaProduc:'C', Descripcion: 'Calidad3'},
                {id: 4, name: 'Queso', price: 5000 , FechaVencimiento:'15/05/24', CategoriaProduc:'A', Descripcion:'Calidad4'},
                {id: 5, name: 'Jamon', price: 11000 , FechaVencimiento:'15/06/24', CategoriaProduc:'B', Descripcion:'Calidad5'},
                {id: 6, name: 'Arroz', price: 3000, FechaVencimiento:'15/06/24', CategoriaProduc:'C', Descripcion:'Calidad10'},
                {id: 7, name: 'Gaseosa', price: 2500, FechaVencimiento:'15/08/24', CategoriaProduc:'C', Descripcion:'Calidad11'},
                {id: 8, name: 'Leche', price: 5000, FechaVencimiento:'15/03/24', CategoriaProduc:'A', Descripcinc:'Calidad12'},
                {id: 9, name: 'Yogur', price: 7000, FechaVencimiento:'15/09/24', CategoriaProduc:'B', Descripcion:'Calidad13'},
                {id: 10, name: 'Cerveza', price: 4500, FechaVencimiento:'15/08/24', CategoriaProduc:'B', Descripcinc:'Calidad14'},
                {id: 11, name: 'Queso cuajada', price: 5000, FechaVencimiento:'15/08/24', CategoriaProduc:'B', Descripcion:'Calidad9'},
                {id: 12, name: 'Papel higenico', price: 2500, FechaVencimiento:'15/06/24', CategoriaProduc:'B', Descripcion:'Calidad3'},
                {id: 13, name: 'Panela', price: 2500, FechaVencimiento:'15/04/24', CategoriaProduc:'C', Descripcion:'Calidad8'},
                {id: 14, name: 'Chocolate', price: 3000, FechaVencimiento:'15/06/24', CategoriaProduc:'C', Descripcion:'Calidad6'},
                {id: 15, name: 'Avena', price: 5000, FechaVencimiento:'15/07/24', CategoriaProduc:'A', Descripcion:'Calidad7'}
              ];
let automoviles  = [
  {
    id: 1,
    marca: "Toyota",
    cilindraje: 2800,
    tipo: "hibrido",
    linea: "Prius",
    color: "Plata",
    placa: "ABC125",
    precio: 180000000
  },
  {
    id: 2,
    marca: "TESLA",
    cilindraje: null, 
    tipo: "electrico",
    linea: "Model S",
    color: "Violeta",
    placa: "DEF588",
    precio: 50000000
  },
  {
    id: 3,
    marca: "Honda",
    cilindraje: 1800,
    tipo: "hibrido",
    linea: "Insight",
    color: "BLANCO",
    placa: "GHI788",
    precio: 45000000
  },
  {
    id: 4,
    marca: "Nissan",
    cilindraje: 2800,
    tipo: "hibrido",
    linea: "Leaf",
    color: "GRIS",
    placa: "JKL088",
    precio: 80000000
  },
  {
    id: 5,
    marca: "Chevrolet",
    cilindraje: 2000,
    tipo: "hibrido",
    linea: "Volt",
    color: "naranja",
    placa: "MNO344",
    precio: 55000000
  },
  {
    id: 6,
    marca: "BMW",
    cilindraje: 4000,
    tipo: "hibrido",
    linea: "i3",
    color: "AMARILLO",
    placa: "PQR785",
    precio: 65000000
    
  },
  {
    id: 7,
    marca: "Ford",
    cilindraje: 2800,
    tipo: "hibrido",
    linea: "Fusion",
    color: "GRIS",
    placa: "STU985",
    precio: 80000000
  },
  {
    id: 8,
    marca: "Toyota",
    cilindraje: 2800,
    tipo: "hibrido",
    linea: "Rav4",
    color: "Azul",
    placa: "VWX296",
    precio: 90000000
  },
  {
    id: 9,
    marca: "Hyundai",
    cilindraje: 2800,
    tipo: "hibrido",
    linea: "Ioniq",
    color: "NEGRO",
    placa: "YZA544",
    precio: 90000000
  },
  {
    id: 10,
    marca: "Tesla",
    cilindraje: null, 
    tipo: "electrico",
    linea: "Model 4",
    color: "GRIS",
    placa: "BCD885",
    precio: 50000000
  },
  {
    id: 11,
    marca: "Kia",
    cilindraje: 2500,
    tipo: "hibrido",
    linea: "Niro",
    color: "PLATA",
    placa: "EFG178",
    precio: 95000000
  },
  {
    id: 12,
    marca: "Audi",
    cilindraje: 4800,
    tipo: "hibrido",
    linea: "A3 e-Tron",
    color: "BLANCO",
    placa: "HIJ445",
    precio: 150000000
  },
  {
    id: 13,
    marca: "Lexus",
    cilindraje: 5000,
    tipo: "hibrido",
    linea: "RX",
    color: "GRIS",
    placa: "KLM763",
    precio: 250000000
  },
  {
    id: 14,
    marca: "Mercedes-Benz",
    cilindraje: 4000,
    tipo: "hibrido",
    linea: "GLE",
    color: "verde",
    placa: "NOP085",
    precio: 300000000
  },
  {
    id: 15,
    marca: "Volvo",
    cilindraje: 2500,
    tipo: "hibrido",
    linea: "XC90",
    color: "blanco",
    placa: "QRS369",
    precio: 180000000
  }
];

function impuestoCarros(tipo, precio) {
  let impuesto;
  if (tipo === 'hibrido') {
    impuesto = precio * 0.01;
  } else if (tipo === 'electrico') {
    if (precio<= 50000000) {
      impuesto = precio * 0.01;
    } else if (precio <= 100000000) {
      impuesto = precio * 0.015;
    } else if (precio <= 150000000) {
      impuesto = precio * 0.025;
    } else {
      impuesto = precio * 0.035;
    }
  }
  return impuesto;
  }



app.get('/', (req,res)=>{
  res.send('Servidor iniciado correctamente');
})




app.get('/utiles',(req,res)=>{
  res.json(utiles);
})

app.get('/utiles/:CategoriaProduc',(req,res)=>{
  const CategoriaProduc= req.params.CategoriaProduc;
  const BuscarCategoria = utiles.filter(BuscarCategoria=>BuscarCategoria.CategoriaProduc== CategoriaProduc);
  res.json(BuscarCategoria);
})
app.get('/utiles/:CategoriaProduc/Descripcion',(req,res)=>{
  const CategoriaProduc= req.params.CategoriaProduc;
  const Buscarcategoria = utiles.find(Buscarcategoria=>Buscarcategoria.CategoriaProduc== CategoriaProduc);
  res.json({
    Descripcion: Buscarcategoria.Descripcion
  });
})

app.get ('/utilesMayores', (req,res)=>{

  res.json(utiles.filter(utiles=>utiles.price>=10000))
})

app.get('/utiles/:name/fechaVencimiento', (req,res)=>{

  const name =req.params.name
  const buscarnombre = utiles.find(buscarnombre=>buscarnombre.name==name)
  res.json({
    FechaVencimiento:(buscarnombre.FechaVencimiento)
  })
 })

app.get('/calcularIva', (req,res)=>{
  const CalcularIva=utiles.map(utiles=>utiles.price*0.19)
  res.json({iva:utiles,CalcularIva})
  })

app.get('/utiles/:CategoriaProduc/name',(req,res)=>{
  const CategoriaProduc = req.params.CategoriaProduc;
  const buscarcategoria = utiles.find(buscarcategoria => buscarcategoria.CategoriaProduc == CategoriaProduc);
  res.json({
    name: buscarcategoria.name
  })
})


  app.get('/Carros',(req,res)=>{
  res.json(automoviles)
  })

  app.get('/Carros/:marca',(req,res)=>{

    const marca=req.params.marca
    const BuscarMarca=automoviles.filter(BuscarMarca=>BuscarMarca.marca==marca)

    res.json(BuscarMarca)
  })

  app.get('/CarroIva',(req,res)=>{
    const buscarCarros=automoviles.filter(automoviles=>{
      const calcularIva=impuestoCarros(automoviles.tipo,automoviles.precio)
      return {automoviles,calcularIva}
      })

    res.json(buscarCarros)
 })

 

 app.get('/Carros/:marca/cilindraje',(req,res)=>{

  const marca= req.params.marca
  const BuscarMarca= automoviles.find(BuscarMarca=>BuscarMarca.marca==marca)
  res.json({
    cilindraje:(BuscarMarca.cilindraje)
  })
 })
 app.get('/Carros/:marca/color',(req,res)=>{

  const marca= req.params.marca
  const BuscarMarca= automoviles.find(BuscarMarca=>BuscarMarca.marca==marca)
  res.json({
    color:(BuscarMarca.color)
  })
 })

 app.get('/calcularimpuesto', (req,res)=>{
  const CalcularImpuesto=automoviles.map(automoviles=>automoviles.price*0.19)
  res.json({impuesto:automoviles,CalcularImpuesto})
  })

  app.get('/Carros/:placa/linea',(req,res)=>{
    const placa = req.params.placa;
    const buscarplaca = automoviles.find(buscarplaca => buscarplaca.placa == placa);
    res.json({
      linea: buscarplaca.linea
    })
  })

 



app.listen(port, ()=>{  
  console.log (`El servidor a sido iniciado en http://localhost:${port}`)
})
