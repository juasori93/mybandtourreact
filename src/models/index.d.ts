import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UsuariosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type eventoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Usuarios {
  readonly id: string;
  readonly email: string;
  readonly password?: string | null;
  readonly tipo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Usuarios, UsuariosMetaData>);
  static copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios, UsuariosMetaData>) => MutableModel<Usuarios, UsuariosMetaData> | void): Usuarios;
}

export declare class evento {
  readonly id: string;
  readonly pais?: string | null;
  readonly banda?: string | null;
  readonly lugar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<evento, eventoMetaData>);
  static copyOf(source: evento, mutator: (draft: MutableModel<evento, eventoMetaData>) => MutableModel<evento, eventoMetaData> | void): evento;
}