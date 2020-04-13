import { useState, useEffect } from 'react';

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default function WeeksLife(props) {
  const {width} = useWindowSize();
  let lifeBlocks = [];
  let blockSize = 1;
  if (process.browser) {
    blockSize = Math.round((width - (width*0.2)) / 52);
  }

  const yearPast = (
    <span className="year">
      {Array(52)
        .fill()
        .map((index) => (
          <span
          key={index}
            className="week past"
            style={{ width: blockSize, height: blockSize }}
          ></span>
        ))}
    </span>
  );

  const yearFuture = (
    <span className="year">
      {Array(52)
        .fill()
        .map(() => (
          <span
            className="week future"
            style={{ width: blockSize, height: blockSize }}
          ></span>
        ))}
    </span>
  );

  for (let year = 0; year < props.age; year++) {
    lifeBlocks.push(
      <div>
        {}
        {yearPast}
      </div>
    );
  }

  lifeBlocks.push(
    Array(props.pastWeeks)
      .fill()
      .map(() => (
        <span
          className="week past"
          style={{ width: blockSize, height: blockSize }}
        ></span>
      ))
  );
  lifeBlocks.push(
    Array(props.futureWeeks)
      .fill()
      .map(() => (
        <span
          className="week future"
          style={{ width: blockSize, height: blockSize }}
        ></span>
      ))
  );

  for (let year = 0; year < props.maxAge - props.age; year++) {
    lifeBlocks.push(
      <div>
        {yearFuture}
      </div>
    );
  }

  return <div>{lifeBlocks}</div>;
}
