import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import App from './Myapp';


function APP() {
  return <Button variant="contained">Hello World</Button>;
};
ReactDOM.render(

    <App/>
, document.getElementById('root'));