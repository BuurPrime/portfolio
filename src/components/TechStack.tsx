import React from 'react';

interface Technology {
  name: string;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'mobile' | 'design';
  icon?: string;
  color?: string;
}

interface TechStackProps {
  technologies: Technology[];
  title?: string;
  layout?: 'grid' | 'inline' | 'categorized';
  size?: 'small' | 'medium' | 'large';
  showCategories?: boolean;
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({
  technologies,
  title = "Tech Stack",
  layout = 'inline',
  size = 'medium',
  showCategories = false,
  className = ''
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-5 py-2.5 text-base'
  };

  const categoryColors = {
    frontend: 'bg-blue-900/30 border-blue-700/50 text-blue-200',
    backend: 'bg-green-900/30 border-green-700/50 text-green-200',
    database: 'bg-purple-900/30 border-purple-700/50 text-purple-200',
    tools: 'bg-orange-900/30 border-orange-700/50 text-orange-200',
    cloud: 'bg-cyan-900/30 border-cyan-700/50 text-cyan-200',
    mobile: 'bg-pink-900/30 border-pink-700/50 text-pink-200',
    design: 'bg-yellow-900/30 border-yellow-700/50 text-yellow-200'
  };

  const defaultTechStyle = 'bg-neutral-900/50 border-neutral-700/50 text-neutral-200 hover:bg-neutral-800/50';

  const getTechStyle = (tech: Technology): string => {
    if (tech.category && categoryColors[tech.category]) {
      return categoryColors[tech.category];
    }
    if (tech.color) {
      return tech.color;
    }
    return defaultTechStyle;
  };

  const renderTechnology = (tech: Technology, index: number) => (
    <div
      key={index}
      className={`
        ${sizeClasses[size]} 
        ${getTechStyle(tech)}
        rounded-full border transition-all duration-200 
        hover:scale-105 hover:shadow-lg
        flex items-center gap-2
      `}
      role="listitem"
      tabIndex={0}
      aria-label={`Technology: ${tech.name}${tech.category ? `, Category: ${tech.category}` : ''}`}
    >
      {tech.icon && (
        <span className="text-sm" aria-hidden="true">
          {tech.icon}
        </span>
      )}
      <span className="font-medium">{tech.name}</span>
    </div>
  );

  const renderCategorized = () => {
    const categorizedTechs = technologies.reduce((acc, tech) => {
      const category = tech.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    }, {} as Record<string, Technology[]>);

    return (
      <div className="space-y-6">
        {Object.entries(categorizedTechs).map(([category, techs]) => (
          <div key={category} className="space-y-3">
            <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, index) => renderTechnology(tech, index))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {technologies.map((tech, index) => renderTechnology(tech, index))}
    </div>
  );

  const renderInline = () => (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => renderTechnology(tech, index))}
    </div>
  );

  const renderContent = () => {
    if (layout === 'categorized' || showCategories) {
      return renderCategorized();
    }
    if (layout === 'grid') {
      return renderGrid();
    }
    return renderInline();
  };

  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-neutral-200 mb-4">
          {title}
        </h3>
      )}
      <div role="list" aria-label="Technologies used">
        {renderContent()}
      </div>
    </div>
  );
};

export default TechStack;


