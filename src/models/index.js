// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TMBTCATPreferencia, TMBTCATTematica, TMBTCATBoleto, TMBTCATUbicacion, TMBTCATRol, TMBTCATFactura, TMBTCATUsuario, TMBTCATEvento } = initSchema(schema);

export {
  TMBTCATPreferencia,
  TMBTCATTematica,
  TMBTCATBoleto,
  TMBTCATUbicacion,
  TMBTCATRol,
  TMBTCATFactura,
  TMBTCATUsuario,
  TMBTCATEvento
};