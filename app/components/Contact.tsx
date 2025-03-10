import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <main
        id="contact"
        className="h-screen w-screen bg-[#211E19ff] bg-gradient-to-b from-black/70 to-transparent flex items-center justify-center gap-6"
      >
        <div className="w-1/2">
          <h2 className="text-3xl font-bold my-10">Let's work together</h2>
          <Image
            src={"/contact.png"}
            width={700}
            height={800}
            alt="Contact me"
          />
        </div>

        <div>
          <ul className="w-1/2">
            <li className="py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
                stroke-width="0.75"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              <h3 className="font-bold text-xl">Email</h3>
              <p>caradecmariana@gmail.com</p>
            </li>

            <li className="py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
                stroke-width="0.75"
              >
                <path d="M20 4l-2 2"></path> <path d="M22 10.5l-2.5 -.5"></path>
                <path d="M13.5 2l.5 2.5"></path>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
              <h3 className="font-bold text-xl">Phone number</h3>
              <p>(+54 9) 343 613 4828 </p>
            </li>

            <li className="py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
                stroke-width="0.75"
              >
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
              <h3 className="font-bold text-xl">Instagram</h3>
              <p>@caradecmariana</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Contact;
