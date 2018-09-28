class FirstComponent extends React.Component {
  render () {
    return (
      <div>
        <h1>My first component!</h1>
      </div>
    );
  }
}

class SecondComponent extends React.Component {
  render () {
    return (
      <div>
        <h1>My second component!</h1>
      </div>
    );
  }
}

class NamedComponent extends React.Component {
  render () {
    return (
      <div>
        <p>My name is {this.props.name}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name='Brendon'/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));