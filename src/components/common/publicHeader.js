import React, { Component } from "react";

export default function withHeader(WrappedComponent) {
    return class Hoc extends Component {
        render() {
            return (
                <div>
                    <div>
                        我是标题
                    </div>
                    <WrappedComponent {...this.props}/>
                </div>

            )
        }
    }
}