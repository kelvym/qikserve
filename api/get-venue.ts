export const getVenue = async () => {
  const res = await fetch(`/api/venue/9`)

  return res.json()
}

export const getMenu = async () => {
  const res = await fetch(`/api/menu`)

  return res.json()
}
