export const getStatusColor = (statusCode?: number): string => {
  if (!statusCode) return 'bg-gray-300'; // по

  const firstDigit = Math.floor(statusCode / 100);

  switch (firstDigit) {
    case 1:
      return 'bg-blue-200';
    case 2:
      return 'bg-green-200';
    case 3:
      return 'bg-indigo-200';
    case 4:
      return 'bg-red-200';
    case 5:
      return 'bg-pink-200';
    default:
      return 'bg-gray-300';
  }
};
