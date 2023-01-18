import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [topStories, setTopStories] = useState([])

  //chave da api
  const key = "nGQcMVcO2LGXEZp4vR8lJ7SpGuQQ9VaO"

  const api = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${key}`

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(api)
        const articles = await res.json()
        console.log(articles.results)
        setTopStories(articles.results)
      
    } catch (error) {
      console.log(error)
    }
  }

    fetchArticles()
  },[])
  

  return (
    <div className="container-main">
      <header> <h1>Notícias do <span className='nyt'>The News York Times</span> em tempo real.</h1></header>
     
      <div className='container-news'>
{topStories.map((story, index) => (
         <li key={index} className="list-group-item card-li">
<img className="card-img-top" src={story.multimedia[1].url} alt={story.multimedia[1].copyright} />
<div className="card-body">
   <h5 className="card-title">{story.title}</h5>
   <span>Section: {story.section}</span>
  <br />
  <p className="card-text">{story.abstract}</p>
  
  <a href={story.url} className="btn btn-success" target="_blank">Leia mais</a>
</div>
       </li>
      ))}

      </div>
      <footer>
        <a href="https://ruanfr.com"><h3>Freito por Ruan Freire</h3></a>
      </footer>
    </div>
  )
}

export default App

 {/* <img className="card-img-top" src={story.multimedia[1].url} alt="Card image cap" />
         <h3 className="card-title">{story.title}</h3>
         <p className="card-text">{story.abstract}</p>
         <a href={story.url} className="btn btn-primary">Leia mais</a> */}