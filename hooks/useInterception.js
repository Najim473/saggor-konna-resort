import { useEffect } from 'react';

const useInterception = (divRef) => {
  const callBackFunc = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      divRef.current.classList.add('skrAnimationScrollActiveEl');
      return;
    }
    divRef.current &&
      divRef.current.classList.remove('skrAnimationScrollActiveEl');
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(callBackFunc, options);
    if (divRef.current) observer.observe(divRef.current);

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, [divRef]);
};

export default useInterception;
