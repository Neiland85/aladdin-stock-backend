'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trash2, Undo2, AlertCircle } from 'lucide-react';

// Tipado de producto
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

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando inventario...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Inventario de Productos</h1>
      <div className="grid gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-zinc-900 text-white">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    ID: {product.product_code} • {product.type}
                  </p>
                </div>
                {product.damaged > 0 && <Badge variant="destructive">Dañado</Badge>}
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium">Disponibles</p>
                  <p>{product.stock}</p>
                </div>
                <div>
                  <p className="font-medium">Prestados</p>
                  <p>{product.borrowed}</p>
                </div>
                <div>
                  <p className="font-medium">Dañados</p>
                  <p>{product.damaged}</p>
                </div>
                <div className="col-span-3">
                  <p className="font-medium">Ubicación</p>
                  <p>{product.location}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button size="sm" variant="default">
                  <ArrowRight className="w-4 h-4 mr-1" /> Añadir
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="w-4 h-4 mr-1" /> Quitar
                </Button>
                <Button size="sm" variant="secondary">
                  <Undo2 className="w-4 h-4 mr-1" /> Devolver
                </Button>
                <Button size="sm" variant="destructive">
                  <AlertCircle className="w-4 h-4 mr-1" /> Reportar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
