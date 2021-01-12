![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1&root=index.html)

## Installation
Clone the repository to your machine.
```bash
$ git clone https://github.com/ElmouradiAmine/cities-app-backend.git
```
Open the created folder.
```bash
$ cd cities-app-backend
```
Run the docker compose to set up postgres and pgadmin.
```bash
$ docker-compose up -d
```
Install the npm dependencies.
```bash
$ npm install
```
Run the app.
```bash
$ npm run start:dev
```


Open [http://localhost:5000/cities?search=Paris](http://localhost:5000/cities?search=Paris) to get a JSON response.\
You can check the deployed api here: [https://cities-app-backend.herokuapp.com/cities?search=Paris](https://cities-app-backend.herokuapp.com/cities?search=Paris)

### NB
After you finish don't forget to free the ressources by:
```bash
$ docker-compose down -v
```
