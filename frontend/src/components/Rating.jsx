

const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">
            <span>
                {/* It is the class that determines what icon is displayed */}
                <i style={{ color: color }} className={
                    value >= 1 ? 'fas fa-star' //full star
                        : value >= 0.5 ? 'fas fa-star-half-alt' // half star
                            :'far fa-star' // empty star
                
                }>
                </i>
            </span>
            <span>
                <i style={{ color: color }} className={
                    value >= 2 ? 'fas fa-star' //full star
                        : value >= 1.5 ? 'fas fa-star-half-alt' // half star
                            :'far fa-star' // empty star
                
                }>
                </i>
            </span>
            <span>
                <i style={{ color: color }} className={
                    value >= 3 ? 'fas fa-star' //full star
                        : value >= 2.5 ? 'fas fa-star-half-alt' // half star
                            :'far fa-star' // empty star
                
                }>
                </i>
            </span>
            <span>
                <i style={{ color: color }} className={
                    value >= 4 ? 'fas fa-star' //full star
                        : value >= 3.5 ? 'fas fa-star-half-alt' // half star
                            :'far fa-star' // empty star
                
                }>
                </i>
            </span>
            <span>
                <i style={{ color: color }} className={
                    value >= 5 ? 'fas fa-star' //full star
                        : value >= 4.5 ? 'fas fa-star-half-alt' // half star
                            :'far fa-star' // empty star
                
                }>
                </i>
            </span>
            {/* The number of reviews */}
            <span>{ text && text}</span>
        </div>
    )
}

export default Rating