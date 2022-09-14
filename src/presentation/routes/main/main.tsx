import React, { useEffect, useState } from "react";

import { fetchDirection } from "@/state";

import { DirectionTags } from "@/global-types";

import { InputSelect, Button } from "@/presentation/components";
import {
  useAppDispatch,
  useAppSelector,
} from "@/presentation/hooks/useAppDispatch";

import styles from "./main.module.scss";
import { enumToDescriptedArray } from "@/presentation/utils";

const options = [
  {
    id: 1,
    // image: "https://cdn.cdnlogo.com/logos/b/46/bitcoin.svg",
    content: "BTC",
  },
  {
    id: 2,
    image: "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg",
    content: "ETH",
  },
  {
    id: 3,
    // image: "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg",
    content: "USDT",
  },
  {
    id: 4,
    // image: "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg",
    content: "USDTTRC",
  },
];

const getTypeName = (type: string): string | undefined => {
  switch (type) {
    case "cash":
      return "Наличные";
    case "bank":
      return "Банки";
    case "crypto":
      return "Криптовалюты";
    case "all":
      return "Все";
  }
};

export function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [typeFrom, setTypeFrom] = useState<string>("all");
  const [typeTo, setTypeTo] = useState<string>("all");

  const directions = useAppSelector((state) => state.DirectionReducers);
  const directionTypes = enumToDescriptedArray({ all: "4", ...DirectionTags });
  useEffect(() => {
    dispatch(fetchDirection());
  }, []);

  console.log(directions);

  const optionsFrom = directions.directions
    .filter((el) => el.tag === typeFrom || typeFrom === "all")
    .map((el, id) => ({
      id,
      content: el.name,
    }));

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        Выгодный обменный пункт электронных денег
      </h1>
      <div className={styles.card}>
        <div className={styles.transaction}>
          <h3>Отдаете</h3>
          <div className={styles.buttons}>
            {directionTypes.map((type) => (
              <Button
                key={type.id}
                style={typeFrom === type.description ? "filled" : "text"}
                onClick={() => setTypeFrom(type.description)}
              >
                {getTypeName(type.description)}
              </Button>
            ))}
          </div>
          <InputSelect
            min={0.24891}
            max={12.061}
            className={styles.inputSelect}
            defaultChecked={0}
            placeholder={"0.24891 - 12.061"}
            options={optionsFrom}
          />
          <button className={styles.swapButton}>
            <img src="/assets/swap.png" alt="" width={40} height={40} />
          </button>
        </div>
        <div className={styles.transaction}>
          <h3>Получаете</h3>
          <div className={styles.buttons}>
            {directionTypes.map((type) => (
              <Button
                key={type.id}
                style={typeTo === type.description ? "filled" : "text"}
                onClick={() => setTypeTo(type.description)}
              >
                {getTypeName(type.description)}
              </Button>
            ))}
          </div>
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
