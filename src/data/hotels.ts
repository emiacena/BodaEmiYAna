export interface Hotel {
  /** Nombre tal y como aparece en Google Maps. */
  name: string;
  /** Etiqueta corta de zona o categoría. */
  zone: string;
  /** Una línea describiendo el hotel. */
  note: string;
}

/**
 * Recomendaciones de alojamiento en Jerez de la Frontera.
 *
 * Los enlaces se resuelven contra Google Maps a partir del nombre, así que el
 * teléfono, la dirección y la disponibilidad los da siempre el propio hotel.
 * Si negociáis tarifa o código de reserva con alguno, añadidlo en `note`.
 */
export const hotels: Hotel[] = [
  {
    name: 'Casa Palacio María Luisa',
    zone: 'Centro histórico',
    note: 'Cinco estrellas gran lujo, en pleno corazón de Jerez.',
  },
  {
    name: 'Hotel Bodega Tío Pepe',
    zone: 'Centro histórico',
    note: 'Dentro de las bodegas de González Byass, junto a la catedral.',
  },
  {
    name: 'Hotel Villa Jerez',
    zone: 'Centro',
    note: 'Hotel con jardines, a unos pasos de la Real Escuela Ecuestre.',
  },
  {
    name: 'Hipotels Sherry Park',
    zone: 'Avenida',
    note: 'Cuatro estrellas con piscina y jardín, buena relación calidad-precio.',
  },
];

/** Enlace de búsqueda en Google Maps: siempre resuelve a la ficha real del hotel. */
export function mapsUrl(name: string): string {
  const query = `${name}, Jerez de la Frontera`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
