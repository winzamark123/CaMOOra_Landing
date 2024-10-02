'use client';

import { useState } from 'react';
import Landing from './_components/Landing';
import Selection from './_components/Selection';
import PhotographersFeatures from './_components/PhotographersFeatures';
import StudentFeatures from './_components/StudentFeatures';

export default function Home() {
  const [roleToggle, setRoleToggle] = useState<number>(0);

  return (
    <main className="flex flex-col items-center justify-center px-10">
      <Landing />
      <Selection roleToggle={roleToggle} setRoleToggle={setRoleToggle} />
      {roleToggle === 0 && <StudentFeatures />}
      {roleToggle === 1 && <PhotographersFeatures />}
    </main>
  );
}
