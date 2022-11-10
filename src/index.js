import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    
    function addItem() {
        // Build from scratch :)
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));