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
    <main className="selection-prop md:p-18 flex  flex-col sm:p-12 lg:p-24">
      <div className="flex flex-col font-espressonal">
        <h1 className="text-4xl sm:text-5xl md:text-6xl">Are you a...</h1>
        <div className="xs:flex-row flex w-fit flex-col justify-end gap-8 py-8 pr-8 sm:p-8">
          <h2
            className={`max-w-xs text-3xl sm:text-4xl md:text-5xl ${roleToggle === 0 ? 'text-yellow-400' : 'text-blue-800'}`}
          >
            {roles[roleToggle]}
          </h2>
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
