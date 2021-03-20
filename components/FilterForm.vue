<template>
    <div>
    <form action="">
        <!-- Checks -->
        <div class="d-flex justify-content-center mt-3 mx-auto">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Vajzë</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Djalë</label>
            </div>
        </div>
        <div class="mt-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Shkronja e parë</option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
            </select>

            <select class="form-select mt-4" aria-label="Default select example">
                    <option selected>Origjina</option>
                    <option value="1">Shqiperi</option>
                    <option value="2">Kosovë</option>
                    <option value="3">Maqeodni</option>
            </select>

            <div class="d-grid gap-2 mt-4">
                <!-- <a class="btn btn-brand" type="submit">Kërko</a> -->
                <nuxt-link to="/results"> go to page</nuxt-link>
            </div>
            <p class="small text-muted mt-1">Shiko te gjitha pa filter</p>
        </div>
    </form>
    </div>
</template>

<script>
export default {

}
</script>
