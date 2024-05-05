docker build -t netoab ./netoab/
docker stop netoab
docker rm netoab
docker run --name netoab -p 8083:8083 netoab
docker save netoab > netoab.tar
docker load < netoab.tar

REM docker tag netoab <usuario>/netoab:latest
REM docker push <usuario>/netoab:latest
