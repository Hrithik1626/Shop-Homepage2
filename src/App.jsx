import React ,{useState}from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
function App() {
  let data=[{
    product:"Fancy Products",
    price:"40.00-80.00"
  },
  {
    product:"Special Item",
    price:"18.00"
  },
  {
    product:"Popular Item",
    price:"40.00"
  },
  {
    product:"Sale Item",
    price:"25.00"
  },
  {
    product:"Fancy Products",
    price:"12.00-280"
  },
  {
    product:"Special Item",
    price:"18.00"
  },
  {
    product:"Popular Item",
    price:"40.00"
  },
  {
    product:"Popular Item",
    price:"40.00"
  },
]
 
  let [Cart,setCart]=useState(0)
  return <>
      <TopBar Cart={Cart} setCart={setCart}/>
      <Header />
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

              {
                data.map((e,i)=>{
                  return <Card data={e} Cart={Cart} setCart={setCart} key={i}/>
                })
              }

               </div>    
             </div>
     </section>
     <Footer/>
   
    </>
}

export default App
