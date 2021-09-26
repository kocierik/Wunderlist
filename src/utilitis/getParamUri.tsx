// eslint-disable-next-line import/extensions
import { Dict } from "../types"

const getReturnedParamsFromSpotifyAuth = (hash: string) => {
  const stringAfterHashtag = hash.substring(1)
  const paraInUrl = stringAfterHashtag.split("&")

  const paramSplitUp = paraInUrl.reduce(
    (accumulater: Dict<string>, currentValue) => {
      const [key, value] = currentValue.split("=")
      // eslint-disable-next-line no-param-reassign
      accumulater[key] = value
      return accumulater
    },
    {}
  )
  return paramSplitUp
}

export default getReturnedParamsFromSpotifyAuth
