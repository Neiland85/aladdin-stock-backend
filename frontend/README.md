# 💻 Aladdin Stock Frontend

Frontend del sistema inteligente de control de stock **Aladdin Stock Bot**.  
Desarrollado con **Next.js 14**, **Tailwind CSS**, y conectado a una base de datos Supabase para visualizar y gestionar el inventario en tiempo real.

Frontend for the smart inventory system **Aladdin Stock Bot**, built with **Next.js 14**, **Tailwind CSS**, and integrated with Supabase for real-time product management.

---

## ✨ Características / Features

- ⚡ Visualización dinámica del inventario de productos
- 📦 Carga automática de productos desde `/api/products`
- 💡 Interfaz clara y moderna usando Tailwind y componentes accesibles
- 🔁 Actualización automática al detectar nuevos datos
- 🌙 Tema oscuro integrado desde el layout base
- 🔍 Filtros e indicadores de estado (en progreso)

---

## 🧠 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- `useEffect`, `useState` y SSR-friendly hydration
- [Supabase](https://supabase.com/) (vía API local)

---

## 🚀 Desarrollo Local / Local Development

```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar entorno local
pnpm dev
Accede a la app en: http://localhost:3000

🧪 Cómo funciona el hook de productos
tsx
Copiar
Editar
useEffect(() => {
  async function fetchProducts() {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  fetchProducts();
}, []);
🧩 Archivos clave / Key Files
Archivo	Descripción
app/page.tsx	Página principal de inventario
app/layout.tsx	Layout global con soporte dark mode y fuentes
app/api/products/route.ts	Lógica backend para conectar Supabase (via Vercel)
components/	Carpeta para futuros componentes reutilizables
📸 Vista previa
<!-- puedes subir una captura a GitHub o usar un link directo -->

👤 Autor
Creado por @Neiland85
Frontend oficial de Aladdin Lights Ibiza 💡
