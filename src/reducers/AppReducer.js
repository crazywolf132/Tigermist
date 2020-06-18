const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOVIE_LIST':
            return {
                ...state,
                movies: action.value,
                isLoaded: true,
                isLoading: false,
            }
        case 'SET_SEARCH_LIST':
            return {
                ...state,
                searchMovies: action.value,
                isLoaded: true,
                isSearchMode: true,
                isLoading: false,
                isMovieMode: false
            }
        case 'SET_WATCH_LIST':
            return {
                ...state,
                watchList: action.value,
                isLoading: false,
                isLoaded: true,
                isWatchListMode: true,
                isMovieMode: false,
            }
        case 'SET_LIST_LIST':
            return {
                ...state,
                likes: [...likes, action.value],
            }
        case 'SET_DISLIKE_LIST':
            return {
                ...state,
                dislikes: [...dislikes, action.value];
            }
    } 
}