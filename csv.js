export function converteCsv() {
  const dados = `id,tipo_chamado,tempo_gasto,data_chamado,titulo,categoria_detalhada
    1,Bug,3.5,2026-01-15,Erro na leitura de CNPJ,Leitura CNPJ/CPF
    2,Melhoria,1.0,2026-01-20,Novo campo de impostos,Impostos
    3,Bug,5.0,2026-02-10,PDF nao processado,Erro OCR
    4,Bug,2.0,2026-02-15,Valor incorreto na nota,Valor monetario
    5,Melhoria,0.5,2026-03-01,Melhorar template,Mapeamento
    6,Bug,4.0,2026-03-10,CNPJ fornecedor errado,Leitura CNPJ/CPF
    7,Bug,1.5,2026-03-15,Aliquota ISS incorreta,Impostos
    8,Melhoria,2.0,2026-04-01,Dashboard de monitoramento,Mapeamento
    9,Bug,6.0,2026-04-12,Layout novo nao mapeado,Erro OCR
    10,Bug,3.0,2026-04-20,Codigo de barras ilegivel,Valor monetario
    `;

  const linhas = dados.trim().split("\n");
  const cabecalho = linhas[0].split(",");
  let csvConvertido = {};

  linhas.slice(1).forEach((linha) => {
    const valores = linha.split(",");
    const id = valores[0].trim();
    const dadosLinha = {};

    for (let i = 1; i < cabecalho.length; i++) {
      const chave = cabecalho[i];
      let valor = valores[i].trim();

      dadosLinha[chave] = valor;
    }

    csvConvertido[id] = dadosLinha;
  });

  return csvConvertido;
}

export function filtraDados(dados, filtro) {
  let dadosFiltrados = {};

  let coverteObj = Object.values(dados);
  for (let i = 0; i < coverteObj.length; i++) {
    let linha = coverteObj[i];
    let valor = linha[filtro];

    if (valor !== undefined) {
      if (dadosFiltrados[valor] === undefined) {
        dadosFiltrados[valor] = 1;
      } else {
        dadosFiltrados[valor] += 1;
      }
    }
  }

  let arrayChaves = [];
  let arrayValores = [];

  for (let chave in dadosFiltrados) {
    arrayChaves.push(chave);
    arrayValores.push(dadosFiltrados[chave]);
  }

  return [arrayChaves, arrayValores];
}
