import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colorPalette } from '../../../../styles/colors';

import Button from './Button';

interface ButtonCatalogProps {
  imageUrl: string;
  hoverImageUrl: string;
  title: string;
  shortDesc?: string;
  price: string;
}

const ButtonCatalog: React.FC<ButtonCatalogProps> = ({ imageUrl, hoverImageUrl, title, shortDesc, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-between w-[250px] min-h-[400px]`}
      style={{ backgroundColor: colorPalette.buttonCatalogBg }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.2 : 1 }}
      transition={{ duration: 0.3, ease: 'linear' }}
    >
      {/* Top Div */}
      <div className="w-full h-full flex flex-col gap-3">
        {/* Image Container */}
        <div className="w-[100%] h-[200px]" style={{ backgroundColor: colorPalette.bg2 }}>
          <img 
            src={isHovered ? hoverImageUrl : imageUrl} 
            alt={title} 
            className="product-image"
          />
        </div>

        {/* Texts */}
        <div className="flex flex-col gap-2">
          <h3 className="text-bold text-2xl font-raleway" style={{ color: colorPalette.txt_primary }}>{title}</h3>
          <div className="flex flex-col">
            {shortDesc && <p className="text-md font-raleway" style={{ color: colorPalette.txt_secondary }}>{shortDesc}</p>}
            <p className="text-md font-raleway" style={{ color: colorPalette.txt_secondary }}>{price}</p>
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="w-full flex items-center justify-center">
        <Button 
          type="button" 
          variant="default"
          size="md"
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ButtonCatalog;