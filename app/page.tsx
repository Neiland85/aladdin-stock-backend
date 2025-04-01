'use client';

import React from 'react';
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Inventario - Aladdin Stock Bot</h1>

      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length === 0 ? (
        <p>No hay productos en el sistema.</p>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-zinc-800 p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-zinc-400">
                {product.type} — Código: {product.product_code}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                <p>
                  <strong>Stock:</strong> {product.stock}
                </p>
                <p>
                  <strong>Prestados:</strong> {product.borrowed}
                </p>
                <p>
                  <strong>Dañados:</strong> {product.damaged}
                </p>
                <p>
                  <strong>Ubicación:</strong> {product.location || 'Sin ubicación'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
