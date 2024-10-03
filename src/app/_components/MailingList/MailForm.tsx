import { addEmail, type emailObject } from '@/app/api/actions';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight } from 'lucide-react';

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      studentChecked: false,
      photographerChecked: false,
    },
  });

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
        console.log('Success!');
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
          <div className="flex gap-4 font-espressonal text-4xl">
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
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <div className="font-espressonal">
                  <FormMessage />
                </div>
              </FormItem>
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
