import React from "react";

export default function Contact() {
  return (
    <div className="py-5 bg-[#d4d4d4]">
      <div className="p-6 px-[10%]">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="form-input px-3 py-2 rounded-md b border-2 border-gray"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="form-input px-3 py-2 rounded-md border-2 border-gra"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input px-3 py-2 rounded-md border-2 border-gra"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">
                <div className="flex align-items">
                  Phone
                  <span className="ml-auto opacity-75">Optional</span>
                </div>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input px-3 py-2 rounded-md border-2 border-gra"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input px-3 py-2 rounded-md border-2 border-gra"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">
                <div className="flex align-items">
                  Message
                  <span className="ml-auto opacity-75">
                    Max. 500 characters
                  </span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                type="text"
                id="subject"
                name="subject"
                className="form-input px-3 py-2 rounded-md border-2 border-gra"
                required
              />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button
              type="submit"
              class="bg-[#222222] text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
