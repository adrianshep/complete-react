const hide = () => {
  <div>
    <h1>Visibility Toggle</h1>
    <button>Hide details</button>
    <p>Hey. These are some details you can now see!</p>
  </div>
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={hide}>Show details</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
