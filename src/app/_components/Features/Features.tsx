import { roles } from './Roles';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeaturesProps {
  roleToggle: number;
}

export default function Features({ roleToggle }: FeaturesProps) {
  const role = roles.find((r) => r.roleMap[roleToggle]);

  if (!role) return null;

  return (
    <main className="flex w-full flex-col border-t-2 px-14">
      <motion.div
        key={roleToggle}
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
          duration: 0.5,
        }}
        className="flex w-full"
      >
        <div className="flex w-1/2 flex-col gap-4 border-b-2 border-r-2 p-10">
          <h3 className="text-xl font-bold">
            {role?.role_feature_items[0].title}
          </h3>
          <p>{role?.role_feature_items[0].description}</p>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={role?.role_feature_items[0].image}
              alt="feature_0_image"
            ></Image>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4 border-b-2 p-10">
          <h3 className="text-xl font-bold">
            {role?.role_feature_items[1].title}
          </h3>
          <p>{role?.role_feature_items[1].description}</p>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={role?.role_feature_items[1].image}
              alt="feature_1_image"
            ></Image>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-4 border-b-2 p-10">
        <h3 className="text-xl font-bold">
          {role?.role_feature_items[2].title}
        </h3>
        <p>{role?.role_feature_items[2].description}</p>
        <p>{role?.role_feature_items[2].extra_description}</p>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={role?.role_feature_items[2].image}
            alt="feature_2_image"
          ></Image>
        </div>
      </div>
    </main>
  );
}
