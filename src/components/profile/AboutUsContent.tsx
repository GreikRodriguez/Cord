import Button from '../common/Button'; // Importa el componente Button
import Card from '../common/Card'; // Importa el componente Card

// Considera mover este SVG a un componente Icon.tsx si lo reutilizas mucho
// o usar una librería de iconos. Por ahora, lo mantenemos inline para claridad.
const FacebookIcon = () => (
  <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.577c0-2.533 1.554-3.922 3.777-3.922 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.56V10h2.773l-.443 2.89h-2.33V20C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM7.5 13.5v-7l5 3.5-5 3.5z" clipRule="evenodd"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 4.095c2.474 0 4.484 2.01 4.484 4.484S12.474 13.063 10 13.063 5.516 11.053 5.516 8.579 7.526 4.095 10 4.095zM4 18.25c-.276-.021-.55-.042-.821-.061C2.39 17.925 1.657 17.378 1.13 16.634c-.5-.73-.832-1.572-.991-2.434-.145-.765-.175-1.536-.175-2.308 0-4.072 3.308-7.379 7.379-7.379 4.072 0 7.379 3.308 7.379 7.379 0 .772-.03 1.543-.175 2.308-.159.862-.491 1.704-.991 2.434-.527.744-1.26 1.291-2.049 1.555-.271.019-.545.04-.821.061-2.062.146-4.124.146-6.186 0z" clipRule="evenodd"></path>
  </svg>
);

const XIcon = () => ( // Asumiendo que "X" es el antiguo Twitter
  <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
    <path d="M6.29 18.29a.999.999 0 001.41 0L10 16.71l2.29 2.29a.999.999 0 101.41-1.41L11.41 15l2.29-2.29a.999.999 0 10-1.41-1.41L10 13.59l-2.29-2.29a.999.999 0 10-1.41 1.41L8.59 15l-2.29 2.29a.999.999 0 000 1.41zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
  </svg>
);


export default function AboutUsContent() {
  return (
    // El contenedor principal con el fondo marrón claro del diseño
    <div className="min-h-screen bg-[#B99F7B] p-4 flex flex-col items-center">
      {/* Contenedor del logo y el nombre ACORDE */}
      <div className="text-center mb-8 mt-12"> {/* Añadido mt-12 para compensar el NavBar y centrar un poco */}
          <img src="/images/LogoAcordeAzul.png" alt="Acorde Logo" className="mx-auto w-32 h-32 mb-2" />
          <p className="text-2xl font-bold text-primary-dark">ACORDE</p>
      </div>

      {/* Texto genérico sobre la empresa */}
      <div className="text-center text-primary-dark max-w-sm mx-auto mb-8">
          <p className="text-lg font-semibold mb-4">¡Bienvenido a ACORDE!</p>
          <p className="text-sm leading-relaxed">
              Somos una plataforma dedicada a simplificar la planificación y gestión de todo tipo de eventos.
              Desde pequeños encuentros hasta grandes celebraciones, ACORDE te proporciona las herramientas
              necesarias para organizar, coordinar y disfrutar sin estrés. Creemos que cada evento es una
              oportunidad para crear momentos inolvidables, y estamos aquí para asegurarnos de que así sea.
              Conéctate, organiza y celebra con ACORDE.
          </p>
      </div>

      {/* Contenedor reducido para iconos de redes sociales */}
      <Card className="bg-white p-4 rounded-lg shadow-md flex justify-around items-center space-x-4 w-64 mb-16">
          <FacebookIcon />
          <YoutubeIcon />
          <InstagramIcon />
          <XIcon />
      </Card>

      {/* Botón de Cerrar Sesión */}
      {/* El botón de cerrar sesión en el diseño está en la parte inferior,
          usando Button para mantener consistencia. El color y el estilo se pasan como prop. */}
      <Button
        text="- Cerrar Sesión -"
        style="text-primary-dark text-lg bg-transparent border-none py-2 px-4 hover:text-red-500 font-semibold"
        // onClick={handleLogout} // Lógica para cerrar sesión
      />
    </div>
  );
}