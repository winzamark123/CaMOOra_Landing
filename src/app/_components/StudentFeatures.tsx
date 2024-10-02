import feature1 from '@public/features/student/studentFeature1.png';
import feature2 from '@public/features/student/studentFeature2.svg';
import feature3 from '@public/features/student/studentFeature3.png';

type FeatureItem = {
  title: string;
  description: string;
  image: string; // or whatever the type of the imported images is
};

const featureItems: FeatureItem[] = [
  {
    title: 'Find Your Photographer',
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
    title: 'Capture your MOOments!',
    description:
      'Your graduation day is more than just a milestone; With CaMOOra, you can freeze these precious moments with customized photoshoot just for you.',
    image: feature3,
  },
];
export default function StudentFeatures() {
  return (
    <main className="flex flex-col border-t-2">
      <div className="flex">{featureItems[0].title}</div>
    </main>
  );
}
