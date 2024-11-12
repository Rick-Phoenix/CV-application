import { formData } from "./assets/data";
import "./CV.css";
import odinLogo from "./assets/odin banner.png";

export default function CV() {
  const personalInfoEntries = Object.entries(formData.personalInfoForm);
  return (
    <div className="cv">
      <header className="sectionTitle">
        <div className="line left"></div>
        <h2 className="title">
          {personalInfoEntries[0][1].toUpperCase() +
            " " +
            personalInfoEntries[1][1].toUpperCase()}
        </h2>
        <div className="line right"></div>
      </header>
      <main>
        <section className="personalInfo">
          <div className="bio">
            <h3>Bio</h3>
            <p className="bioText">&quot;{formData.bioForm.bio}&quot;</p>
          </div>
          <section className="info">
            <h3>Personal Information</h3>
            {personalInfoEntries.map(([key, value]) => {
              return (
                <div className="info" key={key}>
                  <span className="infoTitle">{key}:</span>{" "}
                  <span className="infoValue">{value}</span>
                </div>
              );
            })}
          </section>
        </section>
        <div className="sectionTitle">
          <div className="line left"></div>
          <h3 className="title">EDUCATION</h3>
          <div className="line right"></div>
        </div>
        <section className="edu container">
          <table>
            <thead>
              <tr>
                <td>Type of Education</td>
                <td>Institution</td>
                <td>Final Grade</td>
              </tr>
            </thead>
            <tbody>
              {formData.eduForm.rows.map((row) => {
                return (
                  <tr key={row.key}>
                    <td>{row.eduType}</td>
                    <td>{row.institutionName}</td>
                    <td>{row.finalGrade}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <div className="sectionTitle">
          <div className="line left"></div>
          <h3 className="title">PROFESSIONAL EXPERIENCE</h3>
          <div className="line right"></div>
        </div>
        <section className="prof container">
          <table>
            <thead>
              <tr>
                <td>Job Title</td>
                <td>Employer</td>
                <td>Duration</td>
              </tr>
            </thead>
            <tbody>
              {formData.profForm.rows.map((row) => {
                return (
                  <tr key={row.key}>
                    <td>{row.jobTitle}</td>
                    <td>{row.employer}</td>
                    <td>{row.duration} years</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <div className="sectionTitle">
          <div className="line left"></div>
          <h3 className="title">PASSIONS AND HOBBIES</h3>
          <div className="line right"></div>
        </div>
        <section className="hobbies container">
          <ul>
            {formData.hobbiesForm.rows.map((row) => {
              return <li key={row.key}>{row.hobby}</li>;
            })}
          </ul>
        </section>
      </main>
      <footer>
        <img src={odinLogo} className="logo" alt="The Odin Project logo" />
      </footer>
    </div>
  );
}
