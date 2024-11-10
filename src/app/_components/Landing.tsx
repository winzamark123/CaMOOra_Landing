import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import CaMOOra from '@public/name-black.svg';
import CaMOOraDark from '@public/name-white.svg';
import HomePage from '@public/home-page-light.png';
import HomePageDark from '@public/home-page-dark.png';
import MobilePage from '@public/mobile-page.png';
import NewHomePage from '@public/new-home-page.png';
import NewerMobilePage from '@public/newer-mobile-page.png';

export default function Landing() {
  return (
    <div className="mb-10">
      <div className="my-10 flex flex-col items-center justify-center gap-4">
        <Image
          className="dark:hidden"
          src={CaMOOra}
          alt="CaMOOra"
          width={200}
          height={200}
        />
        <Image
          className="hidden dark:flex"
          src={CaMOOraDark}
          alt="CaMOOra"
          width={200}
          height={200}
        />
        <h1 className="text-center text-2xl font-semibold text-black dark:text-white">
          Student Photoshoot Marketplace <br />
        </h1>
      </div>
      <ContainerScroll titleComponent={''}>
        <Image
          className="lg:hidden"
          src={NewerMobilePage}
          alt="CaMOORa Mobile View"
        />
        <Image
          src={HomePage}
          alt="hero"
          height={820}
          width={1500}
          className="mx-auto hidden h-full rounded-2xl object-cover object-left-top lg:block"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
