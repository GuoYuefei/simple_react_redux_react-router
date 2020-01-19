import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';

class Demo0 extends React.Component {


    render() {
        // eslint-disable-next-line no-console
        console.log(this.props);
        const { counter } = this.props;
        return (
            <div >
                <span>Hello React And Webpack!</span>
                <div>
                    <span>{counter.current}</span>
                    <div>
                        <button onClick={this.props.addCounter}>+</button>
                        <button onClick={this.props.decreaseCounter}>-</button>
                    </div>
                    <div>
                        <button disabled={counter.pre.length === 0 ? true : false} onClick={this.props.undoCounter}>撤销</button>
                        <button disabled={counter.next.length === 0 ? true : false} onClick={this.props.redoCounter}>重做</button>
                    </div>
                </div>
                <div>
                    <Link to="/iiii">index1</Link>
                </div>
                <div>
                    <Link to="/index2">index2</Link>
                </div>
                <div>
                    <Link to="/index3">index3</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        counter: state.counter,
    });
}

// 最好从总的actions中选择需要的action导出， 这里是偷懒的写法
export default connect(mapStateToProps, { ...counterActions })(Demo0);
