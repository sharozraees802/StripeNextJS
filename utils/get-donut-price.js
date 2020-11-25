const getDonutPrice = (numDonuts) =>
  (Math.round(numDonuts * 5 * 100) / 100).toFixed(2);

export default getDonutPrice;
