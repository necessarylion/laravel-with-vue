<template>

    <div class="row gap-20 masonry pos-r">
    <div class="masonry-sizer col-md-6"></div>
      <!-- mansonary item  -->
      <div class="masonry-item w-100">

              <!-- gap -->
              <div class="row gap-20">

                <div class="col-md-3">
                  <div class="layers bd bgc-white p-20">
                    <div class="layer w-100">
                      <h6 class="lh-1">Select Fabric</h6>
                      <div class="form-group mB-4"><select class="form-control" name="" id="">
                          <option>14254</option>
                          <option>12001</option>
                          <option>32001</option>
                        </select></div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                      <h6 class="lh-1">Quantity in Stock</h6>
                    </div>
                    <div class="layer w-100">
                      <div class="peers ai-sb fxw-nw">
                        <div class="peer"><span class="d-ib lh-0 va-m fw-600 bdrs-10em c-red-700 fs-30">750 m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                      <h6 class="lh-1">Months of Qty</h6>
                    </div>
                    <div class="layer w-100">
                      <div class="peers ai-sb fxw-nw">
                        <div class="peer"><span class="d-ib lh-0 va-m fw-600 bdrs-10em c-blue-700 fs-30">5</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                      <h6 class="lh-1">Monthly Usage</h6>
                    </div>
                    <div class="layer w-100">
                      <div class="peers ai-sb fxw-nw">
                        <div class="peer"><span class="d-ib lh-0 va-m fw-600 bdrs-10em c-purple-700 fs-30">166 m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="layers bd bgc-white p-20">
                    <div class="layer w-100">
                      <h6 class="lh-1">Calculate Monthly Usage Rate Based On</h6>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check"><label class="form-check-label"><input type="radio"
                                class="form-check-input" name="" id="" value="checkedValue" checked="checked"> last 12
                              month</label></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check"><label class="form-check-label"><input type="radio"
                                class="form-check-input" name="" id="" value="checkedValue" checked="checked"> last 6
                              month</label></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check"><label class="form-check-label"><input type="radio"
                                class="form-check-input" name="" id="" value="checkedValue" checked="checked"> last 3
                              month</label></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check"><label class="form-check-label"><input type="radio"
                                class="form-check-input" name="" id="" value="checkedValue" checked="checked"> last
                              month</label></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-15">
                      <h6 class="lh-1 c-red-700">Expected Date</h6>
                    </div>
                    <div class="layer w-100 mt-1">
                      <div class="peers ai-sb fxw-nw">
                        <div class="peer"><span class="c-red-700">When Stock Will Run out</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10 mT-15">
                      <h3 class="lh-1 c-red-700 text-center mT-3">11 / OCT / 2019</h3>
                    </div>
                  </div>
                </div>

                <div class="masonry-item col-md-12">
                  <div class="bgc-white p-20 bd">
                    <h4 class="c-grey-900 text-center">Inventory Usage by Month</h4>
                    <div class="mT-30 p-20"><canvas id="bar-chart" height="220"></canvas></div>
                  </div>
                </div>

              </div>

              <!-- gap -->

        </div>
        <!-- mansonary item  -->
        
        <!-- mansonary item  -->
        <div class="masonry-item w-100">
          <div class="row">
            <div class="col-md-3"><button class="btn-lg btn-block">View Fabric Listings</button></div>
            <div class="col-md-2"><button class="btn-lg btn-block">Place New Order</button></div>
            <div class="col-md-2"><button class="btn-lg btn-block">Manage Order</button></div>
            <div class="col-md-2"><button class="btn-lg btn-block">Suppliers</button></div>
            <div class="col-md-3"><button class="btn-lg btn-block">Withdraw Fabric Roll</button></div>
          </div>
        </div>
        <!-- mansonary item  -->

  </div>


</template>

<script>

    import Chart from 'chart.js'
    export default {
      
     mounted(){
            var ctx = $('#bar-chart');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
     }
    }
    
 
</script>

<style scoped>

</style>