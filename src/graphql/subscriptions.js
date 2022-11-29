/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTMBTCATPreferencia = /* GraphQL */ `
  subscription OnCreateTMBTCATPreferencia {
    onCreateTMBTCATPreferencia {
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
export const onUpdateTMBTCATPreferencia = /* GraphQL */ `
  subscription OnUpdateTMBTCATPreferencia {
    onUpdateTMBTCATPreferencia {
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
export const onDeleteTMBTCATPreferencia = /* GraphQL */ `
  subscription OnDeleteTMBTCATPreferencia {
    onDeleteTMBTCATPreferencia {
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
export const onCreateTMBTCATTematica = /* GraphQL */ `
  subscription OnCreateTMBTCATTematica {
    onCreateTMBTCATTematica {
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
export const onUpdateTMBTCATTematica = /* GraphQL */ `
  subscription OnUpdateTMBTCATTematica {
    onUpdateTMBTCATTematica {
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
export const onDeleteTMBTCATTematica = /* GraphQL */ `
  subscription OnDeleteTMBTCATTematica {
    onDeleteTMBTCATTematica {
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
export const onCreateTMBTCATBoleto = /* GraphQL */ `
  subscription OnCreateTMBTCATBoleto {
    onCreateTMBTCATBoleto {
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
export const onUpdateTMBTCATBoleto = /* GraphQL */ `
  subscription OnUpdateTMBTCATBoleto {
    onUpdateTMBTCATBoleto {
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
export const onDeleteTMBTCATBoleto = /* GraphQL */ `
  subscription OnDeleteTMBTCATBoleto {
    onDeleteTMBTCATBoleto {
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
export const onCreateTMBTCATUbicacion = /* GraphQL */ `
  subscription OnCreateTMBTCATUbicacion {
    onCreateTMBTCATUbicacion {
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
export const onUpdateTMBTCATUbicacion = /* GraphQL */ `
  subscription OnUpdateTMBTCATUbicacion {
    onUpdateTMBTCATUbicacion {
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
export const onDeleteTMBTCATUbicacion = /* GraphQL */ `
  subscription OnDeleteTMBTCATUbicacion {
    onDeleteTMBTCATUbicacion {
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
export const onCreateTMBTCATRol = /* GraphQL */ `
  subscription OnCreateTMBTCATRol {
    onCreateTMBTCATRol {
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
export const onUpdateTMBTCATRol = /* GraphQL */ `
  subscription OnUpdateTMBTCATRol {
    onUpdateTMBTCATRol {
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
export const onDeleteTMBTCATRol = /* GraphQL */ `
  subscription OnDeleteTMBTCATRol {
    onDeleteTMBTCATRol {
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
export const onCreateTMBTCATFactura = /* GraphQL */ `
  subscription OnCreateTMBTCATFactura {
    onCreateTMBTCATFactura {
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
export const onUpdateTMBTCATFactura = /* GraphQL */ `
  subscription OnUpdateTMBTCATFactura {
    onUpdateTMBTCATFactura {
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
export const onDeleteTMBTCATFactura = /* GraphQL */ `
  subscription OnDeleteTMBTCATFactura {
    onDeleteTMBTCATFactura {
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
export const onCreateTMBTCATUsuario = /* GraphQL */ `
  subscription OnCreateTMBTCATUsuario {
    onCreateTMBTCATUsuario {
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
export const onUpdateTMBTCATUsuario = /* GraphQL */ `
  subscription OnUpdateTMBTCATUsuario {
    onUpdateTMBTCATUsuario {
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
export const onDeleteTMBTCATUsuario = /* GraphQL */ `
  subscription OnDeleteTMBTCATUsuario {
    onDeleteTMBTCATUsuario {
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
export const onCreateTMBTCATEvento = /* GraphQL */ `
  subscription OnCreateTMBTCATEvento {
    onCreateTMBTCATEvento {
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
export const onUpdateTMBTCATEvento = /* GraphQL */ `
  subscription OnUpdateTMBTCATEvento {
    onUpdateTMBTCATEvento {
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
export const onDeleteTMBTCATEvento = /* GraphQL */ `
  subscription OnDeleteTMBTCATEvento {
    onDeleteTMBTCATEvento {
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
export const onCreateTMBTCATEventoTMBTCATUbicacion = /* GraphQL */ `
  subscription OnCreateTMBTCATEventoTMBTCATUbicacion {
    onCreateTMBTCATEventoTMBTCATUbicacion {
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
export const onUpdateTMBTCATEventoTMBTCATUbicacion = /* GraphQL */ `
  subscription OnUpdateTMBTCATEventoTMBTCATUbicacion {
    onUpdateTMBTCATEventoTMBTCATUbicacion {
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
export const onDeleteTMBTCATEventoTMBTCATUbicacion = /* GraphQL */ `
  subscription OnDeleteTMBTCATEventoTMBTCATUbicacion {
    onDeleteTMBTCATEventoTMBTCATUbicacion {
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
