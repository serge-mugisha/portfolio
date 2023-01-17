import Link from 'next/link'
import React from 'react'
import Icon from '@/components/Icon'


export default function Header() {
    return (
        <header className='flex flex-row place-content-around py-4 px-12 bg-slate-400 sticky'>
            <div className='flex basis-1/3 place-content-start bg-slate-500'>
                <Link className="px-3 font-medium" href="/work">Work</Link>
                <Link className="px-3 font-medium" href="/projects">Projects</Link>
                <Link className="px-3 font-medium" href="/resume">Resume</Link>
            </div>
            <div className="flex basis-1/3 place-content-center bg-slate-600">
                <h3>Serge Mugisha</h3>
            </div>
            <div className="flex basis-1/3 place-content-end bg-slate-500">
                <Link className="px-3 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" height={35} width={35} color="#4F4F4F" />
                </Link>
                <Link className="px-3 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" height={35} width={35} color="#4F4F4F" />
                </Link>
                <Link className="px-3 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" height={35} width={35} color="#4F4F4F" />
                </Link>
                <Link className="px-3 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" height={35} width={35} color="#4F4F4F" />
                </Link>
            </div>
        </header>
    )
}
