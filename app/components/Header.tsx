import React from 'react';
import { Button } from './ui/Buttons';
import Logo from './ui/Logo';

export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-[75rem] items-center justify-between">
        <Logo className="w-16 h-16" />
        <Button variant="dark" className="bg-brand-dark hover:bg-black w-fit">
          Get Started
        </Button>
      </div>
    </header>
  );
}
