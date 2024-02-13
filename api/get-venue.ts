export const getVenue = async () => {
  const res = await fetch(`/api/venue/9`)

  return res.json()
}
