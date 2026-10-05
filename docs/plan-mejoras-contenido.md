# Plan de mejoras de contenido — tectonlabs.net

Basado en `brainstorming_tecton.txt` y en el estado actual de `src/pages/index.astro` y sus componentes.

## Diagnóstico rápido

| Área | Hoy | Problema |
|---|---|---|
| Hero | "De problemas complejos a software simple" | Genérico; no dice *qué* construimos ni para quién. |
| Servicios (`OsiStack.astro`) | 5 capas: Infraestructura · Datos · Sistemas · Aplicaciones · Producto | "Datos" y "Sistemas" se solapan; tags genéricos (FRONTEND, BACKEND) en vez de stack real. |
| Nosotros | 4 métricas: `< 1 mes`, `+10 años`, `24/7`, `100%` | "24/7" es una promesa difícil de sostener; "100% foco en resultados" no dice nada. |
| Trayectoria | 3 `<img>` a `client-logo1..3.png` | **Los archivos no existen** → imágenes rotas en producción. |
| Proceso / Casos | No existen | Falta lo que, según el brainstorming, hace que la empresa "se vea madura". |
| Footer | Dos footers (uno en `index.astro`, otro en `Layout.astro`) | Duplicado; el link a `/terms` da 404. |
| SEO | Title "Soluciones informáticas" | Poco específico. |
| Código muerto | `src/data/services.ts` | No se usa en ningún lado. |

## Principio: experiencia del equipo ≠ trayectoria de la empresa

Tecton Labs es una empresa nueva. La experiencia (proyectos, clientes, industrias, años) es **de las personas que la integran**, adquirida antes y en otras empresas. Todo el contenido tiene que respetar esa distinción:

- ✅ "Nuestro equipo tiene más de 10 años construyendo software para fintech, salud y transporte."
- ✅ "Integrantes de nuestro equipo trabajaron en proyectos para…"
- ❌ "Hemos colaborado con…", "Nuestros clientes", "Casos de Tecton Labs" referidos a trabajos previos.
- ❌ Ejemplos de industrias o clientes locales como si fueran experiencia de la empresa.

Esto aplica a la sección Trayectoria, las métricas de Nosotros y los casos de estudio (ver abajo).

## Mensaje central

> Infraestructura: el equipo tiene experiencia tanto en cloud como **on-premise**. No posicionar a Tecton como "solo cloud"; usar "cloud y on-premise" / "en la nube o en tus servidores".

Pasar de vender *tecnologías / categorías* a vender **resultados y problemas resueltos**, con una narrativa única:
**Build → Modernize → Run** + **ingeniería por capas** (visual del stack).

---

## Fase 1 — Correcciones y quick wins (≈ medio día)

1. **Arreglar Trayectoria**: reemplazar `client-logo1..3.png` por los logos nuevos en `public/` (TransCore, BP, EA).
   - **Reencuadrar el texto**: hoy dice "hemos construido soluciones y colaborado con organizaciones de primer nivel", que implica que fueron clientes de Tecton. Cambiar el título a **"Experiencia del equipo"** y la bajada a algo como: "Nuestro equipo trabajó en proyectos para empresas como:" (la atribución al equipo queda tácita, sin mencionar la fundación).
   - Evaluar si conviene mostrar logos o solo nombres en texto: usar logos de empresas que no son clientes de Tecton tiene más riesgo de marca que mencionarlas.
   - ⚠️ `png-clipart-metrostation-ea-games-logo-thumbnail.png` es un clipart de terceros: conseguir el logo oficial y confirmar que tenemos permiso para mostrar cada marca (relación directa vs. vía consultora/empleador).
   - Unificar estilo: logos monocromo blanco/gris con `opacity` y color al hover, altura ~h-10/h-12 (h-32 es excesivo).
   - Agregar `alt` reales ("TransCore", etc.).
