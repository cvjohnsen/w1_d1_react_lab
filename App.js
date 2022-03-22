class App extends React.Component{
    render(){
        return(
        <div>
            <Player/>
             <Board/>
        </div>
        )
    }
}

class Player extends React.Component {
  render () {
      const playerName= 'CJ';
    return (
      <div className={playerName}>
        <h2>Player {playerName} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}

class Board extends React.Component {
    state ={
        text:'square'
    }
  render () {
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));