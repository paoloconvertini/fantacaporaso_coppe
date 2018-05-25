import classificaEuropeSelectors from './classificaEuropeSelectors';
import classificaChampionsSelectors from './classificaChampionsSelectors';
import classificaCoppaItaliaSelectors from './classificaCoppaItaliaSelectors';
import calendarioEuropeSelectors from './calendarioEuropeSelectors';
import calendarioChampionsSelectors from './calendarioChampionsSelectors';
import calendarioCoppaItaliaSelectors from './calendarioCoppaItaliaSelectors';

export default {
    ...classificaEuropeSelectors,
    ...classificaChampionsSelectors,
    ...classificaCoppaItaliaSelectors,
    ...calendarioEuropeSelectors,
    ...calendarioChampionsSelectors,
    ...calendarioCoppaItaliaSelectors
};