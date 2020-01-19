/* eslint-disable no-console */
import React from 'react';
// import {withRouter} from 'react-router-dom';
// 目的就是让被修饰的组件可以从属性中获取history,location,match,
// 路由组件可以直接获取这些属性，而非路由组件就必须通过withRouter修饰后才能获取这些属性了，
// 比如
// <Route path='/' component={App}/>
// App组件就可以直接获取路由中这些属性了，但是，如果App组件中如果有一个子组件Foo，那么Foo就不能直接获取路由中的属性了，必须通过withRouter修饰后才能获取到。

class Demo1 extends React.Component {



    render() {
        // const { history } = this.props;
        console.log(this.props);
        return (
            <div >
                <span>1. Hello React And Webpack!</span>
                <div>
                    {this.props.match.params.index1}
                </div>
            </div>
        );
    }
}

export default Demo1;
