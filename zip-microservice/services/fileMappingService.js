// Get a list of all the downloadable files

export const secretIDMapping = {
  2: 'one',
  4: '22',
  6: '33threee',
};

export const veryComplexBusinessLogic = (fileId) => fileId * 2;
export const getSpecialId = (doubleId) => secretIDMapping[doubleId];
