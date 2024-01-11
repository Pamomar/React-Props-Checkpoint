import React from "react";
import ReactDOM from 'react-dom/client';
import Name from "./name";
import Description from "./description";
import Prix from "./prix";
import Image from "./image";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <div  class="card">
      <Image/>
      <div class="card-body">
        <Name/>
        <Prix/>
        <Description/>
      </div>
    </div>
  </React.StrictMode>
);

