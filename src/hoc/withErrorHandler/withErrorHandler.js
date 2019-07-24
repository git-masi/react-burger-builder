import React, { Component } from 'react';
import Aux from '../Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
      this.reqInt = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInt = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      })
    }

    // componentDidMount () {
    //   axios.interceptors.request.use(req => {
    //     this.setState({ error: null });
    //     return req;
    //   })
    //   axios.interceptors.response.use(res => res, error => {
    //     this.setState({ error: error });
    //   })
    // }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInt);
      axios.interceptors.response.eject(this.resInt);
    }

    dismissErrorHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal
            orderNow={this.state.error}
            closeModal={this.dismissErrorHandler}>
            {this.state.error ? this.state.error.message: null}
            {/* something went wrong! */}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;