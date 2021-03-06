import React, {useState} from 'react';
import { firebase } from '../../firebase';
import { generatePushId } from '../helpers/index';
import { useProjectsValue } from '../context/index';


export const AddProject = ({ shouldShow = false}) => {
  const [show, setShow] = useState(shouldShow);
   const [projectName, setProjectName] = useState('');


   const projectId = generatePushId();
   const { setProjects } = useProjectsValue();


      const addProject = () => 
    projectName  && 
    firebase
    .firestore()
    .collection('projects')
    .add({
        projectId,
        name: projectName,
        userId: "jsdfpgjspdfkgjpsjdgeGSDJ"
    })
    .then(() => {
        setProjects([]);
        setProjectName('');
        setShow(false);
    })


    return(
        <div className="add-project" data-testid="add-project">
            { show && (
                <div className="add-project__input">
                    <input 
                    value={projectName}
                    onChange={ e => setProjectName(e.target.value)}
                    className="add-project__name"
                    type="text"
                    placeholder="Add Project Name"
                    />
                     <button 
                    className="add-project__submit"
                    type="button"
                    onClick={() => addProject()}
                    data-testid="add-project-submit"
                    >
                    Add Project
                    </button>
                    <span
                        className="add-project__cancel"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                    </span>
                </div>
            )}
            <span className="add-project__plus">
                        +
                    </span>
                    <span className="add-project__text"
                    onClick={() => setShow(!show)}>
                        Add Project
                    </span>


        </div>

    )


}


//old







// 







//     return(
//      
//          
//             {  show && (
//                 <div className="add-project__input">
//                     <input
//                     value={projectName}
//                     onChange={e => setProjectName(e.target.value)}
//                     className="add-project__name"
//                     data-testid="project-name"
//                     type="text"
//                     placeholder="enter project name"
//                     />
                  
//                     <span 
//                         className="add-project__cancel"
//                         onClick={() => setShow(false)}>
//                         cancel
//                         </span>
//                     <span className="add-project__plus">
//                         +
//                     </span>
//                     <span className="add-project__text"
//                     onClick={() => setShow(!show)}>
//                         Add Project
//                     </span>
//                 </div>
//             )} 
        
//         </div>
//     )

// }