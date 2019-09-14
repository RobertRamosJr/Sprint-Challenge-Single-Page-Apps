import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const Nav = props => (
    <NavLink exact {...props} activeClassName='active' />
)

const lables = (icon, text) => <span><Icon name={icon} />{text}</span>

const welcomeLabel = lables("home", "Home Page")
const characterLabel = lables("users", "Characters")
const episodeLabel = lables("map outline", "Episode")
const locationLabel = lables("video", "Locations")

const panes = [
    { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
    { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={characterLabel} /> },
    { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationLabel} /> },
    { menuItem: <Menu.Item key='episode' as={Nav} to={`/episode`} content={episodeLabel} /> }

  ]

export default function TabNav() {
    return (<Tab panes={panes} renderActiveOnly={false} />)

};
