import { log } from './log.mjs'

export const handler = async (event) => {
  log('Running log: ' + JSON.stringify(event));

  return {
    status: 200,
    var: process.env.SOME_VAR,
  };
}