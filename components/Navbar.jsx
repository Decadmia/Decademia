import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import UDomain from './UDomain';


const Navbar = ({CreateProject, }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#ecf0f3');
  const router = useRouter();

   

  useEffect(() => {
    if (
      router.asPath === '/createProject' 
    ) {
      setNavBg('#ecf0f3');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#ecf0f3');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className='  items-center'>
        <div className='relative  top-6   mx-10  items-center uppercase  w-full  '>
          <ul style={{ color: `${linkColor}` }} className=' hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-md text-gray-900 uppercase hover:border-b'>Discover</li>
            </Link>
            <Link  href='/createProject'>
              <li className='ml-10 text-md  text-gray-900 uppercase hover:border-b'>Create Project</li>
            </Link>
          </ul>
        </div>
       
       
        <div className='grid md:grid-cols-1 absolute ml-2 right-2 text-center bottom-5 '>
          {/* <Link href='#/'>
            <div className=' text-sm uppercase '>
              <button className='p-2  shadow-none text-gray-300 underline-offset-auto'>
                Connect Wallet
              </button>
            </div>
          </Link>
         */}
          <Link href='#/'>
            <div className=' text-sm uppercase '>
            <UDomain />
              
            </div>
          </Link>
        </div>

     </div>
</div>

  );
};

export default Navbar;

