'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { MoonLogo, SunLogo } from './icons';
import { Button } from './ui/button';

export const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button variant="outline" className="rounded-full size-10 p-0">
      {resolvedTheme === 'dark' ? (
        <SunLogo onClick={() => setTheme('light')} />
      ) : (
        <MoonLogo onClick={() => setTheme('dark')} />
      )}
    </Button>
  );
};
