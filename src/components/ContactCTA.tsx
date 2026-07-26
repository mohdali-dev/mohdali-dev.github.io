import { useState, FormEvent } from "react";
import { Send, Check, Mail, Server, Smartphone, Sparkles, X, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactCTA({ isOpen, onClose }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "ml",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "", projectType: "ml" });
        onClose();
      }, 3500);
    }, 1200);
  };

  return (
    <>
      {/* Primary Visual Pre-CTA section shown directly in page flow */}
      <section id="contact-cta" className="relative min-h-[90vh] flex flex-col items-center justify-end pb-32 pt-48 overflow-hidden bg-black border-t border-neutral-900/60">
        <div className="absolute inset-0 z-0 flex justify-center opacity-25 md:opacity-35 pointer-events-none">
          {/* Black vertical gradient masking to blend portrait seamlessly */}
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black to-transparent z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHYADWQvyfIbmv9nVuIb9Aymm2kwkyYb96NRD0C_wcykujLyXcZDO3MQrFPP1CSZKxgYM6JxNyQxcpDnurAqWdFTdJxf5KvYEp_OzyQzTUKO3dQWft1igqbqBxXap7jK5ZcEOxh775lx5vwGYW3Pl04AYDLAKvp0BWU4jMbnn9ARgNadGJ6EIMy3otZiRm5o7swfC1voi55ccpKYITmwNwNAlqwY-WdU9TlW4r93oa3-9Gv5G94Kfv0k63Xt6EQw4FuLOlsqSzgO0"
            alt="Muhammad Ali Portrait"
            className="w-full max-w-4xl object-contain filter grayscale scale-[1.03]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 md:px-12">
          <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.6em] font-medium block mb-12">
            Project in Mind?
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[110px] leading-[1.05] tracking-tight text-white mb-16">
            Let's build something <br />
            <span className="italic gold-text font-light">intelligent.</span>
          </h2>

          <button
            onClick={onClose} // Open form
            className="px-14 py-5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 font-sans text-xs uppercase tracking-[0.3em] font-semibold text-black hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Get in touch
          </button>
        </div>
      </section>

      {/* Slide-out Panel Contacts Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Slider Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 180 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-neutral-950 border-l border-neutral-900 p-8 md:p-12 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-500 font-bold">
                    Transmission Port
                  </span>
                  <button
                    onClick={onClose}
                    className="p-1.5 text-neutral-500 hover:text-white transition-colors border border-neutral-900 rounded-sm hover:border-neutral-800"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="mb-10">
                  <h3 className="font-serif text-3xl font-extrabold text-white mb-2">Let's Connect</h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    Leave your project definitions below. Muhammad Ali usually responds within 12 standard business hours.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 border border-amber-500/20 bg-amber-500/5 text-center space-y-4 my-8"
                  >
                    <div className="w-12 h-12 rounded-full border border-amber-500/30 bg-black flex items-center justify-center mx-auto">
                      <Check size={20} className="text-amber-500" />
                    </div>
                    <h4 className="font-serif text-lg text-white font-bold">Transmission Successful</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      Your project definition has been dispatched to Muhammad’s direct terminal queue. Talk soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Category Selecting */}
                    <div className="space-y-2">
                      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 block">
                        Project Primary Area
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "ml", label: "AI/ML Fine-tuning" },
                          { id: "fs", label: "Full Stack Web" },
                          { id: "ops", label: "MLOps Scaled Pipeline" },
                          { id: "other", label: "Other Services" },
                        ].map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: cat.id })}
                            className={`p-3 border text-left text-xs font-mono transition-all ${
                              formData.projectType === cat.id
                                ? "border-amber-500 bg-amber-500/5 text-amber-400 font-semibold"
                                : "border-neutral-900 bg-neutral-950 text-neutral-400 hover:border-neutral-800"
                            }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 block">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border border-neutral-900 rounded-xs px-4 py-3 text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Email Port */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 block">
                        Email Port
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@organization.com"
                        className="w-full bg-neutral-950 border border-neutral-900 rounded-xs px-4 py-3 text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label htmlFor="company-input" className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 block">
                        Company / Workspace
                      </label>
                      <input
                        id="company-input"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Aperture Laboratories"
                        className="w-full bg-neutral-950 border border-neutral-900 rounded-xs px-4 py-3 text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Deep Specs */}
                    <div className="space-y-2">
                      <label htmlFor="message-input" className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 block">
                        Project Parameters / Message
                      </label>
                      <textarea
                        id="message-input"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide deep descriptions on scale, deadlines, or tech targets..."
                        className="w-full bg-neutral-950 border border-neutral-900 rounded-xs px-4 py-3 text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-amber-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-[0.25em] flex justify-center items-center gap-2 transform active:scale-98 transition-all"
                    >
                      {loading ? "Transmitting..." : "Initialize Link Connection"}
                      <Send size={12} />
                    </button>
                  </form>
                )}
              </div>

              {/* Standard contact ports footer */}
              <div className="mt-12 pt-6 border-t border-neutral-900 text-center space-y-2">
                <p className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none">
                  Direct channels
                </p>
                <a
                  href="mailto:aliskdse@gmail.com"
                  className="font-mono text-xs text-neutral-400 hover:text-amber-500 transition-colors inline-block"
                >
                  aliskdse@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
