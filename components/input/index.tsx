import React from 'react';
import { Input as ShadCNInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = ({
  type = 'text',
  name,
  placeholder,
  label,
  error,
  helperText
}: InputProps) => {
  //TODO: Add error and helper text
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <ShadCNInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
