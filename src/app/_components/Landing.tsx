import CaMOOraBlack from '@public/name-black.svg';
import Image from 'next/image';

export default function Landing() {
  return (
    <main className="flex ">
      <Image src={CaMOOraBlack} alt="CaMOOra" />
      <div className=""></div>
    </main>
  );
}
