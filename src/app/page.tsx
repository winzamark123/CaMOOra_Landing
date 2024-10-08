'use client';

import { useState } from 'react';
import Landing from './_components/Landing';
import Selection from './_components/Selection';
import Features from './_components/Features/Features';
import MailingList from './_components/MailingList/MailingList';
import MooTo from '@public/mailingList/Polaroid.svg';
import Image from 'next/image';

export default function Home() {
  const [roleToggle, setRoleToggle] = useState<number>(0);

  return (
    <main className="">
      <div className="hidden flex-col items-center justify-center px-10 sm:flex">
        <Landing />
        <Selection roleToggle={roleToggle} setRoleToggle={setRoleToggle} />
        <Features roleToggle={roleToggle} />
        <MailingList />
      </div>
      <div className="flex h-screen flex-col items-center gap-4 p-10 text-center sm:hidden">
        <p className="font-espressonal">
          We are so sorry, but the website isn't viewable on your mobile device.
          Please check it out on a bigger device!
        </p>
        <Image src={MooTo} alt="MooTo" />
      </div>
    </main>
  );
}
