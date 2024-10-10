import React, { useState } from "react";
import { StyledButton, StyledContactForm, StyledFormBody, FormFooter, Response } from "../ContactSectionStyles";
import Icon from "../../../assets/icons/Icon";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [response, setResponse] = useState({ mssg: null, status: null });


  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setResponse({ mssg: 'please, complete the captcha!', status: 500 })
      return;
    }

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.status === 200 && setResponse({ mssg: 'email sent!', status: 200 }))
      .catch((error) => {
        setResponse({ mssg: 'there was an error, please try again!', status: 500 })
        console.error('Error:', error);
      });
  };

  return (
    <StyledFormBody>
      <StyledContactForm method="POST" onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Type your email here" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here"></textarea>
        {response.mssg !== null && <Response $status={response.status}>{response.mssg}</Response>}
        {/* <Response $status={500}>{'this is a fake mssg'}</Response> */}
        <FormFooter>
          <ReCAPTCHA
            sitekey="YOUR_SITE_KEY" // Use the site key from your Google reCAPTCHA account
            onChange={handleCaptchaChange}
          />
          <StyledButton>
            <Icon name="send" />
            <button type="submit">send</button>
          </StyledButton>
        </FormFooter>
      </StyledContactForm>
    </StyledFormBody>
  )
}

export default ContactForm;