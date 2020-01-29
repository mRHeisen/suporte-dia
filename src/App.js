import React from 'react';
import logo from './sup.png';
import moment from 'moment';
import './App.css';

function App() {
  const ignoreDays = new Set(["Saturday", "Sunday"]);
  const nome = (data) => {
    if (ignoreDays.has(data.format('dddd'))) return "FIM DE SEMANA :D"
    var date = moment('01-01-2020');
    var end = moment().add(1, 'year');
    var array = [];
    var aux = 0
    while (date < end) {
      if(!ignoreDays.has(date.format('dddd'))) {
        array.push({dia: date.format('DD/MM/YYYY'), sup: aux < 2 ? 'S' : 'M'});
        aux ++
      }
      if(aux === 4) aux= 0
      date.add(1, 'days')
    }
    array.map(a => {
      if (a.dia === data.format('DD/MM/YYYY')) return a.sup;
    });
    console.log(array)
  }
  return (
    <div className="App">
      <div className="jumbotron">
        <img alt='suporte' src={logo} width="400" height="400" />
        <h1 className="display-4">{nome(moment()) === 'M' ? 'Dia do Mauricio !' : 'Dia do Stefano !'}</h1>
      </div>
    </div>
  );
}

export default App;
