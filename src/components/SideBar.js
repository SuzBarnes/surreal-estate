import React from "react";
import { Link, useLocation } from "react-router-dom"
import "../styles/sidebar.css";
import qs from "qs";

const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
        ...currentQueryParams,
        [operation]: JSON.stringify(valueObj)
    }

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
}
const SideBar = () => {

    return (
        <div className="sidebar">
            <ul className="sidebar-links">
                <h4>Filter by City:</h4>
                <Link className="sidebar-links-item" to={buildQueryString('query', { "city": "Manchester" })}>
                    Manchester
                </Link>
                <Link className="sidebar-links-item" to={buildQueryString('query', { "city": "Leeds" })}>
                    Leeds
                </Link>
                <Link className="sidebar-links-item" to={buildQueryString('query', { "city": "Liverpool" })}>
                    Liverpool
                </Link>
                <Link className="sidebar-links-item" to={buildQueryString('query', { "city": "Sheffield" })}>
                    Sheffield
                </Link>
                <Link className="sidebar-links-item" to={`/`}>
                    View All
                </Link>
                <h4>Sort by:</h4>
                <Link className="sidebar-links-item" to={buildQueryString('sort', { price: 1 })}>Price: ascending</Link>
                <Link className="sidebar-links-item" to={buildQueryString('sort', { price: -1 })}>Price: descending</Link>
            </ul>
        </div>
    )
}

export default SideBar;