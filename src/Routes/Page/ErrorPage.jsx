import React from 'react';
import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div className='text-center my-44'>
        <h1 className='text-red-600 text-6xl font-bold my-4'>Oops!</h1>
        <p className='font-semibold'>Sorry, an unexpected error has occurred.</p>
        <p className='font-semibold'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
};

export default ErrorPage;