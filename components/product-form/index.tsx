'use client';

import React, { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { PlusCircle } from 'lucide-react';
import { SubmitButton } from '../buttons/submit-button';
import { useFormState } from 'react-dom';
import { createProduct } from 'actions/products';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { Input } from '../input';
import { useToast } from 'hooks/use-toast';

export const ProductForm = () => {
  const [state, action] = useFormState(createProduct, undefined);
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state && state.success) {
      toast({
        title: 'Product Creation',
        description: state.message,
        variant: state.success ? 'default' : 'destructive'
      });

      setOpenDialog(false);
    }
  }, [state]);

  const handleOpenChange = (newOpen: boolean) => {
    setOpenDialog(newOpen);
  };

  return (
    <Dialog open={openDialog} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="h-8 gap-1"
          onClick={() => setOpenDialog(true)}
        >
          <>
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form action={action}>
          <DialogHeader>
            <DialogTitle className="my-4">Create a Product</DialogTitle>
            <DialogDescription />
            <div className="flex flex-col">
              <Input
                name="name"
                label="Name"
                error={state?.errors?.name?.[0]}
              />
              <Input
                name="price"
                label="Price"
                error={state?.errors?.price?.[0]}
              />
              <Input
                name="image_url"
                label="Image Url"
                error={state?.errors?.image_url?.[0]}
              />
              <Input
                name="stock"
                label="Stock"
                error={state?.errors?.stock?.[0]}
              />
              <Input
                name="available_at"
                type="datetime-local"
                label="Available Time"
                error={state?.errors?.available_at?.[0]}
              />
            </div>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <SubmitButton />
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
