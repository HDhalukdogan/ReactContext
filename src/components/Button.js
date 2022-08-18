import React, { Component } from 'react'
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
    //static contextType = LanguageContext;//Button.contextType = LanguageContext
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    render() {
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {(color) =>this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;