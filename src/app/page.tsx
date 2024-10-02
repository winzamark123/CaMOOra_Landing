'use client';

import { useState } from 'react';
import Landing from './_components/Landing';
import Selection from './_components/Selection';

export default function Home() {
  // false = Student
  // true = Photographers
  const [roleToggle, setRoleToggle] = useState<boolean>(false);

  return (
    <main className="flex flex-col items-center justify-center">
      <Landing />
      <Selection roleToggle={roleToggle} setRoleToggle={setRoleToggle} />
    </main>
  );
}
