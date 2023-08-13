import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

    return (
      <div className="contact-page-wrapper">
        <section className="container contact-section">
          <h2 className="f-48 font-weight-bold pb-4">Contact.</h2>
          <div className="d-flex align-items-center">
            <div className="w-60">
              <div className="form-container w-100">
                  <div className="text-center">Get in touch</div>
                  <form className="w-100" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                      />
                    </div>
                    <button type="submit" className="f-18 btn btn-primary-custom font-weight-bold py-3 px-4 d-flex align-items-center">Send message</button>
                  </form>
              </div>
            </div>
            <div className="d-flex flex-direction-column w-40">
              <div className="pb-4 d-flex align-items-center">
                <FontAwesomeIcon className="mr-2" icon={["fab", "linkedin"]} size="2x" />
                <span className="font-weight-bold f-20">Linkedin: https://www.linkedin.com/in/nhatnguyen998/</span>
              </div>
              <div className="pb-4 d-flex align-items-center">
                <FontAwesomeIcon className="mr-2" icon="envelope" size="2x" />
                <span className="font-weight-bold f-20">Email: nhatnhse05539@gmail.com</span>
              </div>
              <div className="pb-4 d-flex align-items-center">
                <FontAwesomeIcon className="mr-2" icon={["fab", "github"]} size="2x" />
                <span className="font-weight-bold f-20">Github: chronoflame78 (Nhat Nguyen)</span>
              </div>
              <div className="pb-4 d-flex align-items-center">
                <FontAwesomeIcon className="mr-2" icon={["fab", "skype"]} size="2x" />
                <span className="font-weight-bold f-20">Skype: https://join.skype.com/invite/VqYJ8d84d047</span>
              </div>
            </div>
          </div>
          
          
 
        </section>
      </div>
    )
  }
  
export default ContactPage