import React from "react";
import { AuthHeader } from "../Layout/Header";
import { AdminSideBar } from "../Layout/SideMenu/SideBar";

export function FoodList() {
  return (
    <div>
      <AuthHeader />

      <div id="body">
        <div class="container">
          <div class="container-fluid main-body">
            <div class="d-flex flex-col">
              <div class="col-2">
                <AdminSideBar />
              </div>
              <div class="col ms-4">
                <div class="information">
                  <div class="row">
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="info-card d-flex flex-col gap-4">
                        <h4>20%</h4>
                        <div>sub title</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main-content rounded-3 border border-2 py-4 px-3">
                  <div class="table-header row">
                    <div class="col-3">
                      <h3 class="title">Product List</h3>
                      <p>sub title</p>
                    </div>
                    <div class="col text-end me-2">
                      <button class="btn btn-clr-normal">
                        <a href="./create.html" class="nav-link">
                          Add product
                        </a>
                      </button>
                    </div>
                  </div>
                  <div class="text-white">
                    <div class="bg-white">
                      <table class="table align-middle mb-0">
                        <thead class="">
                          <tr>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="">
                                  <p class="fw-bold mb-1">Iphone X ProMax</p>
                                  <p class="text-muted mb-0">
                                    john.doe@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="fw-normal mb-1">Software engineer</p>
                              <p class="text-muted mb-0">IT department</p>
                            </td>
                            <td>
                              <span class="badge badge-success rounded-pill d-inline">
                                Active
                              </span>
                            </td>
                            <td>Senior</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-link btn-sml btn-clr-normal btn-sm btn-rounded"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                class="btn btn-link btn-sml btn-clr-danger btn-sm btn-rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="">
                                  <p class="fw-bold mb-1">Alex Ray</p>
                                  <p class="text-muted mb-0">
                                    alex.ray@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="fw-normal mb-1">Consultant</p>
                              <p class="text-muted mb-0">Finance</p>
                            </td>
                            <td>
                              <span class="badge badge-primary rounded-pill d-inline">
                                Onboarding
                              </span>
                            </td>
                            <td>Junior</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-link btn-sml btn-clr-normal btn-rounded btn-sm"
                                data-mdb-ripple-color="dark"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                class="btn btn-link btn-sml btn-clr-danger btn-sm btn-rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="">
                                  <p class="fw-bold mb-1">Kate Hunington</p>
                                  <p class="text-muted mb-0">
                                    kate.hunington@gmail.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="fw-normal mb-1">Designer</p>
                              <p class="text-muted mb-0">UI/UX</p>
                            </td>
                            <td>
                              <span class="badge badge-warning rounded-pill d-inline">
                                Awaiting
                              </span>
                            </td>
                            <td>Senior</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-link btn-sml btn-clr-normal btn-rounded btn-sm"
                                data-mdb-ripple-color="dark"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                class="btn btn-link btn-sml btn-clr-danger btn-sm btn-rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
