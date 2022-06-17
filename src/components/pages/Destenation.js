import React from 'react'
import Header from '../Header'


function Destenatio({data}) {
  const [indecator , setIndecator] = React.useState(0);

  const clickHundler = (id) => {
    setIndecator(id);
  }
  
  function ComponentDisplayed (){
    return(
      <div className='main-container'>
        <section className='sec-1'>
          <img src={data[indecator].images.png} alt='img' />
        </section>
        <section className='sec-2'>
          <ul >
            <li className={indecator === 0 ? 'active' : ''} onClick={ () => clickHundler(0)}>moon</li>
            <li className={indecator === 1 ? 'active' : ''} onClick={ () => clickHundler(1)}>Mars</li>
            <li className={indecator === 2 ? 'active' : ''} onClick={ () => clickHundler(2)}>Europa</li>
            <li className={indecator === 3 ? 'active' : ''} onClick={ () => clickHundler(3)}>Titan</li>
          </ul>
          <h2>{data[indecator].name}</h2>
          <p>{data[indecator].description}</p>
          <hr/>
          <div className='distance-container'>
            <div>
              <h3>avg. distance</h3>
              <h4>{data[indecator].distance}</h4>
            </div>
            <div>
              <h3>est. travel time</h3>
              <h4>{data[indecator].travel}</h4>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className='destination'>
      <Header />
      <main>
        <h1><span>01</span>pick your destination</h1>
        <ComponentDisplayed />
      </main>
    </div>
  )
}

export default Destenatio