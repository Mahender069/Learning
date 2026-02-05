import ReactDOM from 'react-dom/client'
const div=(
    <div>
        <h1>
            Hello World
        </h1>
    </div>
)
const root=ReactDOM.createRoot(document.querySelector('#root'));


root.render(div)
console.log('hello world');