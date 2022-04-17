const doFetchAPI = async (searchQuery) => {
  let normalizeResponse = [];
  const apiKey = "TQx9J71IRBSdwXcWHxKjzd3qBEyXjvZb";
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en`
  );
  const responseJson = await response.json();
  normalizeResponse = responseJson.data.map(
    (value) => value.images?.fixed_height?.webp || ""
  );
  return normalizeResponse;
};

export default doFetchAPI;
