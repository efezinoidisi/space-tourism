import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  styles?: string;
};
export default function Button(props: ButtonProps) {
  const { children, styles = '', ...otherProps } = props;
  return (
    <button className={` ${styles}`} {...otherProps}>
      {children}
    </button>
  );
}
