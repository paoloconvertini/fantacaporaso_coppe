import classificaEuropeSelectors from './classificaEuropeSelectors';
import classificaChampionsSelectors from './classificaChampionsSelectors';
import classificaCoppaItaliaSelectors from './classificaCoppaItaliaSelectors';

export default {
    ...classificaEuropeSelectors,
    ...classificaChampionsSelectors,
    ...classificaCoppaItaliaSelectors
};