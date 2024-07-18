import clsx from 'clsx';

interface ElementProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  tag?: string;
}

export function Element({ children, className, tag, ...rest }: ElementProps) {
  const getTag = () => {
    if (tag === 'button') {
      return <button
        {...rest}
        className={className}
      >
        {children}
      </button>
    }
  }

  return (
    <>
      {getTag()}
    </>
  );
}
