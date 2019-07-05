import React from 'react'
import axios from 'axios'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class NoticeCreate extends React.Component {
  state = {
    text: '',
    due: '',
    done: '',
    completed: '',
    is_trash: ''
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
    bodyFormData.set('text', this.state.text)
    bodyFormData.set('due', this.state.due)
    bodyFormData.set('done', this.state.done)
    bodyFormData.set('completed', '1')
    bodyFormData.set('is_trash', '1')

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
                          <div className="column is-two-fifths">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="text" placeholder="Add tasks" value={this.state.text} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column is-one-fifth">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="due"  placeholder="Due Date" value={this.state.due} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column is-one-fifth">
                            <div className="field">
                              <div className="control">
                                <input className="input is-large" type="text" name="done" placeholder="Date Completed" value={this.state.done} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <div className="column is-one-fifth">
                            <div className="field">
                              <div className="control">
                                <button className="button is-large is-info is-fullwidth" type="submit" value="Submit">Add task</button>
                              </div>
                            </div>
                          </div>
                      </div>
                    </form>
                  </div>
                  <div className="content">
                      <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">working with hundreds of restaurants </p>
                  </div>
               </div>
          </div>
        </section>
      </>
    );
  }
}
export default NoticeCreate;
