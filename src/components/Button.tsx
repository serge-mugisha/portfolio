import Link from 'next/link';


const Button = ({ isLink, href, classes, text, onClick }) => {
    return isLink ? <span className="relative z-[1]"><a className={`btn font-medium text-sm ${classes}`} href={href ?? "#"} target="_blank">{text}</a></span> :
        <span className="relative z-[1]">
            <Link
                className={`btn font-medium text-sm ${classes}`}
                href={href ?? "#"}
                onClick={onClick ?? null}>
                {text}
            </Link>
        </span>
}
export default Button;
