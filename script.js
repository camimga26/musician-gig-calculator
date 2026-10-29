
const formulario = document.getElementById("calculadora");
const resultado = document.getElementById("resultado");

resultado.textContent = "Calculator ready. Enter your values.";

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const musicos = Number(document.getElementById("numMusicos").value);
    const horas = Number(document.getElementById("horasEvento").value);
    const tarifa = Number(document.getElementById("tarifaHora").value);
    const transporte = Number(document.getElementById("transporte").value);
    const otrosGastos = Number(document.getElementById("otrosGastos").value);
    const recargo = Number(document.getElementById("gananciaDeseada").value);

    if (
        !Number.isInteger(musicos) || musicos < 1 ||
        !Number.isFinite(horas) || horas <= 0 ||
        !Number.isFinite(tarifa) || tarifa < 0 ||
        !Number.isFinite(transporte) || transporte < 0 ||
        !Number.isFinite(otrosGastos) || otrosGastos < 0 ||
        !Number.isFinite(recargo) || recargo < 0
    ) {
        resultado.textContent = "Please enter valid values in all fields.";
        return;
    }

    const manoDeObra = musicos * horas * tarifa;
    const costosTotales = manoDeObra + transporte + otrosGastos;
    const precioTotal = costosTotales * (1 + recargo / 100);
    const precioPorMusico = precioTotal / musicos;

    resultado.innerHTML = `
        <h2>Estimated price</h2>
        <p>Labor: $${manoDeObra.toFixed(2)}</p>
        <p>Total before markup: $${costosTotales.toFixed(2)}</p>
        <p><strong>Total gig price: $${precioTotal.toFixed(2)}</strong></p>
        <p>Price per musician: $${precioPorMusico.toFixed(2)}</p>
    `;
});

console.log("Musician Gig Calculator JavaScript loaded successfully.");

