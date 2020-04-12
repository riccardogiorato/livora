export default function WeeksLife(props) {
  let lifeBlocks = [];
  let blockSize = 1;
  if (process.browser) {
    blockSize = Math.round((window.innerWidth - 135) / 52);
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

  const maxAge = 85;

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

  for (let year = 0; year < maxAge - props.age; year++) {
    lifeBlocks.push(
      <div>
        {}
        {yearFuture}
      </div>
    );
  }

  return <div>{lifeBlocks}</div>;
}
