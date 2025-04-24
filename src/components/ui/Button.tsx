import React from 'react';
import Link, { LinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Assuming a utility for merging class names

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Separate props for Link vs Button to avoid type conflicts
export interface ButtonPropsBase extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export type ButtonAsButtonProps = ButtonPropsBase &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  { href?: undefined };

export type ButtonAsLinkProps = ButtonPropsBase &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Omit<LinkProps, 'href' | 'passHref' | 'legacyBehavior' | 'className'> & // Omit props handled by us
  { href: string }; // Ensure href is required for link version

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>( // Ref can be button or anchor
  (props, ref) => {
    const { className, variant, size, asChild = false } = props;

    if (asChild) {
      if (!React.isValidElement(props.children)) {
         console.error("Button 'asChild' prop requires a single React element child.");
         return null;
      }
      const child = React.Children.only(props.children) as React.ReactElement & { ref?: React.Ref<any>, props?: { className?: string } }; // Add props type
      const childProps = {
        ...props,
        // Safely access child.props.className
        className: cn(buttonVariants({ variant, size }), child.props?.className),
        ref: ref ? (ref as React.Ref<any>) : child.ref, // Merge refs if necessary
      };
      delete childProps.asChild; // Don't pass asChild down

      // If the original props contained href, we assume the child might be used with Link functionality
      if ('href' in props && props.href) {
        // It's complex to automatically wrap a child Link with another Link
        // Assume the child itself handles navigation if href is passed with asChild
        return React.cloneElement(child, childProps);
      } else {
        return React.cloneElement(child, childProps);
      }
    }

    // Not asChild
    if ('href' in props && props.href) {
      // Render Link using modern syntax
      const { children, ...linkProps } = props as ButtonAsLinkProps;
      return (
        <Link
          {...linkProps} // Pass LinkProps and AnchorHTMLAttributes compatible props
          ref={ref as React.Ref<HTMLAnchorElement>} // Ref for the underlying anchor
          className={cn(buttonVariants({ variant, size, className }))} // Apply button styles
        >
          {children} {/* Render children directly inside Link */}
        </Link>
      );
    } else {
      // Render Button
      const { children, type, ...buttonProps } = props as ButtonAsButtonProps; // Extract type
      return (
        <button
          type={type || 'button'} // Provide default type if necessary
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref as React.Ref<HTMLButtonElement>}
          {...buttonProps}
        >
          {children}
        </button>
      );
    }
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants }; 