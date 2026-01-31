import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend, FiTerminal } from "react-icons/fi";
import HackerText from "../ui/HackerText";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const res = await fetch(
        "https://formspree.io/f/xreerbrr",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        toast.success("Transaction Mined! Message Sent.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          className: "!bg-card-bg !text-green-400 !border !border-green-500/20 font-mono",
          progressClassName: "!bg-green-500"
        });
        form.current.reset();
      } else {
        toast.error("Transaction Failed. Revert.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Network Error. Check connection.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 font-sans bg-dark-bg relative overflow-hidden"
    >
      <ToastContainer />

      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Initiate <HackerText text="Protocol" className="text-[#8245ec]" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-light">
            Open a channel for collaboration or inquiries.
          </p>
        </div>

        {/* Terminal Window Form */}
        <div className="w-full bg-card-bg/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_0_50px_rgba(130,69,236,0.15)] overflow-hidden">

          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
              <FiTerminal /> contact.sh
            </div>
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>

          <div className="p-8 md:p-12">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-6 font-mono"
            >
              <div className="flex flex-col space-y-4 font-mono text-sm max-w-full">
                {/* Connection Status */}
                <div className="flex justify-between text-xs text-gray-500 border-b border-white/5 pb-2 mb-2">
                  <span>STATUS: <span className="text-green-500">CONNECTED</span></span>
                  <span>ENCRYPTION: <span className="text-neon-blue">AES-256</span></span>
                </div>

                {/* Name Input */}
                <div className="group">
                  <label className="flex items-center gap-3 text-gray-400 mb-1">
                    <span className="text-gray-600 select-none">01</span>
                    <span className="text-neon-purple">const</span> <span className="text-yellow-400">sender</span> =
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-gray-500">"</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full bg-black/30 border border-white/10 rounded px-6 py-2 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 outline-none transition-all pl-6"
                    />
                    <span className="absolute right-3 text-gray-500">";</span>
                  </div>
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="flex items-center gap-3 text-gray-400 mb-1">
                    <span className="text-gray-600 select-none">02</span>
                    <span className="text-neon-purple">const</span> <span className="text-yellow-400">email</span> =
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-gray-500">"</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full bg-black/30 border border-white/10 rounded px-6 py-2 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 outline-none transition-all pl-6"
                    />
                    <span className="absolute right-3 text-gray-500">";</span>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="group">
                  <label className="flex items-center gap-3 text-gray-400 mb-1">
                    <span className="text-gray-600 select-none">03</span>
                    <span className="text-neon-purple">let</span> <span className="text-yellow-400">subject</span> =
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-gray-500">"</span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="w-full bg-black/30 border border-white/10 rounded px-6 py-2 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 outline-none transition-all pl-6"
                    />
                    <span className="absolute right-3 text-gray-500">";</span>
                  </div>
                </div>

                {/* Message Input */}
                <div className="group">
                  <label className="flex items-center gap-3 text-gray-400 mb-1">
                    <span className="text-gray-600 select-none">04</span>
                    <span className="text-neon-purple">function</span> <span className="text-blue-400">sendMessage</span>() {"{"}
                  </label>
                  <div className="relative ml-8">
                    <span className="absolute -left-4 top-2 text-gray-600 select-none border-l border-gray-700 h-full"></span>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="// Type your message here..."
                      required
                      className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-gray-300 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
                    />
                    <span className="text-gray-400 mt-1 block">{"}"}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full py-3 bg-neon-purple/10 hover:bg-neon-purple/20 border border-neon-purple/50 hover:border-neon-purple text-neon-blue hover:text-white rounded transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest font-bold text-xs shadow-[0_0_15px_rgba(130,69,236,0.1)] hover:shadow-[0_0_25px_rgba(0,243,255,0.3)]"
                  >
                    <span>Execute_Transaction</span>
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
