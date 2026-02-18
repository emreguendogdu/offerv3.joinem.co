import React from 'react';
import { Button } from './ui/Buttons';

export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-[75rem] items-center justify-between">
        <div className="text-3xl tracking-tight text-brand-dark">
          <span className="font-light">trim</span>
          <span className="text-brand-dark font-light">.</span>
          <span className="font-light">rx</span>
        </div>
        <Button variant="dark" className="bg-brand-dark hover:bg-black">
          Get Started
        </Button>
      </div>
    </header>
  );
}
