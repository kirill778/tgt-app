"use client";

import { useState, useEffect } from 'react';
import React, { memo } from 'react';
import type { FC } from 'react';
import Link from 'next/link';

import resets from './_resets.module.css';
import { EtLinkedinIcon } from './EtLinkedinIcon';
import { FlatColorIconsGoogleIcon } from './FlatColorIconsGoogleIcon';
import { LogosFacebookIcon } from './LogosFacebookIcon';
import classes from './Registr.module.css';

interface Props {
  className?: string;
}

const Registration: FC<Props> = memo(function Registration(props = {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Принудительно обновляем стили
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Пользователь зарегистрирован');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <form onSubmit={handleSubmit}>
        <div className={classes.welcomeBack}>Зарегистрироваться</div>
        <div className={classes.forgotPassword2}>Зарегистрируйтесь, чтобы продолжить</div>
        <div className={classes.input_name}>
          <div className={classes.username}>Email</div>
          <input
            type="email"
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className={classes.line2}></div>
        </div>
        <div className={classes.password}>Password</div>
        <input
          type="password"
          className={classes.input_2}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className={classes.line1}></div>
        <button type="submit" className={classes.button12}>
          <div className={classes.loginNow}>Зарегистрироваться</div>
        </button>
      </form>
      <div className={classes.donTHaveAnAccountSignUp}>
        <p>Уже есть аккаунт?</p> 
        <button className={classes.loginNow_2}><Link href="/login">Войти</Link></button>
      </div>
      <div className={classes.sALESTOP}>TGT Company</div>
      <div className={classes.tree1}></div>
      <div className={classes.flatColorIconsGoogle}>
        <FlatColorIconsGoogleIcon className={classes.icon} />
      </div>
      <div className={classes.etLinkedin}>
        <EtLinkedinIcon className={classes.icon2} />
      </div>
      <div className={classes.logosFacebook}>
        <LogosFacebookIcon className={classes.icon3} />
      </div>
    </div>
  );
});

export default Registration;
