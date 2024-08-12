import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  className?: string;
  variant?: 'outlined' | 'filled' | 'filledGray';
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, disabled = false, className, variant = 'filled', icon, size = 'medium' }) => {
  const buttonClass = `btn ${className} ${variant && `btn-${variant}`} ${size && `btn-${size}`}`;

  const getButtonStyles = (): React.CSSProperties => {
    const defaultStyles: React.CSSProperties = {
      borderRadius: '5px',
      border: '1.5px solid',
      padding: '8px 16px', // Default padding
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease', // Transition for background color

    };

    if (size === 'small') {
      defaultStyles.padding = '6px 10px';
      defaultStyles.fontSize = '11px';

    } else if (size === 'large') {
      defaultStyles.padding = '12px 24px';
      defaultStyles.fontSize = '18px';
    }

    if (variant === 'outlined') {
      return {
        ...defaultStyles,
        color: 'white',
        borderColor: 'white ' || 'transparent',
        backgroundColor: 'transparent',
      };
    } 
    else if (variant === 'filledGray') {
      return {
        ...defaultStyles,
        color: 'white',
        backgroundColor: '#9690a240',
        borderColor: 'transparent',
      };
      
    }
    else if (variant === 'filled') {
      return {
        ...defaultStyles,
        color: 'white',
        backgroundColor: 'black',
        borderColor: 'transparent',
      }; 
    }
  

    return defaultStyles; // Default styles if no variant is specified
  };

  const getIconStyle = (): React.CSSProperties => {
    if (variant === 'outlined') {
      return { marginRight: '8px' }; // Adjust the style for outlined buttons with an icon
    }
    return {};
  };

  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.style.backgroundColor = '#f1c453';
  };

  const handleHoverOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    variant == 'filledGray' 
     ?  button.style.backgroundColor = '#9690a240'
     :   button.style.backgroundColor = 'black'; // Revert to default background color
  };


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      style={getButtonStyles()}
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
    >
      <div className='flex items-center ' >
        {icon && <span className="btn-icon" style={getIconStyle()}>{icon}</span>}
        {text}
      </div>
    </button>
  );
};

