// Classe criada para gerenciamento do Worker
let instance: TimeWorkerManager | null = null;

export class TimeWorkerManager {
  private worker: Worker; // Worker do tipo Worker com atributo privado.

  // Ao usar um contructor com private estamos usando o padrão de projeto Singleton
  private constructor() {
    // Maneira de construir o Worker baseado na url do arquivo.
    this.worker = new Worker(new URL('./timeWorker.js', import.meta.url));
  }

  // Iniciando a instancia uma única vez caso ela já exista é retornada a mesma instancia.
  static getInstance() {
    if (!instance) {
      instance = new TimeWorkerManager();
    }

    return instance;
  }

  // Método criado para postar uma mensagem para fora do Worker.
  postMessage(event: unknown) {
    return this.worker.postMessage(event);
  }

  // Método criado para receber a mensagem enviada de dentro do Worker.
  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  // Finalizando o Worker a a Instancia.
  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
