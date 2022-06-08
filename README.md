# docker-exercises
Some docker exercises just to learn the technology

## Some use commands  
Pull a docker image from a repo: `docker pull <name>:<version>`  
Example 1: `docker pull node:16.15.1`  [It will pull a specific version of the image]  
Example 2: `docker pull node:latest` [It will pull the latest version at that time]   
Example 3: `docker pull node` [It will be the latest by default]  
Example 4: `docker pull node:alpine` [It will pull the latest from alpine's node]  
Example 5: `docker pull node:16.15.1-alpine` [It will pull the specific version from alpine's node]  
<strong>Note:</strong> The smallest image here will be node:16.15.1-alpine or node:alpine as it will use a bare minimum alpine image. Its best to use a versioned image so we have maximum control of the version and we don't break any changes if alpine updates their new image and introduces any breaking changes.  

Checking the list of docker containers: `docker ps`

Checking the list of docker images: `docker image ls`

Start a docker container by name/id: `docker start <name/id>`

Stop a docker container by name/id: `docker stop <name/id>`

Remove a docker container [will not work if the container is running]: `docker rm <name/id>`

Remove a docker container with force flag [used when a container is running]: `docker rm -f <name/id>`

Run a docker container: `docker run --name <name> -d -p 8001:80 <image-name>:<version-optional>`  
Example: `docker run --name user-api -d -p 3000:3000 user-service-api:16.15.1`  
<strong>Description:</strong>  
* Here the `--name user-api` tage is used to assign the name 'user-api', otherwise we have to use the id to start/stop the container
* `-d` means run in detached mode
* `-p 3000:3000` is used to assign port 3000 form the server machine to the container's port 3000, so it can be accessible by the user
*  `user-service-api:16.15.1` could have also be written as `user-service-api:latest` or `user-service-api`. This parameter tells the container to use a specific image and assign a version number, if version is not assigned, then it won't have a version. If the version 'latest' is assigned, then it will use that as version, but the name will be over-written and another image will be created if a new image with the same version is created.  

Make a new docker image: `docker build -t <name>:<version> .`  
Example: `docker build -t user-service-api:16.15.1 .`  
<strong>Description:</strong>  
Here the user must have a Dockerfile file declared with the relevant commands they want to use to create the docker image.  
The `-t user-service-api:16.15.1` is responsible for assigning the tag user-service-api and the version 16.15.1 to it.  
the dot `.` instructs which directory to look for the Dockerfile, in this case it is the current directory so it is a dot, or it can also be an actual full/relative directory (whatever makes sense for your use case)

