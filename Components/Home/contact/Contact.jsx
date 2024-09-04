import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import SectionTitlte from "@/Components/Common/SectionTitlte";
import Footer from "@/Components/Common/Footer";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.name.value === "") {
      swal("Error!", "Please enter your name!", "error");
      return;
    }
    if (form.current.email.value === "") {
      swal("Error!", "Please enter your email!", "error");
      return;
    }
    if (form.current.message.value === "") {
      swal("Error!", "Please enter your message!", "error");
      return;
    }

    emailjs
      .sendForm(
        "service_60bgamg",
        "template_ltt18lq",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Success!", "Your message is sent!", "success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl  my-9">
      <div className=" py-12 px-2 sm:px-5 md:px-10  w-full    ">
        <SectionTitlte title={"Get in touch"} />
        <div className=" w-11/12 m-auto ">
          <h2 className="text-2xl">
            Im always open to discussing about new{" "}
            <span className="text-green-400">Projects</span> or{" "}
            <span className="text-red-400">Opportunities.</span>
          </h2>
          <form ref={form} className="mt-10">
            <label
              for="Name"
              className="relative block rounded-md border-b  focus-within:border-green-400 focus-within:ring-0 w-full focus-within:ring-green-400 focus-within:ring-opacity-50 my-5"
            >
              <input
                required
                type="text"
                name="name"
                id="Name"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3 w-full  h-5/6 "
                placeholder="Name"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-[#0D0D0D] p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Your Name
              </span>
            </label>
            <label
              for="Email"
              className="relative block rounded-md border-b   focus-within:border-green-400 focus-within:ring-0 w-full focus-within:ring-green-400 focus-within:ring-opacity-50 my-5"
            >
              <input
                required
                type="text"
                name="email"
                id="Email"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3 w-full h-5/6"
                placeholder="Email"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-[#0D0D0D] p-0.5 text-xs text-gray-700 dark:text-gray-300  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Email
              </span>
            </label>
            <label
              for="TextArea"
              className="relative block rounded-md border-b   focus-within:border-green-400 focus-within:ring-0 w-full focus-within:ring-green-400 focus-within:ring-opacity-50 my-5"
            >
              <textarea
                id="TextArea"
                name="message"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3 w-full h-5/6"
                placeholder="Your Message"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-[#0D0D0D] p-0.5 text-xs text-gray-700 dark:text-gray-300  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Your Message
              </span>
            </label>
            <div className="flex justify-end">
              <button
                onClick={sendEmail}
                className="bg-gradient-to-l to-[#23CE6B] from-[#286e45] text-white rounded-md px-4 py-2 mt-5 hover:from-[#23CE6B] hover:to-[#286e45] cursor-pointer"
                value="Send Message"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
