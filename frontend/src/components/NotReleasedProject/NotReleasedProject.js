import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {UnreleasedProjectDiv} from "./NotReleasedProject.styles";

const NotReleasedProject = ({specialCharacter, whiteText, coloredText, link}) => {

    const {t} = useTranslation('common');

    const renderGlitchEffect = (specialCharacter, whiteText, coloredText) => {
        let view = [];
        for(let i=0; i<3; i++) {
            view.push(
                <p key={i} className={'colored-text ' + (i%2 === 0 ? 'glitch-text' : '')}>
                    <span style={{fontWeight: 'bold'}}>{specialCharacter} </span>
                    <span style={{color: 'white'}}>{t(whiteText)} </span>{t(coloredText)}
                </p>
            )
        }

        return view;
    }

    return (
        <UnreleasedProjectDiv>
            {
                link ?
                    <Link style={{textDecoration: 'none'}} to={link}>
                        <div className={'colored-text glitch'}>
                            {renderGlitchEffect(specialCharacter, whiteText, coloredText)}
                        </div>
                    </Link> :
                    <div className={'colored-text glitch'} style={{userSelect: 'none'}}>
                        {renderGlitchEffect(specialCharacter, whiteText, coloredText)}
                    </div>
            }
        </UnreleasedProjectDiv>
    )
};

NotReleasedProject.propTypes = {
    specialCharacter: PropTypes.string,
    whiteText: PropTypes.string,
    coloredText: PropTypes.string,
    link: PropTypes.string
}

export default NotReleasedProject;
