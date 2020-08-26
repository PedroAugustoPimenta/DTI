// questionario para pegar os dados do usuário 
const readline = require("readline");
const dados = {
    data: "",
    pequenoPorte: "",
    grandePorte: ""
};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Digite a data: ", (answer) => {

            dados.data = answer;
            resolve();
        });
    });
};

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Digite o números dos animais de pequenos portes: ", (answer) => {

            dados.pequenoPorte = answer;
            resolve();
        });
    });
};
const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Digite o números dos animais de  grandes portes: ", (answer) => {

            dados.grandePorte = answer;
            resolve();
        });
    });
};
// main para organizar melhor as perguntas
const main = async () => {
    await question1();
    await question2();
    await question3();

    let date = dados.data.split("/");
    let data = new Date(date[1] + "/" + date[0] + "/" + date[2]);
    let dia = data.getDay();
    console.log("");
    console.log("dia ", dia)
    console.log("");
    let start = CalcularTotal(dia, dados.pequenoPorte, dados.grandePorte);

    console.log("");
    console.log("O melhor local indicado é:", start);

    rl.close();

};

main();

// funções
function CalcularTotal(diaDaSemana, pequenoPorte, grandePorte) {
    let local1;
    let local2;
    let local3;
    let menorValor;

    local1 = calcularLocal1(diaDaSemana, pequenoPorte, grandePorte);
    local2 = calcularLocal2(diaDaSemana, pequenoPorte, grandePorte);
    local3 = calcularLocal3(diaDaSemana, pequenoPorte, grandePorte);

    menorValor = calcularMenor(local1, local2, local3);

    return menorValor;
}

function calcularLocal1(diaDaSemana, pequenoPorte, grandePorte) {
    const valorDoPequeno = 20;
    const valorDoGrande = 40;

    const finalDeSemanaPequeno = 24;
    const finalDeSemanaGrande = 48;

    let valorTotalLocal1 = 0;

    if (diaDaSemana <= 5) {
        valorTotalLocal1 = (pequenoPorte * valorDoPequeno);
        valorTotalLocal1 = valorTotalLocal1 + (grandePorte * valorDoGrande);
    } else {
        valorTotalLocal1 = (finalDeSemanaPequeno * pequenoPorte);
        valorTotalLocal1 = valorTotalLocal1 + (finalDeSemanaGrande * grandePorte);
    }

    console.log("valor do local 1:", valorTotalLocal1);
    return valorTotalLocal1;
}

function calcularLocal2(diaDaSemana, pequenoPorte, grandePorte) {
    const valorDoPequeno = 15;
    const valorDoGrande = 50;

    const finalDeSemanaPequeno = 20;
    const finalDeSemanaGrande = 55;

    let valorTotalLocal2 = 0;

    if (diaDaSemana <= 5) {
        valorTotalLocal2 = (pequenoPorte * valorDoPequeno);
        valorTotalLocal2 = valorTotalLocal2 + (grandePorte * valorDoGrande);
    } else {
        valorTotalLocal2 = (finalDeSemanaPequeno * pequenoPorte);
        valorTotalLocal2 = valorTotalLocal2 + (finalDeSemanaGrande * grandePorte);
    }
    console.log("valor do local 2:", valorTotalLocal2);
    return valorTotalLocal2;
}


function calcularLocal3(diaDaSemana, pequenoPorte, grandePorte) {
    const valorDoPequeno = 30;
    const valorDoGrande = 45;

    const finalDeSemanaPequeno = 30;
    const finalDeSemanaGrande = 45;

    let valorTotalLocal3 = 0;

    if (diaDaSemana <= 5) {
        valorTotalLocal3 = (pequenoPorte * valorDoPequeno);
        valorTotalLocal3 = valorTotalLocal3 + (grandePorte * valorDoGrande);
    } else {
        valorTotalLocal3 = (finalDeSemanaPequeno * pequenoPorte);
        valorTotalLocal3 = valorTotalLocal3 + (finalDeSemanaGrande * grandePorte);
    }

    console.log("valor do local 3:", valorTotalLocal3);

    return valorTotalLocal3;
}

function calcularMenor(local1, local2, local3) {
    let menorValor;

    if (local1 < local2 && local1 < local3) {
        menorValor = local1;
        return {
            Local: "Meu Canino Feliz",
            Valor: menorValor
        };
    }

    if (local2 < local1 && local2 < local3) {
        menorValor = local2;
        return {
            nome: "Vai Rex",
            Valor: menorValor
        };
    }

    if (local3 < local2 && local3 < local1) {
        menorValor = local3;
        return {
            nome: "ChowChawgas",
            Valor: menorValor
        };
    }

    if (local1 === local2) {
        menorValor = local2;
        return {
            nome: "Vai Rex",
            Valor: menorValor
        };
    }
    if (local1 === local3) {
        menorValor = local3
        return {
            nome: "ChowChawgas",
            Valor: menorValor
        };
    }

    if (local3 === local2) {
        menorValor = local3;
        return {
            nome: "ChowChawgas",
            Valor: menorValor
        };
    }
}