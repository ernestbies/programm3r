import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../utils/hobby";
import {renderElements} from "../utils/renderElements";
import MyTimeline from "../components/MyTimeline";

const Hobby = () => {

    return (
        <div>
            <div id={'hobby'} className={'carousel-style'}>
                <p style={{
                    color: 'white',
                    display: 'inline-block',
                    fontFamily: 'Open Sans',
                    fontWeight: 300,
                    marginTop: 20,
                }}>Hobby</p>
                <Carousel className={'carousel'}>
                    {renderElements(hobby, 'hobby')}
                </Carousel>
            </div>
            <div style={{
                minHeight: 650,
                backgroundImage: "url(images/wallpaper2.png)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                borderTop: 'double',
                margin: 'auto',
            }}>
                <div style={{backgroundColor: '#00000090', textAlign: 'center'}}>
                    <p style={{
                        color: 'white',
                        display: 'inline-block',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        marginTop: 20,
                        fontSize: 24,
                    }}>My timeline</p>
                </div>
                <div style={{width: '100%', height: '100%', minHeight: 650, backgroundColor: '#00000090'}}>
                    <MyTimeline/>
                    <section className="component">
                        <blockquote className="callout quote EN">
                            The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.
                            <cite> – Henry Ford</cite>
                        </blockquote>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Hobby;
