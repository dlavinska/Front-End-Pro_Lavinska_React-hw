import React from 'react';

class SmileWinner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            smile: [
                { id: 1, name: '😀', count: 0 },
                { id: 2, name: '😍', count: 0 },
                { id: 3, name: '😎', count: 0 },
                { id: 4, name: '😔', count: 0 },
                { id: 5, name: '😏', count: 0 }
            ],
            winner: null
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleResults = this.handleResults.bind(this);
    }

    handleIncrement(indexToChange){
        this.setState((state) => ({
            smile: state.smile.map((item, index) => (
                index === indexToChange
                    ? { ...item, count: item.count + 1 }
                    : item
            ))
        }));
    }

    handleResults() {
        const {smile} = this.state;
        const sortedSmiles = [...smile].sort((a, b) => b.count - a.count)[0];

        this.setState({ winner: sortedSmiles });
    }

    render() {
        const { winner, smile } = this.state;

        return (
            <div className='vote-box'>
                <h2>Vote for your favorite smile:</h2>
                <ul className='smiles-list'>
                    {smile.map((item, index) => (
                    
                        <ListItem
                            key = {index}
                            index = {index}
                            name = {item.name}
                            count = {item.count}
                            onClick = {this.handleIncrement}
                        />

                    ))}
                </ul>

                <button className='results-btn' onClick={this.handleResults}>Show Results</button>
                
                {winner && (
                    <div>Winner is {winner.name}</div>
                )} 

            </div>
            
        )  
    }
}

function ListItem(props) {
    const handleClick = () => {
        props.onClick(props.index);
    };

    return (
        <li>
            <button onClick={handleClick}>{`${props.index +1}) ${props.name}`}</button>
            <span>{`${props.count}`}</span>
        </li>
    )
}

export default SmileWinner;