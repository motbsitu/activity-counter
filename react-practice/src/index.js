// const { createElement } = React   //Don't need when use JSX
const { render } = ReactDOM

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

render(
  <h1 id='title'
      className='header'
      style={{backgroundColor: 'orange',

              color: 'white',
              fontFamily: 'verdana'}}>
  Hello World
  </h1>,
  document.getElementById('react-container')
)
