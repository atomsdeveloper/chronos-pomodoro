import { Bounce, ToastContainer } from 'react-toastify';

export type MessageContainerType = {
  children: React.ReactNode;
};

export function MessageContainer({ children }: MessageContainerType) {
  return (
    <>
      {children}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
