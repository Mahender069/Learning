
const name=prompt('Enter your name')


const root=ReactDOM.createRoot(document.querySelector('#root'))
const div=(
    <div>
        <img src="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        style={
            {
                width:'400px',
                height:'400px'
            }
        }></img>
        <h1>{name}</h1>
    </div>
)
root.render(div)