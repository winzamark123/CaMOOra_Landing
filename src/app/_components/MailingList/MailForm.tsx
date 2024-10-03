import { addEmail, type emailObject } from '@/app/api/actions';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

export default function MailForm() {
  const [studentChecked, setStudentChecked] = useState(false);
  const [photographerChecked, setPhotographerChecked] = useState(false);

  const handleStudentCheckedChange = () => {
    setStudentChecked(!studentChecked);
  };

  const handlePhotographerCheckedChange = () => {
    setPhotographerChecked(!photographerChecked);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values: Send it to the backend
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (!studentChecked && !photographerChecked) {
      console.log('ERROR');
    }

    const userObject: emailObject = {
      email: values.email,
      isStudent: studentChecked,
      isPhotographer: photographerChecked,
    };
    try {
      await addEmail(userObject);
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <main className="w-1/2">
      <div className="flex gap-4 font-espressonal text-4xl">
        <div className="flex items-center gap-4">
          <Checkbox
            checked={studentChecked}
            onCheckedChange={handleStudentCheckedChange}
            className="h-8 w-8"
          />
          <h2 className="text-yellow-400">STUDENT</h2>
        </div>
        <div className="flex items-center gap-4">
          <Checkbox
            checked={photographerChecked}
            onCheckedChange={handlePhotographerCheckedChange}
            className="h-8 w-8 "
          />
          <h2 className="text-blue-800">PHOTOGRAPHER</h2>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border border-black"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button className="bg-blue-900 hover:bg-yellow-300" type="submit">
            <ArrowRight />
          </Button>
        </form>
      </Form>
    </main>
  );
}