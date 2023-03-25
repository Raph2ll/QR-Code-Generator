import PropTypes from 'prop-types';
import React from 'react';

function Modal({
  isOpen, children, name, setModalOpen,
}) {
  if (isOpen) {
    return (
      <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow">

            <div className="flex items-start p-4 border-b rounded-t ">
              <h3 className="text-xl   font-semibold text-gray-900">
                {name}
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-white" data-modal-hide="defaultModal" onClick={setModalOpen}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6 flex  justify-center flex-col items-center">
              {children}
            </div>
          </div>
        </div>
      </div>

    );
  }
  return null;
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  setModalOpen: PropTypes.bool.isRequired,
};

export default Modal;
