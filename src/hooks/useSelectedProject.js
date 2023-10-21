import { useContext } from 'react';
import SingleProjectContext from '../context/SingleProjectContext'; // Adjust the path if necessary

const useSelectedProject = (projectId) => {
  const { singleProjectData } = useContext(SingleProjectContext);

  const selectedProject = singleProjectData.find(project => project.id === projectId);

  return selectedProject;
};

export default useSelectedProject;

