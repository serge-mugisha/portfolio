import { NextLink as Link } from '@/components/NextLink'
import ReactGA from 'react-ga';


const Button = ({ isButton, isLink, href, classes, text, onClick }) => {
    const sendAnalytics = () => {
        ReactGA.event({
            category: 'Outbound link <<<',
            action: `${text} navigated to || ${href} ||`
        });
    }

    return isLink ? <span className="relative z-[1]"><a className={`btn font-medium text-sm ${classes}`} href={href ?? "#"} target="_blank" rel="noreferrer" onClick={sendAnalytics}>{text}</a></span> :
        isButton ? <span className="relative z-[1]"><button className={`btn font-medium text-sm ${classes}`} onClick={onClick ?? null}>{text}</button></span> :
            <span className="relative z-[1]">
                <Link
                    className={`btn font-medium text-sm ${classes}`}
                    href={href ?? ""}
                    onClick={onClick ?? null}>
                    {text}
                </Link>
            </span>
}
export default Button;
