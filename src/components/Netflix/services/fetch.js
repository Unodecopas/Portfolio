const URI = 'https://api.themoviedb.org/3/'

export const getCategories = async (path) => {
  try {
    const res = await fetch(`${URI}${path}?api_key=${process.env.REACT_APP_APIKEY}&language=es-ES&page=1`)
    if (res.ok) {
      const data = await res.json()
      return data.results
    }
  } catch (error) {
    console.log(error)
  }
}

export const getMovieID = async (id) => {
  try {
    const res = await fetch(`${URI}movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=es-ES&page=1`)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
}
