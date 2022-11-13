import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class Subscribe extends Component {
  render() {
    return (
        <form
        action="https://gmail.us5.list-manage.com/subscribe/post?u=a81c77ebfad1e0b00ca88b538&amp;id=0d804acf0b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Enter your Email',
            type: 'email',
            required: true,
            class: "email", 
            id: "mce-EMAIL",
            value: "Subscribe"
          }
        ]}
        </form>
        );
  }
}
 
// export default Subscribe;
