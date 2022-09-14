import React, { memo, useEffect, useState } from "react";

import { fetchDirection } from "@/state";

import { DirectionTags, TDirection, TDirections } from "@/global-types";

import { InputSelect, Button } from "@/presentation/components";

import {
  useAppDispatch,
  useAppSelector,
  useFilteredDirection,
} from "@/presentation/hooks";

import { images } from "@/presentation/components";

import { enumToDescriptedArray } from "@/presentation/utils";

import styles from "./main.module.scss";

const directionTypes = enumToDescriptedArray({ all: "4", ...DirectionTags });

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

const directionsToOption = (array: TDirections) => {
  return array.map((el, id) => ({
    id,
    content: el.name,
    code: el.code,
    tag: el.tag,
    image: images.find((image) => image.code === el.code)?.image,
  }));
};

const TransactionFrom = (props: { code: string | undefined }) => {
  const { code } = props;

  const filteredDirections = useFilteredDirection(code);

  const [typeTo, setTypeTo] = useState<string>("all");
  const optionsTo = directionsToOption(
    filteredDirections.filter((el) => el.tag === typeTo || typeTo === "all")
  );

  return (
    <div className={styles.transaction}>
      <h3>Получаете</h3>
      <div className={styles.buttons}>
        {directionTypes.map((type) => (
          <Button
            key={type.id}
            style={typeTo === type.description ? "filled" : "text"}
            onClick={() => setTypeTo(type.description)}
            disabled={
              !filteredDirections.some(
                (el) =>
                  el.tag === type.description || type.description === "all"
              )
            }
          >
            {getTypeName(type.description)}
          </Button>
        ))}
      </div>
      <InputSelect
        min={0.24891}
        max={12.061}
        className={styles.inputSelect}
        placeholder={"0.24891 - 12.061"}
        options={optionsTo}
      />
    </div>
  );
};

const MemoizedTransactionFrom = memo(TransactionFrom);
const MemoizedInputSelect = memo(InputSelect);

export function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [typeFrom, setTypeFrom] = useState<string>("all");
  const { directions, loading: directionsLoading } = useAppSelector(
    (state) => state.DirectionReducers
  );

  const [currentOptionFrom, setCurrentOptionFrom] = useState<TDirection>();

  useEffect(() => {
    dispatch(fetchDirection());
  }, []);

  useEffect(() => {
    if (directions && !directionsLoading) {
      setCurrentOptionFrom(directions[0]);
    }
  }, [directions]);

  const optionsFrom = directionsToOption(
    directions.filter((el) => el.tag === typeFrom || typeFrom === "all")
  );

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
                onClick={() => {
                  setTypeFrom(type.description);
                }}
              >
                {getTypeName(type.description)}
              </Button>
            ))}
          </div>
          <MemoizedInputSelect
            min={0.24891}
            max={12.061}
            className={styles.inputSelect}
            defaultValue={optionsFrom[0]}
            placeholder={"0.24891 - 12.061"}
            options={optionsFrom}
            onChange={setCurrentOptionFrom}
          />
          <button className={styles.swapButton}>
            <img src="/assets/swap.png" alt="" width={40} height={40} />
          </button>
        </div>
        <MemoizedTransactionFrom code={currentOptionFrom?.code} />
      </div>
    </main>
  );
}
