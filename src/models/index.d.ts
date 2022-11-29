import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TMBTCATPreferenciaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TMBTCATTematicaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TMBTCATBoletoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TMBTCATUbicacionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TMBTCATRolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TMBTCATFacturaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TMBTCATUsuarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TMBTCATEventoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TMBTCATPreferencia {
  readonly id: string;
  readonly TN_Id_Tematica?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATPreferencia, TMBTCATPreferenciaMetaData>);
  static copyOf(source: TMBTCATPreferencia, mutator: (draft: MutableModel<TMBTCATPreferencia, TMBTCATPreferenciaMetaData>) => MutableModel<TMBTCATPreferencia, TMBTCATPreferenciaMetaData> | void): TMBTCATPreferencia;
}

export declare class TMBTCATTematica {
  readonly id: string;
  readonly TC_Nombre?: string | null;
  readonly TC_Descripcion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATTematica, TMBTCATTematicaMetaData>);
  static copyOf(source: TMBTCATTematica, mutator: (draft: MutableModel<TMBTCATTematica, TMBTCATTematicaMetaData>) => MutableModel<TMBTCATTematica, TMBTCATTematicaMetaData> | void): TMBTCATTematica;
}

export declare class TMBTCATBoleto {
  readonly id: string;
  readonly TN_Id_Evento?: string | null;
  readonly TC_Fila?: number | null;
  readonly TC_Tipo?: string | null;
  readonly TC_Asiento?: number | null;
  readonly TN_Precio?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATBoleto, TMBTCATBoletoMetaData>);
  static copyOf(source: TMBTCATBoleto, mutator: (draft: MutableModel<TMBTCATBoleto, TMBTCATBoletoMetaData>) => MutableModel<TMBTCATBoleto, TMBTCATBoletoMetaData> | void): TMBTCATBoleto;
}

export declare class TMBTCATUbicacion {
  readonly id: string;
  readonly TC_Pais?: string | null;
  readonly TC_Provincia?: string | null;
  readonly TC_Canton?: string | null;
  readonly TC_Distrito?: string | null;
  readonly TC_Descripcion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATUbicacion, TMBTCATUbicacionMetaData>);
  static copyOf(source: TMBTCATUbicacion, mutator: (draft: MutableModel<TMBTCATUbicacion, TMBTCATUbicacionMetaData>) => MutableModel<TMBTCATUbicacion, TMBTCATUbicacionMetaData> | void): TMBTCATUbicacion;
}

export declare class TMBTCATRol {
  readonly id: string;
  readonly TN_Rol_Nombre?: string | null;
  readonly TC_Tipo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATRol, TMBTCATRolMetaData>);
  static copyOf(source: TMBTCATRol, mutator: (draft: MutableModel<TMBTCATRol, TMBTCATRolMetaData>) => MutableModel<TMBTCATRol, TMBTCATRolMetaData> | void): TMBTCATRol;
}

export declare class TMBTCATFactura {
  readonly id: string;
  readonly TN_Id_Boleto?: string | null;
  readonly TN_Id_Cliente?: string | null;
  readonly TF_Fecha_Compra?: string | null;
  readonly TN_Cantidad_Boletos?: number | null;
  readonly TN_Subtotal?: number | null;
  readonly TN_Descuento?: number | null;
  readonly TN_Impuestos?: number | null;
  readonly TN_Total?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATFactura, TMBTCATFacturaMetaData>);
  static copyOf(source: TMBTCATFactura, mutator: (draft: MutableModel<TMBTCATFactura, TMBTCATFacturaMetaData>) => MutableModel<TMBTCATFactura, TMBTCATFacturaMetaData> | void): TMBTCATFactura;
}

export declare class TMBTCATUsuario {
  readonly id: string;
  readonly TC_Correo: string;
  readonly TN_Telefono?: string | null;
  readonly TC_Nombre?: string | null;
  readonly TC_Apellido1?: string | null;
  readonly TC_Apellido2?: string | null;
  readonly TC_Clave?: string | null;
  readonly TC_Credit_Card?: string | null;
  readonly TN_Id_Ubicacion?: number | null;
  readonly TN_id_Rol?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATUsuario, TMBTCATUsuarioMetaData>);
  static copyOf(source: TMBTCATUsuario, mutator: (draft: MutableModel<TMBTCATUsuario, TMBTCATUsuarioMetaData>) => MutableModel<TMBTCATUsuario, TMBTCATUsuarioMetaData> | void): TMBTCATUsuario;
}

export declare class TMBTCATEvento {
  readonly id: string;
  readonly TC_Nombre?: string | null;
  readonly TC_Descripcion?: string | null;
  readonly TC_Tipo?: string | null;
  readonly TN_Id_Ubicacion?: number | null;
  readonly TF_Fecha?: string | null;
  readonly TN_Cantidad_vendidas?: number | null;
  readonly TN_Cantidad_disponible?: number | null;
  readonly TN_Id_Tematica?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TMBTCATEvento, TMBTCATEventoMetaData>);
  static copyOf(source: TMBTCATEvento, mutator: (draft: MutableModel<TMBTCATEvento, TMBTCATEventoMetaData>) => MutableModel<TMBTCATEvento, TMBTCATEventoMetaData> | void): TMBTCATEvento;
}