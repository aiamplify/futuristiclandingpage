import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:from-cyan-500 hover:to-fuchsia-600 text-white glow',
    secondary: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
};