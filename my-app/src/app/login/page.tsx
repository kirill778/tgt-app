"use client";

import { useEffect } from 'react';

import React, { memo } from 'react';
import type { FC } from 'react';
import Link from 'next/link';




import resets from './_resets.module.css';
import { EtLinkedinIcon } from './EtLinkedinIcon';
import { FlatColorIconsGoogleIcon } from './FlatColorIconsGoogleIcon';
import { LogosFacebookIcon } from './LogosFacebookIcon';
import classes from './Loginn.module.css';

interface Props {
  className?: string;
}
/* @figmaId 663:1018 */
const Registration: FC<Props> = memo(function Registration(props = {}) {
  useEffect(() => {
    // Принудительно обновляем стили
  }, []);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <button className={classes.button12}>
        <div className={classes.loginNow}>Войти</div>
      </button>
      <div className={classes.welcomeBack}>Войти</div>
      <div className={classes.donTHaveAnAccountSignUp}>
        <p>Нет аккаунта?</p> 
        <button className={classes.loginNow_2}><Link href="/registration">Зарегистрироваться</Link></button>
      </div>
      <div className={classes.forgotPassword}>Забыли пароль?</div>
      <div className={classes.forgotPassword2}>Войдите, чтобы продолжить</div>
      <div className={classes.input_name}>
        <div className={classes.username}>Username</div>
        <input type="text" className={classes.input} />
        <div className={classes.line2}></div>
      </div>
      <div className={classes.password}>Password</div>
      <input type="text" className={classes.input_2} />
      <div className={classes.line1}></div>
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
