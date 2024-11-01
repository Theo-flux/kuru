import { forwardRef, type ReactNode, type InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  error?: string;
  note?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, label, error, required, className, type, note, ...props }, ref) => {
    return (
      <div className={`flex flex-col ${props.disabled ? 'text-neutral-300' : ''} ${className}`}>
        {label && (
          <label htmlFor={props.id ?? props.name} className="mb-1 text-sm">
            {label}
          </label>
        )}
        <div className="relative mb-1 flex w-full flex-col">
          <input
            {...{ ref, required, placeholder, id: props.id ?? props.name }}
            placeholder={placeholder}
            className={`h-[45px] rounded-lg border-[1px] border-borderLine pl-4 text-sm outline-none transition-all duration-300 placeholder:text-sm hover:border-cerise focus:border-cerise ${
              error ? 'border-error bg-error/10' : 'bg-transparent'
            } disabled:focus:border-neutral-borderLine disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:border-borderLine`}
            {...props}
          />
        </div>

        <div className="flex items-center justify-between">
          {error ? (
            <small className="text-xs text-error transition-all duration-300">{error}</small>
          ) : (
            <>
              {note && <small className="text-xs text-typeGray transition-all duration-300">{note}</small>}
              {!note && <div className="invisible text-xs">error</div>}
            </>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
