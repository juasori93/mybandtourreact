/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTMBTCATPreferencia = /* GraphQL */ `
  query GetTMBTCATPreferencia($id: ID!) {
    getTMBTCATPreferencia(id: $id) {
      id
      TN_Id_Tematica
      TMBTCATTematicas {
        items {
          id
          TC_Nombre
          TC_Descripcion
          tmbtcatpreferenciaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTMBTCATPreferencias = /* GraphQL */ `
  query ListTMBTCATPreferencias(
    $filter: ModelTMBTCATPreferenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATPreferencias(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        TN_Id_Tematica
        TMBTCATTematicas {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATPreferencias = /* GraphQL */ `
  query SyncTMBTCATPreferencias(
    $filter: ModelTMBTCATPreferenciaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATPreferencias(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TN_Id_Tematica
        TMBTCATTematicas {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATTematica = /* GraphQL */ `
  query GetTMBTCATTematica($id: ID!) {
    getTMBTCATTematica(id: $id) {
      id
      TC_Nombre
      TC_Descripcion
      tmbtcatpreferenciaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTMBTCATTematicas = /* GraphQL */ `
  query ListTMBTCATTematicas(
    $filter: ModelTMBTCATTematicaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATTematicas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        TC_Nombre
        TC_Descripcion
        tmbtcatpreferenciaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATTematicas = /* GraphQL */ `
  query SyncTMBTCATTematicas(
    $filter: ModelTMBTCATTematicaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATTematicas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TC_Nombre
        TC_Descripcion
        tmbtcatpreferenciaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATBoleto = /* GraphQL */ `
  query GetTMBTCATBoleto($id: ID!) {
    getTMBTCATBoleto(id: $id) {
      id
      TN_Id_Evento
      TC_Fila
      TC_Tipo
      TC_Asiento
      TN_Precio
      TMBTCATEvento {
        id
        TC_Nombre
        TC_Descripcion
        TC_Tipo
        TN_Id_Ubicacion
        TF_Fecha
        TN_Cantidad_vendidas
        TN_Cantidad_disponible
        TN_Id_Tematica
        TMBTCATUbicacions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tMBTCATBoletoTMBTCATEventoId
    }
  }
`;
export const listTMBTCATBoletos = /* GraphQL */ `
  query ListTMBTCATBoletos(
    $filter: ModelTMBTCATBoletoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATBoletos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TN_Id_Evento
        TC_Fila
        TC_Tipo
        TC_Asiento
        TN_Precio
        TMBTCATEvento {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        tMBTCATBoletoTMBTCATEventoId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATBoletos = /* GraphQL */ `
  query SyncTMBTCATBoletos(
    $filter: ModelTMBTCATBoletoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATBoletos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TN_Id_Evento
        TC_Fila
        TC_Tipo
        TC_Asiento
        TN_Precio
        TMBTCATEvento {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        tMBTCATBoletoTMBTCATEventoId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATUbicacion = /* GraphQL */ `
  query GetTMBTCATUbicacion($id: ID!) {
    getTMBTCATUbicacion(id: $id) {
      id
      TC_Pais
      TC_Provincia
      TC_Canton
      TC_Distrito
      TC_Descripcion
      tmbtcateventos {
        items {
          id
          tMBTCATUbicacionID
          tMBTCATEventoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTMBTCATUbicacions = /* GraphQL */ `
  query ListTMBTCATUbicacions(
    $filter: ModelTMBTCATUbicacionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATUbicacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        TC_Pais
        TC_Provincia
        TC_Canton
        TC_Distrito
        TC_Descripcion
        tmbtcateventos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATUbicacions = /* GraphQL */ `
  query SyncTMBTCATUbicacions(
    $filter: ModelTMBTCATUbicacionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATUbicacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TC_Pais
        TC_Provincia
        TC_Canton
        TC_Distrito
        TC_Descripcion
        tmbtcateventos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATRol = /* GraphQL */ `
  query GetTMBTCATRol($id: ID!) {
    getTMBTCATRol(id: $id) {
      id
      TN_Rol_Nombre
      TC_Tipo
      tmbtcatusuarioID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTMBTCATRols = /* GraphQL */ `
  query ListTMBTCATRols(
    $filter: ModelTMBTCATRolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATRols(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TN_Rol_Nombre
        TC_Tipo
        tmbtcatusuarioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATRols = /* GraphQL */ `
  query SyncTMBTCATRols(
    $filter: ModelTMBTCATRolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATRols(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TN_Rol_Nombre
        TC_Tipo
        tmbtcatusuarioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATFactura = /* GraphQL */ `
  query GetTMBTCATFactura($id: ID!) {
    getTMBTCATFactura(id: $id) {
      id
      TN_Id_Boleto
      TN_Id_Cliente
      TF_Fecha_Compra
      TN_Cantidad_Boletos
      TN_Subtotal
      TN_Descuento
      TN_Impuestos
      TN_Total
      TMBTCATUsuario {
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
        TMBTCATRols {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tMBTCATFacturaTMBTCATUsuarioId
    }
  }
`;
export const listTMBTCATFacturas = /* GraphQL */ `
  query ListTMBTCATFacturas(
    $filter: ModelTMBTCATFacturaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATFacturas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TN_Id_Boleto
        TN_Id_Cliente
        TF_Fecha_Compra
        TN_Cantidad_Boletos
        TN_Subtotal
        TN_Descuento
        TN_Impuestos
        TN_Total
        TMBTCATUsuario {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        tMBTCATFacturaTMBTCATUsuarioId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATFacturas = /* GraphQL */ `
  query SyncTMBTCATFacturas(
    $filter: ModelTMBTCATFacturaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATFacturas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TN_Id_Boleto
        TN_Id_Cliente
        TF_Fecha_Compra
        TN_Cantidad_Boletos
        TN_Subtotal
        TN_Descuento
        TN_Impuestos
        TN_Total
        TMBTCATUsuario {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        tMBTCATFacturaTMBTCATUsuarioId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATUsuario = /* GraphQL */ `
  query GetTMBTCATUsuario($id: ID!) {
    getTMBTCATUsuario(id: $id) {
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
      TMBTCATRols {
        items {
          id
          TN_Rol_Nombre
          TC_Tipo
          tmbtcatusuarioID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTMBTCATUsuarios = /* GraphQL */ `
  query ListTMBTCATUsuarios(
    $filter: ModelTMBTCATUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        TMBTCATRols {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATUsuarios = /* GraphQL */ `
  query SyncTMBTCATUsuarios(
    $filter: ModelTMBTCATUsuarioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATUsuarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        TMBTCATRols {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATEvento = /* GraphQL */ `
  query GetTMBTCATEvento($id: ID!) {
    getTMBTCATEvento(id: $id) {
      id
      TC_Nombre
      TC_Descripcion
      TC_Tipo
      TN_Id_Ubicacion
      TF_Fecha
      TN_Cantidad_vendidas
      TN_Cantidad_disponible
      TN_Id_Tematica
      TMBTCATUbicacions {
        items {
          id
          tMBTCATUbicacionID
          tMBTCATEventoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTMBTCATEventos = /* GraphQL */ `
  query ListTMBTCATEventos(
    $filter: ModelTMBTCATEventoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TC_Nombre
        TC_Descripcion
        TC_Tipo
        TN_Id_Ubicacion
        TF_Fecha
        TN_Cantidad_vendidas
        TN_Cantidad_disponible
        TN_Id_Tematica
        TMBTCATUbicacions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATEventos = /* GraphQL */ `
  query SyncTMBTCATEventos(
    $filter: ModelTMBTCATEventoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATEventos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TC_Nombre
        TC_Descripcion
        TC_Tipo
        TN_Id_Ubicacion
        TF_Fecha
        TN_Cantidad_vendidas
        TN_Cantidad_disponible
        TN_Id_Tematica
        TMBTCATUbicacions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTMBTCATEventoTMBTCATUbicacion = /* GraphQL */ `
  query GetTMBTCATEventoTMBTCATUbicacion($id: ID!) {
    getTMBTCATEventoTMBTCATUbicacion(id: $id) {
      id
      tMBTCATUbicacionID
      tMBTCATEventoID
      tMBTCATUbicacion {
        id
        TC_Pais
        TC_Provincia
        TC_Canton
        TC_Distrito
        TC_Descripcion
        tmbtcateventos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tMBTCATEvento {
        id
        TC_Nombre
        TC_Descripcion
        TC_Tipo
        TN_Id_Ubicacion
        TF_Fecha
        TN_Cantidad_vendidas
        TN_Cantidad_disponible
        TN_Id_Tematica
        TMBTCATUbicacions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTMBTCATEventoTMBTCATUbicacions = /* GraphQL */ `
  query ListTMBTCATEventoTMBTCATUbicacions(
    $filter: ModelTMBTCATEventoTMBTCATUbicacionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMBTCATEventoTMBTCATUbicacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tMBTCATUbicacionID
        tMBTCATEventoID
        tMBTCATUbicacion {
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
        tMBTCATEvento {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTMBTCATEventoTMBTCATUbicacions = /* GraphQL */ `
  query SyncTMBTCATEventoTMBTCATUbicacions(
    $filter: ModelTMBTCATEventoTMBTCATUbicacionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTMBTCATEventoTMBTCATUbicacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tMBTCATUbicacionID
        tMBTCATEventoID
        tMBTCATUbicacion {
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
        tMBTCATEvento {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
