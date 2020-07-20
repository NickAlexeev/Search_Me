import React, { Component } from 'react'
import './WatchList.css'
import WatchListHeader from './WatchListHeader/WatchListHeader';
import { connect } from 'react-redux';
import { action_toggle_watch_list } from '../redux/watchlist/watchlist.action';


export class WatchList extends Component {





    render() {
        const { watchListIsOpen, dispatchToggleWatchList, watchListMovies } = this.props
        console.log('WatchList.js Trigerred')
        return (
            <React.Fragment >
                <div className={watchListIsOpen ? "watch-list-overlay slide-in" : "watch-list-overlay"}>
                    < div className="space-wrapper">
                        <WatchListHeader />
                        {/* Start accordion */}
                        {watchListMovies.map(movie => {
                            return (
                                <React.Fragment>
                                    <div className="watch-list-body" key={movie.imdbID}>
                                        <a onClick={() => this.props.hiddenAccordionHandler(movie.imdbID)}
                                            className="open-accordion" id={movie.imdbID}>
                                            <div className="watch-list-item-container">
                                                <p >{movie.Title}</p>
                                                <p className="invisible">{movie.Year}</p>
                                                <p className="invisible">{movie.Director}</p>
                                                <p className="invisible">{movie.Country}</p>
                                                <p className="invisible">{movie.Genre}</p>
                                            </div>
                                        </a>
                                        <div
                                            className={movie.hiddenAccordionClicked ? "hidden-accordion clicked" : "hidden-accordion"}
                                            id={movie.imdbID}>
                                            <div className={movie.hiddenAccordionClicked ? "hidden-accordion-padding" : "hidden-accordion-padding fade-out"}>
                                                < div className="flex-accordion-img">
                                                    <img src={movie.Poster}></img>
                                                </div>
                                                <div className="flex-accordion-body flex-grow-big">
                                                    <p><br />Synopsis:<br />{movie.Plot}</p>
                                                    <p>Director:<br />{movie.Director}</p>
                                                    <p>Actors:<br />{movie.Actors}</p>
                                                    <p>Genre:<br />{movie.Genre}</p>
                                                    <p>Duration:<br />{movie.Duration}</p>
                                                    <a
                                                        onClick={() => this.props.watchListHandler(movie)}
                                                        className="off-watch-list-button">
                                                        Remove from Watchlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                        }
                        <div className="watch-list-footer">

                        </div>

                    </div>
                </div>
            </React.Fragment >
        )
    }
}
const mapStateToProps = state => ({
    watchListIsOpen: state.rootWatchListReducer.watchListOpen
})

const mapDispatchToProps = dispatch => ({
    dispatchToggleWatchList: () => dispatch(action_toggle_watch_list())
})

export default connect(mapStateToProps, mapDispatchToProps)(WatchList) 
