import React, {useEffect, useRef, useState} from 'react';

import clsx from '@/lib/clsx'
import {Icons} from "@/presentation/components";
import {useOnClickOutside} from '@/presentation/hooks';

import styles from './input-select.module.scss';

type imageSrc = string;
type OptionId = string | number;

type SelectOption = {
  image: imageSrc;
  id: OptionId;
}

type InputSelectProps = {
  placeholder?: string;
  className?: string;
  options: SelectOption[];
  defaultChecked: OptionId;
  onChange?: (option: SelectOption) => void;
}

export const InputSelect = (props: InputSelectProps): JSX.Element => {
  const {className, placeholder, options, defaultChecked, onChange} = props;
  const [currentOption, setCurrentOption] = useState<SelectOption>();
  const [active, setActive] = useState<boolean>(false);
  const currentOptionRef = useRef(null);
  const otherOptions = options.filter(option => option.id !== currentOption?.id);

  const toggleActive = () => setActive(!active);

  useEffect(() => {
    const option = options[Number(defaultChecked)];
    if (!option) return;
    setCurrentOption(option)
  }, []);

  useEffect(() => {
    if (!onChange || !currentOption) return;

    onChange(currentOption);

  }, [currentOption]);

  useOnClickOutside(currentOptionRef, ()=>{
    setActive(false)
  })

  console.log(otherOptions)
  return (
    <div className={clsx(styles.container, {className: Boolean(className)})}>
      <input className={styles.input} type="number" placeholder={placeholder}/>
      <div className={styles.optionContainer} ref={currentOptionRef}>
        <button className={styles.currentOption} onClick={toggleActive}>
          <img src={currentOption?.image} alt=""/>
          {Icons('ARROW_DOWN')}
        </button>
        {active && (
          <div className={styles.otherOptions}>
            {otherOptions.map(option => (
              <button className={styles.otherOption} onClick={() => setCurrentOption(option)}>
                <img src={option.image} alt=""/>
              </button>
            ))}
          </div>
        )
        }
      </div>
    </div>
  )
}