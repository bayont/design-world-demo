import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePasswordCover } from '../../hooks/usePasswordCover';

export const Register = () => {
   const [passwordCovered, togglePasswordCover] = usePasswordCover();
   return (
      <>
         <form className="ml-24" action="">
            <p className="text-primary-main font-bold text-2xl">
               Start for free
            </p>
            <h1 className="font-semibold text-[64px]">Create new account</h1>
            <section className="max-w-xl mt-5">
               <div className="flex flex-col gap-y-5">
                  <div className="flex gap-x-5">
                     <input
                        className="w-full"
                        type="text"
                        placeholder="First name"
                     />
                     <input
                        className="w-full"
                        type="text"
                        placeholder="Last name"
                     />
                  </div>
                  <input type="text" placeholder="Email" />

                  <div className="relative">
                     <input
                        className="w-full"
                        type={passwordCovered ? 'password' : 'text'}
                        placeholder="Password"
                     />
                     <div>
                        <span
                           onClick={(e) => {
                              e.stopPropagation();
                              togglePasswordCover();
                           }}
                           className="material-icons-round select-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-60"
                        >
                           {passwordCovered ? 'visibility_off' : 'visibility'}
                        </span>
                     </div>
                  </div>
                  <div className="flex">
                     <div className="relative w-fit mr-3">
                        <input
                           type="checkbox"
                           name="tos-agreement"
                           id="tos-agreement"
                        />
                        <div className="checkmark"></div>
                     </div>
                     <p>
                        I agree with <Link to="/tos">Terms of Service</Link> and{' '}
                        <Link to="/privacy-policy">Privacy Policy</Link>
                     </p>
                  </div>

                  <input type="submit" value="Register" />

                  <button>Login with Google</button>
                  <div className="text-center">
                     Already a Member? <Link to="/login">Login</Link>
                  </div>
               </div>
            </section>
         </form>
      </>
   );
};
