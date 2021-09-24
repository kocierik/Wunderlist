export interface SpotifyLoginResponse {
  token?: {
    body: {
      email: string
      country: string
      // display_name: string
      id: string
      // images: string[]
    }
  }
}

export interface DataResponse {
  artist?: string
}
