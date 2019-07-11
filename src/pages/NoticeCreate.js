import React from 'react'
import axios from 'axios'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class NoticeCreate extends React.Component {
  state = {
    image: '',
    title: '',
    date: '',
    content: ''
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

    const bodyFormData = new FormData()
    bodyFormData.set('image', this.state.image)
    bodyFormData.set('title', this.state.title)
    bodyFormData.set('date', this.state.date)
    bodyFormData.set('content', this.state.content)

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8001/api/todos',
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },
      data: bodyFormData
    })
    .then(resp => {
      //handle success
      console.log(resp)
    })
    .catch(err => {
      //handle error
      console.error(err)
    })
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
