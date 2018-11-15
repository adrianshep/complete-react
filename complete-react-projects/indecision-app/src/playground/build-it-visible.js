const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button>Show button</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
