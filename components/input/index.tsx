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
  return (
    <div className="grid w-full items-center gap-1.5 relative pb-5 mb-2">
      <Label htmlFor={name}>{label}</Label>
      <ShadCNInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`w-full ${!!error && 'border-destructive'}`}
      />
      {!!error && (
        <p className="absolute bottom-0 text-xs text-destructive">{error}</p>
      )}
    </div>
  );
};
