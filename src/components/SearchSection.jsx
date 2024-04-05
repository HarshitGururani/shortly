import shortenMobile from '../assets/bg-shorten-mobile.svg';
import shortenDesktop from '../assets/bg-shorten-desktop.svg';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaRegClipboard } from 'react-icons/fa';

const SearchSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState('');
  const [newLink, setNewLink] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('link cant be empty');
    } else {
      const apiKey = import.meta.env.API_KEY_VITE;

      const shortenLink = async () => {
        const res = await fetch(
          `https://www.shareaholic.com/v2/share/shorten_link?apikey=${apiKey}&url=${text}`
        );
        const items = await res.json();
        setNewLink(items.data);
      };
      shortenLink();
    }
  };
  const clearAll = () => {
    const timeoutId = setTimeout(() => {
      setNewLink('');
      setText('');
    }, 2000);

    return () => clearTimeout(timeoutId);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='relative' id='search'>
        <ContentWrapper
          className={
            'md:h-48 h-40 bg-Dark-Violet rounded-lg overflow-hidden md:w-full w-[90%] '
          }
        >
          <img
            src={isMobile ? shortenMobile : shortenDesktop}
            alt='Your Image'
            className='md:h-48 h-44'
          />

          <form
            className='absolute left-2/4 top-2/4 input-transform w-[70%]  '
            onSubmit={handelSubmit}
          >
            <div className='flex md:flex-row flex-col items-center gap-2'>
              <input
                type='url'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Shorten a link here'
                className='py-2 px-4 md:mb-0 mb-2 rounded-lg w-full outline-none
            '
              />
              <button
                className='bg-Cyan  py-[10px] px-4 rounded-lg text-white text-sm hover:opacity-70 transition-opacity font-bold md:w-40 w-full'
                onSubmit={handelSubmit}
              >
                Shorten It!
              </button>
            </div>
          </form>
        </ContentWrapper>
      </div>
      <ContentWrapper
        className={
          ' mb-24 flex md:flex-row flex-col gap-4 md:gap-0 justify-between text-sm px-4 mt-6'
        }
      >
{/*         {text && <p className='pointer-events-none'>{text}</p>} */}

        <div className='flex items-center gap-4'>
          <p className='pointer-events-none text-emerald-500'>{newLink}</p>
          {newLink && (
            <CopyToClipboard text={newLink}>
              <button onClick={clearAll}>
                <FaRegClipboard size={22} />
              </button>
            </CopyToClipboard>
          )}
        </div>
      </ContentWrapper>
    </>
  );
};
export default SearchSection;
