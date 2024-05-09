import React, {useState} from "react";

const Note = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(props.title);
    const [updatedContent, setUpdatedContent] = useState(props.content);


    // ---------------------

    const [isAlertActive, setIsAlertActive] = useState(false);  // State to track alert status

    const toggleAlert = () => {
        setIsAlertActive(!isAlertActive);  // Toggle the alert state
    };

    // ---------------------

    const handleUpdate = () => {
        props.updateNote(props.id, updatedTitle, updatedContent);
        setEditMode(false);
    };

    return(
        
        <div className = " px-5 py-2 w-full my-10 shadow rounded appBackground">
            {
                editMode ? (
                    <div>
                        <input
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                            placeholder = "Title"
                            type="text"
                            className="block shadow w-full mx-auto px-2 py-2 my-2 rounded-lg"
                        />
                        <textarea
                            value={updatedContent}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                            placeholder="Your updated note here..."
                            type="text"
                            rows={4}
                            className="block shadow w-full mx-auto my-2 px-2 py-4 rounded-lg"
                            
                        />
                        <button
                            onClick={handleUpdate}
                            className="color3 text-white text-3 px-2 py-1 rounded">
                            Save
                        </button>
                        </div>
                ) : (
                    <div>

                        <div
                            className={`bold flex justify-left items-center cursor-pointer ${isAlertActive ? 'new-color' : 'no-color'}`}
                            onClick={toggleAlert}>
                            !
                        </div>

                        <h1 className = "flex justify-center items-center py-2 text-xl font-bold">
                            {props.title}
                        </h1>
                        <h2 className = "text-justify">
                            {props.content}
                        </h2>
                        <div className = "flex justify-center items-center">
                            <button onClick={() => setEditMode(true)} className = "py-1 my-2 px-3 color3 text-3 text-white rounded-lg mx-2" >
                                Edit
                            </button>
                            <button onClick={() => props.delete(props.id)} className = "py-1 my-2 px-3 color2 text-3 text-white rounded-lg mx-2" >
                                Delete
                            </button>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default Note