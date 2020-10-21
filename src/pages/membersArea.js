import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile, logout } from "../utils/auth"
import { Link } from "gatsby"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>


export default function MembersArea(props) {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
      }
    
      const user = getProfile()
    
      return (
        <>
          <nav>
            <Link to="/membersArea/">Home</Link>{" "}
            <Link to="/membersArea/settings/">Settings</Link>{" "}
            <Link to="/membersArea/billing/">Billing</Link>{" "}
            <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
          </nav>
          <Router>
            <Home path="/membersArea/" user={user} />
            <Settings path="/membersArea/settings" />
            <Billing path="/membersArea/billing" />
          </Router>
        </>
      )
    }
    