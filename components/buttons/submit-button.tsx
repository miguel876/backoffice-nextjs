import React from 'react';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Submitting' : 'Confirm'}
    </Button>
  );
};
