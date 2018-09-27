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

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div>
        <div className="home-main" ref={(section) => { this.Top = section; }}>
          <div className="home-name">Ryan Rickert</div>
          <div className="home-title">Software Engineer</div>
          <a href="/images/RyanCRickertResume.pdf" download><div className="button-download">Download Resume</div></a>
        </div>
        <div className="home-about">
          <div className="content-container home-about">
            <div className="home-about__left">
              <h2 className="underline">About Me</h2>
            </div>
            <div className="home-about__right">
              I am a React web developer with a bit of NodeJS experience. I received my bachelor's degree in Chemistry 
              from the University of Houston Downtown in 2015. A few months later my first son was born and soon after I found 
              a lab tech position. After about a year, the demanding schedule of 12 hour day/night shifts while working mostly 
              weekends began to take its toll on my sanity and family time so I started to teach myself how to code in my free 
              time. I have spent around a year self-teaching with sites like Khan Academy, CodeAcademy, FreeCodeCamp, Coursera 
              and some other personal projects. At the beginning of March 2018 I felt the need to accelerate my learning so I 
              quit my job and purchased two Udemy courses, one for NodeJS and one for ReactJS. Now that I have finished both 
              courses I am focusing on ReactJS.
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