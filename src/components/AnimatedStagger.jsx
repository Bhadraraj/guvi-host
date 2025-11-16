import React from 'react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const AnimatedStagger = ({
  children,
  animation = 'fadeIn',
  stagger = 0.15,
  duration = 0.8,
  className = '',
  ...props
}) => {
  const ref = useStaggerAnimation(animation, { stagger, duration });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedStagger;
