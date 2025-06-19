import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProjectCard({ title, image, url }: ProjectCardProps) {
  return (
    <Link href={url} className="animate-slide-in-delay-100">
      <div className="w-[800px] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01]">
        <div className="relative w-full h-[400px]">
          <Image
            src={getImagePath(image)}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