2. **Eliminar footer duplicado** de `index.astro` (queda `Footer.astro`). Quitar link a `/terms` o crear la página.
3. **Revisar métricas de Nosotros**: reemplazar `24/7` y `100%` por datos verificables y atribuidos al equipo (ej. "+10 años de experiencia del equipo", "Fintech · Salud · Transporte" como industrias donde trabajó el equipo, "Equipo senior").
4. **Borrar `src/data/services.ts`** (o reutilizarlo como fuente de datos de la Fase 2).
5. **Formulario de contacto**: hoy `ContactForm.tsx` muestra "¡Gracias!" pero **no envía nada** (hay un `TODO`). Conectarlo a un endpoint real (Astro action / Cloudflare + servicio de mail) o, mientras tanto, cambiarlo por un `mailto:`.
6. **Meta tags**: title `Tecton Labs — Ingeniería de software, cloud y modernización`; description alineada al nuevo hero. Agregar Open Graph (`og:title`, `og:description`, `og:image`).

## Fase 2 — Nuevo posicionamiento (≈ 1–2 días)

### 2.1 Hero
- **Título** (opciones):
  - "Construimos el software detrás de tu negocio." *(recomendado)*
  - "Construimos desde los cimientos."
- **Bajada**: "Desde la arquitectura de aplicaciones hasta la infraestructura, en la nube o en tus servidores, te ayudamos a construir, modernizar y operar software confiable."
- **Strip de stack** debajo de los CTAs (texto mono, discreto):
  `.NET · React · Angular · TypeScript · Azure · AWS · SQL Server · PostgreSQL · Docker · RabbitMQ · CI/CD`
- CTA secundario: "Ver servicios" → "Cómo trabajamos" o "Ver casos" cuando existan.

### 2.2 Pilar Build / Modernize / Run (franja corta bajo el hero)
Tres columnas, una línea cada una:
- **Construir** — Aplicaciones a medida, APIs e integraciones.
- **Modernizar** — Sistemas legacy, arquitectura y migraciones.
- **Operar** — Infraestructura cloud y on-premise, CI/CD, observabilidad y confiabilidad.

### 2.3 Servicios por capas (`OsiStack.astro`)
- **Header**: "Ingeniería, capa por capa." + "Construimos y evolucionamos software desde la infraestructura hasta la experiencia de producto."
  (Alternativa ya presente: "Construimos desde los cimientos." — elegir uno y usar el otro en el hero o cierre.)
- **Reducir a 4 capas** (fusionar Datos + Sistemas) y usar etiquetas con nombre en lugar de 01–05:

| Etiqueta | Título | Descripción | Tags |
|---|---|---|---|
| CIMIENTOS | Infraestructura | Infraestructura cloud, on-premise o híbrida: servidores, CI/CD, contenedores, infraestructura como código y automatización. | AWS · AZURE · ON-PREMISE · DOCKER · TERRAFORM · CI/CD |
| SISTEMAS | Datos e integraciones | APIs, integraciones, bases de datos, mensajería y sistemas distribuidos. | .NET · SQL · RABBITMQ · REST |
| SOFTWARE | Aplicaciones | Productos web y mobile diseñados alrededor de flujos de negocio reales. | REACT · ANGULAR · TYPESCRIPT · .NET |
| PRODUCTO | Estrategia e ingeniería | Del discovery técnico a la arquitectura, la entrega y la mejora continua. | DISCOVERY · ARQUITECTURA · MVP · EVOLUCIÓN |

- Frase de cierre bajo el stack: "Los productos sólidos se construyen sobre cimientos sólidos."
- Ajustes técnicos: geometría pasa de 5 a 4 capas; la lista ya usa `flex-col-reverse`, solo cambian datos. Mover el array `layers` a `src/data/` reemplazando `services.ts`.

### 2.4 Servicios orientados a problemas (nueva sección o tarjetas bajo el stack)
Cada tarjeta = **dolor del cliente** (titular) + servicio + bajada:

