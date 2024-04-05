const BoostLink = () => {
  const scroll = () => {
    document.getElementById('search').scrollIntoView(0, 100);
  };
  return (
    <div className='boost-mobile md:boost-desktop bg-Dark-Violet text-white p-12 flex items-center justify-center flex-col '>
      <h2 className='mb-3 text-2xl font-bold pointer-events-none'>
        Boost your links today
      </h2>
      <button
        className='bg-Cyan py-[8px] px-4 rounded-2xl text-white text-sm hover:opacity-70 transition-opacity font-bold  '
        onClick={scroll}
      >
        Get Started
      </button>
    </div>
  );
};
export default BoostLink;
