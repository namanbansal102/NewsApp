import React, { useState, useEffect } from 'react'
import { translate } from '@vitalets/google-translate-api';
import NewsItem from './NewsItem'


export default function News(props) {
  const [articles, setArticles] = useState([])
  const [next, setnext] = useState(1)
  const [previous, setprevious] = useState(1)
  const [disabled, setdisabled] = useState(false)
  const handlePreviousClick = async () => {
    console.log("Previous Button Click");
    const { text } =   translate('My name is naman', { to: 'hi' });
    console.log(text);

    const previousPage=next-1
    setnext(next-1)

    setprevious(previousPage);
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.myChoice}&apiKey=6c56b45fe922409cb0023d1202e690ff&page=${previous}&pagesize=10`
      console.log("Page Number is " + previous);
      const myData = await fetch(url);
      const parsedData = await myData.json()
      setArticles(parsedData.articles)
      window.scrollTo({ top: '0', behavior: 'smooth' })


    }
    fetchData()

  }
  const handleNextClick = () => {
    
    setnext(next + 1)
    console.log("next button Click");


    console.log("Page Number is " + next);
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.myChoice}&apiKey=6c56b45fe922409cb0023d1202e690ff&page=${next}&pagesize=10`
      const myData = await fetch(url);
      const parsedData = await myData.json()
      setArticles(parsedData.articles)
      window.scrollTo({ top: '0', behavior: 'smooth' })
      if (Math.ceil(parsedData.totalResults/10) === next) {
        setdisabled(true)
      }


    }
   
    fetchData()


  }
  useEffect(() => {
    setnext(1)
    setdisabled(false)
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.myChoice}&apiKey=6c56b45fe922409cb0023d1202e690ff&pagesize=10`
      const myData = await fetch(url);
      const parsedData = await myData.json()
      setArticles(parsedData.articles)
      
      
      

    }
    fetchData()
  }, [props.myChoice])

  return (
    <>
    <h1 className='my-2'>News Page Number:{next}</h1>
      <div className="row" >
        {articles.map((Element) => {
          return <div className="col-md-3 key={Element}">
            <NewsItem title={Element.title.split("-")[0]} description={Element.description === null || Element.description.length < 88 ? Element.description : Element.description.slice(0, 88)} imageUrl={Element.urlToImage === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGK6bqpprHQkQOqZYjMH1HXyQeVeXKyh083g&usqp=CAU" : Element.urlToImage}></NewsItem>
          </div>

        })}
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" onClick={handlePreviousClick} disabled={next===1?true:false} class="btn btn-warning"> &larr; Previous
      </button>
        <button disabled={disabled} type="button" onClick={handleNextClick} class="btn btn-warning">Next &rarr;
        </button>

      </div>



    </>
  )
}
