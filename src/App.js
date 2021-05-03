import React from "react";
//import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import Proptypes from "prop-types";

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
  componentDidMount(){
    setTimeout(()=> {
      this.setState({isLoading: false});
    }, 6000);
  }
  render(){
    const { isLoading} = this.state;
    return <div>{this.state.isLoading ? "Loading":"We are ready"}</div>;
  }
}
export default App;
