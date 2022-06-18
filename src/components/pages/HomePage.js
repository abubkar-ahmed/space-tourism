import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom';
import Footer from '../Footer';


function HomePage() {
  return (
    <div className='home'>
        <Header />
        <main className='main' >
            <section className='sec-1'>
                <h1>SO, YOU WANT TO TRAVEL TO</h1>
                <h2>SPACE</h2>
                <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! 
                </p>
            </section>
            <section className='sec-2'>
                <button><Link to='/destenation'>EXPLORE</Link></button>
            </section>
        </main>
        <Footer />
    </div>
    
  )
}

export default HomePage