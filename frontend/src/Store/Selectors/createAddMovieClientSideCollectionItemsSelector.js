import { createSelector } from 'reselect';
import createDeepEqualSelector from './createDeepEqualSelector';
import createClientSideCollectionSelector from './createClientSideCollectionSelector';

function createUnoptimizedSelector(uiSection) {
  return createSelector(
    createClientSideCollectionSelector('movies', uiSection),
    (movies) => {
      const items = movies.items.map((s) => {
        const {
          tmdbId,
          sortTitle
        } = s;

        return {
          tmdbId,
          sortTitle
        };
      });

      return {
        ...movies,
        items
      };
    }
  );
}

function createAddMovieClientSideCollectionItemsSelector(uiSection) {
  return createDeepEqualSelector(
    createUnoptimizedSelector(uiSection),
    (movies) => movies
  );
}

export default createAddMovieClientSideCollectionItemsSelector;
