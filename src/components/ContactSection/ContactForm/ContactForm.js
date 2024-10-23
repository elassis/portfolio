import React, { useState } from "react";
import process from "process";
import { StyledContactForm, StyledFormBody, FormFooter, Response } from "../ContactSectionStyles";
import { Button } from "@common";
import { endpoints } from "../../../utils/constants";
import { ThreeDot } from "react-loading-indicators";
import Icon from "../../../assets/icons/Icon";
import { colors } from "../../../styles/colors";
import fetchData from "../../../utils/fetchData";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [response, setResponse] = useState({ mssg: null, status: null });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    const backendUrl = endpoints[process.env.NODE_ENV];

    const { response, loading } = await fetchData(`${backendUrl}/send-email`, data);

    setLoading(loading);

    setResponse(() => {
      if (response.status !== 500) {
        setFormData({ email: '', message: '' });
        return { mssg: 'Email sent', status: response.status }
      } else {
        return { mssg: 'there was an error :(', status: response.status }
      }
    });

    setTimeout(() => {
      setResponse({ mssg: null, status: null });
    }, 5000);

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
          {loading && <ThreeDot variant="bounce" color={`#${colors.blue}`} size="small" />}
          {!loading && (<Button
            text={"send"}
            icon={formData.message !== '' && formData.email !== '' && <Icon name="send" />}
            isDisabled={formData.message === '' || formData.email === ''} />)}
        </FormFooter>
      </StyledContactForm>
    </StyledFormBody>
  )
}

export default ContactForm;