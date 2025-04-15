let run = false;

self.onmessage = function (event) {
  if (run) return;

  run = true;

  // Recebido em 'event.data' o estado que está no contexto.
  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  // Contagem em segundos com cálculo para saber o fim da task.
  const endDate = activeTask.startDate - secondsRemaining * 1000;

  function tick() {
    const now = new Date.now(); // Data atual.
    const countDownSeconds = Math.floor((endDate - now) / 1000);

    // Enviando de volta a mensagem que é recebida na função 'onmessage' do worker class.
    self.postMessage(countDownSeconds);

    setTimeout(tick, 1000);
  }

  tick();
};
