import React from 'react';
import { Provider } from 'react-redux';
import { Outlet, Scripts } from 'react-router';

import './i18n/i18n.ts';
import Footer from './components/Footer';
import Header from './components/Header';
import { store } from './store';

import type { JSX } from 'react';

import './App.css';

export default function Root(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <Provider store={store}>
          <div className="bg-pink-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex flex-col min-h-screen items-center justify-center bg-pink-100">
              <div className="p-[2vw] font-inter text-xl text-purple-600 ">
                Postman API
              </div>
              <div className=" p-[2vw] w-11/12 max-w-4xl rounded-[10%] bg-pink-200 flex flex-col items-center">
                <Outlet />
              </div>
            </main>
            <Scripts />
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
