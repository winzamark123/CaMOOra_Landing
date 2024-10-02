import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import SignInGIF from '@public/features/signIn.gif';
import Image, { StaticImageData } from 'next/image';
import TempImage from '@public/logo.svg';

const Skeleton = ({ imageURL }: { imageURL: StaticImageData }) => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl 
  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  
  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"
  >
    <Image src={imageURL} alt="bentoItem" objectFit="contain" />
  </div>
);
const items = [
  {
    title: 'Explore',
    description: 'Browse through the many selections of photographers.',
    header: <Skeleton imageURL={TempImage} />,
    className: 'md:col-span-2',
  },
  {
    title: 'Secure',
    description:
      "Photographer's can allow contacts to be shown after user logs in with their student account, this is up to their choice!",
    header: <Skeleton imageURL={SignInGIF} />,
    className: 'md:col-span-1',
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton imageURL={TempImage} />,
    className: 'md:col-span-1',
  },
  {
    title: 'Design your own Gallery',
    description:
      'Upload and create your own photo-albums to promote your photography!',
    header: <Skeleton imageURL={TempImage} />,
    className: 'md:col-span-2',
  },
];
export default function Features() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
