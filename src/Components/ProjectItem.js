import React from "react";
import { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class ProjectItem extends Component {
    render() {
        return (
            <>
                <div className='cMh col-lg-4 text-center mb-5 mb-sm-0'>
                    <div className={"card h-100 text-center my-auto"}>
                        <div className='row'>
                            <div className='imgHeight col-sm-12 text-center mb-5 mb-sm-0' visibility='hidden' >
                                <img src={this.props.image} className="card-img-top image-fluid mh-50 img-responsive" alt="projectImg" />
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}</p>

                        </div>
                        <div>
                            <Button variant='primary' href={this.props.liveLink}>Live Project</Button>
                            <Button variant='muted' href={this.props.repo}>Github Repository</Button>
                        </div>
                        <h1> </h1>
                    </div>
                </div>
            </>
        )
    }
}