import React from "react";

export default function SkillsForm(props) {

  const onAddSkill = (event) => {
    event.preventDefault();
    props.onAddSkill(event);
  };

  const onSetValue = (event) => {
    event.preventDefault();
    props.onSetSkill(event);
  };

  return (
    <>
      <form onSubmit={props.onAddSkill}>
        <div className="row mb-2">
          <div className="col">
            <input
              className="p-1"
              type="text"
              name="skill"
              placeholder="Skill To Add"
              value={props.skillValue}
              onChange={onSetValue}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </>
  );
}
