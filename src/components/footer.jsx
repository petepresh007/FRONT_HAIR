import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const FooterComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="footer-center">
            <div>
                <form action="">
                    <div>
                        <input
                            type="text"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <textarea
                            name="" id=""
                            cols="30"
                            rows="10"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="socials">
                <h2>FOLLOW US</h2>

                <div className="socials-icons">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>

            <div className="contact-us">
                <div className="contact-us-center">
                    <section>
                        <h2>Contact US</h2>
                        <p>Address</p>
                        <p>No 177</p>
                        <p>John great court</p>
                        <p>Lekki, Lagos. </p>
                    </section>

                    <section>
                        <h2>Contact</h2>
                        <p>+2349030912056</p>
                    </section>

                    <section>
                        <h2>Email</h2>
                        <p>yurngwiskid@gmil.com</p>
                    </section>
                </div>

                <div className="navigate">
                    <section>
                        <h2>Navigate</h2>
                        <p>About</p>
                        <p>Faqs</p>
                        <p>Home</p>
                    </section>
                </div>
            </div>

            {/* <div className="copyright">
                <h5>&copy;Copyright HairNation, {new Date().getFullYear()} All right reserved</h5>
            </div> */}
        </div>
    )
}