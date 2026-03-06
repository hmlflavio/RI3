//Dance_Or_Die

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get dddUpper() { return this.ddd.toUpperCase(); }
    get dddLower() { return this.ddd.toLowerCase(); }
    get numeroUpper() { return this.numero.toUpperCase(); }
    get numeroLower() { return this.numero.toLowerCase(); }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    get estadoUpper() { return this.estado.toUpperCase(); }
    get cidadeUpper() { return this.cidade.toUpperCase(); }
}

class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get cpf() { return this.#cpf; }
    get nomeUpper() { return this.nome.toUpperCase(); }
    get nomeLower() { return this.nome.toLowerCase(); }
}

class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() { return this.#cnpj; }

    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n`;
        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.nome}\nEstado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
            cliente.telefones.forEach(tel => {
                descricao += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
            });
        });
        return descricao;
    }
}

const endEmpresa = new Endereco('SP', 'São Paulo', 'Av Paulista', '1000');
const empresa = new Empresa('ABC LTDA', 'Mercado Online', '00.000.000/0001-00', endEmpresa);
empresa.telefones.add(new Telefone('11', '33333333'));
empresa.telefones.add(new Telefone('11', '44444444'));


const dadosClientes = [
    { nome: 'João', rua: 'Av Andrômeda', num: '987', ddd: '12', tel: '99999999' },
    { nome: 'Gabriel', rua: 'Av Andrômeda', num: '412', ddd: '12', tel: '88888888' },
    { nome: 'Barbara', rua: 'Av São João', num: '789', ddd: '12', tel: '77777777' },
    { nome: 'Márcia', rua: 'Av Andromeda', num: '452', ddd: '12', tel: '66666666' },
    { nome: 'Flávio', rua: 'Av Cassiano Ricardo', num: '100', ddd: '12', tel: '55555555' }
];

dadosClientes.forEach(dados => {
    const end = new Endereco('SP', 'São José dos Campos', dados.rua, dados.num);
    const cliente = new Cliente(dados.nome, '111.111.111-11', end);
    cliente.telefones.add(new Telefone(dados.ddd, dados.tel));
    cliente.telefones.add(new Telefone(dados.ddd, dados.tel)); 
    empresa.clientes.add(cliente);
});

console.log(empresa.detalhe());