"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const formCardStyle = {
  width: "min(680px, 100%)",
  margin: "48px auto",
  padding: "28px",
  border: "1px solid rgba(198, 156, 109, 0.18)",
  borderRadius: "24px",
  background: "linear-gradient(180deg, rgba(62, 39, 35, 0.58), rgba(19, 11, 9, 0.92))",
  boxShadow: "0 24px 80px rgba(0, 0, 0, 0.34)",
};

const fieldStyle = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid rgba(198, 156, 109, 0.18)",
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.04)",
  color: "#f5e6d3",
  outline: "none",
};

const labelStyle = {
  display: "grid",
  gap: "8px",
  marginBottom: "16px",
  color: "#f5e6d3",
  fontWeight: 500,
};

const buttonStyle = {
  minHeight: "48px",
  padding: "0 20px",
  border: 0,
  borderRadius: "999px",
  background: "linear-gradient(135deg, #e5b57a, #c69c6d)",
  color: "#1a100c",
  fontWeight: 700,
  cursor: "pointer",
};

const messageStyle = {
  marginTop: "14px",
  fontSize: "0.95rem",
};

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const emailJsConfig = {
  serviceId: "service_f4tab15",
  templateId: "template_1zqja9e",
  publicKey: "Yz_enruxXneUGjiz1",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        emailJsConfig.publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.text || error?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section style={{ padding: "24px 20px 56px" }}>
      <div style={formCardStyle}>
        <p style={{ margin: 0, color: "#c69c6d", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Contact Form
        </p>
        <h2 style={{ marginTop: "12px", marginBottom: "10px", color: "#f5e6d3", fontSize: "2rem" }}>
          Send Us A Message
        </h2>
        <p style={{ marginBottom: "22px", color: "rgba(245, 230, 211, 0.72)" }}>
          Fill in the form below and EmailJS will deliver the message for you.
        </p>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              style={fieldStyle}
            />
          </label>

          <label style={labelStyle}>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              style={fieldStyle}
            />
          </label>

          <label style={labelStyle}>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
              rows={6}
              style={{ ...fieldStyle, resize: "vertical" }}
            />
          </label>

          <button type="submit" disabled={isSending} style={buttonStyle}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status.message ? (
            <p
              style={{
                ...messageStyle,
                color: status.type === "success" ? "#9ee6b3" : "#ffb4b4",
              }}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
