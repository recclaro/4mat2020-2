const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        require: true // Atributo obrigatório
    },
    carga_horario: {
        type: Number,
        require: true,
        min: 4,
        max: 240,   // valor padrão
        default: 100
    },
    nivel: {
        type: String,
        require: true, 
        // conjunto de valores válidos
        enum: ['Básico', 'Intermediário', 'Avançado']
    },
    valor_curso: { 
        type: Number,
        required: true,
        min: 50
    }

})
// parâmetros do mongoose.model()
// 1 - Nome do model (inicial maiuscula, igual ao nome do arquivo)
// 2 - a constante esquema, montada anteriorrmente
// 3 o nome da coleção no bd que irá reeber os objetos que serao
// criados a partir deste model (inicial minuscula, plural do
// nome do model)
module.exports= mongoose.model('Curso', esquema, 'cursos')