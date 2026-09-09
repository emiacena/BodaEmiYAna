export interface Hotel {
  /** Nombre tal y como aparece en Google Maps. */
  name: string;
  /** Localidad. Ojo: los hoteles NO están en Jerez, sino en El Puerto. */
  city: string;
  /** Una línea describiendo el hotel. */
  note: string;
}

/**
 * Recomendaciones de alojamiento.
 *
 * La boda es en Jerez, pero el alojamiento que recomendamos está en El Puerto
 * de Santa María. Por eso cada hotel lleva su `city`: el enlace al mapa se
 * construye con ella y mandar a alguien a la ciudad equivocada sería un lío.
 *
 * El teléfono, la dirección y la disponibilidad los da siempre la ficha del
 * hotel. Si negociáis tarifa o código de reserva, añadidlo en `note`.
 */
export const hotels: Hotel[] = [
  {
    name: 'Punta Bermeja Premium Beach Hotel',
    city: 'El Puerto de Santa María',
    note: 'Junto a la playa, en la zona de Vistahermosa. 40% de descuento para mayores de 60 años en temporada baja.',
  },
  {
    name: 'Soho Boutique Vistahermosa',
    city: 'El Puerto de Santa María',
    note: 'Los antiguos Jándalos Vistahermosa. Hotel y apartamentos con spa y piscina.',
  },
  {
    name: 'Soho Boutique Puerto',
    city: 'El Puerto de Santa María',
    note: 'Cuatro estrellas, cerca del centro.',
  },
];

/** Enlace de búsqueda en Google Maps: siempre resuelve a la ficha real del hotel. */
export function mapsUrl(hotel: Hotel): string {
  const query = `${hotel.name}, ${hotel.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * Zonas recomendadas para buscar apartamento o casa por Airbnb / Booking.
 * Todas en El Puerto de Santa María.
 */
export const zones: string[] = [
  'Fuentebravía',
  'El Manantial',
  'El Ancla',
  'Las Redes',
  'El Águila',
  'Vistahermosa',
  'El Centro',
];
