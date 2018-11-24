class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        <Option />
        {/*can also use <Option></Option> but above shorthand preferable*/}
      </div>
    );
  }
}

class Option extends Options {
  render() {
    return (
      <div>
        Option component here
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
