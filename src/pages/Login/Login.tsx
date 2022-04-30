import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLoginButton } from '../../components/Button/GoogleLoginButton';
import { Mail } from '../../components/Input/Mail';
import { Password } from '../../components/Input/Password';
import { Submit } from '../../components/Input/Submit';

export const Login = () => {
   return (
      <>
         <form className="ml-24" action="">
            <h1 className="font-semibold text-[64px]">Login</h1>
            <section className="max-w-xl mt-5">
               <div className="flex flex-col gap-y-5">
                  <Mail placeholder="Email" />

                  <div className="relative">
                     <Password placeholder="Password" />
                  </div>

                  <Submit value="Login" />

                  <GoogleLoginButton />

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
