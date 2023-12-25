const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(
//     <div>
//     <h1>Today : { (new Date()).toDateString()}</h1>
//     </div>
// )

function Counter() {
    return (
        <div className="counter">
            <button className="plus">+</button>
            <h2>{0}</h2>
            <button className="delete">-</button>
            <button className="clear">C</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Sum = 0</h1>
            <button className="btn">Add Counter</button>
            <Counter />
        </div>
    );
}

root.render(<App />);