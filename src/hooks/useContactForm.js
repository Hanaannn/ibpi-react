import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, isEmailjsConfigured } from "../constants/emailjs.js";
import { useProjectInquiry } from "../context/ProjectInquiryContext.jsx";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  company: "", // honeypot — real visitors never see or fill this
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "Nama depan wajib diisi.";
  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Format email tidak valid.";
  }
  if (!values.message.trim()) errors.message = "Pesan tidak boleh kosong.";
  return errors;
}

/**
 * Owns the contact form's state machine: idle -> submitting -> success | error.
 * Sends the message via EmailJS (client-side, no backend required) and,
 * when a second template is configured, fires a short auto-reply back to
 * the visitor. The destination inbox is configured on the EmailJS template
 * itself, not passed from here — see EMAIL_SETUP.md.
 */
export function useContactForm() {
  const { projectType: prefillProjectType, clearProjectType } = useProjectInquiry();

  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  // If a service card's "Konsultasi Proyek Ini" CTA requested a project
  // type, drop it into the form once and clear the request.
  useEffect(() => {
    if (!prefillProjectType) return;
    setValues((prev) => ({ ...prev, projectType: prefillProjectType }));
    clearProjectType();
  }, [prefillProjectType, clearProjectType]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot tripped — a bot filled a field real visitors never see.
    // Pretend it worked so the bot doesn't learn to skip this field.
    if (values.company) {
      setStatus("success");
      setValues(EMPTY_FORM);
      return;
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!isEmailjsConfigured) {
      setStatus("error");
      setErrorMessage(
        "Pengiriman email belum dikonfigurasi. Lihat EMAIL_SETUP.md untuk menyambungkan EmailJS."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const templateParams = {
      from_name: [values.firstName, values.lastName].filter(Boolean).join(" "),
      from_email: values.email,
      reply_to: values.email,
      phone: values.phone || "-",
      project_type: values.projectType || "Belum ditentukan",
      message: values.message,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        { publicKey: EMAILJS_CONFIG.publicKey }
      );

      // Auto-reply is best-effort — the main message already went through,
      // so a failure here shouldn't surface as an error to the visitor.
      if (EMAILJS_CONFIG.autoReplyTemplateId) {
        emailjs
          .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.autoReplyTemplateId, templateParams, {
            publicKey: EMAILJS_CONFIG.publicKey,
          })
          .catch((err) => console.warn("Auto-reply email failed to send:", err));
      }

      setStatus("success");
      setValues(EMPTY_FORM);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
      setErrorMessage("Gagal mengirim pesan. Coba lagi, atau hubungi kami langsung lewat telepon/WhatsApp.");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return { values, errors, status, errorMessage, handleChange, handleSubmit, reset };
}
