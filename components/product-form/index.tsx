'use client';

import React, { useEffect } from 'react';

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

export const ProductForm = () => {
  const [state, action] = useFormState(createProduct, undefined);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
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
            <DialogDescription className="flex flex-col gap-4">
              <Input name="name" placeholder="Name" label="Name" />
              <Input name="price" placeholder="Price" label="Price" />
              <Input
                name="image_url"
                placeholder="Image Url"
                label="Image Url"
              />
              <Input name="stock" placeholder="Stock" label="Stock" />
              <Input
                name="available_at"
                type="datetime-local"
                placeholder="Available Time"
                label="Available Time"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <SubmitButton />
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
