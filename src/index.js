import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';


// import App from './App';
import Preloader from './Preloader.js'
const App = React.lazy(()=>import('./App.js'))


ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <App/>
  </Suspense>,
  document.getElementById('app')
);

module.hot.accept();
