const App=require('../client/components/App');
const ReactDOMServer=require('react-dom/server');
const React=require('react');

export default()=>{
    return ReactDOMServer.renderToString(<App/>)
}