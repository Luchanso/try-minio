docker run \
  -p 9000:9000 \
  -p 9001:9001 \
  --name minio1 \
  -v ~/dev/github/minio-play/data:/data \
  -e "MINIO_ROOT_USER=user" \
  -e "MINIO_ROOT_PASSWORD=password" \
  quay.io/minio/minio server /data --console-address ":9001"