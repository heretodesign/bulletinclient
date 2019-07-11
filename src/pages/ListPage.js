import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
  state = {
    tasks: [],
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:8001/api/todos').then(response => {
      this.setState({
        tasks: response.data
      })
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  addComment = (taskId) => {
    axios.put(`http://127.0.0.1:8001/api/todos/${taskId}/comment`)
    .then(response => {
      this.setState({
        tasks: this.state.tasks.filter(task => task.id != taskId)
      })
    })
    .catch(error => {
      alert('Cannot Add Comment')
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
                      <h1 className="title is-3">List of All Your Tasks</h1>
                      <div className="content">
                        <div className="columns">
                          <div className="column" id="tablelisttask">
                            <table className="table is-mobile">
                              <thead>
                                <tr>
                                  <th><abbr title="image" className="is-3">Poster</abbr></th>
                                  <th><abbr title="title">Title</abbr></th>
                                  <th><abbr title="date">Date Held</abbr></th>
                                  <th><abbr title="content">Content</abbr></th>
                                  <th><abbr title="action">Action</abbr></th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.tasks.map((task) => (
                                  <tr className="key={task.id}">
                                    <td>{ task.image }</td>
                                    <td>{ task.title } </td>
                                    <td>{ task.date }</td>
                                    <td>{ task.content }</td>
                                    <td><button onClick={() => {this.addComment(task.id)} } className="button is-info">Comment</button></td>
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
