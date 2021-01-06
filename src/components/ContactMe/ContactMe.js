import React, { useState } from 'react';
import './contact-styles.css';

const ContactMe = () => {
  const [state,setState] = useState({name:'',email:'',subject:'',message:''})
  const { name, email, message, subject } = state;
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    setState(Object.assign({}, state, change));
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ textAlign: 'center',margin: '15px'}}>
              Leave a message and I'll definitely get back
            </h2>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="col-md-12" style={{marginBottom: '15px' }}>
                  <input type="text" name="name"  value={name}  placeholder="Enter your name" onChange={handleChange}/>
                </div>
                <div className="col-md-12" style={{marginBottom: '15px' }}>
                  <input type="text" name="email" value={email} placeholder="Enter your email" onChange={handleChange} />
                </div>
                <div className="col-md-12" style={{marginBottom: '15px' }}>
                  <input type="text" name="subject"  value={subject} placeholder="Enter the subject" onChange={handleChange} />
                </div>
                <div className="col-md-12" style={{marginBottom: '15px' }}>
                  <textarea name="message" value={message} placeholder="Enter your message here" onChange={handleChange} />
                </div>
                <button onSubmit={handleSubmit}>Click</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactMe;