import React from 'react';
// Este componente Card es un contenedor estilizado que puede ser reutilizado en diferentes partes de la aplicación.
interface CardProps {
  children: React.ReactNode; // Contenido que se renderizará dentro de la tarjeta
  className?: string; // Clases adicionales para la tarjeta
}

export default function Card(props: CardProps) {
  // Clases base para todas las tarjetas
  const baseClasses = "bg-white rounded-lg p-4 shadow-md";
  const combinedClasses = `${baseClasses} ${props.className || ''}`.trim();

  return (
    <div className={combinedClasses}>
      {props.children}
    </div>
  );
}
