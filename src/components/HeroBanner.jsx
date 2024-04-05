import hero from '../assets/assets';
const HeroBanner = () => {
  const scroll = () => {
    document.getElementById('search').scrollIntoView();
  };
  return (
    <div id='home' className='md:mt-14 mt-20  mb-24 '>
      <div className={'flex flex-col-reverse gap-4 md:ml-20 ml-0 md:flex-row'}>
        <div className='flex items-center justify-center flex-col md:w-[60%] w-full md:p-3 p-4'>
          <h1 className='text-4xl md:text-6xl mb-4 md:mb-1 md:tracking-[-0.010em] tracking-normal text-center md:text-left font-semibold pointer-events-none'>
            More than just shorter links
          </h1>
          <div className='flex flex-col items-center md:items-start'>
            <p className='mb-8 text-greyish leading-5 text-center md:text-left pointer-events-none'>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button
              className='bg-Cyan  py-[10px] px-4 rounded-lg text-white text-sm hover:opacity-70 transition-opacity font-bold md:w-40 w-1/2'
              onClick={scroll}
            >
              Shorten It!
            </button>
          </div>
        </div>
        <div className='right '>
          <img src={hero} alt='' className='w-full object-contain ' />
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
