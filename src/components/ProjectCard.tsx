import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectCard({ title, image, url, className, style }: ProjectCardProps) {
  return (
    <Link href={url} className={`animate-slide-in-delay-100 flex items-center justify-center ${className}`} style={style}>
      <div className="w-[80%] rounded-lg overflow-hidden transition-all duration-300">
        <Image
          src={getImagePath(image)}
          alt={title}
          width={800}
          height={0}
          className="w-full h-auto"
        />
      </div>
    </Link>
  );
}
