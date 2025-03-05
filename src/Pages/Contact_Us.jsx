import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../CSS/ContactUs.css"; // Archivo de estilos mejorado

const ContactUs = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        emailjs
            .sendForm("service_ih1gx1b", "template_vdiwx2j", form.current, {
                publicKey: "OxMjv23tj12pE_CVu",
            })
            .then(() => {
                console.log("Message sent");
                form.current.reset();
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
                setIsModalOpen(true);
                setTimeout(() => setIsModalOpen(false), 3000);
            })
            .catch((error) => console.log("Message failed.", error.text));
    };

    return (
        <section className="contact-us" id="contact">
            <div className="form-container">
                <form className="contact-form">
                    <div className="inputGroup">
                        <input autoComplete="off" required type="text" id="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="inputGroup">
                        <input autoComplete="off" required type="email" id="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputGroup">
                        <textarea autoComplete="off" required id="message" rows="4"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
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

