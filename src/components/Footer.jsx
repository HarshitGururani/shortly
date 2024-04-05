import { company, features, resources, social } from '../assets/assets';
import logo from '../assets/footerLogo.svg';
import ContentWrapper from '../contentWrapper/ContentWrapper';
const Footer = () => {
  return (
    <div className='bg-Very-Dark-Violet' id='contact'>
      <ContentWrapper className='flex flex-col items-center justify-center md:grid grid-col-4  gap-4 text-white p-7 '>
        <div className='mx-auto my-0 '>
          <img src={logo} alt='' className='logo-img ' />
        </div>
        <div className='flex flex-col items-center md:items-start gap-2 '>
          <h1 className='pointer-events-none'>Features</h1>
          <div className='text-gray-400 text-xs cursor-pointer'>
            {features.map((items, id) => (
              <p
                key={id}
                className='mb-2 flex flex-col items-center md:items-start '
              >
                {items}
              </p>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <h1 className='pointer-events-none'>Resources</h1>
          <div className='text-gray-400 text-xs cursor-pointer'>
            {resources.map((items, id) => (
              <p key={id} className='mb-2'>
                {items}
              </p>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2 '>
          <h1 className='pointer-events-none'>Company</h1>
          <div className='text-gray-400 text-xs cursor-pointer'>
            {company.map((items, id) => (
              <p key={id} className='mb-2'>
                {items}
              </p>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-start mt-4 '>
          <div className='flex gap-5 items-center cursor-pointer'>
            {social.map((items, id) => (
              <img key={id} src={items} alt='' />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default Footer;
