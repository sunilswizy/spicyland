import React from "react";
import "./search.styles.scss";

import SearchInputBox from "../Search-input-box/search-input-box.component";
import SearchList from "../Search-list/search-list.componet";
import { connect } from "react-redux";
import { selectData } from "../../redux/directory/selector";
import { createStructuredSelector } from "reselect";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			data: this.props.data.slice(0, 5),
		};
	}

	filteringData = () => {
		const { search } = this.state;
		const filterData = this.props.data
			.filter(({ title }) => {
				return title.toLowerCase().includes(search.toLowerCase());
			})
			.slice(0, 5);

		this.setState({ data: filterData });
	};

	handleChange = e => {
		this.setState({ search: e.target.value }, this.filteringData);
	};

	render() {
		const { search, data } = this.state;
		const { history } = this.props;
		const text = search ? "Clear" : "";
		return (
			<div className='search-container'>
				<div className='container search'>
					<div className='search-con'>
						<i className='fas fa-search'></i>
					</div>
					<SearchInputBox
						value={search}
						type='search'
						placeholder='Search for Food!'
						name='Search'
						onChange={this.handleChange}
						search={search}
					/>

					<button
						className='search-btn'
						onClick={() => this.setState({ search: "" }, this.filteringData)}>
						{text}
					</button>

					<button className='search-close' onClick={() => history.push("/")}>
						<i className='fas fa-times'></i>
					</button>
				</div>
				{data.map(({ id, ...props }) => {
					return <SearchList key={id} {...props} />;
				})}
			</div>
		);
	}
}

const mapStatToProps = createStructuredSelector({
	data: selectData,
});

export default connect(mapStatToProps)(Search);
