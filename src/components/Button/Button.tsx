import { FC } from 'react';
import styles from  "./Button.module.scss"

export interface ButtonProps {}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <a className={styles['button1']}>test</a>
  );
};
