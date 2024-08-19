import React from 'react'
import { NextImage as Image } from '@/components/NextImage'
import { Badge } from './Badge'
import Button from './Button'

interface ProjectSectionProps {
    img: string;
    reverse?: boolean;
    bg?: string;
    title: string;
    subtitle: string;
    description: string[];
    skills: string[];
    href: string;
    caseStudy?: string;
}

export default function ProjectSection({ img, reverse, bg, title, subtitle, description, skills, href, caseStudy }: ProjectSectionProps) {
    let textColor = null
    let bgColor = null
    switch (bg) {
        case "green":
            textColor = "text-green";
            bgColor = "bg-green";
            break;
        case "red":
            textColor = "text-red";
            bgColor = "bg-red";
            break;
        case "yellow":
            textColor = "text-yellow";
            bgColor = "bg-yellow";
            break;
        case "purple":
            textColor = "text-purple";
            bgColor = "bg-purple";
            break;
        default:
            textColor = "text-dark";
            bgColor = "bg-dark";
    }
    return (
        <>
            <section className={`box py-5 flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center h-screen ${bgColor}`}>
                <div className={`basis-1/2 ${reverse ? 'text-right' : 'text-left'}`}>
                    <h3 className="h3">{title}</h3>
                    <h4 className="h4">{subtitle}</h4>
                    <div className={`py-3 flex flex-col ${reverse ? 'items-end' : ''}`}>
                        <ul>
                            {description?.map((item, index) => (
                                <li key={index} className="py-1">{reverse ? "" : "- "}{item}{reverse ? " -" : ""}</li>
                            ))}
                        </ul>
                        <div className={`py-3 flex-row max-w-lg ${reverse ? 'float-right' : ''}`}>
                            {skills?.map((item, index) => (
                                <Badge key={index} text={item} />
                            ))}
                        </div>
                        {caseStudy ? (<div>
                            <Button href={`/project/${caseStudy}`} classes={`${textColor} bg-dark mr-3`} text="Case Study" />
                            <Button isLink href={href} classes={`text-dark ${bgColor} ml-3`} text="Visit site" />
                        </div>) : <Button isLink href={href} classes={`${textColor} bg-dark`} text="Visit site" />}
                    </div>
                </div>
                <div className="basis-1/2">
                    <Image src={img} alt="Project image" width={750} height={490} />
                </div>
            </section>
        </>
    )
}
