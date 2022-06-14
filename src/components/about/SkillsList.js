import React from 'react'

export default function SkillsList(props) {

    const onDeleteSkill = (skill)=>{
        props.onDeleteSkill(skill)
    }

  return (
    <>
      <table className="table">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Skill</th>
              </tr>
              {props.skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.id}</td>
                  <td>{skill.skill}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDeleteSkill(skill)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </>
  )
}
