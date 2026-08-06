import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'secondary';
};

const variants = {
  primary:
    'bg-primary text-white hover:brightness-110 active:brightness-95',
  secondary:
    'border border-border bg-surface text-foreground hover:bg-surface-alt',
} as const;

export function Button({
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,filter] ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
