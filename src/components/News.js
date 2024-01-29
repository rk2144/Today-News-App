import React, { Component } from 'react'
import PropTypes from 'prop-types';

import NewsItems from './NewsItems';
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = {
        name : 'in',
        pageSize:6,
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    constructor(){
        super();
        console.log("hello i am a constructor");
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62b91ebd2cb6402bab5169d1d080c9e9&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parseData= await data.json()

        this.setState({
            articles:parseData.articles,
            totalResults:parseData.totalResults,
            loading:false})

    }
    handPrevClick =async ()=>{
        console.log("prev")
      
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62b91ebd2cb6402bab5169d1d080c9e9&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData= await data.json()
        this.setState({ 
            page:this.state.page-1,
            articles:parseData.articles,
            loading:false
        }
           
        )
    }
    handNextClick =async ()=>{
        console.log("Next")
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62b91ebd2cb6402bab5169d1d080c9e9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData= await data.json()
        this.setState(
        { 
            page:this.state.page+1,
            articles:parseData.articles,
            loading:false
        }
           
        )
    }

    }
    state = {  } 
    render() { 
        return (
            <div className='container my-3'>
            <h1 className='text-center'>Today News -Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className='row'>
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                    <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage}
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>

                })}
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type='button' className="btn btn-dark" onClick={this.handPrevClick}>
                    &larr; Previous

                </button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type='button' className='btn btn-dark' onClick={this.handNextClick}>
                    Next &rarr;
                </button>

            </div>
        </div>
        )
    }
}
 
export default News;