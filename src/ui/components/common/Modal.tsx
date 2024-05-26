import ReactDOM from 'react-dom';

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(
    <div
      id="modal"
      aria-hidden="true"
      className="flex bg-slate-500/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full"
    >
      <div className="relative w-min m-auto">
        <div className="relative p-4 bg-white rounded-lg shadow">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
