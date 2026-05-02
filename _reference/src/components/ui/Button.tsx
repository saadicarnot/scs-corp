import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
  href?: string;
  children: React.ReactNode;
  className?: string;
}
export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-md transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
  const variants = {
    primary: 'bg-accent text-white hover:bg-blue-600',
    secondary: 'bg-primary text-white hover:bg-gray-800',
    white: 'bg-white text-primary hover:bg-gray-50',
    outline:
    'border-2 border-white text-white hover:bg-white hover:text-primary'
  };
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
  const MotionLink = motion(Link);
  if (href) {
    return (
      <MotionLink
        to={href}
        className={combinedClassName}
        whileHover={{
          scale: 1.02
        }}
        whileTap={{
          scale: 0.98
        }}
        transition={{
          duration: 0.25
        }}>
        
        {children}
      </MotionLink>);

  }
  return (
    <motion.button
      className={combinedClassName}
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      transition={{
        duration: 0.25
      }}
      {...props}>
      
      {children}
    </motion.button>);

}