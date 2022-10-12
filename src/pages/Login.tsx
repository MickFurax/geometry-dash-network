import { Lock, User } from "tabler-icons-react";
import poster from "../assets/image/poster.png";
import icon from "../assets/image/icon.svg";

const Login = () => {
  return (
    <div className="text-slate-600 md:bg-slate-100 md:px-32 px-16 pt-10 md:pt-0 min-h-full flex justify-center md:items-center">
      <div className="grid md:grid-cols-2">
        <img
          src={poster}
          alt="Background"
          className="h-full hidden md:block object-cover"
        />
        <div className="bg-white md:px-10 lg:px-24 md:py-16 md:flex flex-col justify-center">
          <div className="text-2xl font-medium mb-10 mt-6 flex flex-row items-center justify-between md:hidden">
            <img src={icon} alt="icon" className="h-16 w-16" />
            <div className="text-right">
              <span className="text-rose-500 ">Geometry Dash</span>
              <br />
              <span className="text-white bg-cyan-500 px-1">Network</span>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="">
      <h1 className="text-slate-700 text-4xl font-medium">Login</h1>
      <p className="text-slate-500 mt-2">
        Connect your <strong>Geometry Dash</strong> account to continue
      </p>
      <form className="mt-10">
        <div className="mt-2 flex justify-between">
          <label className="font-medium">Username</label>
          <a className="text-cyan-500 text-right" href="#">
            Forgot Username?
          </a>
        </div>
        <div className="bg-slate-100 mt-2 p-3 rounded-sm flex">
          <User stroke-width="1.5" className="text-slate-300" />
          <input
            type="text"
            placeholder="Username"
            className="placeholder:text-slate-300 bg-transparent w-full  pl-2 focus:outline-none"
          />
        </div>
        <div className="mt-2 flex justify-between">
          <label className="font-medium">Password</label>
          <a className="text-cyan-500 text-right" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="bg-slate-100 mt-2 p-3 rounded-sm flex">
          <Lock stroke-width="1.5" className="text-slate-300" />
          <input
            type="password"
            placeholder="Password"
            className="placeholder:text-slate-300 bg-transparent w-full pl-2 focus:outline-none"
          />
        </div>
      </form>
      <div className="mt-6 flex justify-center">
        <button className="text-white font-medium bg-rose-500 px-16 p-3 rounded-full">
          Login
        </button>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <div className="bg-slate-300 h-[1px] w-full"></div>
        <span className="bg-white px-4">or</span>
        <div className="bg-slate-300 h-[1px] w-full"></div>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="">
          <span>New on Geometry Dash? </span>
          <a href="#" className="text-cyan-500">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
