import React, { useState, useEffect } from 'react';
import '/src/App.css'

const Notifications = ({ cards, interval = 3000 }) => {
    const [currentCardsIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, interval);

        return () => clearInterval(timer);
    }, [cards, interval]);

    return (
        <div className="notification-bar">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`card ${index === currentCardsIndex ? 'active' : ''}`}
                >
                    <img src={card.image} alt={card.title} className="card-image" />
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Notifications;
