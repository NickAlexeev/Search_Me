import React from 'react'
import './WatchListHeader.css';
import { filterParameters } from './utils';


export class WatchListHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterOptions: filterParameters
        }
    }

    handleFilter = (filterParam) => {
        this.props.filterWatchList(filterParam)
        this.setState(prevState => ({
            filterOptions: prevState.filterOptions.map(filterOption => filterOption.filterType === filterParam ?
                { ...filterOption, isActive: true } : { ...filterOption, isActive: false })
        }))
    }

    render() {
        const { watchListMovies } = this.props;
        return (
            <React.Fragment>
                <div className="watch-list-header">
                    <div className="watch-list-header-item">{watchListMovies.length > 0 ? 'Your WatchList' : 'Your watchlist is empty'}</div>
                    <div
                        onClick={() => this.props.toggleWatchList()}
                        className="watch-list-header-close-button">
                        <i className="fa fa-times fa-xs" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="watch-list-filter invisible" >
                    {this.state.filterOptions.map(filterBy => {
                        return (
                            <div key={filterBy.id} className={filterBy.filterType}>
                                <a onClick={() => this.handleFilter(filterBy.filterType)}
                                    className="button">{filterBy.filterType}
                                </a>
                                <span className={filterBy.isActive ? "arrow-filter down" : "arrow-filter"}>↑</span>
                            </div>
                        )
                    })}
                </div>
                <div className="dropdown-filter">
                    <select
                        onChange={(e) => this.props.filterWatchList(e.target.value)}
                        id="filter-items">
                        <option>Category By:</option>
                        {this.state.filterOptions.map(filterType =>
                            <option key={filterType.id} onChange={() => this.handleFilter(filterType.filterType)}
                                value={filterType.filterType}>{filterType.filterType}
                            </option>)}
                    </select>
                </div>
            </React.Fragment >
        )
    }
}

export default WatchListHeader



