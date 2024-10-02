'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import Image from 'next/image';
import CheckBox from '@public/Check_Box.svg';
import CheckBoxTicked from '@public/Check_Box_Ticked.svg';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm ring-offset-background',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      {checked ? (
        <Image src={CheckBoxTicked} alt="Checkbox ticked" />
      ) : (
        <Image src={CheckBox} alt="Checkbox not ticked" />
      )}
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
