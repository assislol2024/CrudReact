import './Home.css'

function Home() {
  return(
    <section className='sectionMain'>
      <h1>Lista</h1>
      <section className='inputSection'>
        <input type="text" placeholder='Item'/>
        <button className='btnAdicionar'>Adicionar</button>
      </section>
      <section className="listSection">
          
      </section>
    </section>
  )
}

export default Home
