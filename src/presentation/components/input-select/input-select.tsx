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
  tag: string;
};

type InputSelectProps = {
  placeholder?: string;
  className?: ClassName;
  options: SelectOption[];
  defaultValue?: SelectOption;
  onChange?: (option: any) => void;
  min?: number;
  max?: number;
  step?: number;
};

export const InputSelect = (props: InputSelectProps): JSX.Element => {
  const { className, placeholder, options, defaultValue, onChange, min, max } =
    props;

  const [currentOption, setCurrentOption] = useState<SelectOption | undefined>(
    defaultValue ?? options[0]
  );
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
    if (!onChange || !currentOption) return;

    onChange(currentOption);
  }, [currentOption]);

  useOnClickOutside(currentOptionRef, () => {
    setActive(false);
  });

  const hidden = !options.some((el) => el.tag === currentOption?.tag);
  console.log();

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
        <button
          className={clsx(styles.currentOption, {
            [styles.currentOptionActive]: active,
          })}
          onClick={toggleActive}
          disabled={!options.length}
        >
          {!currentOption?.image || hidden ? (
            <p>{!hidden && currentOption?.content}</p>
          ) : (
            <img src={currentOption?.image} alt="" width={40} height={40} />
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
