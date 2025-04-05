import { useEffect, useState } from 'react';

import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';

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
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Tela principal da página'
        title='Ir para Home'
      >
        <HomeIcon />
      </a>

      <a
        href='#'
        className={styles.menuLink}
        aria-label='Tela de histórico das tarefas'
        title='Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        href='#'
        className={styles.menuLink}
        aria-label='Tela de configurações da página'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

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
