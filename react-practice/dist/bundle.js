'use strict';

// const { createElement } = React   //Don't need when use JSX
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

//use inline instead
// const style = {
//   backgroundColor: 'orange',
//   color: 'white',
//   fontFamily: 'verdana'
// }

//Don't need when use JSX
// const title = createElement(
//   'h1',
//   {id: 'title', className: 'header', style: style},
//   'Hello World'
// )

render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: { backgroundColor: 'orange',
      color: 'white',
      fontFamily: 'verdana' } },
  'Hello World'
), document.getElementById('react-container'));
