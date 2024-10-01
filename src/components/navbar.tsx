'use client';
import { ModeToggle } from './ui/mode-toggle';
import Link from 'next/link';
import Image from 'next/image';
import LogoWhite from '@public/logo-white.svg';
import LogoBlack from '@public/logo-black.svg';

export default function NavBar() {
  return (
    <main className="h-30 flex w-full justify-between p-8">
      <div className="p-4">
        <Link href="/">
          <Image
            className="dark:hidden"
            src={LogoBlack}
            alt="Camoora Logo"
          ></Image>
          <Image
            className="hidden dark:flex"
            src={LogoWhite}
            alt="Camoora Logo"
          ></Image>
        </Link>
      </div>
      <div className="hidden items-center justify-between gap-4 p-4 sm:flex">
        <ModeToggle />
      </div>
    </main>
  );
}