1. *"Tu sistema funciona, pero cada cambio cuesta más."* — **Modernización de legacy**: evolucionamos sistemas .NET y enterprise sin tirar años de lógica de negocio.
2. *"Tu aplicación funciona. Producción es otra historia."* — **Cloud e infraestructura**: arquitectura, CI/CD, contenedores, IaC, monitoreo y confiabilidad.
3. *"Tus sistemas necesitan hablar entre sí."* — **Integraciones y APIs**: pagos, ERPs, plataformas de terceros, servicios internos y arquitecturas event-driven.
4. *"Necesitás construir algo nuevo."* — **Ingeniería de producto**: del MVP a una aplicación lista para producción, con la arquitectura para crecer más allá del primer release.

> Decisión: o bien el stack (2.3) muestra *capacidades* y estas tarjetas muestran *problemas*, o se elige uno solo. Recomendado: mantener ambos, el stack como visual de marca y las tarjetas como argumento de venta.

## Fase 3 — Credibilidad (≈ 2–3 días, depende de contenido real)

### 3.1 Sección "Cómo trabajamos"
Timeline horizontal de 4 pasos:
- **01 — Entender**: mapeamos el problema de negocio, la arquitectura existente y las restricciones.
- **02 — Diseñar**: definimos arquitectura y plan de implementación antes de sumar complejidad innecesaria.
- **03 — Construir**: iteraciones cortas, comunicación directa e ingeniería de calidad productiva.
- **04 — Operar**: no desaparecemos después del deploy; mantenemos el sistema confiable y en evolución.

### 3.2 Experiencia del equipo (reemplaza/complementa "Trayectoria")
Tres proyectos bien contados > 30 claims genéricos. Formato de tarjeta: título · industria + stack · 1–2 líneas · "Leer más →".

⚠️ No son casos de Tecton Labs: presentarlos como **"Proyectos en los que trabajó nuestro equipo"**, en primera persona del equipo ("Diseñamos y evolucionamos…" solo si queda claro el encuadre de la sección), anonimizados (sin nombre de la empresa) y sin métricas de negocio confidenciales de ex empleadores. Cuando haya proyectos propios de Tecton, van en una sección aparte ("Casos") y estos pasan a segundo plano.
- **Plataforma de pagos** — Fintech · .NET · SQL Server · RabbitMQ · Azure — servicios backend para flujos de pago entre entidades financieras, comercios y proveedores.
- **CRM enterprise** — Salud · .NET · React/Angular · SQL Server — software para gestionar flujos de recetas y pedidos de producto.
- **Modernización cloud** — Enterprise · Azure · CI/CD · Contenedores — *(falta contenido: completar)*.

Para cada proyecto definir: contexto, desafío, rol del equipo, resultado técnico. Siempre anonimizado ("Procesador de pagos regional") y revisando acuerdos de confidencialidad con ex empleadores.
Cada caso puede ser una página propia vía content collection (`src/content/casos/*.md`) + ruta `src/pages/casos/[slug].astro`.

### 3.3 Nosotros
Reescribir con el ángulo **"Ingeniería, no outsourcing."**
"Trabajamos junto a tu equipo para diseñar, construir y operar los sistemas de los que depende tu negocio."

## Fase 4 — Cierre y navegación

- **Header nav**: Servicios · Cómo trabajamos · Casos · Nosotros · Contacto.
- **Contacto**: mantener; considerar sumar "Respondemos en 24–48 h hábiles" en lugar de promesas de soporte 24/7.
- Bilingüe: ver sección siguiente.

---

## Sitio bilingüe ES / EN (transversal)

**Por qué:** el foco inicial es local, pero la experiencia del equipo es internacional (TransCore, EA) y el copy en inglés ya está escrito en el brainstorming. Tener `/en/` sirve como respaldo de credibilidad y deja la puerta abierta a clientes de EE.UU./Europa más adelante.

**Cuándo:**
- **Estructura** (config, diccionarios, `lang`): al inicio de la Fase 2, antes de reescribir textos, para no extraer strings dos veces.
- **Contenido en EN y selector de idioma visible**: después de terminar y validar el español. Mientras tanto, `/en/` no se publica (o se publica sin enlazar). Prioridad: ES primero.

