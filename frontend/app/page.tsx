'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  type: string;
  product_code: string;
  stock: number;
  borrowed: number;
  damaged: number;
  location: string;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ función declarada fuera del useEffect
  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando productos...</p>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Inventario de Productos</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 border rounded-lg bg-zinc-900 text-white">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm">💡 Tipo: {product.type}</p>
            <p className="text-sm">🆔 Código: {product.product_code}</p>
            <p className="text-sm">📦 Stock: {product.stock}</p>
            <p className="text-sm">📤 Prestados: {product.borrowed}</p>
            <p className="text-sm">❌ Dañados: {product.damaged}</p>
            <p className="text-sm">📍 Ubicación: {product.location}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
