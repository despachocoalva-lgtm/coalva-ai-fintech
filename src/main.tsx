import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Verificar si el elemento root existe
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento con id 'root'");
}

// Agregar estilos de carga inicial
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .loading {
    margin: auto;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
document.head.appendChild(loadingStyle);

// Mostrar mensaje de carga temporal
rootElement.innerHTML = `
  <div class="loading">
    <h1>COALVA</h1>
    <p>Cargando la aplicación...</p>
  </div>
`;

// Renderizar la aplicación
try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Error al renderizar la aplicación:", error);
  rootElement.innerHTML = `
    <div class="error">
      <h1>Error al cargar la aplicación</h1>
      <p>Por favor, recarga la página o inténtalo más tarde.</p>
      <p>${error instanceof Error ? error.message : String(error)}</p>
    </div>
  `;
}
