import gravitacionalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitacionalBeep); // Iniciando váriavel com o áudio.
  audio.load(); // Carregando o áudio

  return () => {
    audio.currentTime = 0; // Zerando o timer do áudio
    audio.play().catch(error => console.log('Error ao tocar áudio', error));
  };
}
