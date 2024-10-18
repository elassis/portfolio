import React, { useState } from "react";
import process from "process";
import { StyledContactForm, StyledFormBody, FormFooter, Response } from "../ContactSectionStyles";
import { Button } from "@common";
import { endpoints } from "../../../utils/constants";


const ContactForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [response, setResponse] = useState({ mssg: null, status: null });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    const backendUrl = endpoints[process.env.NODE_ENV];

    try {
      const response = await fetch(`${backendUrl}/send-email`, data);
      response.status === 200 && setResponse({ mssg: 'email sent!', status: 200 });
    } catch (error) {
      setResponse({ mssg: 'there was an error, please try again!', status: 500 })
      console.error('Error:', error);
    }

  };

  return (
    <StyledFormBody>
      <StyledContactForm method="POST" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Type your email here"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
        />
        <FormFooter>
          {response.mssg !== null && <Response $status={response.status}>{response.mssg}</Response>}
          <Button
            text={"send"}
            iconName={"send"}
            isDisabled={formData.message === '' || formData.email === ''} />
        </FormFooter>
      </StyledContactForm>
    </StyledFormBody>
  )
}

export default ContactForm;