import { RiMagicLine } from "react-icons/ri";
const Form = () => {
  return (
    <>
      {/* Intro */}
      <h1 className="mb-3 text-3xl font-bold">
        Got Ideas? <RiMagicLine className="inline-block" /> We've got <br /> the
        skills. Let's team up.
      </h1>
      <p className="mb-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>

      {/* Inputs */}
      <form className="flex flex-col gap-1">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-300"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@company.com"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-300"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a bit about your project..."
          className="mb-4 h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-300"
        />
        <p className="text-gray-700">How can we help?</p>

        
      </form>
    </>
  );
};
export default Form;
