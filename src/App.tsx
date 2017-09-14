/*
* This file demonstrates a basic ReactXP app.
*/
import RX = require('reactxp');
import Topbar from './components/Topbar';
import Bar from './components/bar';

class App extends RX.Component<{}, {}> {
    constructor(){
        super();
    }
    render() {
        let menus = ["item1", "item2"]
        return (
            <Bar title="This is title" svgHeight={20} svgWidth={20} menus={menus} />
        );
    }
}

export = App;
