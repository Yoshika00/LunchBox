
const heading = React.createElement("div", {id : "parent"}, 
                     React.createElement("div", {id: "child"}, 
                         [React.createElement("h1", {class : "heading"}, "i am h1"),
                        React.createElement("h2", {class : "heading"}, "i am h2")]
                    ))
        
const root = ReactDOM.createRoot(document.getElementById("root"))
        
root.render(heading)