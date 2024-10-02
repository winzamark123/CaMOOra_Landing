import feature1 from '@public/features/student/studentFeature1.png';
import feature2 from '@public/features/student/studentFeature2.svg';
import feature3 from '@public/features/student/studentFeature3.png';
import Image, { StaticImageData } from 'next/image';

type FeatureItem = {
  title: string;
  description: string;
  extra_description?: string;
  image: StaticImageData; // or whatever the type of the imported images is
};

const featureItems: FeatureItem[] = [
  {
    title: 'Find Your Perfect Photographer',
    description:
      'Explore a variety of student-certified photographers that match your unique style and vision',
    image: feature1,
  },
  {
    title: 'Get their Contacts',
    description:
      "Log in to your UC Davis email to access your favorite photographer's contact information!",
    image: feature2,
  },
  {
    title: 'Capture Your MOOments!',
    description: 'Your graduation day is more than just a milestone;',
    extra_description:
      'With CaMOOra, you can freeze these precious moments with customized photoshoot just for you.',
    image: feature3,
  },
];
export default function StudentFeatures() {
  return (
    <main className="flex w-full flex-col border-t-2">
      <div className="flex">
        <div className="flex w-1/2 flex-col gap-4 border-b-2 border-r-2 p-14">
          <h3 className="text-xl font-bold">{featureItems[0].title}</h3>
          <p>{featureItems[0].description}</p>
          <div className="flex h-full w-full items-center justify-center">
            <Image src={featureItems[0].image} alt="feature_0_image"></Image>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4 border-b-2 p-14">
          <h3 className="text-xl font-bold">{featureItems[1].title}</h3>
          <p>{featureItems[1].description}</p>
          <div className="flex h-full w-full items-center justify-center">
            <Image src={featureItems[1].image} alt="feature_1_image"></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-b-2 p-14">
        <h3 className="text-xl font-bold">{featureItems[2].title}</h3>
        <p>{featureItems[2].description}</p>
        <p>{featureItems[2].extra_description}</p>
        <div className="flex h-full w-full items-center justify-center">
          <Image src={featureItems[2].image} alt="feature_2_image"></Image>
        </div>
      </div>
    </main>
  );
}
