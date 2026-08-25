import type { ReactNode } from "react";

export const metadata = {
  title: "EU Health Platform",
  description: "A modern EU healthcare system."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
