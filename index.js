import { converteCsv, filtraDados } from "./csv.js";

const dadosCsv = converteCsv();
console.log(dadosCsv);
// Questao 1
const ctxQ1 = document.querySelector("#graficoQ1");
const dadosQ1 = filtraDados(dadosCsv, "categoria_detalhada");

new Chart(ctxQ1, {
  type: "bar",

  data: {
    labels: dadosQ1[0],
    datasets: [
      {
        label: "Total de chamados",
        data: dadosQ1[1],
        backgroundColor: ["#ef4444", "#6366f1"],
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 80,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  },
});

// Questao 2
const ctxQ2 = document.querySelector("#graficoQ2");
const dadosQ2 = filtraDados(dadosCsv, "tipo_chamado");

function formataLabelPorcentagem(dados) {
  const total = dados[1].reduce((a, b) => a + b, 0);
  const dadosPc = dados[1].map((d) => (d / total) * 100);
  let retorno = [];
  for (let i = 0; i < dados[0].length; i++) {
    retorno.push(`${dados[0][i]}: ${dadosPc[i]}%`);
  }

  return retorno;
}

new Chart(ctxQ2, {
  type: "doughnut",

  data: {
    labels: formataLabelPorcentagem(dadosQ2),
    datasets: [
      {
        label: "Total de chamados",
        data: dadosQ2[1],
        backgroundColor: ["#ef4444", "#6366f1"],
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 80,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "right" } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  },
});

// Questao 3
const ctxQ3 = document.querySelector("#graficoQ3");

let labelsQ3 = [];

Object.entries(dadosCsv)
  .map(
    ([k, v]) =>
      `${v["data_chamado"].split("-")[1]}/${v["data_chamado"].split("-")[0]}`,
  )
  .forEach((element) => {
    if (!labelsQ3.includes(element)) {
      labelsQ3.push(element);
    }
  });
console.log(labelsQ3);

new Chart(ctxQ3, {
  type: "line",

  data: {
    labels: labelsQ3,
    datasets: [
      {
        label: "Total de chamados",
        data: dadosQ2[1],
        backgroundColor: ["#ef4444", "#6366f1"],
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 80,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "right" } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  },
});
