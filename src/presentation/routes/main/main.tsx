import React from 'react';

import {InputSelect} from '@/presentation/components'

import style from './main.module.scss';

const options = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png'
  },
  {
    id: 2,
    image: 'https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg',
  },
];

export function Main(): JSX.Element {
  return (
    <main>
      <h1 className={style.heading}>Main Page</h1>
      <InputSelect defaultChecked={0} placeholder={"0.24891 - 12.061"} options={options}/>
    </main>
  )
}