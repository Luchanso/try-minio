import * as Minio from 'minio';

// console.log(Minio);

const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'user',
  secretKey: 'password'
});

const file = './yarn.lock';

var metaData = {
  'Content-Type': 'application/octet-stream'
}


async function run() {
  // await minioClient.makeBucket('images', '');
  // Using fPutObject API upload your file to the bucket europetrip.
  const data = await minioClient.fPutObject('images', 'yarn.lock', file, {});

  console.log(`File uploaded successfully. ${data.etag}`);
  const url = await minioClient.presignedUrl('GET', 'images', 'yarn.lock');
  console.log(`url ${url}`);


}

run();
