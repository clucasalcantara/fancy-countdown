import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
})

const getRandomImage = async (cb, query = 'white shark') => {
  try {
    const { urls } = await unsplash.photos
      .getRandomPhoto({ query })
      .then(response => response.json())
      .then(data => data)

    if (urls) {
      return cb(urls.full)
    }
  } catch (error) {
    console.error(`Error getting image from unsplash ${error}`)
  }
}

export { getRandomImage }