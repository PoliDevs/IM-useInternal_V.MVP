import React, { useState } from 'react';
import { MpHelp } from '../../atom/iconsHerocoins/icons';

export default function SubTitle({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClick = () => {
    window.open('https://www.mercadopago.com.mx/ayuda/20214#:~:text=Cuando%20ingreses%20las%20%22credenciales%20de,en%20el%20bot%C3%B3n%20de%20copiar', '_blank');
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '10px', display: 'inline-block', verticalAlign: 'middle'  }}>
        {text}
      </h2>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ cursor: 'pointer', marginLeft: '18px', display: 'inline-block', verticalAlign: 'middle'  }}
      >
        <MpHelp height="20px" />
      </span>
      {showTooltip && (
        <div
          style={{
            width: '205px', // Usar width en vez de maxWidth para forzar el tamaño del tooltip
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            padding: '10px 20px',
            fontSize: '10px', 
            fontWeight:'regular',
            color: '#666',
            position: 'absolute',
            top: '50%',
            left: 'calc(100% + 15px)',
            transform: 'translateY(-50%)',
            zIndex: 1,
            whiteSpace: 'normal',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            lineHeight: '98%',
          }}
        >
          ¿Cómo busco las credenciales de mi cuenta de Mercado Pago?
        </div>
      )}
    </div>
  );
}
