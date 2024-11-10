'use client';

import { useState } from 'react';
import Landing from './_components/Landing';
import Selection from './_components/Selection';
import Features from './_components/Features/Features';
import MailingList from './_components/MailingList/MailingList';
import MooTo from '@public/mailingList/Polaroid.svg';
import Image from 'next/image';
import HomePageDark from '@public/home-page-dark.png';
import CaMOOraBlack from '@public/name-black.svg';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export default function Home() {
  const [roleToggle, setRoleToggle] = useState<number>(0);

  return (
    // <main className="flex flex-col items-center justify-center px-10">
    <main className="flex flex-col items-center justify-center p-12 sm:py-0">
      <Landing />
      <Selection roleToggle={roleToggle} setRoleToggle={setRoleToggle} />
      <Features roleToggle={roleToggle} />
      <MailingList />
    </main>
  );
}
