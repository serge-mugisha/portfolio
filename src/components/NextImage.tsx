import React from 'react'
import Image from 'next/image'

interface NextImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export const NextImage = ({ src, alt, width, height, className }: NextImageProps) => {
    return (
        // <img src={src} alt={alt} width={width} height={height} />
        <Image className={className} unoptimized={true} src={src} alt={alt} width={width} height={height} />
    )
}
