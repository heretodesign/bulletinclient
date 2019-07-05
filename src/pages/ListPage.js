import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
  state = {
    tasks: [],
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:8001/api/todos/pending').then(response => {
      this.setState({
        tasks: response.data
      })
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  markComplete = (taskId) => {
    axios.put(`http://127.0.0.1:8001/api/todos/${taskId}/complete`)
    .then(response => {
      this.setState({
        tasks: this.state.tasks.filter(task => task.id != taskId)
      })
    })
    .catch(error => {
      alert('Cannnot Mark it as Complete')
    })
  }

  markAsTrash = (taskId) => {
    axios.put(`http://127.0.0.1:8001/api/todos/${taskId}/trash`)
    .then(response => {
      this.setState({
        tasks: this.state.tasks.filter(task => task.id != taskId)
      })
    })
    .catch(error => {
      alert('Cannnot Mark as Trash')
    })
  }

  render() {

      return (
        <div>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large notification">
                  <div className="firstsection">
                      <h1 className="title is-3 has-text-primary">List of All Your Tasks</h1>
                      <div className="content">
                        <div className="columns">
                          <div className="column" id="tablelisttask">
                            <table className="table is-mobile">
                              <thead>
                                <tr>
                                  <th><abbr title="id" className="is-3">Profile Picture</abbr></th>
                                  <th><abbr title="task">Title</abbr></th>
                                  <th><abbr title="due">Due Date</abbr></th>
                                  <th><abbr title="done">Content</abbr></th>
                                  <th><abbr title="action">Action</abbr></th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.tasks.map((task) => (
                                  <tr className="key={task.id}">
                                    <td>{ task.id }</td>
                                    <td>{ task.text } </td>
                                    <td>{ task.due }</td>
                                    <td>{ task.done }</td>
                                    <td><button onClick={() => {this.markComplete(task.id)} } className="button is-primary">Mark as Complete</button></td>
                                    <td><button onClick={() => {this.markAsTrash(task.id)} } className="button is-danger">Delete</button></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                           </div>
                        </div>
                      </div>
                   </div>
              </div>
          </section>
        </div>
      )
  }
}
export default ListPage;
