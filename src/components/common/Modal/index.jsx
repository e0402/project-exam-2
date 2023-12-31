import React from "react";
import { useModal } from "../ModalContext";

const Modal = ({ children }) => {
  const { isModalOpen, modalTitle, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-12 rounded-lg shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-3 right-5 text-lg font-bold"
        >
          X
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">{modalTitle}</h1>{" "}
        {children}
      </div>
    </div>
  );
};

export default Modal;
