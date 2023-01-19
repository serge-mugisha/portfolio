import React from 'react'

export const Badge = ({ bg, color, text, href }) => {
    const badgeClasses = `inline-block py-1.5 px-2.5 m-1 leading-none text-center whitespace-nowrap align-baseline text-sm font-semibold ${bg ?? 'bg-gray-900/20'} ${color ?? 'text-dark'} rounded-full`
    return href ? <a href={href} target="_blank" rel="noreferrer" className={`${badgeClasses}`}>{text}</a> : <span className={badgeClasses}>{text}</span>
}
