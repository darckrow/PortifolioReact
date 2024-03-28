import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function Projects() {
  const [repositories, setRepositories] = useState([]);
  const [currentLength, setCurrentLength] = useState(4);

  useEffect(() => {
    async function projectsGithub() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/darckrow/repos"
        );
        const data = await response.data;
        setRepositories(data);
      } catch (error) {
        console.log(error);
      }
    }
    projectsGithub();
  }, []);

  const handleLoadMore = () => {
    setCurrentLength(currentLength + 4);
  };

  const repositoriesToDisplay = repositories.slice(0, currentLength);

  return (
    <>
      <h1 id="titleProlects">Projetos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "50px"}}>
        {repositoriesToDisplay.map((repository, index) => (
          <div key={index} className="repository-card" style={{ position: "relative" }}>
          <img
            id="capaProjetos"
            src="https://avatars.githubusercontent.com/u/32041971?v=4"
            alt=""
            style={{height:"200px", width:"200px", borderRadius:"10% 1%", marginLeft:"5px"}}
          />
          <h2 style={{fontSize:"20px", paddingTop:"10px"}}>{repository.name}</h2>
          <p style={{ fontSize: "15px" }}>
            Descrição: {repository.description}
          </p>
        
          <a id="link" href={repository.html_url} target="_blank" style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }}>
            <button id="buttonLink" style={{ width: "100px", height: "50px", borderRadius: "10px" }}>
              acessar
            </button>
          </a>
        </div>
        ))}
        {currentLength < repositories.length && (
          <button
            onClick={handleLoadMore}
            className="btn-loadmore"
            style={{ borderRadius: "10px", }}>
            Ver Mais
          </button>
        )}
      </div>
    </>
  );
}

export default Projects;
