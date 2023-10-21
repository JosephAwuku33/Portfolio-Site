import { useState, createContext } from 'react';
// import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { singleProjectStuff  } from '../data/singleProjectStuff';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectStuff
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;