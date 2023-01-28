import React from 'react'
import { Badge } from '@/components/Badge';
import { NextImage as Image } from '@/components/NextImage'
import { NextLink as Link } from './NextLink';

interface ImageCardProps {
    img: string;
    title: string;
    description: string;
    link: string;
    tags: string[];
}

export const Card = ({ img, title, description, link, tags }: ImageCardProps) => {
    return (
        <div className="flex justify-center">
            <Link href={link}>
                <div className="rounded-lg shadow-lg ease-in-out bg-white max-w-sm">
                    {img &&
                        <Image className="rounded-t-lg" src={img} alt="hero image" width={590} height={200} />
                    }
                    <div className="p-4">
                        <h5 className="text-gray-900 h5 font-medium ml-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-2 ml-2">{description}</p>
                        {tags &&
                            <div>
                                {tags.map((tag, index) => (
                                    <Badge key={index} text={tag} />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}
