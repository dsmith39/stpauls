import React from 'react'
import Container from './index'

describe('<Container />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Container />)
  })
})