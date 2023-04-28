import { S3 } from '@aws-sdk/client-s3';

import { log } from './log.mjs';

const s3Client = new S3({
  region: 'sa-east-1',
});

export const handler = async (event) => {
  const record = event.Records[0];
  const Bucket = record.s3.bucket.name;
  const Key = record.s3.object.key;

  const object = await s3Client.getObject({
    Bucket,
    Key,
  });

  const MEGA_BYTE = 1024 * 1024;

  if (object.ContentLength > MEGA_BYTE) {
    log('Very large object.');

    return 'Very large object.';
  }

  log('Ok.');

  return 'Ok.';
}