import Link from 'next/link';


const Button = ({ isButton, isLink, href, classes, text, onClick }) => {
    return isLink ? <span className="relative z-[1]"><a className={`btn font-medium text-sm ${classes}`} href={href ?? "#"} target="_blank" rel="noreferrer">{text}</a></span> :
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
