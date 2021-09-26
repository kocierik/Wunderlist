const makeApiRequest = async (TRACK_API: string) => {
  try {
    const response = await fetch(TRACK_API, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    const res = await response.json()
    return res.items
  } catch (error) {
    console.log(error)
    return []
  }
}

export default makeApiRequest
