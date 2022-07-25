import "../assets/style/priorityLevel.css";

export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={"level " + this.props.state}
        onClick={this.props.changePriority.bind(this)}
      ></div>
    );
  }
}
