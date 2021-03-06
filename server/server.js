const Agendamento = require('./agendamentoService');
const Atendimento = require('./atendimentoService');
const { initExame } = require('./exameService');

const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

(function main () {
    // Init agendamentos
    const agendamentos = new Agendamento
    agendamentos.addAgendamento(app)
    agendamentos.listAgendamento(app)
    agendamentos.checkIfAgendamentoIsAvaiable(app)
    agendamentos.howMuchTime(app)
    // Init atendimentos
    const atendimentos = new Atendimento
    atendimentos.addAtendimento(app)
    atendimentos.listAtendimentos(app)
    atendimentos.filterByDateRange(app)
    atendimentos.filterByDoctor(app)
    atendimentos.filterByPatient(app)
    atendimentos.filterByType(app)
    initExame(app)
})();



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})