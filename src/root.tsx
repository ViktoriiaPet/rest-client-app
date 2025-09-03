import { Outlet, Scripts } from 'react-router';
import Header from './components/Header';
import './App.css';

export default function Root() {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <div className="bg-pink-100 min-h-screen">
          <Header />
          <main>
            <Outlet />
          </main>
          <Scripts />
        </div>
      </body>
    </html>
  );
}
