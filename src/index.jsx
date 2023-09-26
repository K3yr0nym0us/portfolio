import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import './styles/reset.css';
import './styles/html-body.css';
import './styles/bootstrap.min.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render( <App /> );