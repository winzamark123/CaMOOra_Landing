import { useEffect, useState } from 'react';
import {
  addEmail,
  countPhotographers,
  type emailObject,
} from '@/app/api/actions';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    studentChecked: z.boolean(),
    photographerChecked: z.boolean(),
  })
  .refine((data) => data.studentChecked || data.photographerChecked, {
    message: 'Either Student or Photographer must be selected',
    path: ['studentChecked', 'photographerChecked'],
  });

export default function MailForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [photographerCount, setPhotographerCount] = useState<number | null>(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      studentChecked: false,
      photographerChecked: false,
    },
  });

  useEffect(() => {
    async function fetchPhotographerCount() {
      const response = await countPhotographers();
      setPhotographerCount(response.data);
    }

    fetchPhotographerCount();
  }, [isSuccess]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const userObject: emailObject = {
      email: values.email,
      isStudent: values.studentChecked,
      isPhotographer: values.photographerChecked,
    };

    try {
      const response = await addEmail(userObject);

      if (response.status == 200) {
        form.reset();
        setIsSuccess(true);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <main>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          {/* Checkboxes */}
          <div className="flex flex-col gap-4 font-espressonal text-4xl md:flex-row">
            <FormField
              control={form.control}
              name="studentChecked"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-8 w-8"
                      />
                      <h2 className="text-yellow-400">STUDENT</h2>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photographerChecked"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-8 w-8"
                      />
                      <h2 className="text-blue-800">PHOTOGRAPHER</h2>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="max-w-64 flex-grow">
                  <FormControl>
                    <div>
                      <Input placeholder="Email" {...field} />
                    </div>
                  </FormControl>
                  <div className="font-espressonal">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button
              className={
                isSuccess
                  ? 'z-10 bg-green-700 dark:bg-green-300'
                  : 'z-10 bg-slate-900 hover:bg-green-900 dark:bg-slate-300 dark:hover:bg-green-400'
              }
              type="submit"
            >
              {isSuccess ? <Check /> : <ArrowRight />}
            </Button>
          </div>
          <div className="flex w-1/2 gap-4 font-espressonal text-lg">
            <p className="">Current Potential Photographers!</p>
            <div className="flex text-4xl text-blue-800">
              <p className="text-4xl ">#</p>
              <motion.div
                className="z-0"
                key={photographerCount}
                initial={{ y: '-7vh' }}
                animate={{ y: 0 }}
                transition={{
                  type: 'spring',
                  damping: 15,
                  duration: 0.5,
                }}
              >
                {photographerCount}
              </motion.div>
            </div>
          </div>
        </form>
      </Form>
    </main>
  );
}
