import React from 'react'
import Header from '../Header';

function Technology({data}) {
    const [indecator , setIndecator] = React.useState(0);

    const clickHundler = (id) => {
        setIndecator(id);
      }

    const ComponentDisplayed = () => {
        return (
            <div className='main-container'>
                <section className='sec-1'>
                    <img src= {data[indecator].images.portrait} alt='technology-img'></img>
                </section>
                <section className='sec-2'>
                    <div className='controls'>
                        <span className={indecator === 0 ? 'active' : ''} onClick={ () => clickHundler(0)}>1</span>
                        <span className={indecator === 1 ? 'active' : ''} onClick={ () => clickHundler(1)}>2</span>
                        <span className={indecator === 2 ? 'active' : ''} onClick={ () => clickHundler(2)}>3</span>
                    </div>
                    <div className='info'>
                        <h2>the terminology</h2>
                        <h3>{data[indecator].name}</h3>
                        <p>{data[indecator].description}</p>
                    </div>
                </section>
            </div>
        )
    }

  return (
    <div className='technology'>
        <Header />
        <main >
            <h1><span>03</span>space launch 101</h1>
            <ComponentDisplayed />
        </main>
    </div>
  )
}

export default Technology