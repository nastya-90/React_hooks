import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentWrapper = ({ children }) => {
    console.log("children", children);
    let number = 0;
    return React.Children.map(children, (child) => {
        number += 1;
        const config = {
            text: `${child.props.text} ${number}`,
        };
        return React.cloneElement(child, config);
    });
};

ComponentWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentWrapper>
                <Component text={"Компонент списка"} />
                <Component text={"Компонент списка"} />
                <Component text={"Компонент списка"} />
            </ComponentWrapper>
        </CollapseWrapper>
    );
};

const Component = ({ text }) => {
    return <div>{text}</div>;
};
Component.propTypes = {
    text: PropTypes.string,
};
export default ChildrenExercise;
