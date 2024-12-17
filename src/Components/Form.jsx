import { RiSparklingFill } from "react-icons/ri";
import Intro from "./Intro";

import { useForm } from "react-hook-form";
const Form = () => {
  //take all values onsubmit consolelogg
  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Intro />

      {/* Inputs */}
      <form
        onSubmit={handleSubmit((e) => {
          console.log(e);
        })}
        className="flex flex-col gap-1"
      >
        <input
          type="text"
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-sky-300"
          {...register("fullname")}
        />
        <input
          type="email"
          id="email"
          placeholder="you@company.com"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-sky-300"
          {...register("email")}
        />
        <input
          type="text"
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-sky-300"
          {...register("message")}
        />

        <p className="my-5 text-gray-800">How can we help?</p>

        <div className="mb-5 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input
                  type="checkbox"
                  id=""
                  className="size-5"
                  value={service}
                  {...register("services")}
                />
                {service}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-zinc-950 p-2 text-white"
        >
          Let's get started
          <RiSparklingFill className="text-lime-500" size={20} />{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
