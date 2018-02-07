import * as types from './actionTypes';
// Actions.

export function loadAniListSuccess(list) {
  return { type: types.LOAD_ANILIST_SUCCESS, list};
}

// Async API calls?

const query = `
query ($id: Int, $page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id,seasonYear: 2018,season: WINTER,format: TV, status: RELEASING, isAdult: false, sort: POPULARITY_DESC, type: ANIME) {
      id
      title {
        romaji
      }
      description
      nextAiringEpisode {
        timeUntilAiring,
        episode
      }
      siteUrl
      coverImage {
        large
      }
      bannerImage
    }
  }
}
`;

const variables = {
    isAdult: 0,
    perPage: 20
};

const url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

export function loadAniList() {
  return function(dispatch) {
    return fetch(url, options)
  .then(res => res.json())
  .then(
    data => dispatch(loadAniListSuccess(data.data.Page.media)))
    .catch(error => {
      throw(error);
    });
  };
}
