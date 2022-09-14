import React from 'react';

import clsx from '@/lib/clsx'
import {ClassName} from "@/global-types";

import styles from './button.module.scss';

enum ButtonStyle {
  "outlined",
  "filled",
  "text",
}

type ButtonProps = {
  children: React.ReactNode;
  style: keyof typeof ButtonStyle;
  className?: ClassName;
  onClick?: ()=>void;
}

export const Button = (props:ButtonProps) => {
  const {children, style, onClick} = props;

  return (
    <button className={clsx(styles.button, styles[style])} onClick={onClick}>
      {children}
    </button>
  )
}