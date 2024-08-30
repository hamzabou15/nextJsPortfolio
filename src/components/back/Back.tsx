"use client"
import { useRouter } from 'next/navigation'
import { IoArrowBack } from 'react-icons/io5';

export const Back = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back();
  };


  return (
    <button
      onClick={handleGoBack}
      className='text-[#ff] mix-blend-difference fixed top-[100px] left-0 px-7 z-[50] cursor-pointer max-md:hidden group flex items-center gap-3'
    >
      <div className='w-12 h-12 rounded-full bg-transparent flex justify-center border-transparent hover:bg-[#f1c4531b] items-center border hover:border-[#fff] transition duration-[0.3s] ease-in'>
        <IoArrowBack className='text-2xl' />
      </div>
      <span className='opacity-0 group-hover:opacity-100 transition duration-[0.3s] ease-in'>
        Back
      </span>
    </button>

  );
};
