import React from 'react'
import Link from 'next/link'
import ReactGA from 'react-ga';


export const NextLink = (props) => {
    const sendAnalytics = () => {
        if (props?.href?.includes("http")) {
            ReactGA.event({
                category: 'Outbound link <<<',
                action: `Navigated to || ${props?.href} ||`
            });
        }
    }
    return (
        <Link {...props} onClick={sendAnalytics}>{props.children}</Link>
    )
}
