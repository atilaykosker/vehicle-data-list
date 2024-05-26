import ReactDOM from 'react-dom';

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(
    <div
      id='modal'
      aria-hidden='true'
      className='fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-500/50'
    >
      <div className='relative m-auto w-min'>
        <div className='relative rounded-lg bg-white p-4 shadow'>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
