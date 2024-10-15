"use client";

import { useEffect } from 'react';

import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './welcome/_resets.module.css';
import { Login } from './welcome/Login';

interface Props {
  className?: string;
}

const Welcome: FC<Props> = memo(function Welcome(props = {}) {

  useEffect(() => {
    // Принудительно обновляем стили
  }, []);

  return (
    <div className={`${resets.clapyResets} ${classes.root} `}>
      <Login />
    </div>
  );
});

export default Welcome;
