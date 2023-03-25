import QRCode from 'react-qr-code';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import LinkContext from '../contexts/LinkContext';

function Generate() {
  const [name, setName] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const {
    linkedin, setLinkedin, github, setGithub,
  } = useContext(LinkContext);

  // Validate Fields
  function handleValidate(...strings) {
    return strings.every((str) => str !== null && str !== '');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <h1 className="text-xl mb-6 ml-4 mt-4">QR Code Image Generator</h1>
        <div className="flex  min-w-fit w-2/4 mb-3 ml-2">
          <label
            htmlFor="name"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center   border  rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 bg-gray-200  text-gray-400 border-gray-300 w-36"
          >
            {' '}
            <p className=" flex text-center align-middle justify-center">Name</p>
          </label>
          <input
            type="text"
            id="name"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="flex  min-w-fit w-2/4 mb-3 ml-2">
          <label
            htmlFor="linkedin"
            className="flex-shrink-0 z-10 inline-flex align-middle items-center py-2.5 px-4 text-sm font-medium text-center  border  rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 bg-gray-200  text-gray-400 border-gray-300 w-36"
          >
            {' '}
            <p className=" flex text-center align-middle justify-center">Linkedin URL</p>
          </label>
          <input
            type="text"
            id="linkedin"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter your Linkedin URL"
            onChange={(event) => setLinkedin(event.target.value)}
            required
          />
        </div>
        <div className="flex  min-w-fit w-2/4 mb-3 ml-2">
          <label
            htmlFor="github"
            className="flex-shrink-0 z-10 inline-flex align-middle items-center py-2.5 px-4 text-sm font-medium text-center  border  rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 bg-gray-200  text-gray-400 border-gray-300 w-36"
          >
            {' '}
            <p className=" flex text-center align-middle justify-center">Github URL</p>
          </label>
          <input
            type="text"
            id="github"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter your Github URl"
            onChange={(event) => setGithub(event.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="min-w-fit w-1/5 ml-2 text-black bg-white hover:bg-gray-200  focus:ring-4 focus:outline-none focus:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-2  border-black disabled:bg-gray-400 "
          disabled={!handleValidate(name, linkedin, github)}
        >
          Generate Image
        </button>
      </form>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} name={name}>
        <h1 className="text-xl  font-bold text-gray-900">Scan Me</h1>
        <QRCode
          size={236}
          value={`localhost:5173/generate/${name}`}
        />
        <Link to={`/generate/${name}`}>
          or just click here
        </Link>
      </Modal>
    </div>
  );
}

export default Generate;
