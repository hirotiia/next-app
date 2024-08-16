'use client';

import { ChangeEvent } from 'react';
import { useDispatchTeme } from '@/components/elements/Theme/ThemeProvider';
type Props = {
  colors: Array<'light' | 'dark' | 'red'>;
};

export const Radiobox = ({ colors }: Props) => {
  const dispatch = useDispatchTeme;
  const onChangeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedColor = colors.find((color) => color === e.target.value);
    if (selectedColor) {
      dispatch({ theme: selectedColor });
    }
  };
  return (
    <ul>
      {colors.map((color, index) => (
        <li key={color}>
          <label>
            <input
              type="radio"
              name="theme-color"
              value={color}
              onChange={onChangeTheme}
              checked={index === 0}
            />
            {color}
          </label>
        </li>
      ))}
    </ul>
  );
};
