const axios = require('axios')

exports.handler = async (event, context, callback) => {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.ACCESS_KEY

  const collections = `collections='3816141,1154337,1254279'`
  const clientId = `client_id=${accessKey}`
  const doggoEndpoint = `${apiRoot}/photos/random?${clientId}&count=${10}&${collections}`

  try {
    const res = await axios.get(doggoEndpoint)
    const result = {
      statusCode: 200,
      body: JSON.stringify({ images: res.data} )
    }

    return callback(null, result)
  } catch (error) {

    return callback(error);
  }
}
