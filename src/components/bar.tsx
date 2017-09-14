
import RX = require('reactxp');
import {default as RXImageSvg, SvgPath as RXSvgPath }  from 'reactxp-imagesvg';
import {Input} from "reactxp/dist/web/Input";

const styles = {
    bar: RX.Styles.createViewStyle({
        minWidth:1920,
        height : 60,
        backgroundColor: '#FFDAB9',
        flexDirection: 'row',
        padding: 20,
        flex: 1
    }),
    drawerButton: RX.Styles.createButtonStyle({

    }),
    title: RX.Styles.createTextStyle({
        color: 'white'
    }),
    menuModel: RX.Styles.createViewStyle({
        width: 100,
        left:0,
        top:60,
        position: 'absolute'
    })
};
interface props {
    title: string,
    svgHeight: number,
    svgWidth: number,
    menus: Array<string>
}
interface state {
    currentsvgD: string,
    currentsvgViewBox: string,
    nextsvgD: string,
    nextsvgViewBox: string
}
interface ImageSvgprops {
    color?: string;
    height?: number;
    width?: number;
    viewBox?: string;
    fillColor?: string;
    d?: string;
}
class bar extends RX.Component<props, state> {
    constructor(){
        super();
        this.state ={
            currentsvgD: "M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z",
            currentsvgViewBox: "0 0 32 32",
            nextsvgD: "M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z",
            nextsvgViewBox: "0 0 32 32"
        }
    }
    _buttonClick() {
        let svgD = this.state.currentsvgD
        let svgViewBox = this.state.currentsvgViewBox
        this.setState({
            currentsvgD: this.state.nextsvgD,
            currentsvgViewBox: this.state.nextsvgViewBox,
            nextsvgD: svgD,
            nextsvgViewBox: svgViewBox
        });
        this.showDialog();

    }
    showDialog() {
        let  _modalId = 'menu';
        if(RX.Modal.isDisplayed(_modalId) == true){
            RX.Modal.dismiss(_modalId);
        }else{
            let menuModel = (
                <RX.View style={styles.menuModel}>
                    {
                        this.props.menus.map((menu,i) =>
                            <RX.View key={i}>
                                <RX.Text> {menu} </RX.Text>
                            </RX.View>
                        )
                    }
                </RX.View>
            );

            RX.Modal.show(menuModel, _modalId);
        }

    }
    render() {
        let image= "http://services.swpc.noaa.gov/images/swx-overview-large.gif"
        return (
            <RX.View style={{minWidth:1920, maxHeight: 60}}>
                <RX.View style={styles.bar}>
                    <RX.Button style={ styles.drawerButton } onPress={ this._buttonClick.bind(this) }>
                        <RXImageSvg height={this.props.svgHeight} width={this.props.svgWidth}
                                    viewBox={this.state.currentsvgViewBox}
                                    style={{marginRight:3}}>
                            <RXSvgPath
                                fillColor={'white'}
                                d={this.state.currentsvgD} />
                        </RXImageSvg>
                    </RX.Button>
                    <RX.Text style={ styles.title}>
                        {this.props.title}
                    </RX.Text>
                </RX.View>
            </RX.View>
        );
    }
}

export default bar;
