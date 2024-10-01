import CaMOOraBlack from '@public/name-black.svg';
import Image from 'next/image';
import { BackgroundGradientAnimation } from '@/components/ui/background-animation-gradient';

export default function Landing() {
  return (
    <main className="flex flex-col">
      <div className="w-screen absolute left-0 top-0 -z-30">
        <BackgroundGradientAnimation />
      </div>
      <Image src={CaMOOraBlack} alt="CaMOOra" width={300} height={300} />
    </main>
  );
}
