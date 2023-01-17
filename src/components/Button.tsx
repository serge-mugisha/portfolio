import Link from 'next/link';

const Button = (props) => {
    return (
        <>
            {props.link ? (
                <a className={`mx-2 my-1 ${props.className} ${props.href ? null : 'disabled'}`} href={props.href} target="_blank">{props.children}</a>
            ) : (

                <Link className={`mx-2 my-1 ${props.className}`} href={props.href ? props.href : "#"} onClick={props.onClick ? props.onClick : null}>{props.children}</Link>
            )}
        </>
    )
}
export default Button;
