'use client';
import { ModeToggle } from './ui/mode-toggle';
import Link from 'next/link';
import Image from 'next/image';
import MOO from '@public/MOO.svg';
import MOO_white from '@public/MOO_white.svg';

export default function NavBar() {
  return (
    <main className="h-30 flex w-full justify-between p-4 ">
      <div className="p-4">
        <Link href="/">
          <div className="dark:hidden">
            <Image src={MOO} alt="Camoora Logo" width={80} height={80}></Image>
          </div>
          <div className="hidden dark:flex">
            <Image
              src={MOO_white}
              alt="Camoora Logo"
              width={80}
              height={80}
            ></Image>
          </div>
        </Link>
      </div>
      <div className="hidden items-center justify-between gap-4 p-4 sm:flex">
        <ModeToggle />
      </div>
    </main>
  );
}
