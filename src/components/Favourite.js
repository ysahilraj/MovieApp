import React, { Component } from 'react'
import {movies} from './getMovies'
export default class Favourite extends Component {
  constructor(){
    super();
    this.state={
      genres:[],
      currgen:'All Genres',
      movies:[]
    }
  }
  componentDidMount(){
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    let data = JSON.parse(localStorage.getItem("movies-app") || "[]")
    let temp = []
    data.forEach((movieObj)=>{
        if(!temp.includes(genreids[movieObj.genre_ids[0]])){
            temp.push(genreids[movieObj.genre_ids[0]]);
        }
     })
     temp.unshift('All Genres');
     this.setState({
         genres:[...temp],
         movies:[...data]
     })
}
  render() {
    
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    return (
      <div>
        <>
           <div className="main">
              <div className="row">
                  <div className="col-3">
                     <ul class="list-group favourites-geners">
                     {
                                    this.state.genres.map((genre)=>(
                                        this.state.currgen == genre ?
                                        <li class="list-group-item" style={{background:'#3f51b5',color:'white',fontWeight:'bold'}} >{genre}</li> :
                                        <li class="list-group-item" style={{background:'white',color:'#3f51b5'}} onClick={()=>this.handleGenreChange(genre)}>{genre}</li>
                                    ))
                                }
                   
                      </ul>
                  </div>
                  <div className="col-9 favourites-table">
                    <div className="row">
                     <input type="text" className="input-group-text col" placeholder='Search' />
                     <input type="text" className='input-group-text col' placeholder='Rows count' />
                     </div>
                     <div className='row'>
                     <table class="table">
                    <thead>
                      <tr>
                   
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">popularity</th>
                        <th scope="col">Rating</th>
                        <th scope="col"></th>
                 </tr>
               </thead>
               <tbody>
                {
                  this.state.movies.map((movieObj)=>(
                    <tr>
                    <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} style={{width:'5rem'}}/> {movieObj.original_title}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{movieObj.vote_average}</td>
                    <td><button type="button" class="btn btn-danger" onClick={()=>this.handleDelete(movieObj.id)}>Delete</button></td>
                </tr>
                  ))
                }
                 
                
                 
               </tbody>
             </table>
                     </div>
                     <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                      </nav>
                  </div>
             
              </div>
           </div>
        
        </>
      </div>
    )
  }
}
