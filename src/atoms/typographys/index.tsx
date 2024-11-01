import { HTMLAttributes } from 'react';

interface ITypographyProps<T> extends HTMLAttributes<T> {
  text?: string;
}

export const Title = ({ text, className }: ITypographyProps<HTMLHeadingElement>) => {
  return <h2 className={`mb-2 text-3xl font-medium md:text-4xl lg:text-5xl ${className}`}>{text}</h2>;
};

export const SubTitle = ({ text, className }: ITypographyProps<HTMLHeadingElement>) => {
  return <h3 className={`mb-2 text-lg font-medium md:text-xl ${className}`}>{text}</h3>;
};

export const Paragraph = ({ text, className }: ITypographyProps<HTMLParagraphElement>) => {
  return <p className={`text-xs font-thin md:text-sm ${className}`}>{text}</p>;
};
