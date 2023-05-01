import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link,Route,withRouter } from 'react-router-dom';
import HomePage from './HomePage'

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>

         {/* 头部导航 */}
         <header className={styles.header}>
            <div className={styles.box}>
               <Link to="/"><div className={styles.boxleft}>EasyRead</div></Link>
               <div className={styles.boxright}>
                  <Link to="/"><p className={ location.pathname==="/" ? styles.selected : null }>HOME</p></Link>
               </div>
            </div>
         </header>

         {/* 内容区 */}
         <section className={styles.content}>
           <Route path="/" exact component={ HomePage } />
         </section>

         {/* 底部 */}
         <footer className={styles.footer}>
          <p>© <b>{ new Date().getFullYear() } dingjunjie</b></p>
           <p>中国·安徽</p>
         </footer>
      </div>
    );
  }
}

export default withRouter(App);
