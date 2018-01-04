import React from 'react'
import { connect } from 'react-redux'
import { fetchService } from '../actions/index'


class ServiceView extends React.Component {

	componentDidMount(){
		const id = '5a4180ac37dfa4c9afa92b2a'

		this.props.getService(id)
	}

	render(){
		
		return(
			<div>
				<h1>Hello</h1>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
  getService: (id) => dispatch(fetchService(id))
});

const mapStateToProps = ({ services }) => {
	return {
		services
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ServiceView)
//<h1>{this.props.jobs ? this.props.jobs.job.title : 'waiting'}</h1>