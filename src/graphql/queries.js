/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsuarios = /* GraphQL */ `
  query GetUsuarios($id: ID!) {
    getUsuarios(id: $id) {
      id
      email
      password
      tipo
      createdAt
      updatedAt
    }
  }
`;
export const listUsuarios = /* GraphQL */ `
  query ListUsuarios(
    $filter: ModelUsuariosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        tipo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvento = /* GraphQL */ `
  query GetEvento($id: ID!) {
    getEvento(id: $id) {
      id
      pais
      banda
      lugar
      createdAt
      updatedAt
    }
  }
`;
export const listEventos = /* GraphQL */ `
  query ListEventos(
    $filter: ModelEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pais
        banda
        lugar
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
