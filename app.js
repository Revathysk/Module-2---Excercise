// const tardis = {
//   name: 'Time and Relative Dimension in Space',
//   caps: false,
// }

class DivOne extends React.Component{
  render(){
    return(
      <div> 
        <DivTwo tardis={tardis}/>
      </div>
    )
  }
}

class DivTwo extends React.Component{
  render(){
    return(
      <div> 
        <DivThree tardis={tardis}/>
        <DivThree tardis={tardis}/>
      </div>
    )
  }
}



class DivThree extends React.Component {
  state={
    tardis: this.props.tardis
  }
  
  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

  render() {
    return (
      <div> 
        <h3  onClick={()=> this.changeIt(this.state.tardis.name)}>  {this.state.tardis.name} </h3>        
      </div>
    );
  }
}

class App extends React.Component{
  state={
    tardis: tardis    
  }
  
  render(){
    
    return( 
        <div>
          <DivOne tardis={tardis}/>          
      </div>
    )
  }
}


ReactDOM.render(
 <App/>,
 document.querySelector("#container")

)