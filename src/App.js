import React from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import Proptypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("hello");
//   }
//   state = {
//     count: 0
//   };
//   add = () => {
//     console.log("Add");
//     this.setState(current =>({count:this.state.count+1}));
//   };
//   minus = () => {
//     console.log("minus");
//     this.setState(current =>({count:this.state.count-1}));
//   };
//   componentDidMount(){
//     console.log("component renedered");
//   }
//   componentDidUpdate(){
//     console.log("Update");
//   }
//   componentWillUnmount(){
//     console.log("unmount");
//   }
//   render (){
//     console.log("render");
//     return <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick= {this.add}>Add</button>
//       <button onClick= {this.minus}>minus</button>
//     </div> 
//     //<h1>The number is : {this.state.count}</h1>
//   }  
// }
class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };
  getMovies = async() =>{
    //const moives = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {
      data:{
        data :{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    //this.setState({movies:movies}) 
    this.setState({movies,isLoading:false})
  }
  componentDidMount(){
   this.getMovies();
  }
  render(){
    const { isLoading,movies} = this.state;
    return (
    <section className = "container">
      {this.state.isLoading ? (
      <div className = "loader">
        <span className = "loader__text">loading...</span>
      </div>)
      :(
      <div className ="movies">
        {movies.map(movie => (
          <Movie 
          key = {movie.id}
          id={movie.id} 
          year={movie.title} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image} 
          genres = {movie.genres} />
        ))}
      </div>
      )}
      </section>
    )}
}
export default App;
