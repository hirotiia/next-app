'use client';

import { ChangeEvent, useState } from 'react';

type Profile = {
  name: string;
  age: number;
  hobby: string[];
};

export const Filter = () => {
  const profile: Profile[] = [
    {
      name: 'Geo',
      age: 18,
      hobby: ['sports', 'music'],
    },
    {
      name: 'Tom',
      age: 20,
      hobby: ['cook', 'sleep'],
    },
    {
      name: 'Lisa',
      age: 21,
      hobby: ['movie', 'music'],
    },
  ];
  const [value, setFilterValue] = useState(profile);

  return (
    <>
      <div className="">
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFilterValue([...value, (value.name = e.target.value)]);
          }}
        />
        {profile.filter((item: Profile) => {
          const isMatch = item.name.indexOf(value) !== -1;
          return isMatch;
        })}
      </div>
    </>
  );
};
