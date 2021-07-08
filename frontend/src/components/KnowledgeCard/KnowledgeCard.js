import React, {useState} from "react";
import {knowledge, knowledgeCodes} from "../../utils/knowledge";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardHeader,
    CardIcon,
    CardImage,
    CardSubtitle,
    CardTitle,
    ColoredLink,
    DivWrapper,
    ImagesContainer,
    TextContent
} from "./KnowledgeCard.styles";

const KnowledgeCard = ({type}) => {

    const [item] = useState(knowledge[type]);
    const {t, i18n} = useTranslation('common');

    const renderIcons = (type) => {
        return (
            <ImagesContainer key={type}>
                {
                    knowledgeCodes[type].map(knowledge =>
                        <CardIcon key={knowledge.name}
                                  title={knowledge.name}
                                  alt={knowledge.name}
                                  src={'images/' + knowledge.type + '/' + knowledge.code + '.png'}/>)
                }
            </ImagesContainer>
        )
    }

    return (
        <Card name={'knowledge-card'} color={item.color}>
            <CardHeader>
                <CardImage alt={'technology'} src={item.image}/>
                <CardTitle>{t(item.name)}</CardTitle>
            </CardHeader>
            <DivWrapper backgroundColor={item.color}>
                <CardSubtitle>{item.technology_stack.join(" · ")}</CardSubtitle>
            </DivWrapper>
            <CardContent>
                <TextContent>{item.text[i18n.language]} {
                    type === 'backend'
                    && <ColoredLink
                        target={'_blank'}
                        rel={'noreferrer'}
                        href={'http://mediabrowser-server.herokuapp.com/documentation'}
                    >{t('server_api_info')}
                    </ColoredLink>
                }
                </TextContent>
                {
                    renderIcons(type)
                }
            </CardContent>
        </Card>
    )
}

KnowledgeCard.propTypes = {
    type: PropTypes.oneOf(['frontend', 'backend', 'databases', 'testing'])
}

export default KnowledgeCard;