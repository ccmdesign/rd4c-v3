export default defineEventHandler(async(event) => {
  const { term } = getQuery(event);

  const { data } = await $fetch(`${process.env.SEARCH_API_URL}/search?term=${term}`);

  return data
})