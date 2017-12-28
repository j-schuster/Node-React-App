import React from 'react'
import { connect } from 'react-redux'
import { fetchAllServices} from '../actions/index'


class AllServices extends React.Component {

	componentDidMount(){
		this.props.fetchServices()
	}

	render(){
		const services = this.props.services.services 
		
		return(
			<div>
				{services ? services.map((service) => {
					return <li key={service._id}>{service.title}</li>
				}) : null}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchServices: () => dispatch(fetchAllServices())
})

const mapStateToProps = ({ services }) => {
	return {
		services
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)