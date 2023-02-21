import React from 'react';
import './CSS/App.css';
import './CSS/printb.css';

import Colors from './Colors';
import {Datos, icons, text} from './datos.js';
import Left from './Left.js';
import Rigth from './rigth.js';

import printJS from 'print-js';

function App() 
{
  const QR = require('./IMG/CV_PAGE.png');
  const [color] = React.useState(Math.floor(Math.random() * Colors.length));
  const [isqr, setisqr] = React.useState(false);

  const printpage = () =>
  {
    let ignore = ['line', 'icon'];
    let exist = false, max;

    if(Datos.Certificate.length % 2 === 0)
      max = Datos.Certificate.length / 2;
    else
      max = (Datos.Certificate.length - 1) / 2;

    while(max > 0)
    {
      let insert = "" + Math.floor(Math.random() * Datos.Certificate.length);
      ignore.map((e) => {
        if(e === insert)
          exist = true;
      })

      if(!exist)
      {
        exist = false;
        ignore.push(insert);
      }
      max--;
    }

    printJS
    ({
      printable: 'root',
      type: 'html',
      documentTitle: 'CV',

      showModal: true,
      modalMessage: 'Printing Document...',
      
      style: null,
      css: './CSS/App.css',

      scanStyles: true,
      ignoreElements: ignore,
      maxWidth: 2200,
      
      onError: function (error)
      {
        alert('Error found => ' + error.message)
      }
    });
  };

  return (
    <div id ='App' className="App element-center" style = {{backgroundColor: Colors[color], minHeight: "100vh"}}>
      
      <div id = 'main' className = 'main-box '>

        <div  className='left-box bloque background-black-t white-text'>
          <div className = 'element-center'>
            <img id = 'imageprofile' alt = 'Mi imagen' src = {Datos['name&image'][icons]}/>
            <div id = 'img-caption' className = 'caption'><h2>{Datos['name&image'][text]} </h2></div>
            <hr/>
          </div>
          <Left Datos = {Datos} icons = {icons} text = {text}/>
        </div>

        <div className='rigth-box bloque background-gray-t black-text'>
          <Rigth Datos = {Datos} />
        </div>
        
        <div className = 'print-block element-center' onClick = {printpage} media = 'print'>
          <h2><i className = "fa-solid fa-print"></i></h2>
        </div>

        <div className = 'show-qr' onClick = {() => setisqr(!isqr)} media = 'print'>
          <h2>
            {(isqr ? <i class="fa-solid fa-eye-slash"></i> : <i href = '#qr' class='fa-solid fa-qrcode'></i>)}
          </h2>
        </div>
        
      </div>
        {
          (isqr ? 
            <div id = 'qr' className = 'bloque show-qr-image element-center' onClick = {() => setisqr(!isqr)}>
              <br/>
              <img className = 'element-center' alt = 'qr' src = {QR} />
            </div>
          :null)
        }
    </div>
  );
}


export default App;
