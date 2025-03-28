// src/pages/Saints.js
import React from 'react';

const saints = [
  {
    name: "St. Sebastian",
    description: "The patron saint of athletes. He endured torture and remained faithful under pressure — a true example of perseverance.",
    quote: "Be strong and courageous. Do not be afraid... for the Lord your God goes with you.",
    image: "https://cdn.britannica.com/25/191825-050-F8F6F1B2/Martyrdom-of-Saint-Sebastian-Coxie-Michael-van.jpg" 
  },
  {
    name: "Bl. Pier Giorgio Frassati",
    description: "An avid mountain climber and athlete. He was known for his joy, service to the poor, and love of adventure and faith.",
    quote: "Verso l’alto — To the heights!",
    image: "https://media1.catholicireland.net/wp-content/uploads/2018/04/Giorgio-frassati.jpg" 
  },
  {
    name: "St. John Paul II",
    description: "Loved skiing and hiking. He showed the world that strength of faith and strength of body can go hand-in-hand.",
    quote: "Sport... helps people to come out of themselves and open up to others.",
    image: "https://cdn11.bigcommerce.com/s-iw55yn2imp/images/stencil/original/products/11876/8297/JPII_icon_zelasko2__15049.1598468107.png?c=2&segid=9da6f230-b5cd-45dc-ab5a-77bc6720b2c5" 
  },
  {
    name: "St. Joan of Arc",
    description: "A warrior-saint who led armies with boldness and conviction. A powerful role model of courage, especially under pressure.",
    quote: "I am not afraid… I was born to do this.",
    image: "https://cdn.britannica.com/92/60892-050-3197B9F4/Joan-of-Arc-Coronation-Charles-VII-Reims-1854.jpg" 
  },
  {
    name: "St. Josephine Bakhita",
    description: "Once enslaved, she found Christ and lived a life of forgiveness and humility. Her endurance inspires all who face adversity.",
    quote: "If I were to meet the slave-traders... I would kneel and kiss their hands, for if it had not been for them, I would not have become a Christian.",
    image: "https://cdn11.bigcommerce.com/s-cqk2fho/images/stencil/1280x1280/products/9832/13454/Bakita_front__32929.1662164370.jpg?c=2" 
  }
];

export default function Saints() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #00509D, #74C0FC)',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{
          fontSize: '30px',
          fontWeight: '700',
          color: '#FFDC5E',
          borderBottom: '2px solid #FFDC5E',
          paddingBottom: '10px',
          marginBottom: '30px'
        }}>
          Saints Who Inspire Student-Athletes
        </h1>

        {saints.map((saint, index) => (
          <div key={index} style={{
            marginBottom: '30px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Display Saint Image */}
            {saint.image && (
              <img 
                src={saint.image} 
                alt={saint.name} 
                style={{
                  width: '200px',
                  height: 'auto',
                  borderRadius: '8px',
                  marginRight: '20px',
                  marginBottom: '10px'
                }} 
              />
            )}
            <div style={{ maxWidth: '75%' }}>
              <h2 style={{ color: '#FFDC5E' }}>{saint.name}</h2>
              <p style={{ marginTop: '8px' }}>{saint.description}</p>
              <blockquote style={{
                fontStyle: 'italic',
                marginTop: '12px',
                borderLeft: '4px solid #FFDC5E',
                paddingLeft: '12px',
                color: '#f0f0f0'
              }}>
                "{saint.quote}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
