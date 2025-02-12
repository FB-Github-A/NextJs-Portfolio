import "@/app/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 p-4 shadow-md">
          <div className="container mx-auto flex justify-center space-x-6">
            <Link href="/" className="text-white font-semibold hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-white font-semibold hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-white font-semibold hover:underline">
              Contact
            </Link>
          </div>
        </nav>
        <main className="container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
