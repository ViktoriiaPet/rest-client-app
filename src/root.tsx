import { Outlet, Scripts } from "react-router";
import Header from "./components/Header";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <Header />
        <main>
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  );
}
