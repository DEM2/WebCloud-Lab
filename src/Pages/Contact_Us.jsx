import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../CSS/ContactUs.css";

const ContactUs = () => {
    const form = useRef();
  const [setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ih1gx1b", "template_vdiwx2j", form.current, {
        publicKey: "OxMjv23tj12pE_CVu",
      })
      .then(() => {
        console.log("Message sent");
        form.current.reset(); // Limpiar el formulario
        setIsModalOpen(true); // Mostrar el modal
        setTimeout(() => setIsModalOpen(false), 3000); // Ocultar después de 3 segundos
      })
      .catch((error) => {
        console.log("Message failed.", error.text);
      });
  };

    return (
        <section className="contact-us" id="contact">
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="inputGroup">
                        <input autoComplete="off" required type="text" id="name" name="user_name"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="inputGroup">
                        <input autoComplete="off" required type="email" id="email" name="user_email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputGroup">
                        <textarea autoComplete="off" required id="message" rows="4"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="submit-btn" value="Send">Send</button>
                </form>
            </div>
            <div className="contact_text">
                <h1>Take Your Business to the Next Level</h1>
                <p>"Take the next step towards digital transformation.
                    Our team is ready to provide you with expert guidance and tailored solutions.
                    Write to us, and let's build the future together."</p>
            </div>
        </section>
    );
};

export default ContactUs;

