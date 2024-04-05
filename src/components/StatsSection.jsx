import { cards } from '../assets/assets';
import ContentWarpper from '../contentWrapper/ContentWrapper';
const StatsSection = () => {
  return (
    <>
      <div
        className='bg-gray-200 flex items-center justify-center pointer-events-none '
        id='features'
      >
        <ContentWarpper className={''}>
          <div className='flex justify-center items-center flex-col mt-[100px]'>
            <h1 className=' font-semibold text-3xl mb-3'>
              Advanced Statistics
            </h1>
            <div className='w-[330px] md:w-[420px] text-center'>
              <p className='text-gray-400'>
                Track how your links are performing across the web with our
                advanced statistics dashboard
              </p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col mt-24 gap-12 ml-6 mr-6 md:ml0 md:mr-0 mb-16'>
            {cards.map((item, id) => (
              <div key={id}>
                <div className='bg-white rounded-lg p-6  relative'>
                  <div className='absolute -top-8 md:left-4 left-[40%] p-[10px] rounded-full bg-Dark-Violet'>
                    <img src={item.icon} alt='' />
                  </div>
                  <h1 className='mt-12 text-xl font-bold'>{item.title}</h1>
                  <p className='text-gray-400 text-sm md:mt-4 mt-2'>
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ContentWarpper>
      </div>
    </>
  );
};
export default StatsSection;
