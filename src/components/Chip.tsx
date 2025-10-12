import React from 'react'

interface ChipProps {
    label: string;
    size?: 'default' | 'small' | 'tiny';
}

export const Chip: React.FC<ChipProps> = ({ label, size = 'default' }) => {
  const sizeClasses = {
    default: 'px-4 py-2 text-sm',
    small: 'px-3 py-1.5 text-xs',
    tiny: 'px-2 py-1 text-[10px]'
  }

  return (
    <div className={`bg-neutral-900 text-white rounded-full ${sizeClasses[size]}`}>{label}</div>
  ) 
}
