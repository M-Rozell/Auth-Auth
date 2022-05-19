import React from 'react';
import { render } from 'react-dom';
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";


// import '@babel/polyfill';

import App from './App.jsx';


// import 'bootstrap/dist/css/bootstrap.min.css'

render(<App />, document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>,
//   );