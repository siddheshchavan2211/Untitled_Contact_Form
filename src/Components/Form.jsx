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
          {...register("fullname", { required: "please enter your name" })}
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}
        <input
          type="email"
          id="email"
          placeholder="you@company.com"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-sky-300"
          {...register("email", { required: "please enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email",
            },
           })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          type="text"
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-sky-300"
          {...register("message", {
            required: "please enter your message",
            minLength: {
              value: 10,
              message: "Please enter at least 10 characters",
            },
          })}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
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
                  {...register("services", {
                    required: "please select atleast one service",
                  })}
                />
                {service}
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p className="text-red-500">{errors.services.message}</p>
        )}
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
