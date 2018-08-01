import React from "react";

const Git = props => (
  <div className="main__profile-container">
    {props.name && <p className="main__profile-key">Name: <span className="main__profile-value">{props.name}</span></p>}
    {props.login &&
    <p className="main__profile-key">Username: <span className="main__profile-value">{props.login}</span></p>}
    {props.public_repos &&
    <p className="main__profile-key">Repos: <span className="main__profile-value">{props.public_repos}</span></p>}
    {props.html_url && <p className="main__profile-key">Url: <a className="main__profile-value" href={props.html_url}
                                                                target="_blank">{props.html_url}</a></p>}
    {props.location &&
    <p className="main__profile-key">Location: <span className="main__profile-value">{props.location}</span></p>}
    {props.message &&
    <p className="main__profile-key">Error: <span className="main__profile-value">{props.message}</span></p>}
  </div>
);

export default Git;

