import React from 'react'

import ToyCard from './ToyCard'

//import toysObj from './database'

//Class Components can intelligently handle state (an object where we hold data important to our application) and also have component lifecycle methods

// function ToysContainer() {
//
  // function renderToys(){
  //   return toysObj.toys.map(toy => <ToyCard toyId={toy.id} name={toy.name} image={toy.image} likes={toy.likes}/>)
  // }
//
//   return(
//     <div id="toy-container">
//       {renderToys()}
//     </div>
//   )
// }
// renderToys(){
  //   return toysObj.toys.map(toy => <ToyCard toyId={toy.id} name={toy.name} image={toy.image} likes={toy.likes}/>)
  // }

  //Class Components re-render when props change, or state changes.

class ToysContainer extends React.Component{

  state = {toys: []}

  componentDidMount(){
    console.log("MOUNTED!")
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(toysArray => {
        this.setState({toys: toysArray}, () => console.log("STATE HAS CHANGED!", this.state))
      })
    }

  renderToys(){
      return this.state.toys.map(toy => <ToyCard toyId={toy.id} name={toy.name} image={toy.image} likes={toy.likes}/>)
    }

  render(){
    return(
      <div id="toy-container">
      {this.state.toys.length === 0 ? <h1>TOYS LOADING</h1> : this.renderToys()}
      </div>
    )
  }
}

export default ToysContainer
