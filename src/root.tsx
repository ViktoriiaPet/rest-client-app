import { Outlet, Scripts } from 'react-router';

import './i18n/i18n.ts';
import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

import type { JSX } from 'react';

import './App.css';

export default function Root(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <div className="bg-pink-100 min-h-screen flex flex-col">
          <Header />
          <main  className="flex flex-col min-h-screen items-center justify-center bg-pink-100">
            <div className='p-[5vw] font-inter text-xl text-purple-600'>Postman API</div>
            <div className=" p-[5vw] pl-[7vw] w-11/12 max-w-4xl min-h-[80vh] rounded-[15%] bg-pink-200 shadow-2xl">
            <Outlet />
            </div>
          </main>
          <Scripts />
          <Footer />
        </div>
      </body>
    </html>
  );
}
