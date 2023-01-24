import React from 'react'
import Link from 'next/link'
import { event } from "nextjs-google-analytics";


export const NextLink = (props: any) => {
    const sendAnalytics = () => {
        if (props?.href?.includes("http")) {
            event('Outbound link <<<',
                {
                    category: 'Outbound link <<<',
                    label: `Navigated to || ${props?.href} ||`
                });
        }
    }
    return (
        <Link {...props} onClick={sendAnalytics}>{props.children}</Link>
    )
}
