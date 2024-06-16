import { Providers } from "./providers";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="merlot-light text-foreground bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
