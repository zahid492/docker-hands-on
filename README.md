# docker-hands-on

Docker Machine---->Independent Machine it does not so much priority on Linux based system.
Docker Image--->Container--->Run Container---->(e.g Mongo,Redis)

Open a Machine:
docker-machine env <Image Name>
      #Show a eval value that should be cmd prompt key

Show all Images:

docker images
docker rmi <Image Name>


Show all conatiner:

docker ps # only running container
docker ps-a #show all conatiner of machine lifecycle

Docker Build by Dockerfile:

 docker build -f Dockerfile -t zahid492/node-with-dockerfile .


 docker run -d -p 8080:3000 zahid492/node-with-dockerfile
docker Link between two containers:

Option 1:
 Link: Create link to each others so develop a layer system (e.g as after base image ubutu we can join node image then after this layer join redis image and so on).

Option 2: 
 Networking(Bridge): Create a isolated bridge in docker then join every container over that bridge.

Option 3:
  Docker Compose : Most efective way to join conatiner to each other . Develop friendly. Portable








