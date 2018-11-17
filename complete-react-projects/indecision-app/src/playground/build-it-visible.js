let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx =  (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();

















// const toggle = () => {
//   <button>{'Hide details' ? 'Show details' : 'Hide details'}</button>
//   render();
// };
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//   const template = (
//     <div>
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button=onClick{toggle}>Show details</button>
//       <p>Hey. These are some details you can now see!</p>
//     </div>
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// render();
