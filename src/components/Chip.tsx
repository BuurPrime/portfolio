import React from 'react'

interface ChipProps {
    label: string;
    color: string;
}

const Chip: React.FC<ChipProps> = ({ label, color }) => {
  return (
    <div className={`${color} text-white px-4 py-2 rounded-full`}>{label}</div>
  ) 
}

export default Chip