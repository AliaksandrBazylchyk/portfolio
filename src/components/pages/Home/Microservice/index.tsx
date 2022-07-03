// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

import './styles.scss'
import { Fade, Zoom } from 'react-awesome-reveal'
import BackgroundSpaceLoop from '@assets/microservice-space-loop.mp4'

const Microservice: React.FC = () => {
    return (
        <div className="microservice">
            <video
                loop
                autoPlay
                muted
                className="microservice__background-video"
            >
                <source src={BackgroundSpaceLoop} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="microservice__description">
                <Fade className="microservice__description" delay={600}>
                    <div className="microservice__solid-divider" />
                    <span className="microservice__paragraph">
                        As you can see, I really like the space theme, so my
                        site is accompanied by footage of space. If it looks
                        terrible and you cannot be on the site because of this,
                        write to me. I will try fix it ;)
                    </span>
                    <div className="microservice__solid-divider" />
                </Fade>
                <Fade className="microservice__description" delay={1200}>
                    <span className="microservice__paragraph">
                        A microservice application (an online store) is a
                        classic task for which it's often necessary to use the
                        microservice architecture. The ability to split the
                        application into its component parts allows you to
                        continue its work if any of the services has fallen for
                        any reason. However, the price for this is the speed of
                        the application.
                    </span>
                </Fade>
                <Fade className="microservice__description" delay={1800}>
                    <span className="microservice__paragraph">
                        What did I use in application? (Hover on names)
                        <ul className="microservice__ul">
                            <li>
                                <a
                                    className="animated-link"
                                    href="https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design"
                                >
                                    Repository Pattern
                                </a>
                            </li>
                            <li>
                                <a
                                    className="animated-link"
                                    href="https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs"
                                >
                                    Almost CQRS Pattern with some exceptions
                                </a>
                            </li>
                            <li>
                                <a
                                    className="animated-link"
                                    href="https://restfulapi.net"
                                >
                                    REST like API
                                </a>
                            </li>{' '}
                            <li>
                                <a
                                    className="animated-link"
                                    href="https://docs.fluentvalidation.net/en/latest/"
                                >
                                    Fluent Validation
                                </a>
                            </li>
                            <li>
                                <a
                                    className="animated-link"
                                    href="https://www.rabbitmq.com"
                                >
                                    Message Broker (RabbitMQ)
                                </a>
                            </li>
                            <li>
                                <a
                                    className="animated-link"
                                    href="https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/implement-api-gateways-with-ocelot"
                                >
                                    Ocelot Gateway
                                </a>
                            </li>
                        </ul>
                    </span>
                    <div className="microservice__solid-divider" />
                </Fade>
                <Fade className="microservice__description" delay={2400}>
                    <span className="microservice__paragraph">
                        Special attention should be paid to the Identity Server.
                        Implemented full authorization and authentication of the
                        user.{' '}
                        <a
                            className="animated-link"
                            href="https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens"
                        >
                            JWT-Token System
                        </a>
                        .<br />
                        P.s. That project unfinished.
                    </span>
                </Fade>
            </div>
            <div className="microservice__introduction">
                <Zoom delay={600}>
                    <div className="microservice__paper">
                        <span className="microservice__introduction-header">
                            GitHub
                        </span>
                        <div className="microservice__solid-divider" />
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Microservice
