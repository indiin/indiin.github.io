/**
 * @file landing.js
 * @description Lógica interactiva de la Landing Page: Animaciones al hacer scroll y renderizado dinámico de paquetes.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar iconos de Lucide
  if (window.lucide) lucide.createIcons();

  // 2. Animación de scroll (Intersection Observer)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  document.querySelectorAll(".pull-up").forEach((el) => observer.observe(el));

  // 3. Diccionario dinámico con redacción y rutas apuntando a la carpeta /demos/
  const packageSpecs = {
    boda: {
      demoFile: "demos/demo-boda.html",
      label: "Boda o Aniversario",
      esencial: [
        { text: "Sobre virtual animado con monograma de novios y música interactiva", active: true },
        {
          text: "Mensaje de Novios: Dedicatoria o frase inicial emotiva",
          active: true,
          strong: true,
        },
        {
          text: "Nuestros Padres: Sección de bendición y mención familiar",
          active: true,
          strong: true,
        },
        {
          text: "Temporizador dinámico: Cuenta regresiva real en vivo",
          active: true,
          strong: true,
        },
        {
          text: "Ubicaciones GPS para Ceremonia y Recepción con Google Maps",
          active: true,
        },
        {
          text: "Código de vestimenta con siluetas ilustradas y paleta de colores",
          active: true,
        },
        {
          text: "Mesa de regalos (Liverpool, Amazon y cuenta bancaria CLABE)",
          active: true,
        },
        {
          text: "Galería fotográfica: Álbum esencial (hasta 3 fotografías)",
          active: true,
        },
        {
          text: "Confirmación directa por WhatsApp (pase individual)",
          active: true,
        },
        {
          text: "Privacidad total: Protección anti-buscadores (No indexado en Google)",
          active: true,
        },
        {
          text: "Vigencia web: Invitación online activa durante 3 meses",
          active: true,
        },
        {
          text: "Sin boletos con asignación personalizada de pases",
          active: false,
        },
        {
          text: "Sin sincronización automática con Google Sheets",
          active: false,
        },
        {
          text: "Sin itinerario cronológico por fases ni corte de honor/padrinos",
          active: false,
        },
        {
          text: "Sin hospedaje recomendado para invitados foráneos",
          active: false,
        },
      ],
      signature: [
        {
          text: "Todo lo incluido en el Paquete Esencial",
          active: true,
          strong: true,
        },
        {
          text: "Boleto digital personalizado con asignación de pases reservados",
          active: true,
          strong: true,
        },
        {
          text: "Enlaces personalizados por invitado (?invitado=...&pases=...)",
          active: true,
          strong: true,
        },
        {
          text: "Conexión a Base de Datos en Google Sheets (registro silencioso en vivo)",
          active: true,
          strong: true,
        },
        {
          text: "Itinerario cronológico detallado por fases (misa, cóctel, banquete y baile)",
          active: true,
          strong: true,
        },
        {
          text: "Corte de Honor & Padrinos completa (velación, anillos, arras, lazo y ramo)",
          active: true,
          strong: true,
        },
        {
          text: "Recomendación de hoteles",
          active: true,
        },
        {
          text: "Módulo exclusivo 'Solo Adultos / No Niños' (diseño cordial)",
          active: true,
        },
        {
          text: "Galería fotográfica VIP extendida (Álbum completo en alta resolución)",
          active: true,
          strong: true,
        },
        {
          text: "Mensaje de Novios extendido: Carta de bienvenida con firma digital",
          active: true,
        },
        {
          text: "Vigencia web: Invitación online activa hasta por 6 meses",
          active: true,
          strong: true,
        },
      ],
    },
    xv: {
      demoFile: "demos/demo-xv.html",
      label: "XV Años o Cumpleaños",
      esencial: [
        { text: "Sobre virtual con corona táctil animada y música ambiental", active: true },
        {
          text: "Mensaje de la Quinceañera: Frase emotiva de bienvenida",
          active: true,
          strong: true,
        },
        {
          text: "Mis Padres: Sección especial de agradecimiento y bendición",
          active: true,
          strong: true,
        },
        {
          text: "Temporizador dinámico: Cuenta regresiva real en vivo hacia la fiesta",
          active: true,
          strong: true,
        },
        {
          text: "Ubicaciones GPS interactivas (Misa y Salón con Google Maps)",
          active: true,
        },
        {
          text: "Dress Code y paleta sugerida de vestimenta",
          active: true,
        },
        {
          text: "Mesa de regalos (Wishlist de Amazon o lluvia de sobres)",
          active: true,
        },
        {
          text: "Galería fotográfica: Álbum esencial (hasta 3 fotografías de estudio)",
          active: true,
        },
        {
          text: "Confirmación de asistencia directa a WhatsApp",
          active: true,
        },
        {
          text: "Privacidad total: No indexado en buscadores (No-Index)",
          active: true,
        },
        {
          text: "Vigencia web: Invitación online activa durante 3 meses",
          active: true,
        },
        {
          text: "Sin boletos con asignación personalizada de pases por familia",
          active: false,
        },
        {
          text: "Sin sincronización con base de datos en Google Sheets",
          active: false,
        },
        {
          text: "Sin programa / itinerario cronológico de la fiesta ni padrinos",
          active: false,
        },
      ],
      signature: [
        {
          text: "Todo lo incluido en el Paquete Esencial",
          active: true,
          strong: true,
        },
        {
          text: "Boleto digital personalizado con conteo de pases para la familia",
          active: true,
          strong: true,
        },
        {
          text: "Enlaces personalizados por invitado (?invitado=...&pases=...)",
          active: true,
          strong: true,
        },
        {
          text: "Conexión a Base de Datos en Google Sheets (control de asistencia en vivo)",
          active: true,
          strong: true,
        },
        {
          text: "El Programa / Itinerario de la noche (recepción, vals, brindis y DJ)",
          active: true,
          strong: true,
        },
        {
          text: "Mis Padrinos Emblemáticos (vestido, brindis, cojín, muñeca y sorpresa)",
          active: true,
          strong: true,
        },
        {
          text: "Galería fotográfica VIP extendida (Álbum completo en alta resolución)",
          active: true,
          strong: true,
        },
        {
          text: "Mensaje de Quinceañera extendido con dedicatoria a familiares",
          active: true,
        },
        {
          text: "Vigencia web: Invitación online activa hasta por 6 meses",
          active: true,
          strong: true,
        },
      ],
    },
    fiesta: {
      demoFile: "demos/demo-fiesta.html",
      label: "Graduación o Fiesta",
      esencial: [
        {
          text: "Sobre virtual interactivo con apertura táctil y música festiva",
          active: true,
        },
        {
          text: "Mensaje de Graduados: Lema o dedicatoria de generación",
          active: true,
          strong: true,
        },
        {
          text: "Temporizador dinámico: Cuenta regresiva oficial en tiempo real",
          active: true,
          strong: true,
        },
        {
          text: "Ubicación GPS con Google Maps y acceso al salón",
          active: true,
        },
        {
          text: "Código de vestimenta formal / Black Tie",
          active: true,
        },
        {
          text: "Galería de recuerdos esencial (hasta 3 fotografías)",
          active: true,
        },
        { text: "Aviso y confirmación simple de asistencia directo a WhatsApp", active: true },
        {
          text: "Privacidad total: No indexado en Google (No-Index)",
          active: true,
        },
        {
          text: "Vigencia web: Invitación online activa durante 3 meses",
          active: true,
        },
        {
          text: "Sin desglose estructurado de pases por acompañante",
          active: false,
        },
        {
          text: "Sin registro automático en Google Sheets",
          active: false,
        },
        {
          text: "Sin cronograma detallado por fases de la noche",
          active: false,
        },
      ],
      signature: [
        {
          text: "Todo lo incluido en el Paquete Esencial",
          active: true,
          strong: true,
        },
        {
          text: "Boleto de acceso personalizado con asignación de acompañantes",
          active: true,
          strong: true,
        },
        {
          text: "Personalización por enlace para cada graduado (?invitado=...&pases=...)",
          active: true,
          strong: true,
        },
        {
          text: "Conexión a Base de Datos en Google Sheets (control de accesos en vivo)",
          active: true,
          strong: true,
        },
        {
          text: "Cronograma completo de la noche (alfombra roja, cena, brindis y after)",
          active: true,
          strong: true,
        },
        {
          text: "Galería de recuerdos VIP extendida (Álbum generacional completo)",
          active: true,
          strong: true,
        },
        {
          text: "Mensaje y reseña generacional completa con agradecimientos",
          active: true,
        },
        {
          text: "Vigencia web: Invitación online activa hasta por 6 meses",
          active: true,
          strong: true,
        },
      ],
    },
  };

  // Configuración centralizada de WhatsApp
  const WHATSAPP_CONFIG = {
    telefono: "529613658086",
    mensajeGeneral:
      "Hola INDIIN, deseo más información sobre las invitaciones digitales.",
  };

  const footerBtn = document.getElementById("btnWhatsappFooter");
  if (footerBtn) {
    footerBtn.href = `https://wa.me/${WHATSAPP_CONFIG.telefono}?text=${encodeURIComponent(WHATSAPP_CONFIG.mensajeGeneral)}`;
  }

  // 4. Función de actualización reactiva
  function updateCardContent(card) {
    const tier = card.getAttribute("data-tier");
    const select = card.querySelector(".package-select");
    const eventType = select.value;
    const spec = packageSpecs[eventType];
    const items = spec[tier];

    // A. Renderizar viñetas
    const listEl = card.querySelector(".features-list");
    listEl.innerHTML = items
      .map((item) => {
        if (item.active) {
          return `
          <li class="flex items-center gap-2 text-champagne ${item.strong ? "font-medium" : ""}">
            <i data-lucide="check" class="w-4 h-4 text-gold shrink-0"></i>
            <span>${item.text}</span>
          </li>
        `;
        } else {
          return `
          <li class="flex items-center gap-2 text-gray-600 line-through">
            <i data-lucide="x" class="w-4 h-4 text-gray-700 shrink-0"></i>
            <span>${item.text}</span>
          </li>
        `;
        }
      })
      .join("");

    // B. Parámetros de URL
    const demoQuery =
      tier === "signature"
        ? "?plan=vip&invitado=Familia+Ramírez&pases=2"
        : "?plan=esencial";
    const demoLink = card.querySelector(".package-demo-link");
    demoLink.href = `${spec.demoFile}${demoQuery}`;

    // C. Mensaje de WhatsApp
    const orderBtn = card.querySelector(".package-order-btn");
    const tierNames = {
      esencial: "Esencial ($790 MXN)",
      signature: "Signature VIP ($1,490 MXN)",
    };
    const msg = `Hola INDIIN, me interesa contratar el Paquete ${tierNames[tier]} para mi evento de ${spec.label}.`;
    orderBtn.href = `https://wa.me/${WHATSAPP_CONFIG.telefono}?text=${encodeURIComponent(msg)}`;

    // D. Reinicializar iconos
    lucide.createIcons();
  }

  // 5. Inicializar y registrar eventos
  document.querySelectorAll(".package-card").forEach((card) => {
    updateCardContent(card);
    card.querySelector(".package-select").addEventListener("change", () => {
      updateCardContent(card);
    });
  });
});
