import { useState } from "react";
import TitleHeader from "../components/HeroModel/TitleHeader";


const Contact = () =>{
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
  const handleSubmit = () =>{
    console.log(form)
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