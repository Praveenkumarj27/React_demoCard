import logo from './logo.svg';
import './App.css';
import Card from './card'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let products=[
    {
      title:'Iphone',
      price:80000,
      img:"https://www.gizbot.com/images/2019-09/apple-iphone-11-pro_1568184874120.jpg"
    },
    {
      title:'Samsung',
      price:60000,
      img:"https://www.gizbot.com/images/2018-10/samsung-galaxy-a9-2018_153925897290.jpg"
    },
    {
      title:'One plus',
      price:50000,
      img:"https://www.gizbot.com/images/2020-04/oneplus-8_158693202690.jpg"
    },
    {
      title:'Realme',
      price:40000,
      img:"https://www.gizbot.com/images/2019-08/realme-5_1566294189110.jpg"
    },
    {
      title:'Vivo',
      price:25000,
      img:"https://www.gizbot.com/images/2019-07/vivo-s1_156352984560.jpg"
    },
  ]
  return (
   <div className='container'>
    <div className='row mt-3'>
      {
        products.map((product)=>{
          return <Card title={product.title} price={product.price} img={product.img}></Card>
        })
      }
     
    </div>
   </div>
  
  );
}

export default App;
