// const API_KEY = process.env.NEXT_PUBLIC_API_KEY
// const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
//   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchAllRecipes: `http://127.0.0.1:8000/recipe/get-all-recipes/`,
    fetchSingleRecipe: `http://127.0.0.1:8000/recipe/chicken-fried-rice/`
}

export default requests