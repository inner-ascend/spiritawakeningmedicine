import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImagePlaceholder from '../ImagePlaceholder';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      await emailjs.send(
        'service_YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'template_YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'spiritawakeningmedicine@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try emailing us directly.');
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-earth-900">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            altText="Sacred entrance to ceremony space in Mazunte"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="text-5xl text-sacred-gold/60 mb-8">⊹</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-white mb-8 leading-tight">
            Begin Your Application
          </h1>
          <p className="text-2xl md:text-3xl text-sacred-gold/90 font-serif italic mb-8">
            "This work is never sold. Only offered."
          </p>
          <p className="text-lg md:text-xl text-desert-sand/80 leading-relaxed max-w-3xl mx-auto">
            If you feel the call, begin with discernment.<br/>
            This is sacred territory—not a service.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sacred-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              The Application Process
            </h2>

            <div className="space-y-6 text-earth-700/80 leading-relaxed text-lg mb-16">
              <p className="text-center text-2xl font-serif text-sacred-gold italic mb-8">
                An invitation to mutual discernment
              </p>

              <p>
                This is not an offering we promote publicly. If you're here, you've been guided,
                invited, or felt the call. The application process exists to protect all of us—
                and to honor the sacred nature of this work.
              </p>

              <p>
                <strong className="text-earth-800">Not everyone is a fit.</strong> And that's sacred.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif text-earth-800 mb-8 text-center">The Steps:</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">Submit Private Application</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      Fill out the form below honestly and completely. Your application will be
                      reviewed in deep presence—not scanned quickly. We read every word.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">Discernment & Response</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      If there's alignment, we'll reach out within 3-7 days to schedule a brief
                      conversation or proceed directly to preparation sessions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">Preparation Sessions</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      1-2 preparation sessions are required before ceremony. These build the container,
                      assess readiness, and ensure you're prepared for ego dissolution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">Medical Screening</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      Complete health questionnaire to rule out contraindications. Safety is paramount.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">Ceremony in Mazunte</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      Only after preparation and screening, we discuss ceremony dates. Held in
                      Mazunte, Oaxaca, Mexico in a sacred, private container.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                    <span className="text-sacred-gold font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-800 mb-2">Integration Support</h4>
                    <p className="text-earth-700/70 text-sm leading-relaxed">
                      Integration within 48 hours included. Ongoing support available through
                      individual sessions or extended containers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-6 text-center">
              <p className="text-earth-700/80 leading-relaxed italic">
                "This isn't a transaction. It's a relationship. With the medicine. With yourself.
                With what wants to be remembered."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nina & Astral Portrait */}
      <div className="h-[60vh] relative overflow-hidden">
        <ImagePlaceholder
          aspectRatio="21/9"
          altText="Nina and Astral - Ceremony facilitators"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/20 to-earth-900/50"></div>
      </div>

      {/* Tally Form Embed */}
      <div className="bg-white py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-8 text-center">
              Private Application Form
            </h2>

            <p className="text-lg text-earth-700/70 text-center mb-12 leading-relaxed">
              Take your time. Answer honestly. There's no rush—this is sacred work.
            </p>

            {/* Tally Form Iframe */}
            <div className="bg-sacred-cream rounded-2xl p-8">
              <iframe
                src="https://tally.so/r/mYXQVN"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Spirit Awakening Medicine - Bufo Ceremony Application"
                className="rounded-lg"
              />
            </div>

            <p className="text-sm text-earth-700/60 text-center mt-8">
              Having issues with the form?{' '}
              <a
                href="https://tally.so/r/mYXQVN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sacred-gold hover:text-sacred-amber transition-colors"
              >
                Open in new window →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Simple Contact Form */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-8 text-center">
              Or Send Us a Quick Message
            </h2>

            <p className="text-lg text-earth-700/70 text-center mb-12 leading-relaxed">
              Prefer a simpler form? Send us a message and we'll get back to you within 3-7 days.
            </p>

            {sent ? (
              <div className="bg-white rounded-2xl p-12 text-center border-2 border-sacred-gold/40">
                <div className="text-5xl mb-6">🙏</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">Message Sent</h3>
                <p className="text-earth-700/70 leading-relaxed mb-6">
                  Thank you for reaching out. We'll respond within 3-7 days.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sacred-gold hover:text-sacred-amber transition-colors font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-earth-800 font-serif mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-earth-800 font-serif mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-earth-800 font-serif mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder="What brings you here?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-earth-800 font-serif mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-earth-700/20 focus:border-sacred-gold focus:outline-none focus:ring-2 focus:ring-sacred-gold/20 transition-all resize-none"
                    placeholder="Tell us what you're called to explore..."
                  />
                </div>

                {error && (
                  <div className="bg-desert-clay/10 border-l-4 border-desert-clay rounded-r-lg p-4">
                    <p className="text-earth-700/80 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all font-medium text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <div className="bg-sacred-cream py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-800 mb-12 text-center">
              Other Ways to Connect
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Email */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">Email</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  For questions, ceremony inquiries, or integration support
                </p>
                <a
                  href="mailto:spiritawakeningmedicine@gmail.com"
                  className="text-sacred-gold hover:text-sacred-amber transition-colors font-medium"
                >
                  spiritawakeningmedicine@gmail.com
                </a>
              </div>

              {/* WhatsApp/Telegram */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">WhatsApp / Telegram</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  For voice messages or text communication
                </p>
                <p className="text-sacred-gold font-medium mb-2">+34 611 14 41 70</p>
                <p className="text-xs text-earth-700/60">
                  Telegram: @astralintegration
                </p>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">Instagram</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  Updates, ceremony offerings, and integration practices
                </p>
                <a
                  href="https://instagram.com/inner__ascend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sacred-gold hover:text-sacred-amber transition-colors font-medium"
                >
                  @inner__ascend
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-serif text-earth-800 mb-4">Location</h3>
                <p className="text-earth-700/70 mb-4 leading-relaxed text-sm">
                  Ceremonies held in nature-based sacred container
                </p>
                <p className="text-sacred-gold font-medium">
                  Mazunte, Oaxaca, Mexico
                </p>
                <p className="text-xs text-earth-700/60 mt-2">
                  (Preparation & Integration available online)
                </p>
              </div>
            </div>

            <div className="bg-medicine-venom rounded-2xl p-8 max-w-2xl mx-auto">
              <h4 className="text-xl font-serif text-earth-800 mb-4 text-center">Response Time</h4>
              <p className="text-earth-700/80 leading-relaxed text-center text-sm">
                We aim to respond to all applications and inquiries within 3-7 days. If you don't
                hear back, check your spam folder or send a follow-up email. Sometimes messages
                get lost—it doesn't mean you're not meant to be here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="relative py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/70 to-earth-900/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-5xl text-sacred-gold/60 mb-8">⊛</div>
              <h2 className="text-3xl md:text-4xl font-serif text-sacred-white mb-8">
                Important to Know
              </h2>
            </div>

            <div className="space-y-6 text-desert-sand/80 leading-relaxed">
              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">Ceremony is never booked directly.</strong> Only after preparation sessions and mutual discernment.</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">Medical screening is mandatory.</strong> If you have contraindications, we will not proceed—for your safety.</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">Integration is non-negotiable.</strong> The medicine is a doorway—integration is the path.</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">This work is not for everyone.</strong> If your application doesn't feel aligned, we'll tell you honestly. That's not rejection—it's discernment.</span>
                </p>
              </div>

              <div className="bg-earth-900/40 backdrop-blur-xl rounded-2xl p-6">
                <p className="flex items-start gap-3">
                  <span className="text-sacred-gold text-xl">•</span>
                  <span><strong className="text-sacred-white">No one is turned away for lack of funds.</strong> Sliding scale available. If the call is genuine, we'll find a way.</span>
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-2xl font-serif text-sacred-gold/90 italic leading-relaxed">
                "Trust yourself. If you feel called, let's walk slowly.<br/>
                This is sacred territory—not a service."
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-desert-sand/70">
                <Link to="/ceremonies" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  ← Learn about Ceremonies
                </Link>
                <span className="mx-4 text-desert-sand/40">|</span>
                <Link to="/faq" className="text-sacred-gold hover:text-sacred-amber transition-colors">
                  Read FAQ & Safety →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
