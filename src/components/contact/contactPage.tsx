import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast } from "react-toastify";

const initialFormData = {
  name: "",
  email: "",
  message: "",
  errors: [],
};

function ContactPage() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    errors: { field: string; message: string }[];
  }>(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (formData.errors.some((x) => x.field === name)) {
      const newErrs = formData.errors.filter((x) => x.field !== name);
      setFormData((prevData) => ({
        ...prevData,
        errors: newErrs,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors: any = [];
    // Basic validation
    if (!formData.name) {
      errors.push({
        field: "name",
        message: "The name field is required.",
      });
    }
    if (!formData.email) {
      errors.push({
        field: "email",
        message: "The email field is required.",
      });
    }
    if (!formData.message) {
      errors.push({
        field: "message",
        message: "The message field is required.",
      });
    }
    if (
      !!formData.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      errors.push({
        field: "email",
        message: "Email format is incorrect.",
      });
    }

    if (errors.length) {
      setFormData((prevData) => ({
        ...prevData,
        errors: errors,
      }));
      return;
    } else {
      setFormData(() => initialFormData);
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const nameError = formData.errors.find((x) => x.field === "name");
  const emailError = formData.errors.find((x) => x.field === "email");
  const messageError = formData.errors.find((x) => x.field === "message");

  console.log(formData.errors);

  return (
    <div className="contact-page-wrapper">
      <section className="container contact-section">
        <h2 className="f-48 font-weight-bold pb-5">Contact.</h2>
        <div className="d-flex">
          <div className="w-60">
            <div className="form-container p-4 w-100">
              <div className="text-center f-24 font-weight-bold pb-4">
                Get in touch
              </div>
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="pb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="custom-input w-100"
                  />
                  {!!nameError && (
                    <div className="error pt-2">{nameError.message}</div>
                  )}
                </div>
                <div className="pb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="custom-input w-100"
                  />
                  {!!emailError && (
                    <div className="error pt-2">{emailError.message}</div>
                  )}
                </div>
                <div className="pb-4">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="custom-input custom-text-area w-100"
                  />
                  {!!messageError && (
                    <div className="error pt-2">{messageError.message}</div>
                  )}
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="f-18 btn btn-primary-custom font-weight-bold py-3 px-4 d-flex align-items-center"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-direction-column w-40 pl-4">
            <div className="download-resume-container p-4 mb-5">
              <div className="f-24 font-weight-bold text-center pb-4">
                Download my resume
              </div>
              <div className="w-100 d-flex justify-content-center">
                <button
                  type="button"
                  onClick={() => {window.open("https://drive.google.com/uc?id=1E9fI2BmchUs9evpHLtmk6irxquzyHpkk&export=download", "_blank")}}
                  className="f-18 btn btn-primary-custom font-weight-bold py-3 px-4 d-flex align-items-center"
                >
                  <span>Resume</span>
                  <FontAwesomeIcon
                    className="ml-2"
                    icon="download"
                    size="1x"
                    color="#ffffff"
                  />
                </button>
              </div>
            </div>
            
            <div className="social-contacts-container p-4">
              <div className="d-flex align-items-center justify-content-around">
                <span
                 className="social-icon"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/nhatnguyen998/",
                      "_blank"
                    );
                  }}
                >
                  <FontAwesomeIcon
                    className="h-cursor"
                    icon={["fab", "linkedin"]}
                    size="3x"
                    color="#0a63bc"
                  />
                </span>
                <span
                  className="social-icon"
                  onClick={() => {
                    window.open(
                      "https://join.skype.com/invite/VqYJ8d84d047",
                      "_blank"
                    );
                  }}
                >
                  <FontAwesomeIcon
                    className="h-cursor"
                    icon={["fab", "skype"]}
                    size="3x"
                    color="#01aee7"
                  />
                </span>
                <span
                  className="social-icon"
                  onClick={() => {
                    window.open("https://github.com/chronoflame78", "_blank");
                  }}
                >
                  <FontAwesomeIcon
                    className="h-cursor"
                    icon={["fab", "github"]}
                    size="3x"
                    color="#1a1e22"
                  />
                </span>
              </div>
              {/* <div className="d-flex align-items-center justify-content-center pt-4">
                <span>
                  <FontAwesomeIcon className="mr-2" icon="envelope" size="2x" />
                </span>
                <span className="f-20 font-weight-medium">
                  nhatnhse05539@gmail.com
                </span>
              </div> */}
            </div>

            <div className="email-address-container p-4 mt-5">
                <div className="f-20 font-weight-bold text-center pb-3">Contact my email</div>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="f-16 font-weight-medium">nhatnhse05539@gmail.com</span> 
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
