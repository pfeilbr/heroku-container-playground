# heroku-container-playground

Learn heroku container support.  Based on Heroku [Container Registry and Runtime](https://devcenter.heroku.com/articles/container-registry-and-runtime) article

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

# create heroku app
heroku create

# push
heroku container:push web --app stormy-badlands-73151

# check that it is up and running
heroku ps --app stormy-badlands-73151

# visit in browser
heroku open --app stormy-badlands-73151

# update flow

# make change to `server.js`
# build and push
heroku container:push web --app stormy-badlands-73151
```
