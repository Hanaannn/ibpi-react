import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import FormField from "./FormField.jsx";
import Button from "../ui/Button.jsx";
import { useContactForm } from "../../hooks/useContactForm.js";
import { PROJECT_TYPE_OPTIONS } from "../../data/services.js";

export default function ContactForm() {
  const { values, errors, status, errorMessage, handleChange, handleSubmit, reset } = useContactForm();

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-paper-50/10 bg-graphite-900/60 px-8 py-16 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-amber-500" />
        <h3 className="font-display text-xl font-semibold text-paper-50">Pesan terkirim</h3>
        <p className="max-w-xs text-sm text-paper-100/60">
          Terima kasih sudah menghubungi kami. Tim kami akan membalas dalam 1–2 hari kerja.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-amber-500 underline-offset-4 hover:underline"
        >
          Kirim pesan lain
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-2xl border border-paper-50/10 bg-graphite-900/60 p-8 shadow-card-dark backdrop-blur-sm sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Nama Depan"
          name="firstName"
          placeholder="Budi"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
          autoComplete="given-name"
          required
        />
        <FormField
          label="Nama Belakang"
          name="lastName"
          placeholder="Santoso"
          value={values.lastName}
          onChange={handleChange}
          autoComplete="family-name"
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="nama@email.com"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
          required
        />
        <FormField
          label="No. WhatsApp (opsional)"
          name="phone"
          type="tel"
          placeholder="0812 3456 7890"
          value={values.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
        <FormField
          as="select"
          label="Jenis Proyek"
          name="projectType"
          value={values.projectType}
          onChange={handleChange}
          className="sm:col-span-2"
        >
          <option value="">Pilih jenis proyek (opsional)</option>
          {PROJECT_TYPE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormField>
        <FormField
          as="textarea"
          label="Pesan"
          name="message"
          rows={4}
          placeholder="Ceritakan kebutuhan proyek Anda..."
          value={values.message}
          onChange={handleChange}
          error={errors.message}
          className="sm:col-span-2"
          required
        />
      </div>

      {/* Honeypot — hidden from real visitors, invisible to screen readers,
          but plain enough that form-filling bots tend to fill it in. */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      {status === "error" && (
        <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Mengirim...
          </>
        ) : (
          <>
            Kirim Pesan
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
