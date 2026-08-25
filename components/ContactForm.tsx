"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const firstName = String(formData.get("firstName") || "");
        const surname = String(formData.get("surname") || "");
        const email = String(formData.get("email") || "");
        const company = String(formData.get("company") || "");
        const subject = String(formData.get("subject") || "");
        const message = String(formData.get("message") || "");

        const emailSubject =
            subject || "New Website Enquiry - Pride Engineering Services";

        const emailBody = `
Name: ${firstName} ${surname}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
    `.trim();

        const mailtoUrl =
            `mailto:info@prideengs.com` +
            `?subject=${encodeURIComponent(emailSubject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoUrl;
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2"
        >
            {/* First Name */}
            <div>
                <label className="text-sm font-medium text-navy">
                    First name*
                </label>

                <input
                    type="text"
                    name="firstName"
                    placeholder="Name"
                    required
                    className="mt-4 w-full border-0 border-b border-navy/20 bg-transparent px-0 pb-4 font-display text-2xl outline-none placeholder:text-navy/20 focus:border-gold"
                />
            </div>

            {/* Surname */}
            <div>
                <label className="text-sm font-medium text-navy">
                    Surname*
                </label>

                <input
                    type="text"
                    name="surname"
                    placeholder="Family name"
                    required
                    className="mt-4 w-full border-0 border-b border-navy/20 bg-transparent px-0 pb-4 font-display text-2xl outline-none placeholder:text-navy/20 focus:border-gold"
                />
            </div>

            {/* Email */}
            <div>
                <label className="text-sm font-medium text-navy">
                    Email*
                </label>

                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="mt-4 w-full border-0 border-b border-navy/20 bg-transparent px-0 pb-4 font-display text-2xl outline-none placeholder:text-navy/20 focus:border-gold"
                />
            </div>

            {/* Company */}
            <div>
                <label className="text-sm font-medium text-navy">
                    Company
                </label>

                <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="mt-4 w-full border-0 border-b border-navy/20 bg-transparent px-0 pb-4 font-display text-2xl outline-none placeholder:text-navy/20 focus:border-gold"
                />
            </div>

            {/* Subject */}
            <div className="md:col-span-2">
                <label className="text-sm font-medium text-navy">
                    Subject
                </label>

                <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Refrigeration project"
                    className="mt-4 w-full border-0 border-b border-navy/20 bg-transparent px-0 pb-4 font-display text-2xl outline-none placeholder:text-navy/20 focus:border-gold"
                />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
                <label className="text-sm font-medium text-navy">
                    Message
                </label>

                <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or requirements"
                    required
                    className="mt-4 w-full resize-none border-0 border-b border-navy/20 bg-transparent px-0 pb-4 font-display text-2xl outline-none placeholder:text-navy/20 focus:border-gold"
                />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
                <button
                    type="submit"
                    className="inline-flex items-center gap-4 bg-gold px-8 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-gold/90"
                >
                    Send Message
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </form>
    );
}