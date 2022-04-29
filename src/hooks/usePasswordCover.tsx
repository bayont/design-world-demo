import { useState } from 'react';

export const usePasswordCover = (): [boolean, () => void] => {
   const [passwordCovered, setPasswordCovered] = useState(true);

   function togglePasswordCover() {
      setPasswordCovered((prev) => !prev);
   }

   return [passwordCovered, togglePasswordCover];
};
