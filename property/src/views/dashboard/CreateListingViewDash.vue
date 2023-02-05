<template>
    <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="section-block" id="basicform">
                <h3 class="section-title">Create Property Listing</h3>
                <p>Please fill all the fields</p>
            </div>
            <div class="card">
                <h5 class="card-header">Property Listing Form</h5>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="inputText3" class="col-form-label">Title</label>
                            <input id="inputText3" type="text" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <h5>Inline Radio</h5>
                        <label class="custom-control custom-radio custom-control-inline">
                            <input type="radio" name="radio-inline" checked="" class="custom-control-input"><span class="custom-control-label">Residential</span>
                        </label>
                        <label class="custom-control custom-radio custom-control-inline">
                            <input type="radio" name="radio-inline" class="custom-control-input"><span class="custom-control-label">Commercial</span>
                        </label>


                        <div class="form-group">
                            <label for="inputEmail">Email address</label>
                            <input id="inputEmail" type="email" placeholder="name@example.com" class="form-control">
                            <p>We'll never share your email with anyone else.</p>
                        </div>
                        <div class="form-group">
                            <label for="inputText4" class="col-form-label">Property Size (sqft) </label>
                            <input id="inputText4" type="number" class="form-control" placeholder="Property Size (sqft)">
                        </div>
                        <div class="form-group">
                            <label for="inputText4" class="col-form-label">Bathrooms</label>
                            <input id="inputText4" type="number" class="form-control" placeholder="Bathrooms">
                        </div>
                        <div class="form-group">
                            <label for="inputText4" class="col-form-label">BedRooms </label>
                            <input id="inputText4" type="number" class="form-control" placeholder="Bedrooms">
                        </div>
                        
                        <div class="custom-file mb-3">
                            <input type="file" class="custom-file-input" id="customFile">
                            <label class="custom-file-label" for="customFile">Files</label>
                        </div>

                        <div class="form-group">
                            <label for="inputDefault" class="col-form-label">Location</label>
                            <input id="inputDefault" type="text" value="Default input" class="form-control">
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>