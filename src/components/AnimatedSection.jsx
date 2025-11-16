import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({
  children,
  animation = 'fadeIn',
  duration = 1,
  delay = 0,
  className = '',
  ...props
}) => {
  const ref = useScrollAnimation(animation, { duration, delay });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedSection;
