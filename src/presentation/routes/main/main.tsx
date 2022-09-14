import React from 'react';

import {InputSelect, Button} from '@/presentation/components'



import styles from './main.module.scss';

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
    <main className={styles.main}>
      <h1 className={styles.heading}>Выгодный обменный пункт электронных денег</h1>
      <div className={styles.card}>
        <div className={styles.transaction}>
          <h3>Отдаете</h3>
          <Button style='filled'>Все</Button>
          <InputSelect min={0.24891} max={12.061} className={styles.inputSelect} defaultChecked={0} placeholder={"0.24891 - 12.061"} options={options}/>
          <button className={styles.swapButton}>
            <img src="/assets/swap.png" alt="" width={40} height={40}/>
          </button>
        </div>
        <div className={styles.transaction}>
          <h3>Получаете</h3>
          <Button style='filled'>Все</Button>
          <InputSelect min={0.24891} max={12.061} className={styles.inputSelect} defaultChecked={0} placeholder={"0.24891 - 12.061"} options={options}/>
        </div>
      </div>
    </main>
  )
}