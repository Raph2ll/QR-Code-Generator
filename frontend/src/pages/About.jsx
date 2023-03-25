import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import LinkContext from '../contexts/LinkContext';

function About() {
  const params = useParams();
  const {
    linkedin, github,
  } = useContext(LinkContext);

  return (
    <div className="ml-8 mt-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Hello, My name is
        {' '}
        {params.id}
      </h2>
      <h1 className="text-5xl font-semibold text-gray-900 mb-3 ">
        My History
      </h1>
      <p className="max-w-lg mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero,
        consectetur id magnam eligendi soluta labore dolores suscipit nobis
        dolor quos aspernatur! Dolore cumque vel ipsa deserunt quos ducimus laudantium molestiae.
      </p>
      <button
        type="button"
        className="min-w-fit w-20 ml-2 text-black  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-2  border-black bg-gray-200"
        data-modal-hide="defaultModal"
      >
        <Link to={github}>
          Github
        </Link>
      </button>
      <button
        type="button"
        className="min-w-fit w-20 ml-2 text-black  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-solid border-2  border-black bg-gray-200"
        data-modal-hide="defaultModal"
      >
        <Link to={linkedin}>
          Linkedin
        </Link>
      </button>
    </div>
  );
}

export default About;
