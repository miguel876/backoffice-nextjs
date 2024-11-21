'use client';

import { CircleX } from 'lucide-react';
import { useEffect } from 'react';

export default function Error() {
  return (
    <main className="p-4 md:p-6">
      <div className="mb-8 space-y-4 text-center flex content-center flex-col items-center w-full">
        <CircleX size={90} />
        <p>Could not load the Products</p>
      </div>
    </main>
  );
}
