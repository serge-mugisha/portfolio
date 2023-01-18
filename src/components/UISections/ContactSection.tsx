import Button from "../Button";

const ContactSection = () => {
    return (
        <div className="py-5">
            <h2 className="h3">Let's connect</h2>
            <p>I am always open to discuss project design and development work, and partnership opportunities.</p>
            <Button isLink classes="text-white bg-dark text-base" text="Mail: me@sergemugisha.com" href="mailto:me@sergemugisha.com"></Button>
        </div>
    )
}
export default ContactSection;
