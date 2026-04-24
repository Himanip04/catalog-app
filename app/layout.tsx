import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Catalog",
  description: "Dynamic Multi-Category Catalog",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Catalog</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
