import React, {useState} from 'react'

const TrendsKeyword = () => {
    const [state, setState] = useState([
        {
            id: 1,
            top: "Ajay",
            title:"Title 1",
            footer:"Lorem ipsum...",
            img:"https://via.placeholder.com/60/566573/FFFFFF/?text=1"       
        },
        {
            id: 2,
            top: "Honey",
            title:"Title 2",
            footer:"Lorem ipsum...",
            img:"https://via.placeholder.com/60/DC7633/FFFFFF/?text=2"       
        },
        {
            id: 3,
            top: "Mark",
            title:"Title 3",
            footer:"Lorem ipsum...",
            img:"https://via.placeholder.com/60/52BE80/FFFFFF/?text=3"       
        },
        {
            id: 4,
            top: "John",
            title:"Title 4",
            footer:"Lorem ipsum...",
            img:"https://via.placeholder.com/60/5499C7/FFFFFF/?text=4"       
        },
        {
            id: 5,
            top: "Vijay",
            title:"Title 5",
            footer:"Lorem ipsum...",
            img:"https://via.placeholder.com/60/EC7063/FFFFFF/?text=5"       
        },
    ]);

    return (
        <div className="keywords">
            <div className="key">
                <div className="keyword__heading">
                    <h4>What's Happening</h4>
                </div>
                {state.map((key) => (
                    <div className="keyword__card" key={key.id}>
                    <div className="left">
                        <div className="card__header">
                            <small>{key.top}</small>
                        </div>
                        <div className="card__body">
                            <h4>{key.title}</h4>
                        </div>
                        <div className="card__footer">
                            <small>{key.footer}</small>
                        </div>
                    </div>
                    <div className="right">
                        <img src={key.img} alt="Post Image" alt="Image" />
                    </div>
                </div>
                ))}
                
                



            </div>
        </div>
    )
}

export default TrendsKeyword
