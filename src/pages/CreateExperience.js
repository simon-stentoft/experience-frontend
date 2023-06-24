import ExperienceForm from "../components/ExperienceForm"

const CreateExperience = () => {



    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="col-md-6">
                <h1 className="center">Create an experience</h1>
                <ExperienceForm />
            </div>
        </div>
    )
}

export default CreateExperience;