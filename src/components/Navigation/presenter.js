import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.scss";
import UserDisplay from "components/UserDisplay";
import Loading from "components/Loading";

const Navigation = (props, context) => (
    <div className={`${styles.navigation} ${props.navTop ? styles.navTop : ""}`} ref={props.navRef}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <Link to="/">
                    {/*<img*/}
                        {/*src={require("images/logo.png")}*/}
                        {/*className={styles.logo}*/}
                        {/*alt={context.t("Logo")}*/}
                    {/*/>*/}
                    <span className={styles.logo}>Portfolio</span>
                </Link>
            </div>
            {/*<div className={styles.column}>*/}
                {/*<form onSubmit={props.onSubmit}>*/}
                    {/*<input*/}
                        {/*type="text"*/}
                        {/*placeholder={context.t("Search")}*/}
                        {/*className={styles.searchInput}*/}
                        {/*value={props.value}*/}
                        {/*onChange={props.onInputChange}*/}
                    {/*/>*/}
                {/*</form>*/}
            {/*</div>*/}
            <div className={styles.column}>
                <div className={styles.navIcon}>
                    <NavLink to="/explore" activeClassName="active">
                        {/*<Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />*/}
                        explore
                    </NavLink>
                </div>
                <div className={styles.navIcon} onClick={props.openStatus}>
                    <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                </div>
                {/*<div className={styles.navIcon}>*/}
                    {/*<Link to="/profile">*/}
                        {/*<Ionicon icon="ios-person-outline" fontSize="32px" color="black" />*/}
                    {/*</Link>*/}
                {/*</div>*/}
                {props.seeingStatus && (
                <div className={styles.status} >
                    {props.loading ? <Loading /> : <RenderUsers users={props.userList} closeStatus={props.closeStatus}/>}
                    <div className={styles.wrap} onClick={props.closeStatus}/>
                </div>
                )}
            </div>
        </div>
    </div>
);

const RenderUsers = props => (
    props.users.map(user => (
        <UserDisplay user={user} key={user.id} modal={true} closeStatus={props.closeStatus}/>
    ))
);

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
};

Navigation.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Navigation;

