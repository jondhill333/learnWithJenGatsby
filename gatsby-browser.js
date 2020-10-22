import React, { useEffect, useState } from 'react';
import Layout from './src/components/Layout';
import { silentAuth } from "./src/utils/auth";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

// function SessionCheck(props) {
//   const [loading, setLoading] = useState(true);
//   useEffect(function(){
//     silentAuth(setLoading(false))
//   }, [])
//   return (
//     !loading && <React.Fragment>{props.children}</React.Fragment>
//   )
// }



export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}
