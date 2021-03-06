import React from 'react';
import { filter } from 'lodash';
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
    console.log(data.format('DD/MM/YYYY'))
    while (date < end) {
      if(!ignoreDays.has(date.format('dddd'))) {
        array.push({dia: date.format('DD/MM/YYYY'), sup: aux < 2 ? 'S' : 'M'});
        aux ++
      }
      if(aux === 4) aux= 0
      date.add(1, 'days')
    }
    const nome = filter(array, {dia: data.format('DD/MM/YYYY')})
    return nome[0]
  }
  return (
    <div className="App">
      <div className="jumbotron">
        <img alt='suporte' src={logo} width="400" height="400" />
        <h1 className="display-4">{nome(moment()).sup === 'M' ? 'Dia do Mauricio !' : 'Dia do Stefano !'}</h1>
      </div>
    </div>
  );
}

export default App;
