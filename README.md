# KORIAKI IMPORT — Landing Page

Landing page para **KORIAKI IMPORT**: importación y venta de conversiones,
faros LED, faros posteriores, pisaderas y cubrelluvias para **Toyota Hilux** y
**Ford Raptor**. Modernización de vehículos 4x4. Almacén en Separadora
Industrial, Ate — Lima, Perú.

## Stack

- [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar contenido

- **Datos de la empresa, productos y precios de distribuidor:**
  `src/data/site.ts` (teléfono, WhatsApp, email, dirección y catálogo).
- Cambia `whatsapp` por el número real (formato internacional sin `+`, ej. `51999...`).
- Los precios están en soles (S/) como referencia de distribuidor — edítalos a gusto.

## Deploy

Desplegado en Vercel. Cada push a `main` genera un nuevo deploy automático.

```bash
npm run build   # build de producción
```
