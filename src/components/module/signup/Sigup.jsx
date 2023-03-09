import React, { useState } from "react";
import Input from "../../base/input-auth/Input";
import Button from "../../base/button-auth/Button";
import ButtonGoogle from "../../base/button-auth/ButtonGoogle";
import eye from "../../../assets/icon/eye.svg";
import eye2 from "../../../assets/icon/eye2.svg";
import back from "../../../assets/icon/back.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { register } from "../../../config/features/auth/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      setLoading(true);
      dispatch(register({ values, navigate, toast, setLoading, handleReset }));
    },
  });
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="min-h-screen flex justify-center items-center bg-[#f6f6f6]">
        <div className=" w-2/5 px-10 rounded-xl bg-white shadow-lg border">
          <div className="flex justify-center relative">
            <img
              src={back}
              alt="back"
              className="absolute left-0 top-[30px] cursor-pointer transition-all"
              onClick={() => navigate("/login")}
            />
            <h1 className="mb-10 mt-5 self-center text-2xl font-medium text-[#7E98DF]">
              Register
            </h1>
          </div>

          <p className="mb-8">let's, create your account</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                values={values.name}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                values={values.email}
              />
            </div>
            <div className="mt-3 relative">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                values={values.password}
              />
              <img
                src={showPassword ? eye : eye2}
                alt="eye"
                className="absolute w-5 right-3 top-8 cursor-pointer"
                onClick={handleShowPassword}
              />
            </div>
            <p className="my-5 text-end">Forgot password?</p>
            {loading ? (
              <button
                className="flex gap-5 justify-center items-center w-full p-3 bg-[#7E98DF] rounded-full font-medium text-white text-lg hover:bg-[#9ab3f8] transition-all"
                disabled
              >
                Register
                <div class="h-5 w-5 border-2 rounded-full border-l-0 border-b-0 animate-spin"></div>
              </button>
            ) : (
              <Button name="Register" type="submit" />
            )}
          </form>
          <div className="my-8 flex justify-between items-center  text-gray-400">
            <hr className="border border-gray-400 w-28" />
            <p className="text-lg">Register with</p>
            <hr className="border border-gray-400 w-28" />
          </div>
          <ButtonGoogle />
          <p className="my-8 text-center cursor-pointer transition-all">
            Already have an account?{" "}
            <b className="text-[#7E98DF]" onClick={() => navigate("/login")}>
              Login
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
