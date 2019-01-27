import React from 'react';
import PropTypes from 'prop-types';


export const StoreContext = React.createContext({});

class StoreProvider extends React.Component {
  constructor(p) {
    super(p);
    this.state = this.props.stores;
  }

  updateStore = (storeName, key, value) => {
    const storeFragment = this.state[storeName];
    this.setState({
      [storeName]: {
        ...storeFragment,
        [key]: value
      }
    });
  };

  render() {
    return (
      <StoreContext.Provider
        value={{
        ...this.state,
            updateStore: this.updateStore
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

StoreProvider.propTypes = {
  stores: PropTypes.shape().isRequired,
};

export default StoreProvider;
