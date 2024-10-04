'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import Image from 'next/image';
import CheckBox from '@public/mailingList/Check_Box.svg';
import CheckBoxTicked from '@public/mailingList/Check_Box_Ticked.svg';
import CheckBox_white from '@public/mailingList/Check_Box_white.svg';
import CheckBoxTicked_white from '@public/mailingList/Check_Box_Ticked_white.svg';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer relative h-4 w-4 shrink-0 rounded-sm ring-offset-background',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      {checked ? (
        <>
          <div className="dark:hidden">
            <Image src={CheckBoxTicked} alt="Checkbox ticked" fill />
          </div>
          <div className="hidden dark:flex">
            <Image src={CheckBoxTicked_white} alt="Checkbox ticked" fill />
          </div>
        </>
      ) : (
        <>
          <div className="dark:hidden">
            <Image src={CheckBox} alt="Checkbox" fill />
          </div>
          <div className="hidden dark:flex">
            <Image src={CheckBox_white} alt="Checkbox " fill />
          </div>
        </>
      )}
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
