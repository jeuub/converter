import React, { useEffect, useRef, useState } from "react";

import clsx from "@/lib/clsx";
import { Icons } from "@/presentation/components";
import { useOnClickOutside } from "@/presentation/hooks";

import { ClassName } from "@/global-types";

import styles from "./input-select.module.scss";

type imageSrc = string;
type OptionId = string | number;

type SelectOption = {
  image?: imageSrc;
  id: OptionId;
  content: string;
};

type InputSelectProps = {
  placeholder?: string;
  className?: ClassName;
  options: SelectOption[];
  defaultChecked: OptionId;
  onChange?: (option: SelectOption) => void;
  min?: number;
  max?: number;
  step?: number;
};

export const InputSelect = (props: InputSelectProps): JSX.Element => {
  const {
    className,
    placeholder,
    options,
    defaultChecked,
    onChange,
    min,
    max,
  } = props;
  const [currentOption, setCurrentOption] = useState<SelectOption>();
  const [active, setActive] = useState<boolean>(false);
  const currentOptionRef = useRef(null);
  const otherOptions = options.filter(
    (option) => option.id !== currentOption?.id
  );

  const toggleActive = () => setActive(!active);

  const setNewOption = (option: SelectOption) => {
    setActive(false);
    setCurrentOption(option);
  };

  useEffect(() => {
    const option = options[Number(defaultChecked)];
    if (!option) return;
    setCurrentOption(option);
  }, [options]);

  useEffect(() => {
    if (!onChange || !currentOption) return;

    onChange(currentOption);
  }, [currentOption]);

  useOnClickOutside(currentOptionRef, () => {
    setActive(false);
  });

  return (
    <div
      className={clsx(styles.container, {
        [className as string]: Boolean(className),
      })}
    >
      <input
        step={0.1}
        min={min}
        max={max}
        className={styles.input}
        type="number"
        placeholder={placeholder}
      />
      <div className={styles.optionContainer} ref={currentOptionRef}>
        <button className={styles.currentOption} onClick={toggleActive}>
          {currentOption?.image ? (
            <img src={currentOption?.image} alt="" width={40} height={40} />
          ) : (
            <p>{currentOption?.content}</p>
          )}
          {Icons("ARROW_DOWN")}
        </button>
        {active && (
          <div className={styles.otherOptions}>
            {otherOptions.map((option) => (
              <button
                key={option.id}
                className={styles.otherOption}
                onClick={() => setNewOption(option)}
              >
                {option.image && (
                  <img src={option.image} alt="" width={40} height={40} />
                )}
                <p>{option.content}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
