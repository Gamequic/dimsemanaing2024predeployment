import React, { useState, useRef } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{margin: '1rem'}}>
            <div 
                onClick={toggleAccordion}
                className='AcordionButon'
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
                style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0' }}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;
