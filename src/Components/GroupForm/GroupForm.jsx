import React, { useState } from "react";
import img from "../../assets/imgs/add_group.png";

const GroupForm = ({ addGroup }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
        id: Date.now(),
        name,
        description,
        createdAt: new Date().toISOString()
      };
    if (name && description) {
        console.log(newGroup)
      addGroup(newGroup);
      setName("");
      setDescription("");
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className=" text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body px-md-5 ">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h3 fw-bold my-3 mx-1 mx-md-4 mt-2" style={{color:"#ccc"}}>
                        Add Group
                      </p>
                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-user fa-lg me-3 fa-fw" style={{color:"#ccc"}}></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              id="form3Example3c"
                              placeholder="Enter Group Name"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                        
                          <i className="fa-solid fa-file-waveform fa-lg me-3 fa-fw" style={{color:"#ccc"}}></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              name="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              type="text"
                              placeholder="Group description"
                              id="form3Example4c"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-3">
                          <button
                          style={{color:"#ccc"}}
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-outline-primary btn-lg"
                          >
                            Create Group
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center align-items-center order-1 order-lg-2">
                      <img  style={{height:"250px"}}src={img} className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupForm;
