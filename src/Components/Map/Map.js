 import React from 'react';
 
 const embededurl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.752614183858!2d80.3651366747721!3d8.327362591708589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf5b49d0d210d%3A0x8df7c8f4c1771e9!2sNalanda%20International%20Friendship%20Assosiation!5e0!3m2!1sen!2slk!4v1728886527716!5m2!1sen!2slk';
 
 const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/K92sHCZy4hYAcQhi7';
  

 export default function Map() {

    const iframeforthemap = {
        width: '500px',
        height: '450px',
        border: '0',
        allowfullscreen:'',
        loading:'lazy',
        referrerpolicy:'no-referrer-when-downgrade',
    };
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Gray overlay
        transition: 'background-color 0.3s ease', // Smooth hover transition
        cursor: 'pointer',
      };
    
    const hoverOverlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Lighter on hover
      };

   return (
     <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: 'auto', overflow: 'hidden', borderRadius:'8px' }}>
        <iframe
            title="Company Location"
            src={embededurl}
            style={iframeforthemap}
            loading="lazy"
        >    
        </iframe>  

        <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
            }}
            title="Get Directions on Google Maps"
        >
            <div
                style={overlayStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverOverlayStyle.backgroundColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = overlayStyle.backgroundColor)}
                title="Get Directions on Google Maps"
            ></div>
        </a>
     </div>
   )
 }
 