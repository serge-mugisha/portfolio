import React from 'react'
import Image from 'next/image'
import { Badge } from './Badge'
import Button from './Button'

export default function ProjectSection({ img, reverse, bg, title, subtitle, description, skills, href, caseStudy }) {
    //     @media only screen and (max-width: 600px) {
    //         padding: 10px 30px;
    //         height: 100vh !important;
    //     }
    // `
    let textColor = null
    let bgColor = null
    switch (bg) {
        case "green":
            textColor = "text-green"
            bgColor = "bg-green"
            break;
        case "red":
            textColor = "text-red"
            bgColor = "bg-red"
            break;
        case "yellow":
            textColor = "text-yellow"
            bgColor = "bg-yellow"
            break;
        default:
            textColor = "text-dark"
            bgColor = "bg-dark"
    }
    return (
        <>
            <section className={`box py-5 flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center min-h-80 ${bgColor}`}>
                <div className={`basis-1/2 ${reverse ? 'text-right' : 'text-left'}`}>
                    <h3 className="h3">{title}</h3>
                    <h4 className="h4">{subtitle}</h4>
                    <div className="py-3">
                        <ul>
                            {description?.map((item, index) => (
                                <li key={index} className="py-1">{reverse ? "" : "- "}{item}{reverse ? " -" : ""}</li>
                            ))}
                        </ul>
                        <div className="py-3 flex-row">
                            {skills?.map((item, index) => (
                                <Badge key={index} text={item} />
                            ))}
                        </div>
                        {caseStudy ? (<>
                            <Button href={`/project/${caseStudy}`} classes={`${textColor} bg-dark mx-2`} text="Case Study" />
                            <Button isLink href={href} classes={`text-dark ${bgColor} mx-2`} text="Visit site" />
                        </>) : <Button isLink href={href} classes={`${textColor} bg-dark`} text="Visit site" />}
                    </div>
                </div>
                <div className="basis-1/2">
                    <Image src={img} alt="Project image" width={750} height={490} />
                </div>
            </section>
        </>
    )
}
