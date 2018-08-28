import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';

class Footer extends Component {
    static contextTypes = {
        // t 가 함수라는거를 명확하게 해줌, 그래야 context를 사용 할 수 있다
        t: PropTypes.func.isRequired
    };
    render() {
        console.log(this.context);
        return (
            <footer className={styles.footer}>
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>{this.context.t("About Us")}</li>
                            <li className={styles.listItem}>Support</li>
                            <li className={styles.listItem}>Blog</li>
                            <li className={styles.listItem}>Press</li>
                            <li className={styles.listItem}>API</li>
                            <li className={styles.listItem}>Jobs</li>
                            <li className={styles.listItem}>Privacy</li>
                            <li className={styles.listItem}>Terms</li>
                            <li className={styles.listItem}>Directory</li>
                            <li className={styles.listItem}>Language</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.column}>
                    <span className={styles.copyright}>2018 ReactPortfolio</span>
                </div>
            </footer>
        )
    }
};

export default Footer;