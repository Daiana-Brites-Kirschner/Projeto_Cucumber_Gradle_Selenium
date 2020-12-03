$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário\nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#  Cenário: Deve inserir uma conta com sucesso"
    },
    {
      "line": 19,
      "value": "#    E informo a conta \"Conta Teste\""
    },
    {
      "line": 20,
      "value": "#    E seleciono Salvar"
    },
    {
      "line": 21,
      "value": "#    Então a conta é inserida com sucesso"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#  Cenário: Não deve inserir uma conta sem nome"
    },
    {
      "line": 24,
      "value": "#    E seleciono Salvar"
    },
    {
      "line": 25,
      "value": "#    Então sou notificado que o nome da conta é obrigatório"
    },
    {
      "line": 26,
      "value": "#"
    },
    {
      "line": 27,
      "value": "#  Cenário: Não deve inserir uma conta com nome já existente"
    },
    {
      "line": 28,
      "value": "#    E informo a conta \"Conta mesmo nome\""
    },
    {
      "line": 29,
      "value": "#    E seleciono Salvar"
    },
    {
      "line": 30,
      "value": "#    Então sou notificado que já existe uma conta com esse nome"
    }
  ],
  "line": 32,
  "name": "Deve validar regras de cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 33,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 38,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 39,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 40,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 41,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 346993,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"daia.brites@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"flor\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 2547483446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "daia.brites@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 122723301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flor",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 117031056,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 712374199,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 39945153,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 68611194,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 409678638,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve validar regras de cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "informo a conta \"Conta Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 172863604,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 622775096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 37980501,
  "status": "passed"
});
formatter.after({
  "duration": 137774104,
  "status": "passed"
});
formatter.after({
  "duration": 221015075,
  "status": "passed"
});
formatter.before({
  "duration": 117365,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"daia.brites@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"flor\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3106810367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "daia.brites@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 151609653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flor",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 115648290,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 800901509,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 61650413,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 96732380,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 407572665,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Deve validar regras de cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 141500721,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 437483562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 40623922,
  "status": "passed"
});
formatter.after({
  "duration": 82049720,
  "status": "passed"
});
formatter.after({
  "duration": 121355110,
  "status": "passed"
});
formatter.before({
  "duration": 90718,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"daia.brites@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"flor\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3484962382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "daia.brites@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 153007213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flor",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 211196830,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 990402742,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 47424483,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 83992997,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 500228371,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Deve validar regras de cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 167753135,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 413428920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 41146096,
  "status": "passed"
});
formatter.after({
  "duration": 198609612,
  "status": "passed"
});
formatter.after({
  "duration": 232762434,
  "status": "passed"
});
});