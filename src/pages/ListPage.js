import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
  state = {
    tasks: [],
  }

  // componentDidMount () {
  //   fetch('http://localhost:7000/api/posts')
  //   .then(res => res.json())
  //   .then(tasks => this.setState({tasks}, () => console.log('Tasks Fetched',
  //     tasks)));
  // }
  componentDidMount () {
  axios.get('http://localhost:7000/api/posts').then(response => {
    this.setState({
      tasks: response.data
    })
  })
  .catch(error => {
    console.log('ERROR: ', error)
  })
}

  addComment = (taskId) => {
    this.props.history.push(`/pages/detail/${taskId}`)
  }


  render() {

      return (
        <div>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large notification">
                  <div className="firstsection">
                      <h1 className="title is-3">Att: Upcoming Events and Programmes</h1>
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
                                    <td><img width="200" height="200" src={ task.image } /></td>
                                    <td><h4>{ task.title }</h4></td>
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
