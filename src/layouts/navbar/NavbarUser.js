import React from "react";
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import * as Icon from "react-feather";
import classnames from "classnames";
import { history } from "../../history";

const handleNavigation = (e, path) => {
    e.preventDefault();
    history.push(path);
};

const UserDropdown = (props) => {

    return (
      <DropdownMenu right className="user-dropdown-menu">
        <DropdownItem
          tag="a"
          href="#"
          className="user-dropdown-item"
          onClick={(e) => handleNavigation(e, "/profile")}
        >
          <Icon.User size={14} className="user-dropdown-icon" />
          <span className="align-middle">Profile</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="#"
          className="user-dropdown-item"
          onClick={(e) => handleNavigation(e, "/appointments")}
        >
          <Icon.UserCheck size={14} className="user-dropdown-icon" />
          <span className="align-middle">Appointments</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="#"
          className="user-dropdown-item"
          onClick={(e) => handleNavigation(e, "/reports")}
        >
          <Icon.AlertTriangle size={14} className="user-dropdown-icon" />
          <span className="align-middle">Reports</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="#"
          className="user-dropdown-item"
          onClick={(e) => handleNavigation(e, "/billing")}
        >
          <Icon.Coffee size={14} className="user-dropdown-icon" />
          <span className="align-middle">Billing</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/"
          className="user-dropdown-logout"
        //   onClick={(e) => {
        //     e.preventDefault();
        //     if (isAuthenticated) {
        //       return logout({
        //         returnTo:
        //           window.location.origin + process.env.REACT_APP_PUBLIC_PATH,
        //       });
        //     } else {
        //       const provider = props.loggedInWith;
        //       if (provider !== null) {
        //         if (provider === "jwt") {
        //           return props.logoutWithJWT();
        //         }
        //         if (provider === "firebase") {
        //           return props.logoutWithFirebase();
        //         }
        //       } else {
        //         history.push("/");
        //       }
        //     }
        //   }}
        >
          <Icon.Power size={14} className="user-dropdown-icon" />
          <span className="align-middle">Log Out</span>
        </DropdownItem>
      </DropdownMenu>
    );
  };

  export default function NavbarUser(props) { 
      return  (
        <UncontrolledDropdown tag="li" className="dropdown-user p-0">
            <DropdownToggle tag="a" className="nav-link dropdown-user-link p-0">
            <span data-tour="user">
                <img
                    src={props.userImg ? props.userImg : '//ssl.gstatic.com/accounts/ui/avatar_2x.png'}
                    className="round user-avatar"
                    alt="avatar"
                />
            </span>
            </DropdownToggle>
            <UserDropdown {...props} />
        </UncontrolledDropdown>
      )
  }

  