import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLoginButton } from '../../components/Button/GoogleLoginButton';
import { Checkbox } from '../../components/Input/Checkbox';
import { Mail } from '../../components/Input/Mail';
import { Password } from '../../components/Input/Password';
import { Submit } from '../../components/Input/Submit';
import { Text } from '../../components/Input/Text';

export const Register = () => {
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
                     <Text placeholder="First name" />
                     <Text placeholder="Last name" />
                  </div>

                  <Mail placeholder="Email" />

                  <div className="relative">
                     <Password placeholder="Password" />
                  </div>
                  <div className="flex">
                     <div className="relative w-fit mr-3">
                        <Checkbox />
                     </div>
                     <p>
                        I agree with <Link to="/tos">Terms of Service</Link> and{' '}
                        <Link to="/privacy-policy">Privacy Policy</Link>
                     </p>
                  </div>

                  <Submit value="Register" />

                  <GoogleLoginButton />

                  <div className="text-center">
                     Already a Member? <Link to="/login">Login</Link>
                  </div>
               </div>
            </section>
         </form>
      </>
   );
};
