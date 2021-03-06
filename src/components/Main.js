import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Landing'
import Courses from './Courses'
import CourseLanding from './CourseLanding'

export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/courses" component={Courses} />
        <Route path="learn/:id" component={CourseLanding} />
      </Switch>
    )
  }
}
