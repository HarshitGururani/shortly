import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../assets/logo.svg';
import { navItems } from '../assets/assets';
import { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setOpenMenu(!openMenu);
    setMobileNav(!mobileNav);
  };
  return (
    <ContentWrapper className={'relative '}>
      <nav className='md:mt-6 mt-3 flex items-center justify-between mx-2'>
        <div className='flex items-center scroll-smooth '>
          <img src={logo} alt='' className='md:w-24 w-20  md:mr-8 mr-0' />
          {navItems.map((item, id) => (
            <a
              href={item.link}
              key={id}
              className='text-greyish font-bold text-sm mr-6 hover:text-black transition-colors hidden md:block'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <div className='hidden md:flex gap-6 '>
            <button className='text-greyish text-base hover:text-black transition-colors'>
              Login
            </button>
            <button className='bg-Cyan  py-[5px] px-4 rounded-full text-white text-sm hover:opacity-70 transition-opacity'>
              Sign up
            </button>
          </div>
          <div
            className='block md:hidden
          '
            onClick={handleNav}
          >
            {!openMenu ? <RiMenu2Fill size={32} /> : <IoMdClose size={32} />}
          </div>
        </div>
      </nav>

      {mobileNav && (
        <div
          className={`w-[100%] top-12 z-10 bg-Dark-Violet absolute md:hidden p-10 rounded-lg `}
        >
          <div
            className={`flex flex-col  text-white items-center text-lg font-bold gap-8`}
            onClick={handleNav}
          >
            {navItems.map((item, id) => (
              <a href={item.link} key={id} className=''>
                {item.name}
              </a>
            ))}
          </div>
          <hr className='mt-7' />
          <div
            className='flex flex-col gap-4 items-center'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <button className='font-bold text-lg  mt-5 text-white'>
              Login
            </button>
            <button className='bg-Cyan  py-2  rounded-full text-white text-lg w-full'>
              Sign up
            </button>
          </div>
        </div>
      )}
    </ContentWrapper>
  );
};
export default Navbar;
