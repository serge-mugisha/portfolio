import React from 'react'
import Link from 'next/link'
import { event } from "nextjs-google-analytics";


export const NextLink = (props: any) => {
    const sendAnalytics = () => {
        if (props?.href?.includes("http")) {
            event('Outbound Link',
                {
                    category: 'Outbound Link',
                    label: `===> ${props?.href}`
                });
        }
    }
    return (
        <Link {...props} onClick={sendAnalytics}>{props.children}</Link>
    )
}
