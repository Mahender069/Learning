const container=React.createElement('div',{id:'container1'},
    React.createElement('div',{id:'container2'},
        React.createElement('h1',{id:'name'},'Mahender')
    )
);

const root=ReactDOM.createRoot(document.querySelector('#root'));

root.render(container)