import React from "react";
import ErrorFallback from "./ErrorFallback";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: { message: "", stack: "" },
      info: { componentStack: "" },
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    console.log(this.state.hasError);
    return this.state.hasError ? (
      <ErrorFallback error={this.state.error.message} />
    ) : (
      this.props.children
    );
  }
}
