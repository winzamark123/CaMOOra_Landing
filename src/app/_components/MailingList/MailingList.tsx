'use client';

import MailForm from './MailForm';

import Polaroid from '@public/mailingList/Polaroid.svg';
import Polaroid_white from '@public/mailingList/Polaroid_white.svg';
import Image from 'next/image';

export default function MailingList() {
  return (
    <main className="flex w-full flex-col items-center justify-center sm:p-16 md:flex-row md:p-24 lg:p-36">
      <div className="z-20 flex flex-col gap-8 md:w-1/2">
        <h1 className="font-espressonal text-3xl sm:text-4xl md:text-5xl">
          Join Our Mailing List{' '}
        </h1>
        <div className="flex flex-col">
          <p>CaMOOra is currently still under development...</p>
          <p>Sign up now to know our latest updates!</p>
        </div>
        <div className="w-full">
          <MailForm />
        </div>
      </div>
      <div className="z-10 my-8 w-40 md:my-0 md:self-start xl:w-auto">
        <div className="dark:hidden">
          <Image src={Polaroid} alt="MooTo Polaroid" />
        </div>
        <div className="hidden dark:flex">
          <Image src={Polaroid_white} alt="MooTo Polaroid" />
        </div>
      </div>
    </main>
  );
}
