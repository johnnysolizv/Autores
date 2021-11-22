const { Autor } = require('../models/autor.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createAutor = (request, response) => {
    const {nombre} = request.body;
    Autor.create({nombre}).then(autor => response.json(autor))
        .catch(err => response.json(err));
}

module.exports.getAllAutores = (request, response) => {
    Autor.find({})
        .then(autores_all => response.json(autores_all))
        .catch(err => response.json(err))
}

module.exports.getAutor = (request, response) => {
    Autor.findOne({_id:request.params.id})
        .then(autor => response.json(autor))
        .catch(err => response.json(err))
}

module.exports.updateAutor = (request, response) => {
    Autor.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAutor => response.json(updatedAutor))
        .catch(err => response.json(err))
}

module.exports.deleteAutor = (request, response) => {
    Autor.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}