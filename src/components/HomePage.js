import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import scrollToComponent from 'react-scroll-to-component';
import axios from "axios";

import PortfolioItem from "./PortfolioItem";
import arrow from "../../public/images/arrow.png";
import node from "../../public/images/node.jpg";
import react from "../../public/images/react.jpg";
import skills from "../skills/skills";
import works from "../works/works";
import ThankYouModal from "./ThankYouModal";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeThankYouModal = this.closeThankYouModal.bind(this);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    this.setState({ submitted: true, message: "" });
    e.target.message = "";

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    })
  }

  closeThankYouModal() {
    this.setState({ submitted: false });
  }

  render() {
    return (
      <div>
        <ThankYouModal closeThankYouModal={this.closeThankYouModal} submitted={this.state.submitted} />
        <div className="home-main" ref={(section) => { this.Top = section; }}>
          <div className="home-name">Ryan Rickert</div>
          <div className="home-title">Software Engineer</div>
          <a href="/images/RyanCRickertResume.pdf" download><div className="button-download">Download Resume</div></a>
        </div>
        <div className="home-about">
          <div className="content-container home-about">
            <div className="home-about__left">
              <h1 className="underline">About Me</h1>
            </div>
            <div className="home-about__right">
              I am a React web developer with a dash of NodeJS experience which I use to build fullstack websites.
                I received my bachelor's degree in Chemistry from the University of Houston Downtown in 2015, 
              but the chaotic schedule of lab tech life led me to following my passion of working with computers.
                I first spent around a year self-teaching with sites like Khan Academy, CodeAcademy, FreeCodeCamp, Coursera 
              but I am currently building new apps to help further my learning and fuel my passion.
            </div>
          </div>
        </div>
        <div className="home-projects">
          <h1 className="underline">Projects</h1>
          <div className="home-projects__list content-container">
            <div className="home-projects__item">
            {works.map((work) => (
              <PortfolioItem key={work.name} {...work} />
            ))}
            </div>
          </div>
        </div>
        <div className="home-education">
          <h1 className="underline">Education</h1>
          <div className="home-education content-container">
            <div className="home-education__block">
              <h3>University of Houston - Downtown</h3>
              <h4>Bachelor of Science in Chemistry</h4>
            </div>
            <div className="home-education__block">
              <h3>ReactJS Certificate</h3>
              <h4>Udemy.com</h4>
              <a href="https://www.udemy.com/certificate/UC-MRY1YGV0" target="_blank">View Certificate</a>
            </div>
            <div className="home-education__block">
              <h3>NodeJs Certificate</h3>
              <h4>Udemy.com</h4>
              <a href="https://www.udemy.com/certificate/UC-60288PXJ" target="_blank">View Certificate</a>
            </div>
          </div>
        </div>
        <div className="home-skills">
          <h1 className="underline">Skills</h1>
          <div className="home-skills content-container">
            <div className="home-skills__list">
            {skills.map((item) => (
              <li key={item} className="home-skills__item">{item}</li>
            ))}
            </div>
          </div>
        </div>
        <div className="home-contact">
          <h1 className="underline__alt">Contact Me</h1>
          <div className="home-contact content-container__contact">
            <Form className="home-contact__form" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name" className="form__label">Name</Label>
              <Input
                type="text"
                name="name"
                className="home-contact__input"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email" className="form__label">Email</Label>
              <Input
                type="email"
                name="email"
                className="home-contact__input"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="message" className="form__label">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="home-contact__text"
                value={this.state.message}
                onChange={this.handleChange} />
            </FormGroup>
            <Button disabled={this.state.name == 0 || this.state.email == 0 || this.state.message == 0} className="home-contact__button">
              {this.state.name == 0 || this.state.email == 0 || this.state.message == 0 ? "Please fill out each form" : "Submit"}
            </Button>
            </Form>
          </div>
        </div>
        <div className="home-footer">
            <div className="home-footer content-container__footer">
              <div className="home-footer__copyright">
                Copyright © 2018 Ryan Rickert
              </div>
              <div className="home-footer__arrow">
                <img src={arrow} onClick={() => scrollToComponent(this.Top, {duration: 2000, ease: "inQuad"})} />
              </div>
              <div className="home-footer__message">
                I hope to speak with you soon!
              </div>
            </div>
        </div>
      </div>
    )
  }
};