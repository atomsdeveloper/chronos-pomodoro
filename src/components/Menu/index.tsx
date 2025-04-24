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

export function Menu() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const storageTheme = localStorage.getItem('theme') as
      | 'dark'
      | 'light'
      | null;

    if (!storageTheme) {
      localStorage.setItem('theme', 'dark');
      return 'dark';
    }

    return storageTheme;
  });

  const handleChangeTheme = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, // Capturando o tipo do evento que é padrão dos links.
  ) => {
    event.preventDefault();

    setTheme(prevState => {
      return prevState === 'dark' ? 'light' : 'dark';
    });
  };

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

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
        href='/'
        className={styles.menuLink}
        aria-label='Tela principal da página'
        title='Ir para Home'
      >
        <HomeIcon />
      </LinkRouter>

      <LinkRouter
        href='/history'
        className={styles.menuLink}
        aria-label='Tela de histórico das tarefas'
        title='Histórico'
      >
        <HistoryIcon />
      </LinkRouter>

      <LinkRouter
        href='/settings'
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
        {themeIcon[theme]}
      </a>
    </nav>
  );
}
