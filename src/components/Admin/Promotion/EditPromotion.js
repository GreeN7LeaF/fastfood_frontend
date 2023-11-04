import React from "react";

const EditPromotion = (pros) => {
  return (
    <div class="col ms-4">
      <div class="breadcumb d-flex flex-row mb-3">
        <a href="./index.html" class="bc-prev nav-link">
          Promotion
        </a>
        <a href="#" class="nav-link">
          Edit Promotion
        </a>
      </div>

      <div class="add-inline-form main-content rounded-3 border border-2 py-4 px-3 mb-3">
        <div class="table-header row">
          <div class="col-3">
            <h3 class="title">Edit Promotion</h3>
          </div>
        </div>
        <form class="create-form">
          <div class="row">
            <div class="col-10">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">
                  Name
                </label>
              </div>
            </div>
            <div class="col-2">
              <select class="select w-100">
                <option value="1">ON</option>
                <option value="2">OFF</option>
              </select>
              <label class="form-label" for="inlineFormSelectPref">
                Status
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                class="form-control"
              />
              <label for="birthdaytime">Begin</label>
            </div>
            <div class="col">
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                class="form-control"
              />
              <label for="birthdaytime">End</label>
            </div>
          </div>
          <div class="col-2 mt-4">
            <button
              type="submit"
              class="btn btn-clr-normal btn-block mb-4 w-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div
        id="addProductForm"
        class="main-content rounded-3 border border-2 py-4 px-3 mb-3 d-none"
      >
        <div class="table-header row">
          <div class="col">
            <h5 class="title">Add product</h5>
            <p>*Required</p>
          </div>
        </div>
        <div class="row">
          <div class="col-11">
            <form class="create-form">
              <div class="form-outline mb-4">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">
                  Product Name
                </label>
              </div>
            </form>
          </div>
        </div>
        <div class="col me-2">
          <div class="d-flex flex-row gap-1">
            <button id="removeAddProductForm" class="btn btn-clr-danger">
              Cancel
            </button>

            <button type="submit" class="btn btn-clr-normal btn-block">
              <a href="#" class="nav-link">
                Add
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class="main-content rounded-3 border border-2 py-4 px-3">
        <div class="table-header row">
          <div class="col-3">
            <h3 class="title">Product On Sale</h3>
            <p>Product on sale</p>
          </div>
          <div class="col text-end me-2">
            <button id="addProduct" class="btn btn-clr-normal">
              Add
            </button>
          </div>
        </div>
        <div class="text-white">
          <div class="bg-white">
            <table class="table align-middle mb-0">
              <thead class="">
                <tr>
                  <th>Product Name</th>
                  <th>Day Begin</th>
                  <th>Day End</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="fw-bold mb-1">Iphone X ProMax</p>
                        <p class="text-muted mb-0">john.doe@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Software engineer</p>
                    <p class="text-muted mb-0">IT department</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Software engineer</p>
                    <p class="text-muted mb-0">IT department</p>
                  </td>
                  <td>
                    <div class="d-flex flex-row gap-1">
                      <a href="#" class="nav-link">
                        <i class="fa-solid fa-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="fw-bold mb-1">Alex Ray</p>
                        <p class="text-muted mb-0">alex.ray@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Consultant</p>
                    <p class="text-muted mb-0">Finance</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Software engineer</p>
                    <p class="text-muted mb-0">IT department</p>
                  </td>
                  <td>
                    <div class="d-flex flex-row gap-1">
                      <a href="#" class="nav-link">
                        <i class="fa-solid fa-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="fw-bold mb-1">Kate Hunington</p>
                        <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Designer</p>
                    <p class="text-muted mb-0">UI/UX</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Software engineer</p>
                    <p class="text-muted mb-0">IT department</p>
                  </td>
                  <td>
                    <div class="d-flex flex-row gap-1">
                      <a href="#" class="nav-link">
                        <i class="fa-solid fa-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPromotion;
