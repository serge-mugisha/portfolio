import Link from 'next/link';


const Button = ({ isLink, href, classes, text, onClick }) => {
    return isLink ? <a className={`btn font-medium text-sm ${classes}`} href={href ?? "#"} target="_blank">{text}</a> :
        <Link
            className={`btn font-medium text-sm ${classes}`}
            href={href ?? "#"}
            onClick={onClick ?? null}>
            {text}
        </Link>
}
export default Button;
