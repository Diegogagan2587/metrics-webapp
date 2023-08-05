const translateAirQualityFrom = (number) => {
    switch (number) {
      case 1:
        return 'Good';
        break;
      case 2:
        return 'Fair';
        break;
      case 3:
        return 'Moderate';
        break;
      case 4:
        return 'Poor';
        break;
      case 5:
        return 'Very Poor';
        break;
    }
  };

  export default translateAirQualityFrom;