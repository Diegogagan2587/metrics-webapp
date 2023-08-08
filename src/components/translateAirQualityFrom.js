const translateAirQualityFrom = (number) => {
  if (!number) return 'notFound';
  switch (number) {
    case 1:
      return 'Good';
    case 2:
      return 'Fair';
    case 3:
      return 'Moderate';
    case 4:
      return 'Poor';
    case 5:
      return 'Very Poor';
    default:
      return 'Not founded';
  }
};

export default translateAirQualityFrom;
