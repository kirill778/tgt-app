import { memo } from 'react';
import type { FC } from 'react';
import Link from 'next/link';


import resets from './_resets.module.css';
import { EtLinkedinIcon } from './EtLinkedinIcon';
import { FlatColorIconsGoogleIcon } from './FlatColorIconsGoogleIcon';
import classes from './Login.module.css';
import { LogosFacebookIcon } from './LogosFacebookIcon';

interface Props {
  className?: string;
}
/* @figmaId 663:1002 */
export const Login: FC<Props> = memo(function Login(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image68}></div>
      <div className={classes.welcomeToSalesTOPAPlatformToMa}>
        Мы рады приветствовать вас на нашей обучающей платформе!{' '}
      </div>
      <Link href="/registration" className={classes.button13}>
        <div className={classes.signUp}>Зарегистрироваться</div>
      </Link>
      <Link href="/login" className={classes.button14}>
        <div className={classes.login}>Войти</div>
      </Link>
      <div className={classes.hello}>Добро пожаловать!</div>
      <div className={classes.orViaSocialMedia}>Или авторизируйтесь через:</div>
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
