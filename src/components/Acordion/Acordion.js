import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ margin: '10px 0' }}>
            <div 
                onClick={toggleAccordion} 
                style={{ 
                    cursor: 'pointer', 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    backgroundColor: '#f1f1f1'
                }}
            >
                {title}
            </div>
            {isOpen && (
                <div style={{ padding: '10px', border: '1px solid #ccc', borderTop: 'none' }}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;