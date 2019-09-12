const Pin = props => (
    <div className="pin">
        <div className="top" style={{borderColor: props.color}}></div>
        <div className="bottom" style={{borderColor: `${props.color} transparent transparent  transparent`}}></div>
    </div>
);

export default Pin;