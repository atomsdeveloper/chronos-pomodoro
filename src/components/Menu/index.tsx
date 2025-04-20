import { useEffect, useState } from 'react';

import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';
import { LinkRouter } from '../LinkRouter';

type ThemeType = {
  value: 'dark' | 'light';
};

export function Menu() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storageTheme = localStorage.getItem('theme');
    if (!storageTheme) return { value: 'dark' };

    return JSON.parse(storageTheme);
  });

  const handleChangeTheme = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, // Capturando o tipo do evento que é padrão dos links.
  ) => {
    event.preventDefault();

    setTheme(prevState => {
      return prevState?.value === 'dark'
        ? { value: 'light' }
        : { value: 'dark' };
    });
  };

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem('theme', JSON.stringify(theme));

    return () => {
      console.log('Realizando função de cleanUp.');
    };
  }, [theme]);

  const themeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menuContainer}>
      <LinkRouter
        href='#'
        className={styles.menuLink}
        aria-label='Tela principal da página'
        title='Ir para Home'
      >
        <HomeIcon />
      </LinkRouter>

      <LinkRouter
        href='#'
        className={styles.menuLink}
        aria-label='Tela de histórico das tarefas'
        title='Histórico'
      >
        <HistoryIcon />
      </LinkRouter>

      <LinkRouter
        href='#'
        className={styles.menuLink}
        aria-label='Tela de configurações da página'
        title='Configurações'
      >
        <SettingsIcon />
      </LinkRouter>

      {/* Não precisa de 'LinkRouter' link a usado apenas para capturar o click do usuário. */}
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema da página'
        title='Mudar tema'
        onClick={handleChangeTheme}
      >
        {themeIcon[theme.value]}
      </a>
    </nav>
  );
}
