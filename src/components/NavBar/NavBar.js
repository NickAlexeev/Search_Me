import React, { PureComponent } from 'react'
import './NavBar.css';
// import { connect } from 'react-redux';
// import { action_toggle_watch_list } from '../redux/watchlist/watchlist.action';



class NavBar extends PureComponent {

    render() {
        console.log('NavBar.js Trigerred')
        return (
            < React.Fragment >
                <nav className='flex-nav'>
                    <div className='flex-nav-item'>
                        WatchMe
                </div>
                    <button
                        // onClick={() => this.props.dispatchToggleWatchList()}
                        onClick={() => this.props.toggleWatchList()}
                        className="watch-list-button">
                        <i className="fas fa-film"></i>
                        <div className='nav-counter'>{this.props.watchListMoviesNumber}</div>
                    </button>
                </nav>
            </React.Fragment >
        )
    }

}

// const mapDispatchToProps = dispatch => ({
//     dispatchToggleWatchList: () => dispatch(action_toggle_watch_list())
// })

// export default connect(null, mapDispatchToProps)(NavBar)
export default NavBar





