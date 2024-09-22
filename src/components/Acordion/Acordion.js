import React, { useState, useRef } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div style={{ margin: '1rem' }}>
            <div 
                onClick={toggleAccordion}
                className={`AcordionButon ${isOpen ? 'ButonOpen' : ''}`} 
                style={{ 
                    cursor: 'pointer', 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    backgroundColor: '#f1f1f1', 
                    display: 'flex', 
                    alignItems: 'center',
                }}
            >
                <span style={{ marginRight: '10px' }}>
                    {isOpen ? '🔼' : '🔽'}
                </span>
                {title}
            </div>
            <div 
                className={`accordion-content ${isOpen ? 'open' : ''}`} 
                ref={contentRef}
                style={{ 
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0',
                    overflowX: 'auto',  // Permitir desplazamiento horizontal
                    overflowY: 'hidden',
                    transition: 'max-height 0.8s ease',
                    width: '100%', // Asegurarse de que use todo el ancho disponible
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;

