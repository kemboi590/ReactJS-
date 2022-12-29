import React from "react";
const WithoutJSX = () => {
    return React.createElement(
        'div',
        { id: 'withoutJSX', class: 'noJsx' },
        React.createElement('h1', null, 'code React Without JSX')
    )
}
export default WithoutJSX
//it is somehow hard to code without JSX