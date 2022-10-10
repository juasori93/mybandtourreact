/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsuarios = /* GraphQL */ `
  mutation CreateUsuarios(
    $input: CreateUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    createUsuarios(input: $input, condition: $condition) {
      id
      email
      password
      tipo
      createdAt
      updatedAt
    }
  }
`;
export const updateUsuarios = /* GraphQL */ `
  mutation UpdateUsuarios(
    $input: UpdateUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    updateUsuarios(input: $input, condition: $condition) {
      id
      email
      password
      tipo
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsuarios = /* GraphQL */ `
  mutation DeleteUsuarios(
    $input: DeleteUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    deleteUsuarios(input: $input, condition: $condition) {
      id
      email
      password
      tipo
      createdAt
      updatedAt
    }
  }
`;
export const createEvento = /* GraphQL */ `
  mutation CreateEvento(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
      id
      pais
      banda
      lugar
      createdAt
      updatedAt
    }
  }
`;
export const updateEvento = /* GraphQL */ `
  mutation UpdateEvento(
    $input: UpdateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    updateEvento(input: $input, condition: $condition) {
      id
      pais
      banda
      lugar
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvento = /* GraphQL */ `
  mutation DeleteEvento(
    $input: DeleteEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    deleteEvento(input: $input, condition: $condition) {
      id
      pais
      banda
      lugar
      createdAt
      updatedAt
    }
  }
`;
