/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTMBTCATPreferencia = /* GraphQL */ `
  mutation CreateTMBTCATPreferencia(
    $input: CreateTMBTCATPreferenciaInput!
    $condition: ModelTMBTCATPreferenciaConditionInput
  ) {
    createTMBTCATPreferencia(input: $input, condition: $condition) {
      id
      TN_Id_Tematica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATPreferencia = /* GraphQL */ `
  mutation UpdateTMBTCATPreferencia(
    $input: UpdateTMBTCATPreferenciaInput!
    $condition: ModelTMBTCATPreferenciaConditionInput
  ) {
    updateTMBTCATPreferencia(input: $input, condition: $condition) {
      id
      TN_Id_Tematica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATPreferencia = /* GraphQL */ `
  mutation DeleteTMBTCATPreferencia(
    $input: DeleteTMBTCATPreferenciaInput!
    $condition: ModelTMBTCATPreferenciaConditionInput
  ) {
    deleteTMBTCATPreferencia(input: $input, condition: $condition) {
      id
      TN_Id_Tematica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTMBTCATTematica = /* GraphQL */ `
  mutation CreateTMBTCATTematica(
    $input: CreateTMBTCATTematicaInput!
    $condition: ModelTMBTCATTematicaConditionInput
  ) {
    createTMBTCATTematica(input: $input, condition: $condition) {
      id
      TC_Nombre
      TC_Descripcion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATTematica = /* GraphQL */ `
  mutation UpdateTMBTCATTematica(
    $input: UpdateTMBTCATTematicaInput!
    $condition: ModelTMBTCATTematicaConditionInput
  ) {
    updateTMBTCATTematica(input: $input, condition: $condition) {
      id
      TC_Nombre
      TC_Descripcion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATTematica = /* GraphQL */ `
  mutation DeleteTMBTCATTematica(
    $input: DeleteTMBTCATTematicaInput!
    $condition: ModelTMBTCATTematicaConditionInput
  ) {
    deleteTMBTCATTematica(input: $input, condition: $condition) {
      id
      TC_Nombre
      TC_Descripcion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTMBTCATBoleto = /* GraphQL */ `
  mutation CreateTMBTCATBoleto(
    $input: CreateTMBTCATBoletoInput!
    $condition: ModelTMBTCATBoletoConditionInput
  ) {
    createTMBTCATBoleto(input: $input, condition: $condition) {
      id
      TN_Id_Evento
      TC_Fila
      TC_Tipo
      TC_Asiento
      TN_Precio
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATBoleto = /* GraphQL */ `
  mutation UpdateTMBTCATBoleto(
    $input: UpdateTMBTCATBoletoInput!
    $condition: ModelTMBTCATBoletoConditionInput
  ) {
    updateTMBTCATBoleto(input: $input, condition: $condition) {
      id
      TN_Id_Evento
      TC_Fila
      TC_Tipo
      TC_Asiento
      TN_Precio
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATBoleto = /* GraphQL */ `
  mutation DeleteTMBTCATBoleto(
    $input: DeleteTMBTCATBoletoInput!
    $condition: ModelTMBTCATBoletoConditionInput
  ) {
    deleteTMBTCATBoleto(input: $input, condition: $condition) {
      id
      TN_Id_Evento
      TC_Fila
      TC_Tipo
      TC_Asiento
      TN_Precio
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTMBTCATUbicacion = /* GraphQL */ `
  mutation CreateTMBTCATUbicacion(
    $input: CreateTMBTCATUbicacionInput!
    $condition: ModelTMBTCATUbicacionConditionInput
  ) {
    createTMBTCATUbicacion(input: $input, condition: $condition) {
      id
      TC_Pais
      TC_Provincia
      TC_Canton
      TC_Distrito
      TC_Descripcion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATUbicacion = /* GraphQL */ `
  mutation UpdateTMBTCATUbicacion(
    $input: UpdateTMBTCATUbicacionInput!
    $condition: ModelTMBTCATUbicacionConditionInput
  ) {
    updateTMBTCATUbicacion(input: $input, condition: $condition) {
      id
      TC_Pais
      TC_Provincia
      TC_Canton
      TC_Distrito
      TC_Descripcion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATUbicacion = /* GraphQL */ `
  mutation DeleteTMBTCATUbicacion(
    $input: DeleteTMBTCATUbicacionInput!
    $condition: ModelTMBTCATUbicacionConditionInput
  ) {
    deleteTMBTCATUbicacion(input: $input, condition: $condition) {
      id
      TC_Pais
      TC_Provincia
      TC_Canton
      TC_Distrito
      TC_Descripcion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTMBTCATRol = /* GraphQL */ `
  mutation CreateTMBTCATRol(
    $input: CreateTMBTCATRolInput!
    $condition: ModelTMBTCATRolConditionInput
  ) {
    createTMBTCATRol(input: $input, condition: $condition) {
      id
      TN_Rol_Nombre
      TC_Tipo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATRol = /* GraphQL */ `
  mutation UpdateTMBTCATRol(
    $input: UpdateTMBTCATRolInput!
    $condition: ModelTMBTCATRolConditionInput
  ) {
    updateTMBTCATRol(input: $input, condition: $condition) {
      id
      TN_Rol_Nombre
      TC_Tipo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATRol = /* GraphQL */ `
  mutation DeleteTMBTCATRol(
    $input: DeleteTMBTCATRolInput!
    $condition: ModelTMBTCATRolConditionInput
  ) {
    deleteTMBTCATRol(input: $input, condition: $condition) {
      id
      TN_Rol_Nombre
      TC_Tipo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTMBTCATFactura = /* GraphQL */ `
  mutation CreateTMBTCATFactura(
    $input: CreateTMBTCATFacturaInput!
    $condition: ModelTMBTCATFacturaConditionInput
  ) {
    createTMBTCATFactura(input: $input, condition: $condition) {
      id
      TN_Id_Boleto
      TN_Id_Cliente
      TF_Fecha_Compra
      TN_Cantidad_Boletos
      TN_Subtotal
      TN_Descuento
      TN_Impuestos
      TN_Total
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATFactura = /* GraphQL */ `
  mutation UpdateTMBTCATFactura(
    $input: UpdateTMBTCATFacturaInput!
    $condition: ModelTMBTCATFacturaConditionInput
  ) {
    updateTMBTCATFactura(input: $input, condition: $condition) {
      id
      TN_Id_Boleto
      TN_Id_Cliente
      TF_Fecha_Compra
      TN_Cantidad_Boletos
      TN_Subtotal
      TN_Descuento
      TN_Impuestos
      TN_Total
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATFactura = /* GraphQL */ `
  mutation DeleteTMBTCATFactura(
    $input: DeleteTMBTCATFacturaInput!
    $condition: ModelTMBTCATFacturaConditionInput
  ) {
    deleteTMBTCATFactura(input: $input, condition: $condition) {
      id
      TN_Id_Boleto
      TN_Id_Cliente
      TF_Fecha_Compra
      TN_Cantidad_Boletos
      TN_Subtotal
      TN_Descuento
      TN_Impuestos
      TN_Total
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTMBTCATUsuario = /* GraphQL */ `
  mutation CreateTMBTCATUsuario(
    $input: CreateTMBTCATUsuarioInput!
    $condition: ModelTMBTCATUsuarioConditionInput
  ) {
    createTMBTCATUsuario(input: $input, condition: $condition) {
      id
      TC_Correo
      TN_Telefono
      TC_Nombre
      TC_Apellido1
      TC_Apellido2
      TC_Clave
      TC_Credit_Card
      TN_Id_Ubicacion
      TN_id_Rol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATUsuario = /* GraphQL */ `
  mutation UpdateTMBTCATUsuario(
    $input: UpdateTMBTCATUsuarioInput!
    $condition: ModelTMBTCATUsuarioConditionInput
  ) {
    updateTMBTCATUsuario(input: $input, condition: $condition) {
      id
      TC_Correo
      TN_Telefono
      TC_Nombre
      TC_Apellido1
      TC_Apellido2
      TC_Clave
      TC_Credit_Card
      TN_Id_Ubicacion
      TN_id_Rol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATUsuario = /* GraphQL */ `
  mutation DeleteTMBTCATUsuario(
    $input: DeleteTMBTCATUsuarioInput!
    $condition: ModelTMBTCATUsuarioConditionInput
  ) {
    deleteTMBTCATUsuario(input: $input, condition: $condition) {
      id
      TC_Correo
      TN_Telefono
      TC_Nombre
      TC_Apellido1
      TC_Apellido2
      TC_Clave
      TC_Credit_Card
      TN_Id_Ubicacion
      TN_id_Rol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTMBTCATEvento = /* GraphQL */ `
  mutation CreateTMBTCATEvento(
    $input: CreateTMBTCATEventoInput!
    $condition: ModelTMBTCATEventoConditionInput
  ) {
    createTMBTCATEvento(input: $input, condition: $condition) {
      id
      TC_Nombre
      TC_Descripcion
      TC_Tipo
      TN_Id_Ubicacion
      TF_Fecha
      TN_Cantidad_vendidas
      TN_Cantidad_disponible
      TN_Id_Tematica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTMBTCATEvento = /* GraphQL */ `
  mutation UpdateTMBTCATEvento(
    $input: UpdateTMBTCATEventoInput!
    $condition: ModelTMBTCATEventoConditionInput
  ) {
    updateTMBTCATEvento(input: $input, condition: $condition) {
      id
      TC_Nombre
      TC_Descripcion
      TC_Tipo
      TN_Id_Ubicacion
      TF_Fecha
      TN_Cantidad_vendidas
      TN_Cantidad_disponible
      TN_Id_Tematica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTMBTCATEvento = /* GraphQL */ `
  mutation DeleteTMBTCATEvento(
    $input: DeleteTMBTCATEventoInput!
    $condition: ModelTMBTCATEventoConditionInput
  ) {
    deleteTMBTCATEvento(input: $input, condition: $condition) {
      id
      TC_Nombre
      TC_Descripcion
      TC_Tipo
      TN_Id_Ubicacion
      TF_Fecha
      TN_Cantidad_vendidas
      TN_Cantidad_disponible
      TN_Id_Tematica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
