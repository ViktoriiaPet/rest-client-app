import { Outlet, Scripts } from 'react-router';

import './i18n/i18n.ts';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

export default function Root() {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <div className="bg-pink-100 min-h-screen flex flex-col">
          <Header />
          <main>
            <Outlet />
          </main>
          <Scripts />
          <Footer />
        </div>
      </body>
    </html>
  );
}
