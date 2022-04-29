import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePasswordCover } from '../../hooks/usePasswordCover';

export const Login = () => {
   const [passwordCovered, togglePasswordCover] = usePasswordCover();

   return (
      <>
         <form className="ml-24" action="">
            <h1 className="font-semibold text-[64px]">Login</h1>
            <section className="max-w-xl mt-5">
               <div className="flex flex-col gap-y-5">
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

                  <input type="submit" value="Register" />

                  <button>Login with Google</button>
                  <div className="text-center">
                     Don't have an account yet?{' '}
                     <Link to="/register">Register</Link>
                  </div>
               </div>
            </section>
         </form>
      </>
   );
};
