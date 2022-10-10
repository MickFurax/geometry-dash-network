import { Lock, User } from "tabler-icons-react";
import poster from "../assets/image/poster.png";

const Login = () => {
  return (
    <div className="h-screen justify-center flex items-center bg-slate-100 text-sm overflow-y-hidden">
      <div className="md:mx-12 h-[575px] md:w-[960px] w-[425px] grid md:grid-cols-2 rounded">
        <img
          src={poster}
          alt="Background"
          className="rounded h-full flex-shrink-0 hidden md:block object-cover"
        />
        <div className="bg-white h-full flex items-center justify-center rounded">
          <Form />
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
      <div className="max-w-[340px] px-5 py-0 my-0">
        <h1 className="text-slate-700 text-4xl">Login</h1>
        <p className="text-slate-400 text-sm my-2">
          Connect your <strong>Geometry Dash</strong> account to continue
        </p>
        <form className="my-12">
          <div className="flex justify-between my-1">
            <label className="text-slate-700 font-medium">Username</label>
            <a className="text-cyan-500 text-right" href="#">
              Forgot Username?
            </a>
          </div>
          <div className="flex items-center bg-slate-100 p-2 my-2 rounded-sm">
            <User stroke-width="1.5" className="text-slate-300" />
            <input
              type="text"
              placeholder="Username"
              className="bg-slate-100 ml-1 placeholder:text-slate-300 placeholder:font-medium focus:outline-none"
            />
          </div>
          <div className="flex justify-between my-1">
            <label className="text-slate-700 font-medium">Password</label>
            <a className="text-cyan-500 text-right" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center bg-slate-100 p-2 my-2 rounded-sm">
            <Lock stroke-width="1.5" className="text-slate-300" />
            <input
              type="password"
              placeholder="Password"
              className="bg-slate-100 ml-1 placeholder:text-slate-300 placeholder:font-medium focus:outline-none"
            />
          </div>
        </form>
        <div className="flex justify-center">
          <button className="bg-pink-500 text-white p-2 px-14 rounded-full">
            Login
          </button>
          
        </div>
      </div>
  );
};

export default Login;
