import React from 'react'
import Header from '../Header'

function Crew({data}) {

  const [indecator , setIndecator] = React.useState(0);

    console.log(data)
  const clickHundler = (id) => {
    setIndecator(id);
  }

    const ComponentDisplayed = () => {
        return (
            <div className='main-container'>
                <section className='sec-1'>
                    <img src={data[indecator].images.png} alt='crew-member-img' />
                </section>
                <section className='sec-2'>
                    <div className='info'>
                        <h2>{data[indecator].role}</h2>
                        <h3>{data[indecator].name}</h3>
                        <p>{data[indecator].bio}</p>
                    </div>
                    <div className='controls'>
                        <span className={indecator === 0 ? 'active' : ''} onClick={ () => clickHundler(0)}></span>
                        <span className={indecator === 1 ? 'active' : ''} onClick={ () => clickHundler(1)}></span>
                        <span className={indecator === 2 ? 'active' : ''} onClick={ () => clickHundler(2)}></span>
                        <span className={indecator === 3 ? 'active' : ''} onClick={ () => clickHundler(3)}></span>
                    </div>
                </section>
            </div>
        )
    }

  return (
    <div className='crew'>
        <Header/>
        <main>
            <h1><span>02</span>meet your crew</h1>
            <ComponentDisplayed />
        </main>
    </div>
  )
}

export default Crew