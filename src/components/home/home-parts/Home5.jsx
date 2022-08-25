import React from 'react'
import { TiTick } from 'react-icons/ti'
import home5 from '../../../images/hot_drinks/forhome3.jpeg' 
const Home5 = () => {
  return (
    <div className='home5'>
        <img className="home5-image" src={home5} alt=""/>
        <div className='info-container'>
            <h1 style={{fontWeight:"100"}}>Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget</h1>
            <p style={{margin:"2rem 0",letterSpacing:'2px'}}>Nunc urna liberto, congue ports nibh a, semper
                feugiat sem. Sed auctor dui eleifend,scelerisque
                eros ut, pellentesque nibh. Nam lacinia suscipit
                accumsan,Dansec sodales,neque
            </p>
            <>
                <p className='info-icon'><TiTick style={{color:"coral"}}/> Suspendisse a pellentesque</p>
                <p className='info-icon'><TiTick style={{color:"coral"}}/>  Quisque lorem tortor fringilla sed</p>
                <p className='info-icon'><TiTick style={{color:"coral"}}/>  Quisque cuscus et, porttitor  risus.</p>
                <p className='info-icon'><TiTick style={{color:"coral"}}/>  Nulla ipsum dolor locus suscipit adipiscing.</p>
            </>
        </div>
    </div>
  )
}

export default Home5