interface SelectionProps {
  roleToggle: boolean;
  setRoleToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Selection({
  roleToggle,
  setRoleToggle,
}: SelectionProps) {
  return (
    <main className="flex flex-col">
      <div></div>
      <p>
        <span className="font-bold">CaMOOra</span> is a photoshoot marketplace
        dedicated for UC Davis students in finding their photographers on their
        special mooments! We have different features for both users and
        photographers.
      </p>
    </main>
  );
}
