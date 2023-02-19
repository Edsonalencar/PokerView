import { DocumentNode, gql } from "@apollo/client";

export function getAllPokemonsPagination(offset: number = 0): DocumentNode {
  const querry = gql`
    query {
      pokemon_v2_pokemon(limit: 30, offset: ${offset}) {
        name
        id
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
            id
          }
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  `;

  return querry;
}

export function getPokemon(id: number = 0): DocumentNode {
  const querry = gql`
    query {
      pokemon_v2_pokemon(where: { id: { _eq: ${id} } }) {
        id
        name
        base_experience
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            id
            name
          }
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  `;

  return querry;
}