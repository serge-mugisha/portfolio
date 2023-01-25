import Button from "../Button";

const ContactSection = () => {
    return (
        <div className="py-10">
            <h2 className="h3">Let's connect</h2>
            <p className="my-3">I'm always open to discuss project design and development work, and partnership opportunities.</p>
            <Button isLink classes="text-white bg-dark text-base" text="E-mail: bsergemugisha@gmail.com" href="mailto:bsergemugisha@gmail.com"></Button>
        </div>
    )
}
export default ContactSection;
