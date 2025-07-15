import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewuser = () => {

    const [isLoading, changeLoad] = useState(true)

    const [user, changeuser] = useState(
        []
    )
    const fetchData = () => {
        axios.get("https://api.github.com/users").then(
            (Response) => {
                changeuser(Response.data)
                changeLoad(false)
            }
        ).catch(
            () => {
                alert("Something went wrong.")
            }
        )
    }
    useEffect(() => { fetchData()}, [])
  return (
    <div>
        <Navbar/>
    <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table table-bordered table-striped-columns table-hover table-success">
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">node id</th>
                                            <th scope="col">avatar url</th>
                                            <th scope="col">gravatar url</th>
                                            <th scope="col">url</th>
                                            <th scope="col">html url</th>
                                            <th scope="col">followers url</th>
                                            <th scope="col">following url</th>
                                            <th scope="col">gists url</th>
                                            <th scope="col">starred url</th>
                                            <th scope="col">subscription url</th>
                                            <th scope="col">organizations url</th>
                                            <th scope="col">repos url</th>
                                            <th scope="col">events url</th>
                                            <th scope="col">received events url</th>
                                            <th scope="col">type</th>
                                            <th scope="col">user view type</th>
                                        </tr>
                                    </thead>
                                {isLoading ? (<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>) : (<tbody>
                                    {user.map(
                                        (value, index) => {
                                            return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.node_id}</td>
                                                        <td>{value.avatar_url}</td>
                                                        <td>{value.gravatar_url}</td>
                                                        <td>{value.url}</td>
                                                        <td>{value.html_url}</td>
                                                        <td>{value.followers_url}</td>
                                                        <td>{value.following_url}</td>
                                                        <td>{value.gists_url}</td>
                                                        <td>{value.starred_url}</td>
                                                        <td>{value.subscriptions_url}</td>
                                                        <td>{value.organizations_url}</td>
                                                        <td>{value.repos_url}</td>
                                                        <td>{value.events_url}</td>
                                                        <td>{value.received_events_url}</td>
                                                        <td>{value.type}</td>
                                                        <td>{value.user_view_type}</td>                                                    
                                                    </tr>
                                            )
                                        }
                                    )}
                                    </tbody>)}
                                
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Viewuser