'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

interface SelectionProps {
  roleToggle: string;
  setRoleToggle: React.Dispatch<React.SetStateAction<string>>;
}
export default function Selection({
  roleToggle,
  setRoleToggle,
}: SelectionProps) {
  return (
    <main className="flex flex-col py-20">
      <div className="">
        <div className="w-1/2 border border-black flex flex-col">
          <h1 className="text-4xl font-espressonal">Are you a...</h1>
          <h2>{roleToggle}</h2>
        </div>
        <Switch></Switch>
      </div>

      <p>
        <span className="font-bold">CaMOOra</span> is a photoshoot marketplace
        dedicated for UC Davis students in finding their photographers on their
        special mooments! We have different features for both users and
        photographers.
      </p>
    </main>
  );
}