### Estructura técnica (i18n nativo de Astro)
- `astro.config.mjs`:
  ```js
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  }
  ```
  → `tectonlabs.net/` en español, `tectonlabs.net/en/` en inglés.
- **Diccionarios** en `src/i18n/es.ts` y `src/i18n/en.ts` (mismo shape, tipado con TypeScript para que falte una clave = error de build) + helper `useTranslations(Astro.currentLocale)`.
- **Páginas**: `src/pages/index.astro` y `src/pages/en/index.astro` renderizan el mismo componente de página (`src/views/Home.astro`) con el locale; no duplicar markup.
- **Datos con contenido** (capas del stack, servicios, pasos, casos): mover a `src/data/` con campos `{ es, en }`, o a content collections por idioma (`src/content/casos/es/…`, `…/en/…`).
- **Componentes a internacionalizar**: `Header` (nav + "Hablemos"/"Let's talk"), `Footer`, `OsiStack` (textos y etiquetas del SVG), `DecodeHeading` (hero), `ContactForm.tsx` (placeholders, validaciones, mensaje de éxito → pasar textos como props desde Astro).
- **Selector de idioma** en el header (`ES / EN`), que lleve a la misma sección en el otro idioma (`getRelativeLocaleUrl`). Sin redirección automática por `Accept-Language`: a lo sumo un aviso discreto.

### SEO
- `<html lang>` dinámico (hoy está fijo en `es`).
- `<link rel="alternate" hreflang="es|en|x-default">` en el `<head>` de `Layout.astro`.
- `title`, `description` y `og:*` por idioma; `og:locale` = `es_AR` / `en_US`.
- Sitemap con ambas versiones (`@astrojs/sitemap` soporta i18n).

### Contenido y tono
- **No traducir literal**: el EN se adapta del brainstorming, que ya tiene el tono correcto.
- **Español con voseo** (decisión): el foco inicial son clientes de Mendoza, y para un cliente local el tuteo suena a empresa de afuera o a texto traducido. Reglas:
  - Priorizar igual la primera persona del plural ("Construimos", "Analizamos tu caso"): es lo más natural en un sitio B2B y reduce la cantidad de verbos que dependen del registro.
  - Cuando haya que hablarle al lector, voseo: "Contanos", "necesitás", "Completá". Sin "usted" (demasiado formal para el tono de marca).
  - Los textos actuales ya usan voseo; solo hay que mantenerlo consistente en lo nuevo.
  - Si más adelante se apunta al resto de LatAm, pasar a tuteo es un cambio barato: todos los textos van a estar en `src/i18n/es.ts`.
- Titulares de referencia:

| Sección | ES | EN |
|---|---|---|
| Hero | Construimos el software detrás de tu negocio. | We build the software behind your business. |
| Pilares | Construir · Modernizar · Operar | Build · Modernize · Run |
| Servicios | Ingeniería, capa por capa. | Engineering, layer by layer. |
| Cierre stack | Los productos sólidos se construyen sobre cimientos sólidos. | Strong products are built on strong foundations. |
| Nosotros | Ingeniería, no outsourcing. | Engineering, not outsourcing. |
| Contacto | ¿Listo para construir? | Ready to build? |

- En EN, la disponibilidad se presenta como ventaja: "GMT-3 — overlapping hours with US & Europe".
- Casos de estudio: escribir primero en ES (público inicial) y adaptar a EN.

### Esfuerzo estimado
≈ 1 día para la estructura (config, diccionarios, selector, SEO) + el tiempo de redacción en EN, que crece con cada sección nueva.

---

## Foco local: Mendoza (transversal)

El arranque comercial apunta a empresas de Mendoza. El copy del brainstorming está pensado para un mercado más amplio; estos ajustes lo bajan a tierra sin perder el posicionamiento de ingeniería seria.

