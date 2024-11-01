import { forwardRef, useMemo } from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'filled' | 'transparent' | 'light' | 'underlined';
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { variant = 'solid', children, className, ...rest } = props;

  const variantStyle = useMemo(() => {
    switch (variant) {
      case 'outline':
        return 'button-outline';
      case 'filled':
        return 'button-filled';
      case 'transparent':
        return 'button-transparent';
      case 'light':
        return 'button-light';
      case 'underlined':
        return 'button-underlined';
      default:
        return '';
    }
  }, [variant]);

  return (
    <button {...{ ref }} className={`button ${variantStyle} ${className}`} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
