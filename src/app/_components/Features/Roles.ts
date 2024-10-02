import { StaticImageData } from 'next/image';
import student_feature1 from '@public/features/student/studentFeature1.png';
import student_feature2 from '@public/features/student/studentFeature2.svg';
import student_feature3 from '@public/features/student/studentFeature3.png';

import photographer_feature1 from '@public/features/photographers/photographerFeature1.svg';
import photographer_feature2 from '@public/features/photographers/photographerFeature2.png';
import photographer_feature3 from '@public/features/photographers/photographerFeature3.png';

type FeatureItem = {
  title: string;
  description: string;
  extra_description?: string;
  image: StaticImageData; // or whatever the type of the imported images is
};

const student_feature_items: FeatureItem[] = [
  {
    title: 'Find Your Perfect Photographer',
    description:
      'Explore a variety of student-certified photographers that match your unique style and vision',
    image: student_feature1,
  },
  {
    title: 'Get their Contacts',
    description:
      "Log in to your UC Davis email to access your favorite photographer's contact information!",
    image: student_feature2,
  },
  {
    title: 'Capture Your MOOments',
    description: 'Your graduation day is more than just a milestone;',
    extra_description:
      'With CaMOOra, you can freeze these precious moments with customized photoshoot just for you.',
    image: student_feature3,
  },
];
const photographer_feature_items: FeatureItem[] = [
  {
    title: 'Create Your Profile',
    description:
      'Create your bio, contacts, and description! Choose to allow non-UCDavis users to view your contacts',
    image: photographer_feature1,
  },
  {
    title: 'Customize Your Gallery',
    description:
      'Upload and customize your gallery. Decide what and how your gallery should look! ',
    image: photographer_feature2,
  },
  {
    title: 'Capture Your MOOments',
    description: 'Activate your portfolio with one click.',
    extra_description:
      'Now you are ready to be seen on our photo-shoot marketplace!',
    image: photographer_feature3,
  },
];

interface RoleFeatures {
  roleMap: { [key: number]: string };
  role_feature_items: FeatureItem[];
}

export const roles: RoleFeatures[] = [
  {
    roleMap: { 0: 'Student' },
    role_feature_items: student_feature_items,
  },
  {
    roleMap: { 1: 'Photographer' },
    role_feature_items: photographer_feature_items,
  },
];
