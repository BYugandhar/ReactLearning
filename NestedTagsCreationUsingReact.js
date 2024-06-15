/* 
<div id="parent">
    <div id="child1">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </div>
    <div id="child2">
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
    </div>
</div>

*/
const heading = React.createElement(
    "div",
    {id:"parent"},[
    React.createElement( "div", {id:"child1"},
        [ React.createElement("h1",{},"Heading 1"),
            React.createElement("h2",{}, "Heading2")
        ]
    ),
    React.createElement("div",
        {id:"child2"},
        React.createElement("h3",{},"Heading 3"),
        React.createElement("h4",{},"Heading 4")
    )]
);

const root = ReactDOM.createRoot(document.getElementById("check"));

root.render(heading);
