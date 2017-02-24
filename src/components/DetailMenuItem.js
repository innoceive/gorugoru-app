import React from 'react';
import FontAwesome from 'react-fontawesome';

class DetailMenuItem extends React.Component {
    render() {
        let style = {
            borderTop: "6px solid #efefef",
            padding: "22px 24px",
            height: "36px"
        }
        let textWrapperStyle = {
            float: "left",
            height: "100%"
        }
        let priceWrapperStyle = {
            float: "right",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "36px"
        }
        let priceStyle = {

        }
        let nameStyle = {
            fontSize: "18px",
            marginBottom: "2px",
            fontWeight: 300
        }
        let descriptionStyle = {
            fontWeight: 700,
            fontSize: "14px"
        }
        let bestStyle = {
            position: "relative",
            top: "-1px",
            paddingLeft: "4px",
            fontSize: "15px",
            fontWeight: 500,
            color: "#FF4B4B"
        }
        return <li style={style}>
            <div style={textWrapperStyle}>
                <div style={nameStyle}>{this.props.name}<span style={bestStyle}>{this.props.best?"BEST":""}</span></div>
                <div style={descriptionStyle}><span>{this.props.type}</span>&nbsp;|&nbsp;<span>{this.props.calorie}kcal</span></div>
            </div>
            <div style={priceWrapperStyle}>
                <FontAwesome name="krw" /><span style={priceStyle}>4,000</span>
            </div>
        </li>
    }
}

export default DetailMenuItem;
