import React, { useState } from "react";
import SkillsForm from "./SkillsForm";
import SkillsList from "./SkillsList";
import Contact from "./Contact";

export default function About(props) {
  const [state, setState] = useState({
    skillValue: "",
    title: "Curriculum Vitae",
    contact: {
      name: "Bilel Saoudi",
      email: "bilel.seoudi@gmail.com",
      profile: "images/leorio.png",
    },
    skills: [
      { id: 1, skill: "Java" },
      { id: 2, skill: "Spring" },
      { id: 3, skill: "Angular" },
      { id: 4, skill: "React Js" },
    ],
  });

  const addSkill = (event) => {
    event.preventDefault();
    let skill = {
      id: [...state.skills].pop() ? [...state.skills].pop().id + 1 : 1,
      skill: state.skillValue,
    };
    if (!skill.skill) return;
    setState({ ...state, skills: [...state.skills, skill], skillValue: "" });
  };

  const setSkill = (event) => {
    event.preventDefault();
    setState({ ...state, skillValue: event.target.value });
  };

  const deleteSkill = (skill) => {
    setState({
      ...state,
      skills: [...state.skills.filter((s) => s.id !== skill.id)],
    });
  };

  return (
    <div>
      <Contact title={state.title} contact={state.contact} />
      <div className="card m-2">
        <div className="card-header">Skills : {state.skillValue}</div>
        <div className="card-body">
          <SkillsForm
            skillValue={state.skillValue}
            onAddSkill={addSkill}
            onSetSkill={setSkill}
          />
          <SkillsList skills={state.skills} onDeleteSkill={deleteSkill} />
        </div>
      </div>
    </div>
  );
}
