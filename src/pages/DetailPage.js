import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Image from "react-graceful-image"
import Flickr from '../Flickr-1.4s-200px.svg'

class DetailPage extends React.Component {
  state = {
    tasks: [],
    data: [],
    isLoading: true,
    newComment: '',
    addYourSay: []
  }

  componentDidMount () {
    axios.get(`http://localhost:7000/api/posts/${this.props.match.params.id}`)
    .then(result => {
      console.log(result.data)
      this.setState({
        data: result.data,
        isLoading: false,
      })
    })
  }

  addComment = (e) => {
    e.preventDefault();
    console.log(this.state.newComment)
    axios.patch(`http://localhost:7000/api/posts/${this.props.match.params.id}`,
      {
        comment: this.state.newComment
      }
    )
    .then(response => {
      console.log(response)
        this.setState({
          newComment: '',
        })
    })
    .catch(err => console.log(err))
    let copyArray = [...this.state.addYourSay]
    copyArray.push(this.state.newComment)
    this.setState({addYourSay: copyArray})
    }


  handleChange = (e) => {
    this.setState({newComment: e.target.value})
  }

  render() {
    const {isLoading, data, newComment} = this.state;
    return (
      <>
          <section className="section is-paddingless-horizontal">
              <div className="container grid is-large notification">
                  <div className="firstsection">
                    <h1 className="title is-3">Event Details</h1>
                    <div className="content">
                      <div className="columns is-mobile">
                        <div className="column is-three-fifths is-offset-one-fifth">
                          {
                            !isLoading ? (
                              <>
                                <img src={data.image} alt='dummy' />
                                 <br />
                                <h3> Description: {data.content}</h3> <br />
                                <h3>Date Held: {data.date}</h3>
                              </>
                            )
                            : <>
                                <p className="text-center"><img className="display:inline;" src={Flickr} alt="Flickr" /></p>
                              </>
                            }
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
          </section>
          <section className="section is-paddingless-horizontal">
            <div className="container grid is-large notification">
                <div className="firstsection">
                  <div className="content">
                    <div className="columns">
                     <div className="column is-three-fifths is-offset-one-fifth">
                        {this.state.addYourSay.map((comment) => {
                          return <h3>{comment}</h3>
                        })}

                        <h3>Comment: {newComment}</h3>
                     </div>
                    </div>
                    <form id="addComment-form" onSubmit={e => this.addComment(e)}>
                      <div className="columns">
                        <div className="column is-three-fifths is-offset-one-fifth">
                        <h1 className="title is-3"> Add Your Say</h1>
                          <div className="columns">
                            <div className="column">
                              <div className="field">
                                <div className="control">
                                  <textarea onChange={e => this.handleChange(e)} className="textarea is-large" type="text" name="comment" value={newComment}  placeholder="Comment" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <div className="field">
                                <div className="control">
                                  <button className="button is-large is-info is-fullwidth" type="submit" value="Submit">Add Comment</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
               </div>
            </div>
          </section>
      </>
    )
  }
}

export default DetailPage;
