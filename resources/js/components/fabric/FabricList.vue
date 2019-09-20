<template>
     <div class="row gap-20 masonry pos-r">
            <div class="masonry-sizer col-md-6"></div>
            <div class="masonry-item w-100">
              <h6>All Fabircs</h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></div>
                    </div><input type="text" class="form-control" placeholder="Search Fabric">
                  </div>
                </div>
                <div class="col-md-8"><a href="create_fabric.html" class="btn btn-success float-right">Create Fabric</a>
                </div>
              </div>
              <div class="card">
                <table class="table card-body">
                  <thead>
                    <tr>
                      <th colspan="5">checkbox here</th>
                      <th colspan="4" class="text-right">with Selected <select name="" id="">
                          <option>action</option>
                          <option></option>
                          <option></option>
                        </select></th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th style="width:50px">
                        <div class="icheck-primary" style="top:48px"><input type="checkbox" id="someCheckboxId3"> <label
                            for="someCheckboxId3"></label></div>
                      </th>
                      <th>Image</th>
                      <th>Fabric ID</th>
                      <th>Fabric Name</th>
                      <th>Usage</th>
                      <th>Rllls/stock</th>
                      <th>Meters/Stock</th>
                      <th>Delivery?</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="icheck-primary"><input type="checkbox" id="someCheckboxId"> <label
                            for="someCheckboxId"></label></div>
                      </td>
                      <td style="width:80px"><img
                          src="https://www.crypton.com/wp-content/uploads/choice-abundant-alt.jpg"
                          class="img-fluid rounded" alt=""></td>
                      <td>1002</td>
                      <td>Boston</td>
                      <td class="text-center">
                        <div class="progress mT-3">
                          <div class="progress-bar bgc-deep-purple-500" role="progressbar" aria-valuenow="50"
                            aria-valuemin="0" aria-valuemax="100" style="width:50%"></div>
                        </div><small class="text-success">50 of 100 m</small>
                      </td>
                      <td>19</td>
                      <td>20 m / 75 m</td>
                      <td>19-Sep-2019</td>
                      <td><span class="badge badge-info"><i class="fa fa-eye" aria-hidden="true"></i></span> <span
                          class="badge badge-success"><i class="fa fa-edit" aria-hidden="true"></i></span> <span
                          class="badge badge-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></span></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="icheck-primary"><input type="checkbox" id="someCheckboxId1"> <label
                            for="someCheckboxId1"></label></div>
                      </td>
                      <td style="width:80px"><img
                          src="https://www.crypton.com/wp-content/uploads/choice-abundant-alt.jpg"
                          class="img-fluid rounded" alt=""></td>
                      <td>1002</td>
                      <td>Boston</td>
                      <td class="text-center">
                        <div class="progress mT-3">
                          <div class="progress-bar bgc-deep-purple-500" role="progressbar" aria-valuenow="50"
                            aria-valuemin="0" aria-valuemax="100" style="width:50%"></div>
                        </div><small class="text-success">50 of 100 m</small>
                      </td>
                      <td>19</td>
                      <td>20 m / 75 m</td>
                      <td>19-Sep-2019</td>
                      <td><span class="badge badge-info"><i class="fa fa-eye" aria-hidden="true"></i></span> <span
                          class="badge badge-success"><i class="fa fa-edit" aria-hidden="true"></i></span> <span
                          class="badge badge-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row mT-10">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-header">Fabric Due to Run Out Soon</div>
                    <table class="table card-body">
                      <thead>
                        <tr>
                          <th>Fabric</th>
                          <th>Rolls left</th>
                          <th>Meters Left</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1004</td>
                          <td>2 rolls</td>
                          <td>150m</td>
                          <td><span class="badge badge-primary">Place Order</span></td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>2 rolls</td>
                          <td>150m</td>
                          <td><span class="badge badge-primary">Place Order</span></td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>2 rolls</td>
                          <td>150m</td>
                          <td><span class="badge badge-primary">Place Order</span></td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>2 rolls</td>
                          <td>150m</td>
                          <td><span class="badge badge-primary">Place Order</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-header">Upcoming Deliveries</div>
                    <table class="table card-body">
                      <thead>
                        <tr>
                          <th>22-SEP-2019</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1004</td>
                          <td>Boston</td>
                          <td>200m</td>
                          <td>12 rolls</td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>Boston</td>
                          <td>200m</td>
                          <td>12 rolls</td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>Boston</td>
                          <td>200m</td>
                          <td>12 rolls</td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>Boston</td>
                          <td>200m</td>
                          <td>12 rolls</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-header">Most used Fabrics</div>
                    <table class="table card-body">
                      <thead>
                        <tr>
                          <th>Fabric</th>
                          <th>Shirt Orders</th>
                          <th>Times Cut</th>
                          <th>Length Cut</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1004</td>
                          <td>11 shirts</td>
                          <td>25</td>
                          <td>300m</td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>11 shirts</td>
                          <td>25</td>
                          <td>300m</td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>11 shirts</td>
                          <td>25</td>
                          <td>300m</td>
                        </tr>
                        <tr>
                          <td>1004</td>
                          <td>11 shirts</td>
                          <td>25</td>
                          <td>300m</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>

    export default {
     
    }
    
</script>
