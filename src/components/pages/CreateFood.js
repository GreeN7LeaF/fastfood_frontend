import React from "react";
import Header from "../components/Layout/Header/AuthHeader/AuthHeader";
import SideBar from "../components/Element/SideMenu/SideBar";

export default function CreateFood() {
  return (
    <div>
      <Header />

      <div id="body">
        <div class="container">
          <div class="container-fluid main-body">
            <div class="d-flex flex-col">
              <div class="col-2">
                {/* side bar */}
                <SideBar />
              </div>
              <div class="col ms-4">
                <div class="breadcumb d-flex flex-row mb-3">
                  <a href="./index.html" class="bc-prev nav-link">
                    Product
                  </a>
                  <a href="#" class="nav-link">
                    Create Product
                  </a>
                </div>
                <h3 class="title">Create Product</h3>
                <p>sub title</p>
                <div class="row">
                  <div class="col-8">
                    <form class="create-form">
                      <div class="row mb-4">
                        <div class="col">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form6Example1"
                              class="form-control"
                            />
                            <label class="form-label" for="form6Example1">
                              Product Name
                            </label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-outline">
                            <select class="select w-100">
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="4">Four</option>
                              <option value="5">Five</option>
                              <option value="6">Six</option>
                              <option value="7">Seven</option>
                              <option value="8">Eight</option>
                            </select>
                            <label
                              class="form-label"
                              for="inlineFormSelectPref"
                            >
                              Category
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-4">
                          <div class="form-outline mb-4">
                            <input
                              type="text"
                              id="form6Example3"
                              class="form-control"
                            />
                            <label class="form-label" for="form6Example3">
                              Cost
                            </label>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-outline mb-4">
                            <input
                              type="text"
                              id="form6Example3"
                              class="form-control"
                            />
                            <label class="form-label" for="form6Example3">
                              Price
                            </label>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="file-upload">
                            <div class="file-select">
                              <div class="file-select-button" id="fileName">
                                Choose Image
                              </div>
                              <div class="file-select-name" id="noFile">
                                No file chosen...
                              </div>
                              <input
                                type="file"
                                name="chooseFile"
                                id="chooseFile"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <textarea
                          class="form-control"
                          id="form6Example7"
                          rows="4"
                        ></textarea>
                        <label class="form-label" for="form6Example7">
                          Note
                        </label>
                      </div>

                      <div class="form-check d-flex mb-4">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form6Example8"
                          checked
                        />
                        <label class="form-check-label" for="form6Example8">
                          Create an account?
                        </label>
                      </div>

                      <button
                        type="submit"
                        class="btn btn-clr-normal btn-block mb-4"
                      >
                        Create
                      </button>
                    </form>
                  </div>
                  <div class="col-3">
                    <div class="form-outline mb-4">
                      <div class=" default-img-wrapper">
                        <img src="../../../images/default.jpg" alt="" />
                      </div>
                      <label class="form-label" for="form6Example4">
                        Image
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
