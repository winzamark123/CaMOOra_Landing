'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export default function MailingList() {
  const [studentChecked, setStudentChecked] = useState(false);
  const [photographerChecked, setPhotographerChecked] = useState(false);

  const handleStudentCheckedChange = () => {
    setStudentChecked(!studentChecked);
    console.log('CHECKED STUDENT');
  };

  const handlePhotographerCheckedChange = () => {
    setPhotographerChecked(!photographerChecked);
    console.log('CHECKED Photographer');
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values: Send it to the backend
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="w-full p-24">
      <div className="flex w-1/2 flex-col gap-4 border border-black">
        <h1 className="font-espressonal text-5xl">Join Our Mailing List </h1>
        <div className="flex flex-col">
          <p>CaMOOra is currently still under development...</p>
          <p>Sign up now to know our latest updates!</p>
        </div>
        <div className="flex gap-4 border border-red-300 font-espressonal text-4xl">
          <div className="flex items-center border border-black">
            <Checkbox
              checked={studentChecked}
              onCheckedChange={handleStudentCheckedChange}
              className="h-24 w-24"
            />
            <h2 className="text-yellow-400">STUDENT</h2>
          </div>
          <div className="flex items-center">
            <Checkbox
              checked={photographerChecked}
              onCheckedChange={handlePhotographerCheckedChange}
              className="h-24 w-24"
            />
            <h2 className="text-blue-800">PHOTOGRAPHER</h2>
          </div>
        </div>
        <div className="w-1/3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
