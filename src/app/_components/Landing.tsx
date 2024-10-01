import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import CaMOOra from '@public/name-black.svg';
import CaMOOraDark from '@public/name-white.svg';
import HomePage from '@public/home-page-light.png';
import HomePageDark from '@public/home-page-dark.png';

export default function Landing() {
  return (
    <main className="">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="dark:hidden"
                src={CaMOOra}
                alt="CaMOOra"
                width={300}
                height={300}
              />
              <Image
                className="hidden dark:flex"
                src={CaMOOraDark}
                alt="CaMOOra"
                width={300}
                height={300}
              />
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Student Photoshoot Marketplace <br />
              </h1>
            </div>
          </>
        }
      >
        <Image
          src={HomePage}
          alt="hero"
          height={820}
          width={1500}
          className="dark:hidden mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        <Image
          src={HomePageDark}
          alt="hero"
          height={820}
          width={1500}
          className="hidden dark:flex mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </main>
  );
}
