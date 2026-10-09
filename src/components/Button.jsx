import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  icon: Icon,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer focus:outline-none";

  const variants = {
    primary: "bg-[#4ADE80] text-[#0A0A0A] hover:bg-[#3ecb72] active:scale-[0.98]",
    cta: "bg-[#7ED957] text-[#0A0A0A] hover:brightness-105 active:scale-[0.98]",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-50",
    pill: "rounded-full"
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} {...props}>
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />}
    </button>
  );
}
