import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `flex h-10 items-center rounded bg-cyan-400 
        px-4 transition-colors hover:bg-slate-50
        text-black aria-disabled:cursor-not-allowed 
        aria-disabled:opacity-50`,
        className,
      )}
    >
      {children}
    </button>
  );
}
