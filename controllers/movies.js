const movieModel = require('../models/movie');

const index = (request, response) => {
  movieModel.index()
    .then( result => { response.send(result); })
    .catch( error => { console.error( error ); });
}

const show = (request, response) => {
  movieModel.show(request.params.id)
    .then( result => { response.send( result ); })
    .catch( error => { console.error( error ); });
}

const create = (request, response) => {
  movieModel.create(request.body)
    .then( result => { response.send( result ); })
    .catch( error => { console.error( error ); });
}

const update = (request, response) => {
  movieModel.update(request.params.id, request.body)
    .then( result => { response.send( result ); })
    .catch( error => { console.error( error ); });
}

const destroy = (request, response) => {
  movieModel.destroy(request.params.id)
    .then( result => { response.send( result ); })
    .catch( error => { console.error( error ); });
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
