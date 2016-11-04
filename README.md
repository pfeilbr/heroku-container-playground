```sh

# install container support
heroku plugins:install heroku-container-registry

# login to registry
heroku container:login

# build
docker build -t my-nodejs-app .

# run
docker run -it --rm -p 8000:8000 --name my-running-app my-nodejs-app
# visit http://localhost:8000

```
