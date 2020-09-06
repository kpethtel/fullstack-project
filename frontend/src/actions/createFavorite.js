export const createFavorite = (args) => {
  console.log(args)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
    crossOrigin: false
  };
  fetch('http://localhost:3010/api/favorites', requestOptions)
    .then(response => response.json())
    .then();
}