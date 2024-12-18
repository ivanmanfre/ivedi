"use client";

import * as React from "react";

interface SheetProps {
  children: React.ReactNode;
  className?: string;
}

export function Sheet({ children, className }: SheetProps) {
  return <div className={className}>{children}</div>;
}

export function SheetTrigger({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return <button {...props}>{children}</button>;
}

export function SheetContent({ children, className }: SheetProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
