"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { services } from "@/lib/site";

// The site's only contact channel (RULES.md §3). No phone field, no address.
export default function ContactForm({ compact = false }) {
  const [state, setState] = useState({ status: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ status: "sending", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        form.reset();
        setState({ status: "sent", message: "Thanks — your message is in our inbox. We reply within one business day." });
      } else {
        setState({ status: "error", message: json.message || "Could not send right now. Please try again." });
      }
    } catch {
      setState({ status: "error", message: "Network error. Please try again." });
    }
  }

  const sending = state.status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <label className="grid gap-2">
          <span className="text-[13px] font-semibold text-white/70">Name *</span>
          <input name="name" required maxLength={120} autoComplete="name" placeholder="Your full name" className="field" />
        </label>
        <label className="grid gap-2">
          <span className="text-[13px] font-semibold text-white/70">Email *</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
          />
        </label>
      </div>

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <label className="grid gap-2">
          <span className="text-[13px] font-semibold text-white/70">Company</span>
          <input
            name="company"
            maxLength={140}
            autoComplete="organization"
            placeholder="Company or project name"
            className="field"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-[13px] font-semibold text-white/70">What do you need?</span>
          <select name="service" defaultValue="" className="field">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-[13px] font-semibold text-white/70">Message *</span>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          maxLength={4000}
          placeholder="Goals, scope, timeline — whatever you already know."
          className="field resize-y"
        />
      </label>

      <div className="mt-1 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} className="btn btn-primary disabled:opacity-60">
          {sending ? "Sending…" : "Send message"}
          {!sending && <Icon name="arrow" size={16} strokeWidth={2} />}
        </button>
        <p className="text-[13px] text-muted">We reply by email within one business day.</p>
      </div>

      {state.message && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-xl border px-4 py-3 text-sm ${
            state.status === "error"
              ? "border-red-500/40 bg-red-500/10 text-red-300"
              : "border-accent/40 bg-accent/10 text-accent-soft"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
