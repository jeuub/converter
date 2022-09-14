import React, { useEffect } from "react";

import { fetchDirection } from "@/state";

import { InputSelect, Button } from "@/presentation/components";
import {
  useAppDispatch,
  useAppSelector,
} from "@/presentation/hooks/useAppDispatch";

import styles from "./main.module.scss";

const options = [
  {
    id: 1,
    image: "https://cdn.cdnlogo.com/logos/b/46/bitcoin.svg",
  },
  {
    id: 2,
    image: "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg",
  },
];

export function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const directions = useAppSelector((state) => state.DirectionReducers);

  useEffect(() => {
    dispatch(fetchDirection());
  }, []);

  console.log(directions);

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        Выгодный обменный пункт электронных денег
      </h1>
      <div className={styles.card}>
        <div className={styles.transaction}>
          <h3>Отдаете</h3>
          <Button style="filled">Все</Button>
          <InputSelect
            min={0.24891}
            max={12.061}
            className={styles.inputSelect}
            defaultChecked={0}
            placeholder={"0.24891 - 12.061"}
            options={options}
          />
          <button className={styles.swapButton}>
            <img src="/assets/swap.png" alt="" width={40} height={40} />
          </button>
        </div>
        <div className={styles.transaction}>
          <h3>Получаете</h3>
          <Button style="filled">Все</Button>
          <InputSelect
            min={0.24891}
            max={12.061}
            className={styles.inputSelect}
            defaultChecked={0}
            placeholder={"0.24891 - 12.061"}
            options={options}
          />
        </div>
      </div>
    </main>
  );
}
