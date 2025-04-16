let run = false;

self.onmessage = function (event) {
  if (run) return;

  run = true;

  // Recebido em 'event.data' o estado que está no contexto.
  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  // Contagem em segundos com cálculo para saber o fim da task.
  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now(); // Data atual.
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    // Enviando de volta a mensagem que é recebida na função 'onmessage' do worker class.
    self.postMessage(countDownSeconds);

    const now = Date.now(); // Data atual.
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
