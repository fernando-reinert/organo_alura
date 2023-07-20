import React from 'react'
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { IColaborador } from './Compartilhado/interface/Icolaborador';

function App() {
  const times = [
    {
      nome: 'Valorant',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },

    {
      nome: 'Fortnite',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'PUBG: BATTLEGROUNDS',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'PUBG MOBILE',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'Fall Guys',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },

    {
      nome: 'Call of Duty: Warzone',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },

    {
      nome: 'Counter-Strike: Global Offensive',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {

    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(times => <Time
        key={times.nome}
        nome={times.nome}
        corPrimaria={times.corPrimaria}
        corSecundaria={times.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
      />)}

    </div>
  );
}

export default App;
