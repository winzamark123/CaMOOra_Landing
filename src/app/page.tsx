'use client';

import { useState } from 'react';
import Landing from './_components/Landing';
import Selection from './_components/Selection';

export default function Home() {
  // false = Student
  // true = Photographers
  const roles = ['Student', 'Photographer'];
  const [roleToggle, setRoleToggle] = useState<string>(roles[0]);

  return (
    <main className="flex flex-col items-center justify-center px-10">
      <Landing />
      <Selection roleToggle={roleToggle} setRoleToggle={setRoleToggle} />
    </main>
  );
}
