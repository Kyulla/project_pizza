import Navbar from "./navbar";
import { ProjectProvider } from "./context";
import Routing from "./section/[men]/page";
import Sidebar from "./sidebar";
export const metadata = {
  title: "Project pizza",
  description: "Sito web di una pizzeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="" />
        <meta name="description" content="Sito web di una pizzeria" />
        <meta name="keywords" content="Pizzeria, pizza, ordini" />
        <meta name="author" content="Alessandro Colla, Gaetano Alessandretto, Marco Corsini" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project Pizza</title>
      </head>
      <body>
        <ProjectProvider>
          <Navbar />
          <Sidebar />
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
