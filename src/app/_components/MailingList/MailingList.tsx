'use client';

import MailForm from './MailForm';

import Polaroid from '@public/mailingList/Polaroid.svg';
import Image from 'next/image';

export default function MailingList() {
  return (
    <main className="flex w-full items-center justify-center p-36">
      <div className="flex w-1/2 flex-col gap-4">
        <h1 className="font-espressonal text-5xl">Join Our Mailing List </h1>
        <div className="flex flex-col">
          <p>CaMOOra is currently still under development...</p>
          <p>Sign up now to know our latest updates!</p>
        </div>
        <div className="w-full">
          <MailForm />
        </div>
      </div>
      <div className="">
        <Image src={Polaroid} alt="MooTo Polaroid" />
      </div>
    </main>
  );
}
