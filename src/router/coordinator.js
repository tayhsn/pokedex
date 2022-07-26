export const GoToHomePage = (navigate) => navigate("/")

export const GoToPokedexPage = (navigate) => navigate("/pokedex")

export const GoToDetailsPage = (navigate, pokemon) =>
  navigate(`/details/${pokemon}`)
