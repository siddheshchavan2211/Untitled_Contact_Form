import { RiSparklingFill } from "react-icons/ri";
import Intro from "./Intro";
const Form = () => {
  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  return (
    <>
      <Intro />

      {/* Inputs */}
      <form onClick={(e) => e.preventDefault()} className="flex flex-col gap-1">
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
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-300"
        />

        <p className="my-5 text-gray-800">How can we help?</p>

        <div className="mb-5 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input type="checkbox" name="" id="" className="size-5" />{" "}
                {service}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-zinc-950 p-2 text-white"
        >
          Let's get started{" "}
          <RiSparklingFill className="text-lime-500" size={20} />{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
