// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Usuarios, evento } = initSchema(schema);

export {
  Usuarios,
  evento
};