import React from "react";
import { StoreContext } from "./storeProvider";

const withStore = storeName => WrappedComponent => {
  return class extends React.Component {
    getWrappedComponentProps = store => {
      return {
        ...this.props,
        [storeName]: {
          ...store[storeName],
          update: store.updateStore.bind(this, storeName)
        }
      };
    };

    render() {
      return (
        <StoreContext.Consumer>
          {store => (
            <WrappedComponent {...this.getWrappedComponentProps(store)} />
          )}
        </StoreContext.Consumer>
      );
    }
  };
};

export default withStore;
