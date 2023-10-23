import React from "react";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

type SignUpFormInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSignUp(data: any) {
    console.log(data);

    try {
      Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleSignUp)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: "Email is required" })}
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-red-400 my-2 text-xs">
                  {errors.email?.message}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-red-400 my-2 text-xs">
                  {errors.password?.message}
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                  })}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-red-400 my-2 text-xs">
                  {errors.confirmPassword?.message}
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
