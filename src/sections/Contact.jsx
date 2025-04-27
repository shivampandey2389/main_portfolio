import { useRef, useState } from "react";
import TitleHeader from "../components/HeroModel/TitleHeader";

import emailjs from  "@emailjs/browser";
const Contact = () =>{
  const formRef = useRef(null);
  const [loading,setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      setForm({
        name: "",
        email: "",
        message: "",})

    } catch (error) {
    console.log("Emailjs Error",error)  
    }
    finally{
      setLoading(false);
    }
  }

  return(
   <div id="contact" className="section-padding flex-center flex-col gap-20">
    <div className="w-full h-full md:px-10 px-5">
    <TitleHeader
      title="Get in Touch with me"
      sub="Contact Information"
    />
    </div>

    <div className="flex-center card-border rounded-xl p-10 w-[40%] max-md:w-[80%] max-sm:w-full">
      <form 
      ref={formRef}
       onSubmit={handleSubmit}
       className="w-full flex flex-col gap-7"
      >
         <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
          </div>

          <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

          
      </form>
    </div>

   </div>
  )
}
export default Contact;