import "../assets/style/priorityScale.css";
import PriorityLevel from "./priorityLevel.jsx";

export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
  }

  levelElement() {
    let levels = Array();
    for (let level = 1; level < 7; level++) {
      if (this.props.priority >= level) {
        levels.push(
          <PriorityLevel
            key={level}
            id={level}
            state="on"
            changePriority={this.props.changePriority.bind(this)}
          ></PriorityLevel>
        );
      } else {
        levels.push(
          <PriorityLevel
            key={level}
            id={level}
            state="off"
            changePriority={this.props.changePriority.bind(this)}
          ></PriorityLevel>
        );
      }
    }
    return levels;
  }

  render() {
    return (
      <div className="scale">
        {this.levelElement()}({this.props.priority})
      </div>
    );
  }
}
