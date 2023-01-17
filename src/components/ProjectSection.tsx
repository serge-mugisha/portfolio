import React from 'react'
import Image from 'next/image'

export default function ProjectSection({ img, reverse, children, styles }) {
    // const Container = styled.div.attrs(props => ({ className: props.className }))`
    //     min-height: 90vh;
    //     padding: 10px 50px;
    //     background: ${props.background};
    //     color: ${props.color ? props.color : null};

    //     @media only screen and (max-width: 600px) {
    //         padding: 10px 30px;
    //         height: 100vh !important;
    //     }
    // `

    return (
        <>
            <section className={`box py-5 flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center h-full ${styles}`}>
                <div className={`basis-1/2 ${reverse ? 'text-right' : 'text-left'}`}>
                    {children}
                </div>
                <div className="basis-1/2">
                    <Image src={img} alt="Project image" width={750} height={490} />
                </div>
            </section>
        </>
    )
}
