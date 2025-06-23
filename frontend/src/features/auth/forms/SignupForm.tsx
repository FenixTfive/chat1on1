import React from "react";

const SignupForm: React.FC = () => {
  return (
    <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl lg:pb-4 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
        <h5>Create your account</h5>
      </div>
      <div className="flex-auto p-12 pt-0 pb-6 text-center">
        <div className="flex-auto p-1 text-center">
          <form
          // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                aria-label="Name"
                aria-describedby="email-addon"
                // {...register("Name", {
                //   required: true,
                //   // pattern: /^\S+@\S+$/i,
                // })}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                aria-label="Email"
                aria-describedby="email-addon"
                // {...register("Email", {
                //   required: true,
                //   pattern: /^\S+@\S+$/i,
                // })}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="password-addon"
                // {...register("Password", { required: true, maxLength: 80 })}
              />
            </div>
            <div className="block min-h-6 pl-7">
              <input
                id="terms"
                className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                type="checkbox"
              />
              <label
                className="mb-2 text-sm font-normal text-left cursor-pointer select-none text-slate-700"
                htmlFor="terms"
              >
                I agree the{" "}
                <a href="/" className="font-bold text-slate-700">
                  Terms&nbsp;and&nbsp;Conditions
                </a>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block w-full px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-md cursor-pointer active:opacity-85 hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
              >
                Sign up
              </button>
            </div>
            <p className="mt-8 mb-0 text-sm leading-normal">
              Already have an account?
              <br />
              <span
                // onClick={() => setShowLogin(!showLogin)}
                className="font-bold text-slate-700 cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
