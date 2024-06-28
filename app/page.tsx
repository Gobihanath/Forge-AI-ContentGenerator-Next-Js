// pages/index.js
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-300">
      <header className='shadow bg-sky-800'>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-300">Forge . AI - Your Content Creator Partner</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-slate-100 border-b border-gray-200">
                <div className="text-center flex flex-col items-center">
                  <Image
                    src="/Logo1.png"
                    alt="AI Content Creator"
                    width={400}
                    height={400}
                  />
                  <h2 className="mt-8 text-2xl font-semibold text-gray-900">Create Amazing Content with AI</h2>
                  <p className="mt-4 text-gray-600">
                    Harness the power of artificial intelligence to generate high-quality content in seconds.
                  </p>
                  <Link href={'/dashboard'}>
                  <Button className="mt-6 w-52">Let's Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-orange-400 shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-900">
            © 2024 Forge-AI Content Creator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
