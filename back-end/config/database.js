const mongoose = require('mongoose')

module.exports = uri => {
    mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true  
    })
    mongoose.connection.on('connected', () => 
        console.log('==>Mongoose! conectado com o servidor')
    )
    //Capturamos um sinal de encerramento (SIGINT), Ctrl+C
        process.on('SIGINT', () => 
        mongoose.connection.close(()=> {
            console.log('==> Mongoose! Desconectado pelo termino da aplicação');
            // 0 indica que a finalizacao ocorreu sem erros
            process.exit(0);
            
        })
        )
        mongoose.connection.on('disconnnected',() =>
            console.log('==> Mongoose! desconectado do servidor')
        )
    }      
