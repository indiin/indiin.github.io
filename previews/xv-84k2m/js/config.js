/**
 * @file config.js
 * @description Configuración exclusiva para los XV Años de Britany Altair.
 * Carga las variables necesarias antes de ejecutar invitation-core.js
 */

const INVITATION_CONFIG = {
  // --- TIPO DE PROYECTO ---
  isDemo: false,
  tipoEvento: "xv", // 'boda' | 'xv' | 'fiesta'

  // --- PAQUETE Y FUNCIONES ---
  plan: "esencial", // 'esencial' | 'vip'
  soloAdultos: false, // false = evento familiar

  // --- DATOS DEL EVENTO ---
  nombrePrincipal: "Britany Altair",
  fechaEvento: "2027-01-08T19:00:00", // Viernes 8 de Enero de 2027 - 7:00 PM

  // --- RSVP Y CONTACTO ---
  telefonoWhatsApp: "525522678210",
  sheetScriptUrl: "", // No aplica en Paquete Esencial

  // --- ALMACENAMIENTO LOCAL ---
  storageKey: "rsvp_xv_britany_altair_2027_ene",
};
