import React from "react"
import { graphql } from 'gatsby'

export const GATSBY_QUERY = graphql`
 { 
   rickandMorty {
    fr(filters:{state: 2}){
    count
    next
    previous
    results {
      id
      business_name
      duration
      funded_percentage
      amount_financed
      amount_requested
      rate
      product_type
      views
      investors_awarded
      activation_date
      publish_date
      funding_deadline
      image
      logo
      followers
      state
      market
      percentage_paid
      paid_credits
      total_credits
      dac
    }
  }
    }
  }
`


const Home = ({data}) => {
  console.log(data)
  return <div>{console.log(data)}</div>
}

export default Home
