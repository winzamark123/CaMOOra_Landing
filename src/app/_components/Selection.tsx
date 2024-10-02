'use client';

import { Switch } from '@/components/ui/switch';

interface SelectionProps {
  roleToggle: number;
  setRoleToggle: React.Dispatch<React.SetStateAction<number>>;
}
export default function Selection({
  roleToggle,
  setRoleToggle,
}: SelectionProps) {
  // false = Student
  // true = Photographers
  const roles = ['Student', 'Photographer'];

  return (
    <main className="flex flex-col p-24">
      <div className="flex w-1/3 flex-col font-espressonal">
        <h1 className="text-6xl">Are you a...</h1>
        <div className="flex w-full justify-end gap-8 p-8">
          {roleToggle === 0 && (
            <h2 className="text-4xl text-yellow-400">{roles[roleToggle]}</h2>
          )}
          {roleToggle === 1 && (
            <h2 className="text-4xl text-blue-800">{roles[roleToggle]}</h2>
          )}
          <Switch
            checked={roleToggle === 1}
            onCheckedChange={(checked) => setRoleToggle(checked ? 1 : 0)}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p>
          <span className="font-bold">CaMOOra</span> is a photoshoot marketplace
          dedicated for UC Davis students in finding their photographers on
          their special mooments!
        </p>
        <p>We have different features for both users and photographers.</p>
      </div>
    </main>
  );
}
