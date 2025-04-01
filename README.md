# 🤖 Aladdin Stock Backend

Backend serverless para el sistema de control de stock **Aladdin Stock Bot**, desarrollado con TypeScript, Supabase y Vercel Functions.  
Serverless backend for the **Aladdin Stock Bot** inventory control system, built using TypeScript, Supabase and Vercel Functions.

---

## ⚙️ Stack Técnico / Tech Stack

- 🟦 TypeScript
- 🛢️ Supabase (como BaaS y base de datos / as BaaS and DB)
- 🔐 Zod (validaciones / validations)
- ☁️ Vercel Functions (`/api` folder)
- 🧪 Jest & Supertest (testing - soon)

---

## 🚀 Desarrollo Local / Local Development

```bash
# 1. Instala dependencias / Install dependencies
pnpm install

# 2. Ejecuta el entorno local / Run local dev
pnpm dev
🔐 Variables de entorno / Environment Variables
Crea un archivo .env.local con las siguientes claves:

bash
Copiar
Editar
SUPABASE_URL= https://your-project.supabase.co
SUPABASE_KEY= your-anon-or-service-key
📦 Productos conectados con Supabase / Supabase Products Table
Este backend se conecta a la tabla products en Supabase, lo que permite:

✅ Obtener todos los productos con /api/products

🆕 Añadir productos manualmente o desde el frontend

🔄 Reflejar cambios en tiempo real en la base de datos

La tabla incluye los siguientes campos:
The products table includes the following fields:

Campo / Field	Tipo / Type	Descripción / Description
id	UUID	ID generado automáticamente / Auto-generated ID
name	text	Nombre del producto / Product name
description	text	Breve descripción / Short description
type	text	Categoría: Iluminación, Audio, etc. / Category
product_code	text	Código interno del producto / Product code
stock	int	Cantidad disponible / Available quantity
borrowed	int	Productos prestados / Borrowed units
damaged	int	Productos dañados / Damaged units
location	text	Ubicación física / Physical location
🛠️ Endpoints disponibles / Available Endpoints
GET /api/products → 📦 Obtiene todos los productos / Fetches all products

POST /api/products (⚙️ en progreso) → Crea nuevo producto / Create new product

✨ Estado actual / Current Status
🟢 Integración funcional con Supabase completada
✅ /api/products funcionando correctamente
🛠️ En desarrollo: Creación de productos desde UI + gestión de stock

🧠 Autor / Author
Desarrollado por @Neiland85 —
Backend de Aladdin Lights Ibiza 💡
```
