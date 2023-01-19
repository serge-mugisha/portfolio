import Link from 'next/link'
import React from 'react'
import Icon from '@/components/Icon'

export default function NavBar({ bg }) {
    return (
        <header className={`box flex flex-row place-content-around items-center py-4 sticky ${bg ?? ""}`}>
            <div className='flex basis-1/3 place-content-start items-center '>
                <Link className="px-3 font-semibold" href="/#work">Work</Link>
                <Link className="px-3 font-semibold" href="/#about">About</Link>
                <Link className="px-3 font-semibold" href="/resume">Resume</Link>
            </div>
            <div className="flex basis-1/3 place-content-center">
                <Link href="/" className="text-2xl font-medium font-logo">Serge Mugisha</Link>
            </div>
            <div className="flex basis-1/3 place-content-end">
                <Link className="px-3 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" height={28} width={28} color="#4F4F4F" />
                </Link>
                <Link className="px-3 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" height={28} width={28} color="#4F4F4F" />
                </Link>
                <Link className="px-3 font-medium" href="https://www.behance.net/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="behance" height={28} width={28} color="#4F4F4F" />
                </Link>
                <Link className="px-3 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
                    <Icon name="instagram" height={28} width={28} color="#4F4F4F" />
                </Link>
            </div>
        </header>
    )
}
