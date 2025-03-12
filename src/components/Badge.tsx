import React from 'react'
import { NextImage as Image } from "@/components/NextImage";

interface BadgeProps {
    bg?: string;
    color?: string;
    text: string;
    href?: string;
    img?: string;
}

export const Badge = ({ bg, color, text, href, img }: BadgeProps) => {
    const badgeClasses = `inline-block py-1.5 px-2.5 m-1 leading-none text-center whitespace-nowrap align-baseline text-sm font-semibold ${
      bg ?? "bg-gray-900/20"
    } ${color ?? "text-dark"} hover:bg-gray-900/25 rounded-full transition`;
    return href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${badgeClasses}`}
      >
        {text}
      </a>
    ) : (
      <span className={badgeClasses}>
        {img && (
          <Image src={img} className="inline mr-2" alt="Project image" width={26} height={26} />
        )}
        {text}
      </span>
    );
}
