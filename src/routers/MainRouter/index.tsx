import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { About } from '../../pages/About';
import { History } from '../../pages/History';

// 'pathname' não pode ser capturado antes de ser iniciado um Router, uso dentro de um componente que está dentro do Router.
// Toda vez que o 'path'/url mudar é executado o scroll to top.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null; // O componente existe, mas não retorna nada.
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<About />} />
        <Route path='/history/' element={<History />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />{' '}
      {/* Passando o 'pathname' pra dentro do componente que contém Router.  */}
    </BrowserRouter>
  );
}
