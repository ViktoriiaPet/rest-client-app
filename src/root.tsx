import React from 'react';
import { Outlet, Scripts } from 'react-router';
import { Provider } from 'react-redux';

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
            <main>
              <Outlet />
            </main>
            <Scripts />
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
