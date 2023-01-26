import React from 'react'
import { Badge } from '@/components/Badge';
import { NextImage as Image } from '@/components/NextImage'

interface ImageCardProps {
    img: string;
    title: string;
    description: string;
    link: string;
    tags: string[];
}

export const ImageCard = ({ img, title, description, link, tags }: ImageCardProps) => {
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <Image className="rounded-t-lg" src="/static/ktc1.png" alt="hero image" width={750} height={490} />
                </a>
                <div className="p-5">
                    <h5 className="text-gray-900 h5 font-medium">Card title</h5>
                    <p className="text-gray-700 text-base mb-4">

                    </p>
                    <div>
                        <Badge text={"HTML5"} />
                        <Badge text={"CSS3"} />
                        <Badge text={"Bootstrap"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
