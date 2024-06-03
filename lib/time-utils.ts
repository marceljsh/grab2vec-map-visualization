const toTimestamp = (ts: number) => {
  const date = new Date(ts);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  const humanReadableTimestamp = `${formattedDate} ${formattedTime}`;

  return humanReadableTimestamp;
};

export { toTimestamp };