### Presencia local como diferencial
- Decirlo explícitamente: "Equipo en Mendoza" en el hero o la franja de pilares, y "Mendoza, Argentina" en el footer y en Contacto.
- Ventaja frente a consultoras de Buenos Aires o del exterior: **reuniones presenciales**, mismo horario, conocimiento del mercado local. Ej.: "Nos sentamos con tu equipo. Literalmente."
- En Contacto, reemplazar "GMT-3 (América Latina)" por "Mendoza, Argentina · reuniones presenciales o remotas".

### Canal de contacto
- Sumar **WhatsApp** (botón en Contacto y, opcionalmente, flotante en mobile): en el mercado local es el primer canal, antes que el formulario o el mail.
  - Número: **+54 9 261 384-7779** → link `https://wa.me/5492613847779` (formato internacional: 54 + 9 + 261 sin 0 + número sin 15).
  - Mensaje precargado opcional: `?text=Hola%20Tecton%20Labs%2C%20quiero%20consultar%20por%20un%20proyecto`.
- El formulario sigue, pero hoy no envía (ver Fase 1); con WhatsApp hay un canal que funciona desde el día uno.

### Contenido pensado para la pyme/empresa mendocina
- Las tarjetas de problemas (2.4) funcionan, pero conviene un lenguaje menos "enterprise": además de legacy y event-driven, contemplar casos típicos como planillas de Excel que se volvieron el sistema, sistemas que no se hablan con el ERP o con AFIP/ARCA, procesos manuales que se pueden automatizar.
- **No usar industrias locales como ejemplo** por ahora: sin proyectos propios en esas industrias, sugeriría una experiencia que la empresa todavía no tiene. Los problemas se describen de forma genérica, sin atarlos a un rubro.
- Cuando exista el **primer proyecto propio** (idealmente local), sumarlo como caso de Tecton Labs: es el contenido de mayor valor para este público.

### SEO local
- Title y description con la ubicación: `Tecton Labs — Desarrollo de software en Mendoza`.
- Perfil de **Google Business** (aparecer en Maps y búsquedas tipo "desarrollo de software Mendoza").
- Datos estructurados `LocalBusiness` / `Organization` (JSON-LD) con área de servicio "Mendoza, Argentina" (sin dirección física) y teléfono en `Layout.astro`. En Google Business, configurar como negocio de área de servicio, con la dirección oculta.
- `og:locale` = `es_AR`.

### Métricas de Nosotros
- "< 1 mes para tu primer MVP" puede generar expectativas difíciles en proyectos locales con alcance incierto; evaluar "Primera entrega en semanas, no meses" o quitarla.

---

## Orden de página propuesto

1. Hero (nuevo titular + stack strip)
2. Construir / Modernizar / Operar
3. Servicios por capas (stack isométrico, 4 capas)
4. Problemas que resolvemos (4 tarjetas)
5. Cómo trabajamos (4 pasos)
6. Experiencia del equipo (3 proyectos anonimizados + empresas donde trabajó el equipo)
7. Nosotros — "Ingeniería, no outsourcing"
8. Contacto
9. Footer (único)

## Decisiones pendientes

- [x] Titular del hero: "Construimos el software detrás de tu negocio."
- [ ] Empresas donde trabajó el equipo: ¿logos o solo nombres? ¿Cuáles se pueden mencionar?
- [ ] Contenido real del 3er proyecto (Cloud Modernization).
- [x] Sitio bilingüe ES/EN → sí (ver sección "Sitio bilingüe").
- [x] Español con voseo (foco inicial: clientes de Mendoza), priorizando "nosotros".
- [x] Idioma por defecto en `/`: español (`/en/` para inglés, se publica después).
- [x] WhatsApp: +54 9 261 384-7779.
- [x] Ubicación: solo "Mendoza, Argentina", sin dirección física.
- [x] Sin industrias locales de ejemplo hasta tener proyectos propios.
- [ ] ¿Páginas individuales por caso o solo tarjetas en la home?
