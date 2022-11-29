// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TMBTCATPreferencia, TMBTCATTematica, TMBTCATBoleto, TMBTCATEvento, TMBTCATUbicacion, TMBTCATRol, TMBTCATFactura, TMBTCATUsuario, TMBTCATEventoTMBTCATUbicacion } = initSchema(schema);

export {
  TMBTCATPreferencia,
  TMBTCATTematica,
  TMBTCATBoleto,
  TMBTCATEvento,
  TMBTCATUbicacion,
  TMBTCATRol,
  TMBTCATFactura,
  TMBTCATUsuario,
  TMBTCATEventoTMBTCATUbicacion
};