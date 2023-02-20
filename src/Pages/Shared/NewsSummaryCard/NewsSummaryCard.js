import React from 'react';

const NewsSummaryCard = ({ news }) => {
    const { title } = news;
    return (
        <div>
            <h5>{title}</h5>
        </div>
    );
};

export default NewsSummaryCard;