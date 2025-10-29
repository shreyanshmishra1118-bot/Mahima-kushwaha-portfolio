import React, { forwardRef } from 'react';

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="contact" className="py-24 text-center fade-up-on-scroll">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-mono text-lg text-orange-500 mb-4">05. What’s Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Get In Touch</h3>
        <p className="text-slate-400 mb-8">
          I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll do my best to get back to you!
        </p>
        <a 
         href="mailto:mahimakushwah00@gmail.com"
         data-interactive
         className="inline-block bg-orange-500 text-black font-mono font-semibold px-8 py-4 rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 glow-on-hover"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;