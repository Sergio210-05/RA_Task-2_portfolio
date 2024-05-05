import React, { useState, Component } from 'react'
import { Toolbar } from '../Toolbar';
import projectsData from '../ProjectsData/projectsData';
import { ProjectList } from '../ProjectList';

export class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: "All",
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      // projects: projectsData,
      filteredProjects: projectsData,
    }
    // console.log(this.state)
    this.projects = projectsData,
    this.filtered = this.projects.filter(project => {
      if (this.state.filter==="All") {
        return true
      }
      return project.category === filter
    })
  }
    

  // onFilter = (filt) => {
  //   this.setState({filter: this.state.filter, filteredProjects: this.projects.filter(project) = {
  //     if (filter==="All") {
  //       return true
  //     }
  //     return project.category === filt
  //   }})
  // }
  onFilter = (filt) => {
    return (
      this.projects.filter(project => {
        if (filt==="All") {
          return true
        }
        return project.category === filt
      })
    )
  }

  onSelectFilter = (filt) => {
    this.setState({
      filter: filt,
      filteredProjects: this.onFilter(filt),
    })
  }

  // flt = (filt) => {
  //   this.useState({filteredProjects: onFilter(filt)})
  // }

  render() {
    return (
      <>
        <Toolbar filters={this.state.filters} selected={this.state.filter} onSelectFilter={this.onSelectFilter}/>
        <ProjectList projects={this.state.filteredProjects}/>
      </>
    )
  }
}
