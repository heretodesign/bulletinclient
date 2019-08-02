import React from 'react'
import axios from 'axios'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class NoticeCreate extends React.Component {
  state = {
    image: '',
    title: '',
    date: '',
    content: '',
    comment: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }


handleSubmit = event => {
  event.preventDefault()
  console.log("Image is : " + this.state.image)
  console.log("Title is : " + this.state.title)
    console.log("Date is : " + this.state.date)
  console.log("content  : " + this.state.content)
  const url = "http://localhost:7000/api/posts"
  const formData = new FormData()
  formData.append('image', this.state.image)
  formData.append('title', this.state.title)
  formData.append('date', this.state.date)
  formData.append('content', this.state.content)
  formData.append('comment', '')

axios.post(url,
  {
    image: this.state.image,
    title: this.state.title,
    date: this.state.date,
    content: this.state.content,
    comment: this.state.comment
  }
)
.then(response => {
  console.log(response)
    this.setState({
      image: '',
      title: '',
      date: '',
      content: '',
      comment: '',
    })
})
.catch(err => console.log(err))
}


  render(){
    return (
      <>
       <section className="section is-paddingless-horizontal">
          <div className="container grid is-large">
              <div className="firstsection">
                  <div className="content" id="todoForm">
                    <form id="todo-form" onSubmit={this.handleSubmit}>
                      <div className="columns">
                        <div className="column is-four-fifths">
                        <div className="field">
                            <div className="file is-centered is-boxed is-info has-name">
                              <label className="file-label">
                                <input className="file-input" type="file" name="image" value={this.state.image} onChange={this.handleChange}  />
                                <span className="file-cta">
                                  <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                  </span>
                                  <span className="file-label">
                                    Event Picture
                                  </span>
                                </span>
                                <span className="file-name">
                                  Screen Shot 2017-07-29 at 15.54.25.png
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="title" placeholder="Add Bulletin Title" value={this.state.title} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="date"  placeholder="Date Held" value={this.state.date} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <textarea className="textarea is-large" type="text" name="content" placeholder="Contents" value={this.state.content} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="columns">
                          <div className="column is-four-fifths">
                            <div className="field">
                              <div className="control">
                                <button className="button is-large is-info is-fullwidth" type="submit" value="Submit">Add Bulletin</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </form>
                  </div>
                  <div className="content">
                    <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">Don't Miss Out </p>
                  </div>
               </div>
          </div>
        </section>
      </>
    );
  }
}
export default NoticeCreate;
