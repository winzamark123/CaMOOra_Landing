'use client';
import { ModeToggle } from './ui/mode-toggle';
import Link from 'next/link';
import Image from 'next/image';
import MOO from '@public/MOO.svg';

export default function NavBar() {
  return (
    <main className="h-30 flex w-full justify-between p-4">
      <div className="p-4">
        <Link href="/">
          <Image src={MOO} alt="Camoora Logo" width={80} height={80}></Image>
        </Link>
      </div>
      <div className="hidden items-center justify-between gap-4 p-4 sm:flex">
        <ModeToggle />
      </div>
    </main>
  );
}
