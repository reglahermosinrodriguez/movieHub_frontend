import React, { ReactNode } from 'react';
import { CartProvider } from '../../components/useCart';


// Definir el tipo de las propiedades
interface CartContextProviderProps {
  children: ReactNode;
  // Puedes agregar más propiedades aquí si es necesario
}

// Componente de alto nivel que envuelve toda la aplicación con el contexto del carrito
export const CartContextProvider: React.FC<CartContextProviderProps> = (props) => {
  // Utiliza el spread operator para pasar las propiedades adicionales al componente interno
  return <CartProvider {...props} />;
};