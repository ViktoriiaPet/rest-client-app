export const getStatusColor = (statusCode?: number): string => {
  if (!statusCode) return 'bg-gray-300'; // по

  const firstDigit = Math.floor(statusCode / 100);

  switch (firstDigit) {
    case 1:
      return 'bg-purple-300';
    case 2:
      return 'bg-purple-400';
    case 3:
      return 'bg-indigo-500';
    case 4:
      return 'bg-pink-300';
    case 5:
      return 'bg-pink-400';
    default:
      return 'bg-gray-200';
  }
};
